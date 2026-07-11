import type { Fish } from "../types";

type ProjectModalProps = {
    selectedFish: Fish;
    modalVisible: boolean;
    onClose: () => void;
};

export function ProjectModal({
    selectedFish,
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
                <p className="eyebrow">Project spotlight</p>
                <h3>{selectedFish.title}</h3>
                <p>{selectedFish.description}</p>
                <div className="chip-row">
                    {selectedFish.stack.map((item) => (
                        <span key={item} className="chip">
                            {item}
                        </span>
                    ))}
                </div>
                <a
                    href={selectedFish.link}
                    target="_blank"
                    rel="noreferrer"
                    className="ghost-link"
                >
                    Open project
                </a>
            </div>
        </div>
    );
}
