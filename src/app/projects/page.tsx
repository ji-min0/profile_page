import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa6";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <section className="section container">
      <h1 className="sub-title">My Projects</h1>
      <div className="work-list">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      <div className="see-more">
        <a href="https://github.com/ji-min0" className="btn" target="_blank" rel="noopener noreferrer">
          See more <FaGithub />
        </a>
      </div>
    </section>
  );
}
