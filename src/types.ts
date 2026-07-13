export type Project = {
    id: string;
    name: string;
    title: string;
    description: string;
    stack: string[];
    link: string;
    // Shown above the project title in the modal — customizable per
    // project since not everything is a "project" (could be an
    // experiment, a write-up, a tool, etc).
    spotlightLabel: string;
};

export type Fish = {
    id: string;
    projectId: string;
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
