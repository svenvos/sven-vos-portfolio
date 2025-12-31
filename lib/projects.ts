import { IconType } from "react-icons";
import { StaticImageData } from "next/image";
import extending from "@/public/projects/extending.png";
import deVier from "@/public/projects/de-vier.png";
import veldi from "@/public/projects/veldi.png";
import printForge from "@/public/projects/print-forge.png";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiBun, SiFigma, SiReact, SiJavascript, SiCss3, SiNodedotjs } from "react-icons/si";

export interface TechStackItem {
    icon: IconType;
    name: string;
}

export interface Project {
    imgSrc: StaticImageData;
    imgAlt: string;
    title: string;
    description: string;
    techStack: TechStackItem[];
    githubUrl: string;
    liveDemoUrl: string;
}

export const projects: Project[] = [
    {
        imgSrc: extending,
        imgAlt: "Extending website preview.",
        title: "Extending",
        description: "For Extending, I was responsible for the development of the website. From designing the UI in Figma to implementing the functionality in Next.js. For this project, I used Bun as the package manager and Tailwind CSS for the styling.",
        techStack: [
            {
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS"
            },
            {
                icon: SiTypescript,
                name: "TypeScript"
            },
            {
                icon: SiBun,
                name: "Bun"
            },
            {
                icon: SiFigma,
                name: "Figma"
            }
        ],
        githubUrl: "https://github.com/svenvos/extending-in-next",
        liveDemoUrl: "https://extending.nl"
    },
    {
        imgSrc: deVier,
        imgAlt: "De Vier website preview.",
        title: "De Vier",
        description: "For De Vier, I was responsible for the development of the website. From designing the UI in Figma to implementing the functionality in React.js. For this project, I used Node.js as the package manager and CSS3 for the styling.",
        techStack: [
            {
                icon: SiReact,
                name: "React.js"
            },
            {
                icon: SiJavascript,
                name: "JavaScript"
            },
            {
                icon: SiCss3,
                name: "CSS3"
            },
            {
                icon: SiNodedotjs,
                name: "Node.js"
            },
            {
                icon: SiFigma,
                name: "Figma"
            }
        ],
        githubUrl: "https://github.com/svenvos/de-vier",
        liveDemoUrl: "https://devier-kampen.nl/"
    },
    {
        imgSrc: veldi,
        imgAlt: "Veldi website preview.",
        title: "Veldi",
        description: "For Veldi, I was responsible for the development of the landing page. From designing the UI in Figma to implementing the functionality in Next.js. For this project, I used Bun as the package manager and Tailwind CSS for the styling.",
        techStack: [
            {
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS"
            },
            {
                icon: SiTypescript,
                name: "TypeScript"
            },
            {
                icon: SiBun,
                name: "Bun"
            },
            {
                icon: SiFigma,
                name: "Figma"
            }
        ],
        githubUrl: "https://github.com/svenvos/veldi",
        liveDemoUrl: "https://veldi.nl/"
    },
    {
        imgSrc: printForge,
        imgAlt: "PrintForge website preview.",
        title: "PrintForge",
        description: "PrintForge is a project from the Fullstack Developer Career Path from Scrimba. It's my first Next.js project in which I learned everything about the basics of Next.js. From routing (and nested routing), to filtering with usePathname, and all other basics.",
        techStack: [
            {
                icon: SiNextdotjs,
                name: "Next.js"
            },
            {
                icon: SiTailwindcss,
                name: "Tailwind CSS"
            },
            {
                icon: SiTypescript,
                name: "TypeScript"
            },
            {
                icon: SiNodedotjs,
                name: "Node.js"
            },
            {
                icon: SiFigma,
                name: "Figma"
            }
        ],
        githubUrl: "https://github.com/svenvos/print-forge",
        liveDemoUrl: "https://print-forge-chi.vercel.app"
    }
];
