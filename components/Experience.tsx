"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Calendar } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Littardo Emporium",
    location: "Remote",
    period: "Aug 2023 – Present",
    type: "Full-time",
    bullets: [
      "Designed and developed a production-scale Next.js SSR ecommerce platform improving SEO visibility and reducing initial load time by 40%.",
      "Built 20+ reusable React components improving maintainability and reducing feature delivery time by 30%.",
      "Implemented scalable product media storage pipeline using AWS S3 improving catalog asset delivery performance.",
      "Integrated Razorpay payment gateway enabling secure end-to-end checkout workflow.",
      "Achieved Lighthouse scores above 90 across Performance, SEO and Best Practices.",
      "Improved Core Web Vitals and LCP performance by 35–40% using optimization strategies.",
    ],
    stack: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "AWS S3",
      "Tailwind CSS",
      "SCSS",
      "Razorpay API",
    ],
  },

  {
    id: 2,
    role: "Software Development Engineer (SDE-1)",
    company: "UniScholars",
    location: "Mumbai (Remote)",
    period: "Jan 2023 – Jul 2023",
    type: "Full-time",
    bullets: [
      "Developed scalable React and Next.js UI modules supporting 60K+ active users across study-abroad platform ecosystem.",
      "Delivered performance-optimized counselling workflows improving responsiveness and UX.",
      "Built cross-platform UI modules for UniAcco accommodation platform serving 1M+ global users.",
      "Designed and integrated backend APIs using Python improving data processing efficiency.",
    ],
    stack: [
      "React.js",
      "Next.js",
      "Redux",
      "TypeScript",
      "Python",
      "REST APIs",
    ],
  },

  {
    id: 3,
    role: "Frontend Developer",
    company: "SplendorNet Technologies Pvt. Ltd.",
    location: "Pune",
    period: "Dec 2021 – Dec 2022",
    type: "Full-time",
    bullets: [
      "Delivered enterprise-grade UI modules for Coca-Cola CONA collaboration platform used across North American bottling partners.",
      "Developed infrastructure monitoring dashboards for Fluid Robotics platform using React, Redux, Node.js and MongoDB.",
      "Implemented advanced data visualization dashboards using Syncfusion UI components.",
      "Improved maintainability through modular component-based architecture and scalable REST integrations.",
    ],
    stack: [
      "React.js",
      "Redux",
      "Node.js",
      "MongoDB",
      "Syncfusion",
      "REST APIs",
    ],
  },
  {
    role: "Frontend Web Developer Intern",
    company: "Digikull",
    period: "Jun 2021 – Oct 2021",
    location: "Pune, Maharashtra, India",
    description:
      "Contributed to responsive web application development by building reusable UI components, improving cross-browser compatibility, and supporting frontend feature implementation in a collaborative Agile environment.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Web Design",
      "Bootstrap",
      "Git",
      "UI Development",
    ],
    impact:
      "Delivered responsive UI modules and improved cross-device compatibility",
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const exp = experiences[active];

  return (
    <section id="experience" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-tag">Career</p>
        <h2 className="section-title">
          Work <span className="glow-text">Experience</span>
        </h2>
      </motion.div>

      <motion.div
        className={styles.layout}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        {/* Tab list */}
        <div className={styles.tabs}>
          {experiences.map((e, i) => (
            <button
              key={e.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabCompany}>{e.company}</span>
              <span className={styles.tabPeriod}>{e.period}</span>
              {active === i && <div className={styles.tabIndicator} />}
            </button>
          ))}
          <div className={styles.tabsLine} />
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.content}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.roleHeader}>
              <h3 className={styles.role}>{exp.role}</h3>
              <span className={styles.typeTag}>{exp.type}</span>
            </div>

            <div className={styles.meta}>
              <span className={styles.metaItem}>
                <MapPin size={13} /> {exp.location}
              </span>
              <span className={styles.metaItem}>
                <Calendar size={13} /> {exp.period}
              </span>
            </div>

            <ul className={styles.bullets}>
              {exp?.bullets?.map((b, i) => (
                <motion.li
                  key={i}
                  className={styles.bullet}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <span className={styles.bulletArrow}>&#x25B8;</span>
                  {b}
                </motion.li>
              ))}
            </ul>

            <div className={styles.stack}>
              {exp?.stack?.map((s) => (
                <span key={s} className={styles.stackTag}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
