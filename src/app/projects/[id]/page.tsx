import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).id);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectDetail({ params }: Props) {
  const { id } = await params;
  const project = getProject(id);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.id === id);
  const prev = projects[index - 1];
  const next = projects[index + 1];
  const [hero, ...rest] = project.detailImages;

  return (
    <article className="section container">
      <Link href="/projects" className="back-link">
        <FaArrowLeft /> 프로젝트 목록
      </Link>

      <header className="detail-head">
        <h1>{project.title}</h1>
        <p className="detail-sub">{project.subtitle}</p>
        <p className="detail-summary">{project.summary}</p>
      </header>

      {hero && (
        <figure className="detail-hero">
          <img src={hero.src} alt={hero.caption} />
        </figure>
      )}

      <div className="stats">
        {project.stats.map((s) => (
          <div className="stat" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      {project.diagrams.length > 0 && (
        <section className="diagrams">
          <h2>구조</h2>
          {project.diagrams.map((d) => (
            <figure className="diagram" key={d.src}>
              <h3>{d.title}</h3>
              <a href={d.src} target="_blank" rel="noopener noreferrer" className="diagram-img" title="원본 크기로 보기">
                <img src={d.src} alt={d.caption} loading="lazy" />
                <span className="diagram-zoom">
                  <FaMagnifyingGlassPlus /> 크게 보기
                </span>
              </a>
              <figcaption>{d.caption}</figcaption>
              {d.points && (
                <ul className="diagram-points">
                  {d.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </figure>
          ))}
        </section>
      )}

      <div className="detail-body">
        <div>
          <section>
            <h2>문제 해결</h2>
            {project.highlights.map((h, i) => (
              <div className="highlight" key={h.title}>
                <span className="highlight-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{h.title}</h3>
                  <p>{h.body}</p>
                </div>
              </div>
            ))}
          </section>

          {project.extras.length > 0 && (
            <section className="extras">
              <h2>그 밖의 구현</h2>
              <ul>
                {project.extras.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="aside">
          <dl>
            <div>
              <dt>ROLE</dt>
              <dd>{project.role}</dd>
            </div>
            {project.scope && (
              <div>
                <dt>SCOPE</dt>
                <dd>{project.scope}</dd>
              </div>
            )}
            <div>
              <dt>PERIOD</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>TEAM</dt>
              <dd>{project.team}</dd>
            </div>
            {project.stack.map((s) => (
              <div key={s.label}>
                <dt>{s.label.toUpperCase()}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
          <div className="aside-links">
            {project.links.map((l) => (
              <a key={l.url} href={l.url} className="btn btn-sm" target="_blank" rel="noopener noreferrer">
                {l.label} <FaArrowUpRightFromSquare />
              </a>
            ))}
          </div>
        </aside>
      </div>

      {rest.length > 0 && (
        <section className="gallery">
          <h2>화면</h2>
          {rest.map((img) => (
            <figure key={img.src}>
              <img src={img.src} alt={img.caption} loading="lazy" />
              <figcaption>{img.caption}</figcaption>
            </figure>
          ))}
        </section>
      )}

      <nav className="pager" aria-label="다른 프로젝트">
        {prev ? (
          <Link href={`/projects/${prev.id}`}>
            <small>
              <FaArrowLeft /> 이전 프로젝트
            </small>
            <strong>{prev.title}</strong>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/projects/${next.id}`} className="next">
            <small>
              다음 프로젝트 <FaArrowRight />
            </small>
            <strong>{next.title}</strong>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
