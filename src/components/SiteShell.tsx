"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Sun, X } from "lucide-react";

const links = [
  ["Explore", "/explore"],
  ["Articles", "/articles"],
  ["Feelings guide", "/feelings"],
  ["Relationships", "/relationships"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("lih-theme");
    document.documentElement.dataset.theme = saved || "dark";
  }, []);

  function toggle() {
    const current = document.documentElement.dataset.theme || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("lih-theme", next);
  }
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Love Is Human home">
        <BrandMark />
        <span className="wordmark-copy">
          love is human<small>EVERY SIDE OF BEING HUMAN</small>
        </span>
      </Link>

      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav
        className={open ? "main-nav is-open" : "main-nav"}
        aria-label="Main navigation"
      >
        {links.map(([label, url]) => (
          <Link href={url} key={url} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link
          className="help-link"
          href="/get-help"
          onClick={() => setOpen(false)}
        >
          Find support <ArrowUpRight size={14} />
        </Link>
      </nav>

      <button
        className="theme-toggle"
        onClick={toggle}
        aria-label="Toggle colour theme"
        title="Toggle colour theme"
      >
        <Sun size={18} />
      </button>
    </header>
  );
}

export function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="18.5" />
      <path d="M12 12v16h6m4-16v16m0-8h6m0-8v16" />
      <circle className="brand-mark-dot" cx="20" cy="20" r="1.25" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="wordmark" href="/">
          <BrandMark />
          <span className="wordmark-copy">
            love is human<small>EVERY SIDE OF BEING HUMAN</small>
          </span>
        </Link>

        <p>A guide to love, relationships and the feelings around them.</p>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Love Is Human · All rights reserved
        </span>

        <div>
          <Link href="/about">About</Link>
          <Link href="/myths">Love myths</Link>
          <Link href="/sources">Sources</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="intro-copy">{description}</p>
    </div>
  );
}
