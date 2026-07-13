import type { Fish, Level } from "../types";

import swordfish from "../assets/shallows/swordfish.png";
import turtle from "../assets/shallows/turtle.png";
import dolphin from "../assets/shallows/hectors-dolphin.png";
import mantaray from "../assets/shallows/mantaray.png";

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
            projectId: "northstar-studio",
            emoji: "🐠",
            imageSrc: swordfish,
            x: 2,
            y: 122,
            duration: 7,
            size: 125,
            swimPattern: "dart",
        },
        {
            id: "2",
            projectId: "reef-notes",
            emoji: "🐟",
            imageSrc: dolphin,
            x: 82,
            y: 114,
            duration: 12,
            size: 140,
            swimPattern: "glide",
        },
        {
            id: "3",
            projectId: "tideline-lab",
            emoji: "🐡",
            imageSrc: turtle,
            x: 74,
            y: 8,
            duration: 18,
            size: 100,
            swimPattern: "swoop",
        },
        {
            id: "4",
            projectId: "neural-network",
            emoji: "🦈",
            imageSrc: mantaray,
            x: 23,
            y: -30,
            duration: 13,
            size: 130,
            swimPattern: "glide",
        },
    ],
    twilight: [
        {
            id: "5",
            projectId: "moonbeam-maps",
            emoji: "🪼",
            imageSrc: jellyfish,
            x: 24,
            y: -20,
            duration: 24,
            size: 80,
            swimPattern: "drift",
        },
        {
            id: "6",
            projectId: "echo-deck",
            emoji: "🐙",
            imageSrc: octopus,
            x: 38,
            y: 105,
            duration: 12,
            size: 90,
            swimPattern: "dart",
        },
        {
            id: "7",
            projectId: "harbor-notes",
            emoji: "🐬",
            imageSrc: shark,
            x: 80,
            y: 20,
            duration: 7,
            size: 160,
            swimPattern: "swoop",
        },
    ],
    midnight: [
        {
            id: "8",
            projectId: "deep-current",
            emoji: "🐳",
            imageSrc: spermwhale,
            x: 15,
            y: 105,
            duration: 14,
            size: 240,
            swimPattern: "drift",
        },
        {
            id: "9",
            projectId: "blackwater-ui",
            emoji: "🦑",
            imageSrc: squid,
            x: 82,
            y: 8,
            duration: 16,
            size: 140,
            swimPattern: "drift",
        },
    ],
    hadal: [],
};
