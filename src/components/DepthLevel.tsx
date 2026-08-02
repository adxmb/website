import type { Fish, Level } from "../types";
import { FishItem } from "./FishItem";

type DepthLevelProps = {
    level: Level;
    fishPool: Fish[];
    onOpenFish: (fish: Fish) => void;
    onOpenSummary: (levelId: Level["id"]) => void;
    projectNames: string[];
};

export function DepthLevel({
    level,
    fishPool,
    onOpenFish,
    onOpenSummary,
    projectNames,
}: DepthLevelProps) {
    const panel = level.panel;

    const resolvedBody = panel
        ? typeof panel.body === "function"
            ? panel.body(projectNames)
            : panel.body
        : "";

    const useFrame = level.id !== "hadal";
    const useSoftGlow = level.id === "shallows";
    const showSummaryButton = level.id !== "hadal";

    return (
        <div className="depth-copy">
            <div className="depth-intro">
                <p className="eyebrow">{level.depth}</p>
                <h2>{level.title}</h2>
                <p>{level.intro}</p>
            </div>

            {panel ? (
                <div
                    className={`depth-panel ${useFrame ? "panel-framed" : ""} ${useSoftGlow ? "panel-soft-glow" : ""}`}
                    style={{ ["--panel-accent" as string]: level.accent }}
                >
                    <div className="panel-text">
                        <h3>{panel.heading}</h3>
                        {resolvedBody ? <p>{resolvedBody}</p> : null}
                        {showSummaryButton ? (
                            <button
                                type="button"
                                className="ghost-link secondary panel-summary-btn"
                                onClick={() => onOpenSummary(level.id)}
                            >
                                See Summary
                            </button>
                        ) : null}
                    </div>
                    {panel.facts.length > 0 ? (
                        <div className="panel-facts">
                            {panel.facts.map((fact) => (
                                <div key={fact.label}>
                                    <strong>{fact.label}</strong>
                                    <span>{fact.value}</span>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : null}

            {fishPool.length > 0 ? (
                <div className="fish-layer" aria-label={`${level.title} fish`}>
                    {fishPool.map((fish) => (
                        <FishItem
                            key={fish.id}
                            fish={fish}
                            onOpen={onOpenFish}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
}
