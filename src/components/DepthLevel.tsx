import type { Fish, Level } from "../types";
import { FishItem } from "./FishItem";

type DepthLevelProps = {
    level: Level;
    fishPool: Fish[];
    onOpenFish: (fish: Fish) => void;
};

export function DepthLevel({ level, fishPool, onOpenFish }: DepthLevelProps) {
    return (
        <div className="depth-copy">
            <div className="depth-intro">
                <p className="eyebrow">{level.depth}</p>
                <h2>{level.title}</h2>
                <p>{level.intro}</p>
            </div>

            <div className="depth-panel">
                <div className="panel-text">
                    <h3>What lives here</h3>
                    <p>
                        The deeper you drift, the more curious the work becomes.
                        These rooms hold project snapshots, experiments, and
                        system-level thinking that are worth exploring one fish
                        at a time.
                    </p>
                </div>
                <div className="panel-facts">
                    <div>
                        <strong>Focus</strong>
                        <span>Interaction and atmosphere</span>
                    </div>
                    <div>
                        <strong>Energy</strong>
                        <span>Measured, tactile, alive</span>
                    </div>
                </div>
            </div>

            <div className="fish-layer" aria-label={`${level.title} fish`}>
                {fishPool.map((fish) => (
                    <FishItem key={fish.id} fish={fish} onOpen={onOpenFish} />
                ))}
            </div>
        </div>
    );
}
