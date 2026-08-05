import type { Fish, Level } from "../types";

import turtle from "../assets/shallows/turtle.png";
import mantaray from "../assets/shallows/mantaray.png";
import hammerhead from "../assets/shallows/hammerhead.png";
import fish from "../assets/shallows/fish.png";

import octopus from "../assets/twilight/octopus.png";
import jellyfish from "../assets/twilight/jellyfish.png";
import shark from "../assets/twilight/shark.png";

import spermwhale from "../assets/midnight/sperm-whale.png";
import squid from "../assets/midnight/squid.png";

export const fishByLevel: Record<Level["id"], Fish[]> = {
    surface: [],
    shallows: [
        {
            id: "1",
            projectId: "neural-network",
            emoji: "🦈",
            imageSrc: mantaray,
            x: 23,
            y: -10,
            duration: 13,
            size: 145,
            swimPattern: "swoop",
        },
        {
            id: "2",
            projectId: "llm-test-oracles",
            emoji: "🐡",
            imageSrc: turtle,
            x: 72,
            y: 8,
            duration: 18,
            size: 105,
            swimPattern: "glide",
        },
        {
            id: "3",
            projectId: "plantr",
            emoji: "🐟",
            imageSrc: fish,
            x: 14,
            y: 118,
            duration: 8,
            size: 75,
            swimPattern: "dart",
        },
        {
            id: "4",
            projectId: "portfolio-website",
            emoji: "🐠",
            imageSrc: hammerhead,
            x: 62,
            y: 114,
            duration: 6,
            size: 160,
            swimPattern: "glide",
        },
    ],
    twilight: [
        {
            id: "5",
            projectId: "undergraduate",
            emoji: "🪼",
            imageSrc: jellyfish,
            x: 27,
            y: -16,
            duration: 24,
            size: 80,
            swimPattern: "drift",
        },
        {
            id: "7",
            projectId: "jane-street",
            emoji: "🐬",
            imageSrc: shark,
            x: 74,
            y: 20,
            duration: 7,
            size: 160,
            swimPattern: "swoop",
        },
        {
            id: "6",
            projectId: "llm-test-oracles",
            emoji: "🐙",
            imageSrc: octopus,
            x: 38,
            y: 105,
            duration: 12,
            size: 98,
            swimPattern: "dart",
        },
    ],
    midnight: [
        {
            id: "8",
            projectId: "current-activities",
            emoji: "🐳",
            imageSrc: spermwhale,
            x: 15,
            y: 109,
            duration: 14,
            size: 220,
            swimPattern: "drift",
        },
        {
            id: "9",
            projectId: "movies",
            emoji: "🦑",
            imageSrc: squid,
            x: 82,
            y: 4,
            duration: 16,
            size: 150,
            swimPattern: "drift",
        },
    ],
    hadal: [],
};
