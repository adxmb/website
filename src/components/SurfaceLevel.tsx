type SurfaceLevelProps = {
    goToLevel: (target: number) => void;
    onOpenContact: () => void;
};

export function SurfaceLevel({ goToLevel, onOpenContact }: SurfaceLevelProps) {
    return (
        <div className="surface-copy">
            <div
                className="intro-card panel-soft-glow"
                style={{ ["--panel-accent" as string]: "#7dd3fc" }}
            >
                <p className="eyebrow">About me</p>
                <h1>Hi, I'm Adam!</h1>
                <p>
                    I'm a software engineer who likes building things with real
                    impact – tools that make learning, understanding, or
                    everyday tasks a little easier. I'm always looking to tackle
                    new challenges and apply what I know in new ways. I enjoy
                    taking this curiosity beyond my work and am always keen to
                    learn something new in my everyday life.
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
                        onClick={onOpenContact}
                    >
                        Say Hello!
                    </button>
                </div>
            </div>

            <div className="info-stack">
                <article
                    className="info-card panel-soft-glow"
                    id="explore"
                    style={{ ["--panel-accent" as string]: "#7dd3fc" }}
                >
                    <h3>How to Explore</h3>
                    <p>
                        Scroll or swipe down through the three depths: projects
                        in the shallows, my background in the twilight zone, and
                        more below. <br />
                        Catch anything swimming around to uncover details about
                        different projects, experiences, and more.
                    </p>
                </article>
                <article
                    className="info-card panel-soft-glow"
                    id="contact"
                    style={{ ["--panel-accent" as string]: "#7dd3fc" }}
                >
                    <h3>Get in Touch</h3>
                    <p>
                        Always happy to chat about a project, an opportunity, or
                        just to say hi. Send an email or reach out on any of my
                        other platforms.
                    </p>
                </article>
            </div>
        </div>
    );
}
