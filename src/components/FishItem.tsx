import type { CSSProperties } from "react";
import type { Fish } from "../types";

type FishItemProps = {
    fish: Fish;
    onOpen: (fish: Fish) => void;
};

export function FishItem({ fish, onOpen }: FishItemProps) {
    const fishStyle: CSSProperties = {
        left: `${fish.x}%`,
        top: `${fish.y}%`,
        width: `${fish.size}px`,
        height: `${fish.size}px`,
        ["--swim-animation" as string]: `swim-${fish.swimPattern}`,
        ["--swim-duration" as string]: `${fish.duration}s`,
    };

    return (
        <div className="fish-movement" style={fishStyle}>
            <button
                type="button"
                className="fish-btn"
                onClick={() => onOpen(fish)}
            >
                <span className="fish-visual">
                    {fish.imageSrc ? (
                        <img
                            src={fish.imageSrc}
                            alt={fish.name}
                            className="fish-image"
                        />
                    ) : (
                        <span className="fish-emoji">{fish.emoji}</span>
                    )}
                </span>
            </button>
        </div>
    );
}
