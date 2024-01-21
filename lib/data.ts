import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import TaskManager from "@/public/TaskManager.png";
import WebSphere from "@/public/WebSphere-Pro.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "TaskManager",
    description:
      "The Task Manager is a comprehensive task management application featuring a complete to-do list, integrated with user authentication, and developed using Next.js",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    imageUrl: TaskManager,
  },
  {
    title: "ConnectSphere-Pro",
    description:
      "Revolutionize virtual collaboration with our WebRTC-powered project, enabling seamless, real-time communication and video conferencing for a connected world.",
    tags: ["Next.js", "WebRTC", "Sockets", "Tailwind"],
    imageUrl: WebSphere,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "DevOps",
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Terraform",
  "Ansible",
  "GraphQL",
  "Express",
  "Java",
] as const;
