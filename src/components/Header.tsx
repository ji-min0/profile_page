"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars, FaCircleXmark } from "react-icons/fa6";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="container">
        <nav>
          <Link href="/" className="logo">
            jimin | profile
          </Link>
          <ul className={`nav-links${open ? " open" : ""}`}>
            <li className="menu-close">
              <button className="menu-btn" aria-label="메뉴 닫기" onClick={() => setOpen(false)}>
                <FaCircleXmark />
              </button>
            </li>
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={isActive(n.href) ? "active" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="menu-btn" aria-label="메뉴 열기" onClick={() => setOpen(true)}>
            <FaBars />
          </button>
        </nav>
      </div>
      <div className={`menu-backdrop${open ? " open" : ""}`} onClick={() => setOpen(false)} />
    </header>
  );
}
