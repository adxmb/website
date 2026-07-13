import type { Project } from "../types";

export const projectsById: Record<string, Project> = {
    "neural-network": {
        id: "neural-network",
        name: "Neural Network",
        title: "Neural Network",
        description:
            "A lightweight neural network trained to detect different English accents from audio recordings. Explored different strategies and model optimisation.",
        stack: ["Python", "NumPy", "Flask"],
        link: "https://github.com/adxmb/neural-network",
        spotlightLabel: "Project Spotlight",
    },
    "northstar-studio": {
        id: "northstar-studio",
        name: "Northstar Studio",
        title: "Portfolio Platform",
        description:
            "A cinematic landing experience that layers motion, ambient depth, and clear storytelling around my recent work.",
        stack: ["React", "TypeScript", "Motion"],
        link: "https://github.com",
        spotlightLabel: "Project spotlight",
    },
    "llm-test-oracles": {
        id: "llm-test-oracles",
        name: "LLM Research",
        title: "Understanding LLM-Driven Test Oracle Generation",
        description:
            "Researching Large Language Models’ (LLMs) capabilities for test oracle generation with real-world bugs and various prompting strategies. Developed Python tool to automatically evaluate OpenAI and StarCoder LLMs against 36 bugs and 4 strategies. Published in AIware Conference, November 2025.",
        stack: ["Academic Research", "Literature Review", "LLMs"],
        link: "https://ieeexplore.ieee.org/document/11334275",
        linkLabel: "View Research",
        spotlightLabel: "Research Project",
    },
    plantr: {
        id: "plantr",
        name: "AI Plant Matcher",
        title: "AI Plant Matcher",
        description:
            "Built a full-stack application in 48 hours leveraging OpenAI for intelligent plant preference matching and Pixabay API for image generation. 1st Place in UoA DEVS Hackathon 2024.",
        stack: ["React", "Node.js", "OpenAI"],
        link: "https://github.com/LocalhostLtd/DEV-Hackathon-2024",
        spotlightLabel: "Hackathon Project",
    },
    "moonbeam-maps": {
        id: "moonbeam-maps",
        name: "Moonbeam Maps",
        title: "Spatial Storytelling",
        description:
            "A layered narrative builder for guiding viewers through a city in a calm, cinematic flow.",
        stack: ["Maps", "Interaction", "Storyboards"],
        link: "https://github.com",
        spotlightLabel: "Project spotlight",
    },
    "echo-deck": {
        id: "echo-deck",
        name: "Echo Deck",
        title: "Prototype Toolkit",
        description:
            "A small collection of interface patterns for testing futures without overbuilding the first draft.",
        stack: ["Figma", "React", "Play"],
        link: "https://github.com",
        spotlightLabel: "Prototype notes",
    },
    "harbor-notes": {
        id: "harbor-notes",
        name: "Harbor Notes",
        title: "Writing Rituals",
        description:
            "A gentle place to archive quick ideas, notes, and mood boards for future projects.",
        stack: ["Notes", "Archive", "Reflection"],
        link: "https://github.com",
        linkLabel: "See Notes",
        spotlightLabel: "Field notes",
    },
    "deep-current": {
        id: "deep-current",
        name: "Deep Current",
        title: "Systems Thinking",
        description:
            "A research-driven concept for managing complex content flows without sacrificing clarity.",
        stack: ["System Design", "Strategy", "Content Ops"],
        spotlightLabel: "Project spotlight",
    },
    "blackwater-ui": {
        id: "blackwater-ui",
        name: "Blackwater UI",
        title: "Night Mode Interface",
        description:
            "An interface pattern study focused on accessible contrast, subtle motion, and low-noise clarity.",
        stack: ["UI Systems", "Accessibility", "Visual Design"],
        link: "https://github.com",
        spotlightLabel: "Project spotlight",
    },
};

export function getUniqueProjectsForFish(fishProjectIds: string[]): Project[] {
    const seen = new Set<string>();
    const result: Project[] = [];

    for (const id of fishProjectIds) {
        if (seen.has(id)) continue;
        const project = projectsById[id];
        if (!project) continue;
        seen.add(id);
        result.push(project);
    }

    return result;
}
