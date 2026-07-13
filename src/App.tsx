import {
    useEffect,
    useRef,
    useState,
    type WheelEvent as ReactWheelEvent,
} from "react";
import "./App.css";
import type { Fish, Level, Project } from "./types";
import { levels } from "./data/levels";
import { fishByLevel } from "./data/fish";
import { projectsById, getUniqueProjectsForFish } from "./data/projects";
import { Sidebar } from "./components/Sidebar";
import { SurfaceLevel } from "./components/SurfaceLevel";
import { DepthLevel } from "./components/DepthLevel";
import { ProjectModal } from "./components/ProjectModal";
import { SummaryPanel } from "./components/SummaryPanel";
import { LevelEffects } from "./components/LevelEffects";

export default function App() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedFish, setSelectedFish] = useState<Fish | null>(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [summaryLevelId, setSummaryLevelId] = useState<Level["id"] | null>(
        null,
    );
    const [summaryVisible, setSummaryVisible] = useState(false);

    const activeIndexRef = useRef(activeIndex);
    const lastWheelTimeRef = useRef(0);

    useEffect(() => {
        activeIndexRef.current = activeIndex;
    }, [activeIndex]);

    const goToLevel = (target: number) => {
        if (target < 0 || target >= levels.length) {
            return;
        }

        if (activeIndexRef.current === target) {
            return;
        }

        setActiveIndex(target);
        setSelectedFish(null);
        setModalVisible(false);
    };

    useEffect(() => {
        const handleKeyDown = (event: globalThis.KeyboardEvent) => {
            if (
                event.key === "ArrowDown" ||
                event.key === "PageDown" ||
                event.key === " "
            ) {
                event.preventDefault();
                goToLevel(activeIndexRef.current + 1);
            }

            if (event.key === "ArrowUp" || event.key === "PageUp") {
                event.preventDefault();
                goToLevel(activeIndexRef.current - 1);
            }

            if (event.key === "Escape") {
                setSidebarOpen(false);
                setModalVisible(false);
                window.setTimeout(() => setSelectedFish(null), 220);
                closeSummary();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
        const delta = event.deltaY;
        if (Math.abs(delta) < 15) {
            return;
        }

        const now = Date.now();
        if (now - lastWheelTimeRef.current < 450) {
            event.preventDefault();
            return;
        }

        lastWheelTimeRef.current = now;
        event.preventDefault();

        if (delta > 0) {
            goToLevel(activeIndexRef.current + 1);
        } else if (delta < 0) {
            goToLevel(activeIndexRef.current - 1);
        }
    };

    const openFish = (fish: Fish) => {
        setSelectedFish(fish);
        setModalVisible(false);
        window.requestAnimationFrame(() => {
            setModalVisible(true);
        });
    };

    const closeFish = () => {
        setModalVisible(false);
        window.setTimeout(() => setSelectedFish(null), 700);
    };

    const openSummary = (levelId: Level["id"]) => {
        setSummaryLevelId(levelId);
        setSummaryVisible(false);
        window.requestAnimationFrame(() => {
            setSummaryVisible(true);
        });
    };

    const closeSummary = () => {
        setSummaryVisible(false);
        window.setTimeout(() => setSummaryLevelId(null), 700);
    };

    const selectedProject: Project | null = selectedFish
        ? (projectsById[selectedFish.projectId] ?? null)
        : null;

    const summaryLevel = summaryLevelId
        ? (levels.find((level) => level.id === summaryLevelId) ?? null)
        : null;

    const summaryProjects = summaryLevelId
        ? getUniqueProjectsForFish(
              fishByLevel[summaryLevelId].map((fish) => fish.projectId),
          )
        : [];

    return (
        <div className="app-shell" onWheel={handleWheel} tabIndex={0}>
            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
                activeIndex={activeIndex}
                goToLevel={goToLevel}
                onOpenSummary={openSummary}
                levels={levels}
            />

            <div
                className="scene"
                style={{ transform: `translateY(-${activeIndex * 100}vh)` }}
            >
                {levels.map((level, index) => {
                    const fishPool = fishByLevel[level.id];

                    return (
                        <section
                            key={level.id}
                            className={`level level-${level.id}`}
                        >
                            <div className="level-backdrop" />
                            <LevelEffects
                                levelId={level.id}
                                isActive={index === activeIndex}
                            />

                            {level.id === "surface" ? (
                                <SurfaceLevel goToLevel={goToLevel} />
                            ) : (
                                <DepthLevel
                                    level={level}
                                    fishPool={fishPool}
                                    onOpenFish={openFish}
                                />
                            )}
                        </section>
                    );
                })}
            </div>

            {selectedFish && selectedProject ? (
                <ProjectModal
                    project={selectedProject}
                    modalVisible={modalVisible}
                    onClose={closeFish}
                />
            ) : null}

            {summaryLevel ? (
                <SummaryPanel
                    level={summaryLevel}
                    projects={summaryProjects}
                    visible={summaryVisible}
                    onClose={closeSummary}
                />
            ) : null}
        </div>
    );
}
