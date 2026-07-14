type SurfaceLevelProps = {
    goToLevel: (target: number) => void;
};

export function SurfaceLevel({ goToLevel }: SurfaceLevelProps) {
    return (
        <div className="surface-copy">
            <div className="intro-card">
                <p className="eyebrow">About me</p>
                <h1>Hi, I'm Adam!</h1>
                <p>
                    I'm a software engineer from the University of Auckland. I
                    like making things that have an impact using technology to
                    improve learning, understanding, and efficiency in everyday
                    life. I'm eager to tackle new challenges, expand my
                    skillset, and apply my knowledge in different ways.
                </p>
                <div className="action-row">
                    <button
                        type="button"
                        className="ghost-link"
                        onClick={() => goToLevel(1)}
                    >
                        Dive in
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
                        Below you will find three ocean themed layers: a project
                        showcase in the shallows, ...
                    </p>
                </article>
                <article className="info-card" id="contact">
                    <h3>Contact</h3>
                    <p>
                        Feel free to get in contact with me by email
                        (adam.r.bodicoat@gmail.com) or LinkedIn
                        (linkedin.com/in/adam-bodicoat/).
                    </p>
                </article>
            </div>
        </div>
    );
}
