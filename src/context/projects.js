import { create } from "zustand";
import hakbangApp from "../../src/assets/hakbangApp.png";
import itsukiBot from "../../src/assets/itsukiBot.png";

export const useProjects = create((set) => ({
  projects: [
    {
      image: hakbangApp,
      title: "Hakbang",
      description:
        "HAKBANG is an educational guidance platform designed to help Filipino senior high school students take the right hakbang toward making informed and strategic decisions as they prepare for higher education.",
      stack: ["Flutter", "Dart", "Firebase", "Git", "Github"],
      link: "https://github.com/IKairuu/Project_Hakbang",
    },
    {
      image: itsukiBot,
      title: "Discord Itsuki Bot",
      description:
        "Itsuki Nakano Discord Study Bot - Your personal study partner with the voice and attitude of Itsuki Nakano from The Quintessential Quintuplets! She’s flustered, stubborn, and surprisingly reliable. Whether you're reviewing, taking a quiz, or asking for help, she’s always ready with a tsundere comment to keep you motivated.",
      stack: ["Python", "Discord.py"],
      link: "https://github.com/IKairuu/Itsuki-Bot",
    },
    {
      image: hakbangApp,
      title: "Hakbang Server",
      description:
        "Backend API Server for Hakbang Application with RestAPI Integrations managing requests and responses from API layers. A Three-Layer-Architecture designed to be scalable and manageable layers.",
      stack: [
        "Javascript",
        "Node.js",
        "Express.js",
        "JWT",
        "Postman",
        "Prisma",
        "Neon",
        "PostgreSQL",
        "Render",
      ],
      link: "https://github.com/IKairuu/Project_Hakbang_Server",
    },
  ],
}));
