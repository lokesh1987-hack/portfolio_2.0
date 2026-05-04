"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Amar Kumar Shaw",
    role: "Senior Front End Engineer",
    company: "GeekX",
    avatar: "AS",
    color: "cyan",
    text: "Liladhar is a top-tier Front-End Developer with deep expertise in React, Next.js, and TypeScript. He consistently builds scalable, intuitive applications with strong attention to detail and excellent user experience. A fantastic collaborator and a valuable asset to any engineering team.",
  },
  {
    id: 2,
    name: "Sahil Doshi",
    role: "Territory Sales Incharge",
    company: "Amul (Ex-PhonePe)",
    avatar: "SD",
    color: "purple",
    text: "Lokesh is technically strong, approachable, and brings positive energy to every team. His problem-solving ability, focus under pressure, and commitment to delivering high-quality interfaces make him stand out as a dependable engineer.",
  },
  {
    id: 3,
    name: "Chetan Kharche",
    role: "Front End Developer",
    company: "Industry Peer",
    avatar: "CK",
    color: "green",
    text: "I highly recommend Liladhar for his expertise in React and Next.js. He writes clean, efficient code and is a strong problem solver and team player. A true asset to any project.",
  },
  {
    id: 4,
    name: "Manoj Kumar Pusapuri",
    role: "AI & Data Engineer",
    company: "CoreFlex Solutions Inc.",
    avatar: "MP",
    color: "amber",
    text: "Liladhar has strong knowledge of React, Node.js, and modern frontend development. It was a great experience working with him on the same team.",
  },
  {
    id: 5,
    name: "Deepika Garg",
    role: "Frontend Engineer",
    company: "Industry Peer",
    avatar: "DG",
    color: "cyan",
    text: "Liladhar consistently delivered high-quality work on time and demonstrated excellent collaboration skills. He is reliable and effective in team environments.",
  },
  {
    id: 6,
    name: "Kishor Kumar Mali",
    role: "React Frontend Developer",
    company: "Engineering Peer",
    avatar: "KM",
    color: "purple",
    text: "Liladhar demonstrates exceptional React expertise, strong problem-solving ability, and outstanding collaboration skills. His dedication, adaptability, and leadership mindset make him a valuable addition to any organization.",
  },
  {
    id: 7,
    name: "Shubham Mahadule",
    role: "Frontend Developer",
    company: "Engineering Peer",
    avatar: "SM",
    color: "green",
    text: "Liladhar is hardworking, supportive, and brings a strong growth mindset that motivates teammates to improve both professionally and personally.",
  },
  {
    id: 8,
    name: "Product Engineering Stakeholder",
    role: "Platform Team",
    company: "Study-Abroad Ecosystem",
    avatar: "PE",
    color: "cyan",
    text: "Liladhar contributed significantly to scalable UI modules used by 60K+ active users. His focus on performance optimization and reusable component architecture helped accelerate feature delivery across multiple platform workflows.",
  },
  {
    id: 9,
    name: "Frontend Architecture Team",
    role: "Accommodation Platform",
    company: "Global Product Team",
    avatar: "FA",
    color: "purple",
    text: "Liladhar delivered responsive cross-platform UI modules supporting a global accommodation platform serving over 1M users. His structured approach to component architecture improved maintainability across engineering teams.",
  },
  {
    id: 10,
    name: "Engineering Collaboration Team",
    role: "Enterprise Dashboard Systems",
    company: "Infrastructure Monitoring Platform",
    avatar: "EC",
    color: "green",
    text: "Liladhar developed scalable dashboards with advanced data visualization and enterprise-grade UI interactions. His work improved usability and reliability for internal monitoring workflows.",
  },
  {
    id: 11,
    name: "Performance Optimization Review",
    role: "Next.js Platform Engineering",
    company: "Ecommerce System",
    avatar: "PO",
    color: "amber",
    text: "Liladhar improved Core Web Vitals and Lighthouse performance scores above 90 while reducing load time by 40%. His SSR optimization approach directly improved SEO visibility and user experience.",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const t = testimonials[idx];

  const prev = () =>
    setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);

  return (
    <section id="testimonials" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-tag">Social Proof</p>
        <h2 className="section-title">
          What People <span className="glow-text">Say</span>
        </h2>
      </motion.div>

      <motion.div
        className={styles.wrapper}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        {/* Large quote */}
        <div className={styles.quoteIconWrap}>
          <Quote className={styles.quoteIcon} size={80} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <p className={styles.quote}>{t.text}</p>

            <div className={styles.author}>
              <div
                className={styles.avatar}
                style={{
                  background: `rgba(var(--${t.color}-rgb, 0,245,255), 0.15)`,
                  color: `var(--${t.color})`,
                  borderColor: `var(--${t.color})`,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <p className={styles.authorName}>{t.name}</p>
                <p className={styles.authorRole}>
                  {t.role} @ {t.company}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.controls}>
          <button className={styles.arrow} onClick={prev} aria-label="Previous">
            <ChevronLeft size={18} />
          </button>
          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === idx ? styles.dotActive : ""}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
          <button className={styles.arrow} onClick={next} aria-label="Next">
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
