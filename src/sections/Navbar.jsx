import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

function Navigation() {
  return (
    <ul className="nav-ul flex gap-6">
      <li className="nav-li">
        <a href="#home" className="nav-link">Home</a>
      </li>
      <li className="nav-li">
        <a href="#about" className="nav-link">About</a>
      </li>
      <li className="nav-li">
        <a href="#work" className="nav-link">Work</a>
      </li>
      <li className="nav-li">
        <a href="#contact" className="nav-link">Contact</a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <a
            href="/"
            className="text-xl font-bold text-neutral-400 hover:text-white transition"
          >
            Ekansh
          </a>

          {/* Desktop Nav + Icons */}
          <div className="hidden sm:flex items-center gap-10">

            <nav>
              <Navigation />
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-neutral-400">

              <a
                href="https://github.com/Ekaaanshhhh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition transform hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/ekansh-satsangi-154b40350/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition transform hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/ekaa_nshhhh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition transform hover:-translate-y-1 hover:scale-110 duration-300"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden text-neutral-400 hover:text-white"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="sm:hidden bg-[#0b1120]/95 backdrop-blur-xl border-t border-white/10"
        >
          <nav className="py-6 flex flex-col items-center gap-6">
            <Navigation />

            {/* Mobile Social Icons */}
            <div className="flex gap-6 text-neutral-400 mt-4">

              <a
                href="https://github.com/Ekaaanshhhh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/ekansh-satsangi-154b40350/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="https://www.instagram.com/ekaa_nshhhh/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram size={22} />
              </a>

            </div>
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;