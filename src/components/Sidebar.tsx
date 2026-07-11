import type { Level } from "../types";

type SidebarProps = {
    sidebarOpen: boolean;
    setSidebarOpen: (updater: (value: boolean) => boolean) => void;
    activeIndex: number;
    goToLevel: (target: number) => void;
    levels: Level[];
};

export function Sidebar({
    sidebarOpen,
    setSidebarOpen,
    activeIndex,
    goToLevel,
    levels,
}: SidebarProps) {
    const closeAndGo = (target: number) => {
        setSidebarOpen(() => false);
        goToLevel(target);
    };

    return (
        <>
            <button
                type="button"
                className={`sidebar-toggle ${sidebarOpen ? "open" : ""}`}
                onClick={() => setSidebarOpen((value) => !value)}
                aria-label="Toggle navigation"
            >
                <span className="toggle-line line-1" />
                <span className="toggle-line line-2" />
                <span className="toggle-line line-3" />
            </button>

            <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`}>
                <div className="brand-block">
                    <p className="eyebrow">Ocean Portfolio</p>
                    <h2>Adam Bodicoat</h2>
                </div>

                <nav className="nav-list" aria-label="Quick navigation">
                    <p className="nav-group">About</p>
                    <button type="button" onClick={() => closeAndGo(0)}>
                        About me
                    </button>
                    <button type="button" onClick={() => closeAndGo(0)}>
                        Experience
                    </button>
                    <button type="button" onClick={() => closeAndGo(0)}>
                        Contact
                    </button>

                    <p className="nav-group">Projects</p>
                    <button type="button" onClick={() => closeAndGo(1)}>
                        Shallows projects
                    </button>
                    <button type="button" onClick={() => closeAndGo(2)}>
                        Twilight experiments
                    </button>
                    <button type="button" onClick={() => closeAndGo(3)}>
                        Midnight systems
                    </button>

                    <p className="nav-group">Levels</p>
                    {levels.map((level, index) => (
                        <button
                            key={level.id}
                            type="button"
                            className={index === activeIndex ? "active" : ""}
                            onClick={() => closeAndGo(index)}
                        >
                            {level.title}
                        </button>
                    ))}
                </nav>
            </aside>
        </>
    );
}
