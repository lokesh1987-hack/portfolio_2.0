"use client";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  // Stackoverflow,
  ArrowUp,
  Instagram,
} from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <a href="#" className={styles.logo}>
            <span className={styles.sym}>&lt;</span>LH
            <span className={styles.sym}>/&gt;</span>
          </a>
          <p className={styles.tagline}>
            Building the web, one commit at a time.
          </p>
        </div>

        <div className={styles.links}>
          {["Skills", "Projects", "Experience", "Testimonials", "Contact"].map(
            (l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>
                {l}
              </a>
            ),
          )}
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            {[
              {
                icon: <Github size={16} />,
                href: "https://github.com/lokesh1987-hack",
                label: "GitHub",
              },
              {
                icon: <Linkedin size={16} />,
                href: "https://www.linkedin.com/in/lokeshharode/",
                label: "LinkedIn",
              },
              // { icon: <Twitter size={16} />, href: "https://twitter.com", label: "Twitter" },
              {
                icon: <Instagram size={16} />,
                href: "https://www.instagram.com/lokeshharode1111/",
                label: "Instagram",
              },
              // {
              //   icon: <Stackoverflow size={16} />,
              //   href: "https://stackoverflow.com/users/17967960/liladhar-harode",
              //   label: "StackOverflow",
              // },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={styles.social}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <button
            className={styles.toTop}
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Alex Rivera. Built with Next.js & Framer
          Motion.
        </span>
        <span className={styles.mono}>v1.0.0 — Open to opportunities</span>
      </div>
    </footer>
  );
}
