import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

function Navigation() {
  const linkStyle = {
    fontFamily: "var(--sans)",
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--text2)",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  return (
    <ul className="flex flex-col sm:flex-row gap-8 sm:gap-10">
      <li>
        <a href="#about" style={linkStyle} onMouseEnter={(e) => e.target.style.color = "var(--gold)"} onMouseLeave={(e) => e.target.style.color = "var(--text2)"}>About</a>
      </li>
      <li>
        <a href="#experience" style={linkStyle} onMouseEnter={(e) => e.target.style.color = "var(--gold)"} onMouseLeave={(e) => e.target.style.color = "var(--text2)"}>Experience</a>
      </li>
      <li>
        <a href="#work" style={linkStyle} onMouseEnter={(e) => e.target.style.color = "var(--gold)"} onMouseLeave={(e) => e.target.style.color = "var(--text2)"}>Work</a>
      </li>
      <li>
        <a href="#contact" style={linkStyle} onMouseEnter={(e) => e.target.style.color = "var(--gold)"} onMouseLeave={(e) => e.target.style.color = "var(--text2)"}>Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainerStyle = {
    background: scrolled ? "rgba(9, 9, 11, 0.9)" : "transparent",
    backdropFilter: scrolled ? "blur(10px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    transition: "all 0.3s ease"
  };

  const iconStyle = {
    color: "var(--text3)",
    transition: "color 0.3s ease",
    cursor: "pointer"
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full" style={navContainerStyle}>
      <div className="container" style={{ padding: "0 40px", maxWidth: "1600px", margin: "0 auto" }}>
        <div className="flex items-center justify-between py-5">
          
          {/* Logo */}
          <a
            href="/"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "24px",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--white)",
              textDecoration: "none"
            }}
          >
            Ekansh Satsangi.
          </a>

          {/* Desktop Nav + Icons */}
          <div className="hidden sm:flex items-center gap-12">
            <nav>
              <Navigation />
            </nav>

            <div className="flex items-center gap-5">
              <a href="https://github.com/Ekaaanshhhh" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text3)"}>
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/ekansh-satsangi-154b40350/" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text3)"}>
                <FaLinkedin size={18} />
              </a>
              <a href="https://www.instagram.com/ekaa_nshhhh/" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text3)"}>
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex items-center justify-center"
            style={{ color: "var(--text2)", border: "none", background: "transparent" }}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden overflow-hidden"
            style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
          >
            <div className="py-8 px-8 flex flex-col items-center gap-8">
              <nav>
                <Navigation />
              </nav>

              <div className="flex gap-8 mt-2">
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