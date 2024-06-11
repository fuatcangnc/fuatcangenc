import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import { GoHome } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { FaRegFolderOpen } from "react-icons/fa";
import { IconType } from "react-icons";

interface NavLink {
  name: string;
  hash: string;
  icon: IconType;
}
export const navLinks:NavLink[]=[
    {
        name:'Home',
        hash:'#home',
        icon:GoHome
    },
    {
        name: "About",
        hash: "#about",
        icon:CiUser
      },
      {
        name: "Projects",
        hash: "#projects",
        icon:FaRegFolderOpen
      },
      {
        name: "Skills",
        hash: "#skills",
        icon:FaRegFolderOpen
      },
      {
        name: "Contact",
        hash: "#contact",
        icon:FaRegFolderOpen
      },
]

export const experiencesData =[
    {
        title:'Designer and Nocode Developer',
        description:'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
        icon:React.createElement(LuGraduationCap),
        date:2022 - 2024
    },
    {
        title:'Freelance',
        description:'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
        icon:React.createElement(FaReact),
        date:2022 - 2024
    }
]


export const projectsData = [
    {
      title: "CorpComment",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: corpcommentImg,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: rmtdevImg,
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: wordanalyticsImg,
    },
  ] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "Prisma",
    "Framer Motion",
  ] 