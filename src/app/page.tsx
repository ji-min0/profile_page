import Link from "next/link";
import { FaArrowDown, FaArrowRight, FaFileLines, FaServer, FaCloud } from "react-icons/fa6";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const STRENGTHS = [
  {
    icon: <FaFileLines />,
    title: "기획·명세",
    body: "요구사항을 정리하고 API 명세를 먼저 확정해, 여러 직군이 같은 기준으로 동시에 움직이게 합니다.",
  },
  {
    icon: <FaServer />,
    title: "백엔드",
    body: "Django·FastAPI로 인증, 권한, 채점, 외부 데이터 동기화처럼 서비스의 핵심 흐름을 구현합니다.",
  },
  {
    icon: <FaCloud />,
    title: "AWS 인프라",
    body: "IVS·EventBridge·CloudFront로 스트리밍과 이벤트 흐름을 만들고, IAM Role로 배포 보안을 다집니다.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero container">
        <p className="hero-role">PM · Backend Developer</p>
        <h1>
          Hi, I&apos;m <span>Jimin</span>
          <br />
          Kang From Korea
        </h1>
        <p className="hero-desc">
          기획부터 API 명세, AWS 인프라까지 직접 다뤄본, 개발을 아는 PM을 지향합니다.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="btn btn-fill">
            프로젝트 보기 <FaArrowRight />
          </Link>
          <Link href="/contact" className="btn">
            연락하기
          </Link>
        </div>
        <a href="#work" className="scroll-hint">
          <FaArrowDown /> scroll
        </a>
      </section>

      <section className="section container" id="work">
        <p className="eyebrow">WHAT I DO</p>
        <div className="section-head">
          <h2>설계로 시작해 끝까지 연결합니다</h2>
        </div>
        <div className="strengths">
          {STRENGTHS.map((s) => (
            <div className="strength" key={s.title}>
              <div className="strength-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container">
        <p className="eyebrow">SELECTED WORK</p>
        <div className="section-head">
          <h2>Projects</h2>
          <Link href="/projects" className="back-link">
            전체 보기 <FaArrowRight />
          </Link>
        </div>
        <div className="work-list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
