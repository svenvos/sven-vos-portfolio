import Link from "next/link";
import Image from "next/image";
import Card from "../ui/Card/Card";
import CardHeader from "../ui/Card/CardHeader";
import CardBody from "../ui/Card/CardBody";
import CardFooter from "../ui/Card/CardFooter";
import TechStack from "../ui/Card/TechStack";
import Pill from "../ui/Pill";
import { projects, Project } from "@/lib/projects";
import { SiGithub, SiGooglechrome } from "react-icons/si";

export default function Projects() {
    const slicedProjects = projects.slice(0, 3);
    const projectElements = slicedProjects.map((project: Project) => (
        <Card key={project.title}>
            <CardHeader>
                <Image src={project.imgSrc} alt={project.imgAlt} width={400} height={400} className="rounded-t-lg" />
            </CardHeader>
            <CardBody>
                <TechStack>
                    {project.techStack.map((tech) => (
                        <Pill key={tech.name}>
                            <tech.icon />
                            <span>{tech.name}</span>
                        </Pill>
                    ))}
                </TechStack>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-sm">{project.description}</p>
            </CardBody>
            <CardFooter>
                <h4 className="mb-2">Links:</h4>
                <div className="flex gap-2">
                    <Link href={project.githubUrl} target="_blank" className="text-lg transition-colors duration-500 hover:text-accent">
                        <Pill>
                            <SiGithub />
                            <span>GitHub</span>
                        </Pill>
                    </Link>
                    <Link href={project.liveDemoUrl} target="_blank" className="text-lg transition-colors duration-500 hover:text-accent">
                        <Pill>
                            <SiGooglechrome />
                            <span>Live Demo</span>
                        </Pill>
                    </Link>
                </div>
            </CardFooter>
        </Card>
    ));

    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold text-center">Projects</h2>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                {projectElements}
            </div>
        </section>
    );
}
