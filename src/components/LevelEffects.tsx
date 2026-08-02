import { useEffect, useState } from "react";

import type { Level } from "../types";
import { LightRays } from "./effects/LightRays";
import { MarineSnow } from "./effects/MarineSnow";
import { Bioluminescence } from "./effects/Bioluminescence";
import { HadalEye } from "./effects/HadalEye";
import { FlashlightOverlay } from "./effects/FlashlightOverlay";

function useIsCompact() {
    const [isCompact, setIsCompact] = useState(
        () => typeof window !== "undefined" && window.innerWidth < 700,
    );

    useEffect(() => {
        const onResize = () => setIsCompact(window.innerWidth < 700);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return isCompact;
}

function useHasFinePointer() {
    const [hasFinePointer, setHasFinePointer] = useState(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia("(pointer: fine)").matches,
    );

    useEffect(() => {
        const mq = window.matchMedia("(pointer: fine)");
        const onChange = () => setHasFinePointer(mq.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return hasFinePointer;
}

type LevelEffectsProps = {
    levelId: Level["id"];
    isActive: boolean;
};

export function LevelEffects({ levelId, isActive }: LevelEffectsProps) {
    const isCompact = useIsCompact();
    const hasFinePointer = useHasFinePointer();
    const scale = isCompact ? 0.5 : 1;

    switch (levelId) {
        case "surface":
            return <div className="caustics" aria-hidden="true" />;

        case "shallows":
            return (
                <>
                    <LightRays />
                    <MarineSnow count={Math.round(10 * scale)} />
                </>
            );

        case "twilight":
            return (
                <>
                    <MarineSnow count={Math.round(52 * scale)} />
                </>
            );

        case "midnight":
            return (
                <>
                    <MarineSnow count={Math.round(34 * scale)} />
                    <Bioluminescence count={Math.round(3 * scale)} />
                </>
            );

        case "hadal":
            return (
                <>
                    <MarineSnow count={Math.round(114 * scale)} />
                    <HadalEye />
                    {isActive && hasFinePointer ? <FlashlightOverlay /> : null}
                </>
            );

        default:
            return null;
    }
}
