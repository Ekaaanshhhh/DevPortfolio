import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${import.meta.env.VITE_API_URL}/send`, {
        name,
        email,
        message,
      });

      toast.success("Message sent successfully 🚀");

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="section" id="contact" style={{ paddingBottom: "40px" }}>
        <div className="container">
          <motion.div 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.div>
          
          <motion.div 
            className="display" 
            style={{ fontSize: "48px", marginBottom: "56px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Let's Build<br /><em>Together.</em>
          </motion.div>
          
          <div className="contact-layout">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="body-text" style={{ marginBottom: "32px" }}>
                Open to internships, collaborations, and interesting engineering problems. If you have something worth building, let's talk.
              </p>
              <div className="contact-row">
                <span className="contact-key">Email</span>
                <span className="contact-val">ekanshsatsangi@gmail.com</span>
              </div>
              <div className="contact-row">
                <span className="contact-key">Location</span>
                <span className="contact-val">Kanpur, UP, India</span>
              </div>
              <div className="contact-row">
                <span className="contact-key">GitHub</span>
                <span className="contact-val">github.com/Ekaaanshhhh</span>
              </div>
              <div className="contact-row">
                <span className="contact-key">LinkedIn</span>
                <span className="contact-val">in/ekanshsatsangi</span>
              </div>
              <div className="contact-row">
                <span className="contact-key">Phone</span>
                <span className="contact-val">+91-85429 51940</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input 
                    className="form-input" 
                    type="text" 
                    placeholder="Your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    className="form-input" 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    className="form-input" 
                    placeholder="What are you working on?"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      e.target.style.height = 'auto';
                      e.target.style.height = e.target.scrollHeight + 'px';
                    }}
                    style={{ overflow: 'hidden' }}
                  ></textarea>
                </div>
                <button type="submit" className="form-btn" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"} <span style={{ fontStyle: "normal", fontFamily: "var(--sans)", fontSize: "14px" }}>→</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div 
        className="container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="footer-bar">
          <div className="footer-name">Ekansh Satsangi</div>
          <div className="footer-copy">NIT Patna · 2025</div>
        </div>
      </motion.div>
    </>
  );
}