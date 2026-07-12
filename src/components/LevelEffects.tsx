import type { Level } from "../types";
import { LightRays } from "./effects/LightRays";
import { MarineSnow } from "./effects/MarineSnow";
import { Bioluminescence } from "./effects/Bioluminescence";
import { HadalEye } from "./effects/HadalEye";
import { FlashlightOverlay } from "./effects/FlashlightOverlay";

type LevelEffectsProps = {
    levelId: Level["id"];
    isActive: boolean;
};

export function LevelEffects({ levelId, isActive }: LevelEffectsProps) {
    switch (levelId) {
        case "surface":
            return <div className="caustics" aria-hidden="true" />;

        case "shallows":
            return (
                <>
                    <LightRays />
                    <MarineSnow count={10} />
                </>
            );

        case "twilight":
            return (
                <>
                    <MarineSnow count={20} />
                    <Bioluminescence count={6} />
                </>
            );

        case "midnight":
            return (
                <>
                    <MarineSnow count={26} />
                    <Bioluminescence count={16} />
                </>
            );

        case "hadal":
            return (
                <>
                    <MarineSnow count={16} />
                    <HadalEye />
                    {isActive ? <FlashlightOverlay /> : null}
                </>
            );

        default:
            return null;
    }
}
