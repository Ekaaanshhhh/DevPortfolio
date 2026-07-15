import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

function Navigation({ onLinkClick }) {
  const linkStyle = {
    fontFamily: "var(--mono)",
    fontSize: "13px",
    fontWeight: 700,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    color: "var(--text)",
    textDecoration: "none",
    padding: "8px 14px",
    border: "2px solid transparent",
    transition: "all 0.15s ease",
  };

  const handleHover = (e) => {
    e.target.style.background = "var(--accent2)";
    e.target.style.borderColor = "var(--border)";
    e.target.style.boxShadow = "3px 3px 0px var(--border)";
    e.target.style.color = "var(--black)";
  };

  const handleLeave = (e) => {
    e.target.style.background = "transparent";
    e.target.style.borderColor = "transparent";
    e.target.style.boxShadow = "none";
    e.target.style.color = "var(--text)";
  };

  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "inherit", gap: "6px", alignItems: "center" }}>
      <li>
        <a href="#about" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={onLinkClick}>About</a>
      </li>
      <li>
        <a href="#experience" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={onLinkClick}>Experience</a>
      </li>
      <li>
        <a href="#work" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={onLinkClick}>Work</a>
      </li>
      <li>
        <a href="#certifications" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={onLinkClick}>Certs</a>
      </li>
      <li>
        <a href="#contact" style={linkStyle} onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={onLinkClick}>Contact</a>
      </li>
    </ul>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navContainerStyle = {
    background: scrolled ? "var(--surface)" : "var(--bg)",
    borderBottom: scrolled ? "3px solid var(--border)" : "3px solid transparent",
    transition: "var(--theme-transition)",
  };

  const navLinkStyle = {
    fontFamily: "var(--sans)",
    fontSize: "13px",
    fontWeight: 700,
    textTransform: "uppercase",
    color: "var(--text)",
    textDecoration: "none",
    padding: "8px 12px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  };

  const handleHover = (e) => {
    e.currentTarget.style.background = "var(--border)";
    e.currentTarget.style.color = "var(--bg)";
  };

  const handleLeave = (e) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "var(--text)";
  };

  const Navigation = () => (
    <>
      {["About", "Experience", "Work", "Certs", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item === "Certs" ? "certifications" : item.toLowerCase()}`}
          style={navLinkStyle}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={() => setIsOpen(false)}
        >
          {item}
        </a>
      ))}
    </>
  );

  const iconStyle = {
    color: "var(--text)",
    padding: "6px",
    border: "3px solid transparent",
    borderRadius: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const handleIconHover = (e) => {
    e.currentTarget.style.background = "var(--accent)";
    e.currentTarget.style.color = "var(--white)";
    e.currentTarget.style.borderColor = "var(--border)";
    e.currentTarget.style.boxShadow = "3px 3px 0px var(--border)";
  };

  const handleIconLeave = (e) => {
    e.currentTarget.style.background = "transparent";
    e.currentTarget.style.color = "var(--text)";
    e.currentTarget.style.borderColor = "transparent";
    e.currentTarget.style.boxShadow = "none";
  };

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, width: "100%", ...navContainerStyle }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
          
          {/* Logo */}
          <a
            href="/"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "22px",
              fontWeight: 700,
              color: "var(--black)",
              textDecoration: "none",
              background: "var(--accent2)",
              padding: "6px 16px",
              border: "3px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
              transition: "all 0.3s ease",
            }}
          >
            ES.
          </a>

          {/* Desktop Nav + Icons */}
          <div className="hidden sm:flex" style={{ alignItems: "center", gap: "24px" }}>
            <nav style={{ display: "flex", flexDirection: "row" }}>
              <Navigation />
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <a href="https://github.com/Ekaaanshhhh" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}>
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ekansh-satsangi-154b40350/" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}>
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/ekaa_nshhhh/" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}>
                <FaInstagram size={18} />
              </a>
              <button 
                onClick={toggleTheme}
                style={{
                  ...iconStyle, 
                  background: "var(--accent)", 
                  borderColor: "var(--border)",
                  color: "var(--white)",
                  boxShadow: "3px 3px 0px var(--border)",
                  cursor: "pointer",
                  marginLeft: "12px"
                }}
                aria-label="Toggle theme"
              >
                {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Actions: Theme Toggle + Hamburger */}
          <div className="flex sm:hidden" style={{ alignItems: "center", gap: "12px" }}>
            <button 
              onClick={toggleTheme}
              style={{
                color: "var(--white)", 
                border: "3px solid var(--border)", 
                background: "var(--accent)",
                padding: "8px",
                boxShadow: "var(--shadow-sm)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{ 
                color: isOpen ? "var(--white)" : "var(--text)", 
                border: "3px solid var(--border)", 
                background: isOpen ? "var(--accent)" : "var(--surface)",
                padding: "8px",
                boxShadow: "var(--shadow-sm)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden"
            style={{ 
              background: "var(--bg2)", 
              borderBottom: "3px solid var(--border)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "24px 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "24px" }}>
              <nav style={{ display: "flex", flexDirection: "column" }}>
                <Navigation onLinkClick={() => setIsOpen(false)} />
              </nav>

              <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                <a href="https://github.com/Ekaaanshhhh" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <FaGithub size={20} />
                </a>
                <a href="https://www.linkedin.com/in/ekansh-satsangi-154b40350/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <FaLinkedin size={20} />
                </a>
                <a href="https://www.instagram.com/ekaa_nshhhh/" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;