"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Skills.module.css";

const categories = [
  {
    label: "Frontend",
    color: "cyan",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js (SSR / SEO)", level: 94 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS / SCSS", level: 92 },
      { name: "Redux / Context API", level: 90 },
    ],
  },
  {
    label: "Backend",
    color: "green",
    skills: [
      { name: "Node.js / Express.js", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Python APIs", level: 82 },
      { name: "REST APIs", level: 95 },
      { name: "Razorpay Integration", level: 85 },
    ],
  },
  {
    label: "Cloud & Performance",
    color: "purple",
    skills: [
      { name: "AWS S3 / EC2", level: 85 },
      { name: "Core Web Vitals Optimization", level: 92 },
      { name: "SEO Optimization (Next.js)", level: 94 },
      { name: "Lighthouse Performance Tuning", level: 90 },
      { name: "Micro-Frontend Architecture", level: 82 },
    ],
  },
];

const techBadges = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Python",
  "REST APIs",
  "Redux Toolkit",
  "Context API",
  "Tailwind CSS",
  "SCSS",
  "Material UI",
  "Bootstrap",
  "AWS S3",
  "AWS EC2",
  "Vercel",
  "Netlify",
  "CI/CD",
  "Git",
  "GitHub Actions",
  "Docker",
  "Lighthouse Optimization",
  "Core Web Vitals",
  "SSR Optimization",
  "Microfrontends",
  "Razorpay Integration",
  "Figma",

  // AI Developer Tools (NEW ADDITIONS)
  "Claude AI",
  "GitHub Copilot",
  "Cursor AI",
  "Windsurf AI",
  "TRAE AI",
  "AI Prompt Engineering"
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className={styles.skillRow}>
      <div className={styles.skillMeta}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillPercent} style={{ color: `var(--${color})` }}>{level}%</span>
      </div>
      <div className={styles.barBg}>
        <motion.div
          className={styles.barFill}
          style={{ background: `var(--${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className={styles.section} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <p className="section-tag">Tech Stack</p>
        <h2 className="section-title">
          Skills &amp; <span className="glow-text">Expertise</span>
        </h2>
        <p className={styles.subtitle}>
          4+ years of hands-on experience across the full stack — from pixel-perfect UIs to scalable backend systems.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: ci * 0.15 + 0.2, duration: 0.6 }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardDot} style={{ background: `var(--${cat.color})` }} />
              <h3 className={styles.cardTitle} style={{ color: `var(--${cat.color})` }}>{cat.label}</h3>
            </div>
            <div className={styles.bars}>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} {...s} color={cat.color} delay={si * 0.1 + ci * 0.1 + 0.3} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech badges */}
      <motion.div
        className={styles.badgesWrap}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
      >
        <p className={styles.badgesTitle}>All Technologies</p>
        <div className={styles.badges}>
          {techBadges.map((t, i) => (
            <motion.span
              key={t}
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.03 + 0.9 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
