import React from 'react';
import { motion } from 'framer-motion';

const RobotMascot = ({ className = "" }) => {
  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Robot SVG with Neo-Brutalist styling */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-[4px_4px_0px_var(--border)]"
      >
        {/* Head / Main Body */}
        <rect
          x="20"
          y="25"
          width="60"
          height="50"
          rx="0"
          fill="var(--bg)"
          stroke="var(--border)"
          strokeWidth="3"
        />
        
        {/* Inner Screen */}
        <rect
          x="26"
          y="31"
          width="48"
          height="38"
          rx="0"
          fill="var(--black)"
          stroke="var(--border)"
          strokeWidth="3"
        />
        
        {/* Eyes Group (Blinking) */}
        <motion.g
          animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
          transition={{
            duration: 5,
            times: [0, 0.9, 0.95, 1, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
          style={{ originY: "50%" }}
        >
          {/* Left Eye */}
          <rect x="36" y="48" width="6" height="6" fill="var(--white)" />
          {/* Right Eye */}
          <rect x="58" y="48" width="6" height="6" fill="var(--white)" />
        </motion.g>

        {/* Antennas / Details */}
        <path
          d="M30 25 L30 12"
          stroke="var(--border)"
          strokeWidth="3"
        />
        <rect x="26" y="4" width="8" height="8" fill="var(--accent)" stroke="var(--border)" strokeWidth="3" />
        
        <path
          d="M70 25 L70 18"
          stroke="var(--border)"
          strokeWidth="3"
        />
        
        {/* Small detail dots */}
        <rect x="42" y="78" width="4" height="4" fill="var(--border)" />
        <rect x="54" y="78" width="4" height="4" fill="var(--border)" />
      </svg>
    </motion.div>
  );
};

export default RobotMascot;
