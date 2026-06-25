"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import styles from "./Projects.module.css";

const projects = [
  {
    id: 1,
    title: "Littardo Emporium (Next.js SSR Ecommerce)",
    category: "Full Stack",
    year: "2024",
    description:
      "Production-scale Next.js ecommerce platform with SSR, Razorpay checkout, AWS S3 media storage, and Core Web Vitals optimization. Improved SEO visibility and reduced initial load time by 40%.",
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Razorpay API",
      "Tailwind CSS",
      "SCSS",
      "SSR Optimization",
      "SEO Optimization",
    ],
    color: "cyan",
    featured: true,
    github: "https://github.com/lokesh1987-hack",
    live: "https://liladhar.in",
    impact: "40% faster load time",
  },

  {
    id: 2,
    title: "AI Chatbot Web Application",
    category: "Full Stack",
    year: "2025",
    description:
      "Interactive AI-powered chatbot web application supporting real-time conversation workflows with scalable frontend architecture and asynchronous API communication.",
    tags: [
      "React.js",
      "JavaScript",
      "AI Chat Interface",
      "REST APIs",
      "Netlify Deployment",
    ],
    color: "purple",
    featured: true,
    github: "https://github.com/lokesh1987-hack",
    live: "https://lh-aichatbot.netlify.app/",
    impact: "AI-enabled UX platform",
  },

  {
    id: 3,
    title: "UniScholars Study-Abroad Platform",
    category: "Frontend",
    year: "2023",
    description:
      "Developed scalable React and Next.js UI modules supporting 60K+ active users with reusable architecture and performance optimization strategies.",
    tags: [
      "React.js",
      "Next.js",
      "Redux",
      "TypeScript",
      "REST APIs",
      "Performance Optimization",
    ],
    color: "green",
    featured: true,
    github: "https://github.com/lokesh1987-hack",
    live: "#",
    impact: "60K+ users",
  },

  {
    id: 4,
    title: "UniAcco Global Accommodation Platform",
    category: "Frontend",
    year: "2023",
    description:
      "Delivered cross-platform UI modules for global accommodation platform serving 1M+ users with optimized responsive layouts and scalable component architecture.",
    tags: [
      "React.js",
      "Next.js",
      "Redux",
      "Responsive UI",
      "Component Architecture",
    ],
    color: "amber",
    featured: true,
    github: "https://github.com/lokesh1987-hack",
    live: "#",
    impact: "1M+ users",
  },

  {
    id: 5,
    title: "NeuroByte Systems Company Website",
    category: "Frontend",
    year: "2024",
    description:
      "Designed and deployed modern responsive company website with scalable UI architecture and performance-optimized layout for improved service presentation.",
    tags: [
      "React.js",
      "JavaScript",
      "Responsive Design",
      "UI Architecture",
      "Netlify Deployment",
    ],
    color: "cyan",
    featured: false,
    github: "https://github.com/lokesh1987-hack",
    live: "https://neurobytesystems.netlify.app/",
    impact: "Production deployment",
  },
  {
    id: 10,
    title: "MMailer – Bulk Email Automation Platform",
    category: "Full Stack",
    year: "2024",
    description:
      "Built a scalable bulk email automation platform with dynamic recipient management, template-based messaging workflows, and responsive dashboard UI for managing campaigns efficiently.",
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Email Automation",
      "Dashboard UI",
      "Tailwind CSS",
    ],
    color: "purple",
    featured: true,
    github: "https://github.com/lokesh1987-hack",
    live: "https://mmailer.netlify.app/",
    impact: "Email automation workflow platform",
  },

  {
    id: 6,
    title: "Online PDF Downloader Tool",
    category: "Frontend",
    year: "2024",
    description:
      "Lightweight browser-based PDF processing utility enabling document workflow automation with responsive UI and fast client-side performance.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
      "Client-side Processing",
      "Netlify Deployment",
    ],
    color: "green",
    featured: false,
    github: "https://github.com/lokesh1987-hack",
    live: "https://onlinepdfdownloder.netlify.app/",
    impact: "Utility web tool",
  },

  {
    id: 7,
    title: "Coca-Cola CONA Collaboration Platform",
    category: "Frontend",
    year: "2022",
    description:
      "Built enterprise-grade UI modules for Coca-Cola CONA collaboration platform used across North American bottling partners.",
    tags: ["React.js", "Redux", "Enterprise UI", "REST APIs"],
    color: "purple",
    featured: false,
    github: "https://github.com/lokesh1987-hack",
    live: "#",
    impact: "Enterprise platform",
  },

  {
    id: 8,
    title: "Fluid Robotics Monitoring Dashboard",
    category: "Full Stack",
    year: "2022",
    description:
      "Developed infrastructure monitoring dashboards with advanced grid interactions and real-time visualization using Syncfusion components.",
    tags: ["React.js", "Redux", "Node.js", "MongoDB", "Syncfusion"],
    color: "amber",
    featured: false,
    github: "https://github.com/lokesh1987-hack",
    live: "#",
    impact: "Infra monitoring system",
  },

  {
    id: 9,
    title: "AWS Media Storage Optimization Pipeline",
    category: "Backend",
    year: "2024",
    description:
      "Implemented scalable product media storage pipeline using AWS S3 improving catalog asset delivery performance and reliability.",
    tags: ["AWS S3", "Node.js", "Cloud Storage", "Performance Optimization"],
    color: "cyan",
    featured: false,
    github: "https://github.com/lokesh1987-hack",
    live: "#",
    impact: "High-volume media delivery",
  },
  {
    id: 11,
    title: "ProjectFlow – Fullstack Project & Todo Management App",
    category: "Full Stack",
    year: "2025",
    description:
      "Built a fullstack project and todo management application with secure authentication, project-level task management, and scalable architecture. Implemented JWT-based authentication, protected routes, and CRUD operations for projects and todos with a clean, responsive UI inspired by modern productivity tools.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "REST APIs",
      "Protected Routes",
      "Full Stack Architecture",
      "Responsive UI",
    ],
    color: "blue",
    featured: true,
    github: "https://github.com/lokesh1987-hack", // update with actual repo
    live: "https://projecttaskflow.netlify.app/",
    impact: "End-to-end task & project management system",
  },
  {
    id: 12,
    title: "Dr. Roy Skin Solution – Dermatology Clinic Website",
    category: "Frontend",
    year: "2025",
    description:
      "Designed and developed a modern, SEO-friendly website for Dr. Roy Skin Solution, an advanced aesthetic dermatology clinic. Built responsive pages showcasing treatments, doctor profile, clinic locations, and patient trust indicators with a focus on performance, accessibility, and lead generation.",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Healthcare Website",
      "UI/UX Design",
    ],
    color: "blue",
    featured: true,
    github: "https://github.com/lokesh1987-hack",
    live: "https://drroy.in/",
    impact: "5000+ patients served through digital presence",
  },
];

