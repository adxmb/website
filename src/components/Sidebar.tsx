import type { Level } from "../types";

type SidebarProps = {
    sidebarOpen: boolean;
    setSidebarOpen: (updater: (value: boolean) => boolean) => void;
    activeIndex: number;
    goToLevel: (target: number) => void;
    onOpenSummary: (levelId: Level["id"]) => void;
    onOpenContact: () => void;
    levels: Level[];
    locked: boolean;
};

export function Sidebar({
    sidebarOpen,
    setSidebarOpen,
    activeIndex,
    goToLevel,
    onOpenSummary,
    onOpenContact,
    levels,
    locked,
}: SidebarProps) {
    const closeAndGo = (target: number) => {
        setSidebarOpen(() => false);
        goToLevel(target);
    };

    const closeAndSummarize = (levelId: Level["id"]) => {
        setSidebarOpen(() => false);
        onOpenSummary(levelId);
    };

    const closeAndContact = () => {
        setSidebarOpen(() => false);
        onOpenContact();
    };

    // While a modal/summary overlay is open, the sidebar should behave as
    // if it's collapsed and untouchable, regardless of its own open state.
    const effectivelyOpen = sidebarOpen && !locked;

    return (
        <>
            <button
                type="button"
                className={`sidebar-toggle ${effectivelyOpen ? "open" : ""}`}
                onClick={() => setSidebarOpen((value) => !value)}
                aria-label="Toggle navigation"
                disabled={locked}
                aria-disabled={locked}
                tabIndex={locked ? -1 : 0}
            >
                <span className="toggle-line line-1" />
                <span className="toggle-line line-2" />
                <span className="toggle-line line-3" />
            </button>

            <aside
                className={`sidebar ${effectivelyOpen ? "open" : "collapsed"} ${
                    locked ? "locked" : ""
                }`}
                inert={locked}
            >
                <div className="brand-block">
                    <h2>Adam Bodicoat</h2>
                </div>

                <nav
                    className="nav-list"
                    aria-label="Quick navigation"
                    onWheel={(event) => event.stopPropagation()}
                >
                    <p className="nav-group">About</p>
                    <button type="button" onClick={() => closeAndGo(0)}>
                        About me
                    </button>
                    <button type="button" onClick={() => closeAndGo(1)}>
                        Projects
                    </button>
                    <button type="button" onClick={() => closeAndGo(2)}>
                        Experience
                    </button>
                    <button type="button" onClick={() => closeAndGo(3)}>
                        Life Updates
                    </button>
                    <button type="button" onClick={closeAndContact}>
                        Contact
                    </button>

                    <p className="nav-group">Summaries</p>
                    <button
                        type="button"
                        onClick={() => closeAndSummarize("shallows")}
                    >
                        Shallows Summary
                    </button>
                    <button
                        type="button"
                        onClick={() => closeAndSummarize("twilight")}
                    >
                        Twilight Zone Summary
                    </button>
                    <button
                        type="button"
                        onClick={() => closeAndSummarize("midnight")}
                    >
                        Midnight Zone Summary
                    </button>

                    <p className="nav-group">Levels</p>
                    {levels.map((level, index) => {
                        if (level.id === "hadal") return null;

                        return (
                            <button
                                key={level.id}
                                type="button"
                                className={
                                    index === activeIndex ? "active" : ""
                                }
                                onClick={() => closeAndGo(index)}
                            >
                                {level.title}
                            </button>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}
