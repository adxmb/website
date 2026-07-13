import type { Project } from "../types";

export const projectsById: Record<string, Project> = {
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
    "reef-notes": {
        id: "reef-notes",
        name: "Reef Notes",
        title: "Productivity Companion",
        description:
            "A personal dashboard that turns scattered ideas into focused plans with gentle visual feedback.",
        stack: ["TypeScript", "Design Systems", "Accessibility"],
        link: "https://github.com",
        spotlightLabel: "Project spotlight",
    },
    "tideline-lab": {
        id: "tideline-lab",
        name: "Tideline Lab",
        title: "Visual Research",
        description:
            "A compact experiment space for testing atmospheric interfaces and textured interaction patterns.",
        stack: ["CSS", "Animation", "Prototype"],
        link: "https://github.com",
        spotlightLabel: "Experiment log",
    },
    "neural-network": {
        id: "neural-network",
        name: "Neural Network",
        title: "Neural Network",
        description:
            "A lightweight neural network trained to detect different English accents from audio recordings.",
        stack: ["Python", "Flask"],
        link: "https://github.com",
        spotlightLabel: "Research note",
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
        spotlightLabel: "Field notes",
    },
    "deep-current": {
        id: "deep-current",
        name: "Deep Current",
        title: "Systems Thinking",
        description:
            "A research-driven concept for managing complex content flows without sacrificing clarity.",
        stack: ["System Design", "Strategy", "Content Ops"],
        link: "https://github.com",
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

/**
 * Unique projects referenced by the fish on a given level, in first-seen
 * order. Multiple fish can share a projectId (e.g. the same project shown
 * twice with different swim patterns) — this collapses those to one entry.
 */
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
