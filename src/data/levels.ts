import type { Level } from "../types";

export const levels: Level[] = [
    {
        id: "surface",
        title: "Surface",
        depth: "Surface",
        intro: "A calm introduction to the work I make and the ideas I chase.",
        accent: "#7dd3fc",
    },
    {
        id: "shallows",
        title: "Shallows",
        depth: "Shallows",
        intro: "An overview of personal projects I have worked on through the years.",
        accent: "#38bdf8",
        panel: {
            heading: "Built in the light",
            body: "Sunlight still reaches this far down, so the work here favours clarity: finished products, clean interfaces, and ideas built to be used rather than just admired.",
            facts: [
                { label: "Focus", value: "Usability and polish" },
                { label: "Energy", value: "Bright, direct, practical" },
            ],
        },
    },
    {
        id: "twilight",
        title: "Twilight Zone",
        depth: "Twilight Zone",
        intro: "Explorations that sit between play and production.",
        accent: "#818cf8",
        panel: {
            heading: "Half-lit ideas",
            body: "Light is fading here, and so is the certainty. These are the projects that started as a question - prototypes, toolkits, and interface studies thathaven't fully decided what they want to be yet.",
            facts: [
                { label: "Focus", value: "Exploration and play" },
                { label: "Energy", value: "Curious, unresolved" },
            ],
        },
    },
    {
        id: "midnight",
        title: "Midnight Zone",
        depth: "Midnight Zone",
        intro: "Deep dives into systems, motion, and thoughtful interfaces.",
        accent: "#6d28d9",
        panel: {
            heading: "Where systems live",
            body: "No sunlight reaches this deep - what's left is structure. These projects are about the architecture underneath an interface: how content flows, how motion behaves, how the pieces holdtogether.",
            facts: [
                { label: "Focus", value: "Systems and structure" },
                { label: "Energy", value: "Deliberate, quiet" },
            ],
        },
    },
    {
        id: "hadal",
        title: "Hadal Zone",
        depth: "Hadal Zone",
        intro: "The deepest depth. Almost nothing survives the descent.",
        accent: "#334155",
        panel: {
            heading: "Nothing lives here",
            body: "",
            facts: [],
        },
    },
];
