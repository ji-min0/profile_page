import type { Metadata } from "next";
import { FaBook, FaGithub, FaRegEnvelope } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact" };

const CONTACT_EMAIL = "k.jimin2002@gmail.com";

export default function ContactPage() {
  return (
    <section className="section container">
      <div className="contact-row">
        <div className="contact-left">
          <h1 className="sub-title">Contact Me</h1>
          <p className="contact-mail">
            <FaRegEnvelope /> {CONTACT_EMAIL}
          </p>
          <div className="social-icons">
            <a href="https://github.com/ji-min0" target="_blank" rel="noopener noreferrer">
              <FaGithub /> github
            </a>
            <a href="https://hello-dev-world.tistory.com/" target="_blank" rel="noopener noreferrer">
              <FaBook /> blog
            </a>
          </div>
          <a href="/images/my-cv.pdf" download className="btn btn-fill">
            Download CV
          </a>
        </div>
        <div className="contact-right">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
