type SurfaceLevelProps = {
    goToLevel: (target: number) => void;
    onOpenContact: () => void;
};

export function SurfaceLevel({ goToLevel, onOpenContact }: SurfaceLevelProps) {
    return (
        <div className="surface-copy">
            <div className="intro-card">
                <p className="eyebrow">About me</p>
                <h1>Hi, I'm Adam!</h1>
                <p>
                    I'm a software engineer who likes building things with real
                    impact – tools that make learning, understanding, or
                    everyday tasks a little easier. I'm always looking to tackle
                    new challenges and apply what I know in new ways. I'd rather
                    stay curious than comfortable, and I'm always keen to learn
                    something new.
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
                        Say Hello
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
                    <button
                        type="button"
                        className="ghost-link secondary"
                        onClick={onOpenContact}
                    >
                        Get In Contact
                    </button>
                </article>
            </div>
        </div>
    );
}
