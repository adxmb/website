import type { Project } from "../types";

type ProjectModalProps = {
    project: Project;
    modalVisible: boolean;
    onClose: () => void;
};

export function ProjectModal({
    project,
    modalVisible,
    onClose,
}: ProjectModalProps) {
    return (
        <div
            className={`modal-backdrop ${modalVisible ? "visible" : ""}`}
            onClick={onClose}
        >
            <div
                className={`modal-card ${modalVisible ? "visible" : ""}`}
                role="dialog"
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
            >
                <button type="button" className="close-btn" onClick={onClose}>
                    ×
                </button>
                <p className="eyebrow">{project.spotlightLabel}</p>
                <h3>{project.title}</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {project.description.split("\n").map((line, index) => (
                        <p
                            key={index}
                            style={{ margin: 0, lineHeight: "1.8" }}
                            dangerouslySetInnerHTML={{ __html: line }}
                        />
                    ))}
                </div>
                <div className="chip-row">
                    {project.stack.map((item) => (
                        <span key={item} className="chip">
                            {item}
                        </span>
                    ))}
                </div>
                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-link"
                    >
                        {project.linkLabel ?? "Open Project"}
                    </a>
                ) : null}
            </div>
        </div>
    );
}
