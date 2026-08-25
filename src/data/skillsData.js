import {
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress,
  SiMongodb, SiMongoose, SiN8N, SiGithub, SiPostman, SiSwagger, SiVercel,
  SiRender, SiFigma, SiClaude, SiGoogle,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FiCode, FiCpu, FiLink } from "react-icons/fi";

/* meta = credibility line. Numeric counts reflect the live projects
   shown in the Projects section; the rest are honest role labels. */
export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", meta: "3+ projects", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", meta: "5+ projects", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", meta: "Daily driver", icon: SiTypescript, color: "#3178C6" },
      { name: "CSS / Tailwind", meta: "3+ projects", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", meta: "3+ projects", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", meta: "2+ projects", icon: SiExpress, color: "#AAAAAA" },
      { name: "REST APIs", meta: "API design", icon: FiCode, color: "#c8f250" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", meta: "2+ projects", icon: SiMongodb, color: "#47A248" },
      { name: "Mongoose", meta: "ODM modelling", icon: SiMongoose, color: "#880000" },
      { name: "Schema design", meta: "Data structure", icon: FiCpu, color: "#c8f250" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", meta: "Cloud hosting", icon: FaAws, color: "#FF9900" },
      { name: "Vercel", meta: "2+ deploys", icon: SiVercel, color: "#FFFFFF" },
      { name: "Render", meta: "Cloud deploys", icon: SiRender, color: "#FFFFFF" },
      { name: "GitHub", meta: "Version control", icon: SiGithub, color: "#FFFFFF" },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    skills: [
      { name: "n8n", meta: "Voice-agent build", icon: SiN8N, color: "#FF6D5A" },
      { name: "AI APIs", meta: "Conversational AI", icon: FiCpu, color: "#c8f250" },
      { name: "Webhooks", meta: "Integrations", icon: FiLink, color: "#c8f250" },
    ],
  },
  {
    id: "design-tools",
    title: "Design & Tools",
    skills: [
      { name: "Figma", meta: "UI design", icon: SiFigma, color: "#F24E1E" },
      { name: "Claude Design", meta: "AI-assisted UI", icon: SiClaude, color: "#D97757" },
      { name: "Stitch", meta: "Prototyping", icon: SiGoogle, color: "#4285F4" },
      { name: "Visily", meta: "Wireframes", letter: "V", color: "#6C63FF" },
      { name: "Postman", meta: "API testing", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", meta: "API docs", icon: SiSwagger, color: "#85EA2D" },
    ],
  },
];
