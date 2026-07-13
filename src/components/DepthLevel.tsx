import type { Fish, Level } from "../types";
import { FishItem } from "./FishItem";

type DepthLevelProps = {
    level: Level;
    fishPool: Fish[];
    onOpenFish: (fish: Fish) => void;
};

export function DepthLevel({ level, fishPool, onOpenFish }: DepthLevelProps) {
    const panel = level.panel;

    return (
        <div className="depth-copy">
            <div className="depth-intro">
                <p className="eyebrow">{level.depth}</p>
                <h2>{level.title}</h2>
                <p>{level.intro}</p>
            </div>

            {panel ? (
                <div className="depth-panel">
                    <div className="panel-text">
                        <h3>{panel.heading}</h3>
                        {panel.body ? <p>{panel.body}</p> : null}
                    </div>
                    {panel.facts.length > 0 ? (
                        <div className="panel-facts">
                            {panel.facts.map((fact) => (
                                <div key={fact.label}>
                                    <strong>{fact.label}</strong>
                                    <span>{fact.value}</span>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ) : null}

            {fishPool.length > 0 ? (
                <div className="fish-layer" aria-label={`${level.title} fish`}>
                    {fishPool.map((fish) => (
                        <FishItem
                            key={fish.id}
                            fish={fish}
                            onOpen={onOpenFish}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
}
