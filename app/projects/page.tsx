import Image from "next/image";
import Link from "next/link";
import Card from "../components/ui/Card/Card";
import CardHeader from "../components/ui/Card/CardHeader";
import Pill from "../components/ui/Pill";
import TechStack from "../components/ui/Card/TechStack";
import CardBody from "../components/ui/Card/CardBody";
import CardFooter from "../components/ui/Card/CardFooter";  
import { projects, Project } from "@/lib/projects";
import { SiGithub, SiGooglechrome } from "react-icons/si";

export default function ProjectsPage() {
    return (
        <main className="max-w-7xl mx-auto px-4">
            <h1 className="leading-tight mt-12 text-center font-black text-[52px]">Projects</h1>
            <div className="flex flex-wrap gap-4 items-center justify-center">
                {projects.map((project: Project) => (
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
                ))}
            </div>
        </main>
    );
}
