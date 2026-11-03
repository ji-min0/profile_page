import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section container" style={{ minHeight: "60vh" }}>
      <h1 className="sub-title">404</h1>
      <p style={{ margin: "16px 0 28px", color: "var(--text-sub)" }}>페이지를 찾을 수 없습니다.</p>
      <Link href="/" className="btn">
        홈으로
      </Link>
    </section>
  );
}
