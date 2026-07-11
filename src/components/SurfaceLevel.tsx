type SurfaceLevelProps = {
    goToLevel: (target: number) => void;
};

export function SurfaceLevel({ goToLevel }: SurfaceLevelProps) {
    return (
        <div className="surface-copy">
            <div className="intro-card">
                <p className="eyebrow">About me</p>
                <h1>I shape calm, immersive experiences for the web.</h1>
                <p>
                    I’m a developer who loves turning thoughtful ideas into
                    elegant interfaces. My work blends product thinking, visual
                    design, and precise engineering so every detail feels
                    intentional.
                </p>
                <div className="action-row">
                    <button
                        type="button"
                        className="ghost-link"
                        onClick={() => goToLevel(1)}
                    >
                        View projects
                    </button>
                    <button
                        type="button"
                        className="ghost-link secondary"
                        onClick={() => goToLevel(0)}
                    >
                        Say hello
                    </button>
                </div>
            </div>

            <div className="info-stack">
                <article className="info-card" id="projects">
                    <h3>Projects</h3>
                    <p>
                        Three layers of work: polished products, playful
                        experiments, and deep systems.
                    </p>
                </article>
                <article className="info-card" id="contact">
                    <h3>Contact</h3>
                    <p>
                        Open to collaborations that value clarity, atmosphere,
                        and a strong sense of pace.
                    </p>
                </article>
            </div>
        </div>
    );
}
