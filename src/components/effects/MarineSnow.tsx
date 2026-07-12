import { useMemo } from "react";

type MarineSnowProps = {
    count?: number;
};

type Particle = {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
    drift: number;
    opacity: number;
};

function createParticles(count: number): Particle[] {
    return Array.from({ length: count }, (_, id) => ({
        id,
        left: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 16 + Math.random() * 20,
        delay: Math.random() * -30,
        drift: (Math.random() - 0.5) * 50,
        opacity: 0.15 + Math.random() * 0.35,
    }));
}

export function MarineSnow({ count = 20 }: MarineSnowProps) {
    // Generated once per mount so particles don't jump around on re-render.
    const particles = useMemo(() => createParticles(count), [count]);

    return (
        <div className="marine-snow" aria-hidden="true">
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="snow-particle"
                    style={{
                        left: `${p.left}%`,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        opacity: p.opacity,
                        animationDuration: `${p.duration}s`,
                        animationDelay: `${p.delay}s`,
                        ["--drift" as string]: `${p.drift}px`,
                    }}
                />
            ))}
        </div>
    );
}
