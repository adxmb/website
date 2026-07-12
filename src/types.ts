export type Fish = {
    id: string;
    name: string;
    title: string;
    description: string;
    stack: string[];
    link: string;
    emoji: string;
    imageSrc?: string;
    x: number;
    y: number;
    duration: number;
    size: number;
    swimPattern: "glide" | "dart" | "swoop" | "drift";
};

export type LevelPanel = {
    heading: string;
    body: string;
    facts: { label: string; value: string }[];
};

export type Level = {
    id: "surface" | "shallows" | "twilight" | "midnight" | "hadal";
    title: string;
    depth: string;
    intro: string;
    accent: string;
    panel?: LevelPanel;
};
