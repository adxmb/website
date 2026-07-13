import type { Level, Project } from "../types";

type SummaryPanelProps = {
    level: Level;
    projects: Project[];
    visible: boolean;
    onClose: () => void;
};

export function SummaryPanel({
    level,
    projects,
    visible,
    onClose,
}: SummaryPanelProps) {
    return (
        <div
            className={`summary-backdrop ${visible ? "visible" : ""}`}
            onClick={onClose}
        >
            <div
                className={`summary-panel ${visible ? "visible" : ""}`}
                role="dialog"
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="summary-header">
                    <div>
                        <p className="eyebrow">{level.depth}</p>
                        <h3>{level.title} summaries</h3>
                    </div>
                    <button
                        type="button"
                        className="close-btn"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                <div
                    className="summary-list"
                    onWheel={(event) => event.stopPropagation()}
                >
                    {projects.length === 0 ? (
                        <p className="summary-empty">
                            Nothing surfaced from this depth yet.
                        </p>
                    ) : (
                        projects.map((project) => (
                            <article key={project.id} className="summary-card">
                                <p className="eyebrow">
                                    {project.spotlightLabel}
                                </p>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="chip-row">
                                    {project.stack.map((item) => (
                                        <span key={item} className="chip">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="ghost-link"
                                >
                                    Open project
                                </a>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
