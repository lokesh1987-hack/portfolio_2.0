"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, Mail, MapPin, Phone, CheckCircle } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className={styles.section} ref={ref}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="section-tag">Let&apos;s Talk</p>
        <h2 className="section-title">
          Get In <span className="glow-text">Touch</span>
        </h2>
        <p className={styles.headerSub}>
          I&apos;m actively looking for full-time opportunities. If you have a role that fits, I&apos;d love to hear from you.
        </p>
      </motion.div>

      <motion.div
        className={styles.layout}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        {/* Info panel */}
        <div className={styles.info}>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}>
              <Mail size={18} className={styles.infoIcon} />
            </div>
            <div>
              <p className={styles.infoLabel}>Email</p>
              <a href="mailto:lokeshharode1987@gmail.com" className={styles.infoValue}>lokeshharode1987@gmail.com</a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}>
              <Phone size={18} className={styles.infoIcon} />
            </div>
            <div>
              <p className={styles.infoLabel}>Phone</p>
              <a href="tel:+917020251987" className={styles.infoValue}>+91 70202 51987</a>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIconWrap}>
              <MapPin size={18} className={styles.infoIcon} />
            </div>
            <div>
              <p className={styles.infoLabel}>Location</p>
              <p className={styles.infoValue}>Pune</p>
            </div>
          </div>

          <div className={styles.availability}>
            <span className={styles.availDot} />
            <span>Available for interviews & roles now</span>
          </div>

          <div className={styles.resumeWrap}>
            <a href="/resume.pdf" download className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className={styles.formWrap}>
          {sent ? (
            <motion.div
              className={styles.success}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle size={40} className={styles.successIcon} />
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
              <button className="btn-ghost" onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}>
                Send Another
              </button>
            </motion.div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>Full Name</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Subject</label>
                <select name="subject" value={form.subject} onChange={handleChange} className={styles.input} required>
                  <option value="">Select a subject</option>
                  <option value="job">Full-time Job Opportunity</option>
                  <option value="freelance">Freelance Project</option>
                  <option value="collab">Collaboration</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Tell me about the role or project..."
                  rows={6}
                  required
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? (
                  <span className={styles.spinner} />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
