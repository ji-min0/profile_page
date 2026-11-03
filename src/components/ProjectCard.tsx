import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className="work">
      <div className="work-thumb">
        <img
          src={project.image}
          alt={project.title}
          style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
        />
        <div className="work-layer">
          <p>{project.summary}</p>
          <span aria-hidden>
            <FaArrowRight />
          </span>
        </div>
      </div>
      <div className="work-info">
        <h3>{project.title}</h3>
        <p className="work-sub">{project.subtitle}</p>
        <p className="work-meta">
          {project.period.split(" (")[0]} · {project.team.split(" (")[0]}
        </p>
      </div>
    </Link>
  );
}
