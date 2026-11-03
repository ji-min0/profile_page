export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>© {new Date().getFullYear()} Kang Jimin</span>
        <span>
          <a href="mailto:k.jimin2002@gmail.com">Email</a>
          <a href="https://github.com/ji-min0" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://hello-dev-world.tistory.com/" target="_blank" rel="noopener noreferrer">
            Blog
          </a>
        </span>
      </div>
    </footer>
  );
}
