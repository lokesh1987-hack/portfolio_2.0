"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import styles from "./Hero.module.css";


export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Ambient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      {/* Scan line effect */}
      <div className={styles.scanline} />

      <div className={styles.inner}>
        <motion.div
          className={styles.topLine}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className={styles.statusDot} />
          <span className={styles.statusText}>Available for full-time roles</span>
        </motion.div>

        <motion.div
          className={styles.greeting}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>Hi, I'm</span>
        </motion.div>

        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Liladhar
        </motion.h1>

        <motion.div
          className={styles.roleRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className={styles.rolePrefix}>I build </span>
          <TypeAnimation
            sequence={[
              "scalable web apps.",
              2000,
              "beautiful UIs.",
              2000,
              "REST & GraphQL APIs.",
              2000,
              "full-stack products.",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className={styles.typeText}
          />
        </motion.div>

        <motion.p
          className={styles.bio}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Full Stack Developer with 4+ years crafting high-performance web experiences.
          Specialising in React, Next.js, Node.js — turning complex requirements into
          clean, maintainable code that recruiters' clients love.
        </motion.p>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <a href="#projects" className="btn-primary">
            <span>View My Work</span>
            <ArrowDownRight size={16} />
          </a>
          <a href="#contact" className="btn-ghost">
            <span>Get In Touch</span>
          </a>
        </motion.div>

        <motion.div
          className={styles.socials}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <a href="https://github.com/lokesh1987-hack" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/lokeshharode/" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      {/* Stats panel */}
      <motion.div
        className={styles.stats}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {[
          { value: "4+", label: "Years of Experience" },
          { value: "10+", label: "Projects Completed" },
          // { value: "5+", label: "Happy Clients" },
          // { value: "99%", label: "Client Satisfaction" },
        ].map((s) => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className={styles.scrollLine} />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
