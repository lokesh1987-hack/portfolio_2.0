"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";

const links = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a href="#" className={styles.logo}>
        <span className={styles.logoSymbol}>&lt;</span>
        LH
        <span className={styles.logoSymbol}>/&gt;</span>
      </a>

      <ul className={styles.links}>
        {links.map((l, i) => (
          <motion.li
            key={l.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3 }}
          >
            <a href={l.href} className={styles.link}>
              <span className={styles.linkNum}>0{i + 1}.</span>
              {l.label}
            </a>
          </motion.li>
        ))}
      </ul>

      <a href="#contact" className={styles.navCta}>
        <span>Hire Me</span>
      </a>

      <button
        className={styles.burger}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={mobileOpen ? styles.burgerOpen : ""}></span>
        <span className={mobileOpen ? styles.burgerOpen : ""}></span>
        <span className={mobileOpen ? styles.burgerOpen : ""}></span>
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
