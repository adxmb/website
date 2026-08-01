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
                { label: "Focus", value: "Personal Projects and Curiosity" },
                { label: "Energy", value: "Exploratory, Self-directed" },
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
                { label: "Focus", value: "Education and Work History" },
                { label: "Energy", value: "Structured, Professional" },
            ],
        },
    },
    {
        id: "midnight",
        title: "Midnight Zone",
        depth: "Midnight Zone",
        intro: "Some of the other things I've been getting up to outside of work.",
        accent: "#6d28d9",
        panel: {
            heading: "What I'm Up To",
            body: "Down here are some of the things I've been spending time on outside of work or studies.",
            facts: [
                { label: "Focus", value: "Everyday Side Quests" },
                { label: "Energy", value: "Personal, Interests" },
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
