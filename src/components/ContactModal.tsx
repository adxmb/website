import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLetterboxd } from "react-icons/si";
import { Mail } from "lucide-react";

import { GITHUB, LINKEDIN, LETTERBOXD, EMAIL } from "../data/links";

type ContactModalProps = {
    modalVisible: boolean;
    onClose: () => void;
};

export function ContactModal({ modalVisible, onClose }: ContactModalProps) {
    return (
        <div
            className={`modal-backdrop ${modalVisible ? "visible" : ""}`}
            onClick={onClose}
        >
            <div
                className={`modal-card contact-card ${modalVisible ? "visible" : ""}`}
                role="dialog"
                aria-modal="true"
                onClick={(event) => event.stopPropagation()}
            >
                <button type="button" className="close-btn" onClick={onClose}>
                    ×
                </button>
                <p className="eyebrow">Say Hello</p>
                <h3>Get In Touch</h3>
                <p>
                    Check out my GitHub, LinkedIn, or Letterboxd, or send me an
                    email directly
                </p>
                <div className="contact-links">
                    <a
                        href={GITHUB}
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-link"
                    >
                        <FaGithub size={18} />
                        GitHub
                    </a>
                    <a
                        href={LINKEDIN}
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-link"
                    >
                        <FaLinkedin size={18} />
                        LinkedIn
                    </a>
                    <a
                        href={LETTERBOXD}
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-link"
                    >
                        <SiLetterboxd size={18} />
                        Letterboxd
                    </a>
                    <a href={`mailto:${EMAIL}`} className="ghost-link">
                        <Mail size={18} />
                        Email
                    </a>
                </div>
            </div>
        </div>
    );
}
