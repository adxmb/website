import type { Level } from "../types";
import { formatList } from "../utils/formatList";

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
        intro: "An overview of personal projects and research I have worked on through the years.",
        accent: "#38bdf8",
        panel: {
            heading: "Projects and Research",
            body: (projectNames) =>
                `A few personal projects from outside my sutdies or work live here, including ${formatList(
                    projectNames,
                )}. Tap anything swimming past for more details.`,
            facts: [
                { label: "Focus", value: "Personal projects and curiosity" },
                { label: "Energy", value: "Exploratory, self-directed" },
            ],
        },
    },
    {
        id: "twilight",
        title: "Twilight Zone",
        depth: "Twilight Zone",
        intro: "My work experience and educational background.",
        accent: "#818cf8",
        panel: {
            heading: "Professional Background",
            body: "Here you will find details about my education, and the roles I've worked in past and current. Tap anything swimming past for more details.",
            facts: [
                { label: "Focus", value: "Education and work history" },
                { label: "Energy", value: "Structured, professional" },
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
