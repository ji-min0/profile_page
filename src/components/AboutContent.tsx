"use client";

import { useState } from "react";
import { about } from "@/data/about";

const TABS = [
  { key: "skills", label: "Skills" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
] as const;

export default function AboutContent() {
  const [lang, setLang] = useState<"kr" | "en">("kr");
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("skills");
  const data = about[lang];

  return (
    <section className="section container">
      <div className="about-row">
        <div className="about-col-1">
          <img src="/images/user.gif" alt="노트북으로 코딩하는 원숭이" />
        </div>
        <div className="about-col-2">
          <div className="title-row">
            <h1 className="sub-title">About Me</h1>
            <button className="btn btn-sm" onClick={() => setLang(lang === "kr" ? "en" : "kr")}>
              {lang === "kr" ? "English" : "한국어"}
            </button>
          </div>
          {data.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="tab-titles" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.key}
                role="tab"
                aria-selected={tab === t.key}
                className={`tab-links${tab === t.key ? " active" : ""}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <ul className="tab-contents" role="tabpanel">
            {data.tabs[tab].map((item) => (
              <li key={item.label + item.value}>
                <span>{item.label}</span>
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
