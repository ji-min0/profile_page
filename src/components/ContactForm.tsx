"use client";

import { useState } from "react";
import { BsEnvelopePaperHeart } from "react-icons/bs";

type Status = { kind: "idle" | "sending" | "ok" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok) throw new Error(body.message ?? "메일 전송에 실패했습니다.");
      setStatus({ kind: "ok", message: "메일이 성공적으로 전송되었습니다." });
      form.reset();
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "메일 전송에 실패했습니다." });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <p className="form-title">
        <BsEnvelopePaperHeart /> Email me using the form below
      </p>
      <input type="text" name="name" placeholder="Your Name" required maxLength={100} />
      <input type="email" name="email" placeholder="Your Email" required maxLength={200} />
      <textarea name="message" rows={6} placeholder="Your Message" required maxLength={5000} />
      <button type="submit" className="btn btn-fill" disabled={status.kind === "sending"}>
        {status.kind === "sending" ? "Sending..." : "Submit"}
      </button>
      {status.message && (
        <p className={`form-result${status.kind === "error" ? " error" : ""}`} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
