import { useMemo } from "react";

type BioluminescenceProps = {
    count?: number;
};

type Glow = {
    id: number;
    left: number;
    top: number;
    size: number;
    duration: number;
    delay: number;
    drift: number;
    hue: "cyan" | "violet";
};

function createGlows(count: number): Glow[] {
    return Array.from({ length: count }, (_, id) => ({
        id,
        left: Math.random() * 100,
        top: 10 + Math.random() * 80,
        size: 3 + Math.random() * 5,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * -10,
        drift: (Math.random() - 0.5) * 20,
        hue: Math.random() > 0.5 ? "cyan" : "violet",
    }));
}

export function Bioluminescence({ count = 12 }: BioluminescenceProps) {
    const glows = useMemo(() => createGlows(count), [count]);

    return (
        <div className="bioluminescence" aria-hidden="true">
            {glows.map((g) => (
                <span
                    key={g.id}
                    className={`biolume-dot biolume-${g.hue}`}
                    style={{
                        left: `${g.left}%`,
                        top: `${g.top}%`,
                        width: `${g.size}px`,
                        height: `${g.size}px`,
                        animationDuration: `${g.duration}s`,
                        animationDelay: `${g.delay}s`,
                        ["--drift" as string]: `${g.drift}px`,
                    }}
                />
            ))}
        </div>
    );
}
