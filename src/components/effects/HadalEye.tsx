import { useEffect, useRef, useState } from "react";

type EyeState = "closed" | "open";
type BlinkPhase = "idle" | "closing" | "reopening";

const BLINK_CLOSE_MS = 160;
const BLINK_HOLD_MS = 130;
const BLINK_REOPEN_MS = 220;

let instanceCounter = 0;

export function HadalEye() {
    const [state, setState] = useState<EyeState>("closed");
    const [blinkPhase, setBlinkPhase] = useState<BlinkPhase>("idle");
    const [cycleId, setCycleId] = useState(0);
    const instanceIdRef = useRef<number | null>(null);
    if (instanceIdRef.current === null) {
        instanceIdRef.current = ++instanceCounter;
    }
    const instanceId = instanceIdRef.current;

    useEffect(() => {
        let timeout: number;
        let cancelled = false;
        let blinkTally = 0;

        const wait = (ms: number) =>
            new Promise<void>((resolve) => {
                timeout = window.setTimeout(resolve, ms);
            });

        const doBlink = async () => {
            if (cancelled) {
                return;
            }
            blinkTally++;
            setBlinkPhase("closing");
            await wait(BLINK_CLOSE_MS);
            if (cancelled) return;

            await wait(BLINK_HOLD_MS);
            if (cancelled) return;

            setBlinkPhase("reopening");
            await wait(BLINK_REOPEN_MS);
            if (cancelled) return;

            setBlinkPhase("idle");
        };

        const cycle = async () => {
            while (!cancelled) {
                await wait(20000 + Math.random() * 12000);
                if (cancelled) return;

                blinkTally = 0;
                setCycleId((id) => id + 1);
                setState("open");

                await wait(1600);
                if (cancelled) return;

                const roll = Math.random();
                const blinkCount = roll > 0.5 ? 2 : roll > 0.2 ? 1 : 0;

                for (let i = 0; i < blinkCount; i++) {
                    if (cancelled) return;
                    await wait(700 + Math.random() * 1600);
                    if (cancelled) return;
                    await doBlink();
                }

                if (cancelled) return;

                await wait(2000 + Math.random() * 2000);
                if (cancelled) return;

                setState("closed");
            }
        };

        cycle();
        return () => {
            cancelled = true;
            window.clearTimeout(timeout);
        };
    }, [instanceId]);

    return (
        <div
            className={`hadal-eye ${state} blink-${blinkPhase}`}
            aria-hidden="true"
        >
            <svg viewBox="0 0 300 300" className="eye-svg">
                <defs>
                    <clipPath id="lens-clip">
                        <path d="M20,150 Q45,55 150,50 Q285,44 345,150 Q285,256 150,250 Q45,245 20,150 Z" />
                    </clipPath>
                </defs>

                <g transform="rotate(-14 150 150)">
                    <g clipPath="url(#lens-clip)">
                        <rect
                            x="0"
                            y="0"
                            width="300"
                            height="300"
                            fill="#120600"
                        />

                        <circle cx="150" cy="150" r="95" fill="#ffcf33" />
                        <circle cx="150" cy="150" r="80" fill="#f7931e" />
                        <circle cx="150" cy="150" r="62" fill="#d1440e" />
                        <circle cx="150" cy="150" r="50" fill="#7a1804" />

                        <g key={cycleId} className="pupil-group">
                            <circle
                                cx="150"
                                cy="150"
                                r="40"
                                className="pupil"
                            />
                            <ellipse
                                cx="128"
                                cy="122"
                                rx="11"
                                ry="13"
                                className="pupil-glint"
                            />
                        </g>

                        <path
                            d="M20,150 Q45,55 150,50 Q285,44 345,150 Q285,256 150,250 Q45,245 20,150 Z"
                            className="lens-outline"
                        />

                        <rect
                            className="eyelid eyelid-top"
                            x="0"
                            y="0"
                            width="300"
                            height="154"
                        />
                        <rect
                            className="eyelid eyelid-bottom"
                            x="0"
                            y="146"
                            width="300"
                            height="154"
                        />
                    </g>
                </g>
            </svg>
        </div>
    );
}