const filters = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-tag">Portfolio</p>
        <div className={styles.headerRow}>
          <h2 className="section-title">
            Selected <span className="glow-text">Work</span>
          </h2>
          <div className={styles.filters}>
            {filters?.map((f) => (
              <button
                key={f}
                className={`${styles.filter} ${active === f ? styles.filterActive : ""}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filtered?.map((p, i) => (
            <motion.div
              key={p.id}
              className={`${styles.card} ${p.featured ? styles.featured : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardMeta}>
                  <span
                    className={styles.category}
                    style={{ color: `var(--${p.color})` }}
                  >
                    {p.category}
                  </span>
                  <span className={styles.year}>{p.year}</span>
                </div>
                <div className={styles.links}>
                  <a
                    href={p.github}
                    className={styles.iconLink}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={p.live}
                    className={styles.iconLink}
                    aria-label="Live"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div
                className={styles.accent}
                style={{ background: `var(--${p.color})` }}
              />

              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.description}</p>

              <div className={styles.impact}>
                <span style={{ color: `var(--${p.color})` }}>&#x2192;</span>{" "}
                {p.impact}
              </div>

              <div className={styles.tags}>
                {p?.tags?.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.live}
                className={styles.caseLink}
                target="_blank"
                rel="noreferrer"
              >
                View Case Study <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
