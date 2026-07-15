const EMAIL = "adam.r.bodicoat@gmail.com";

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
                        onClick={() => {
                            window.location.href = `mailto:${EMAIL}`;
                        }}
                    >
                        Say hello
                    </button>
                </div>
            </div>

            <div className="info-stack">
                <article className="info-card" id="projects">
                    <h3>How to explore</h3>
                    <p>
                        Scroll or swipe down through three depths: projects in
                        the shallows, my background in the twilight zone, and
                        more below.
                    </p>
                </article>
                <article className="info-card" id="projects">
                    <h3>Get in touch</h3>
                    <p>
                        Always happy to chat about a project, an opportunity, or
                        just to say hi.
                    </p>
                    <br />
                    <a
                        href={`mailto:${EMAIL}`}
                        className="ghost-link secondary"
                    >
                        Send an email
                    </a>
                </article>
            </div>
        </div>
    );
}
