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

export type Level = {
    id: "surface" | "shallows" | "twilight" | "midnight";
    title: string;
    depth: string;
    intro: string;
    accent: string;
};
