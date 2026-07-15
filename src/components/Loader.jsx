import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 100 steps in 1500ms = 15ms per step
    const intervalTime = 15;
    const increment = 1; 
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setTimeout(() => onComplete(), 200); // 200ms pause at 100%
      }
      setProgress(current);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[var(--bg)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex flex-col items-center gap-8 px-6">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[length:var(--border-w)] border-[var(--border)] shadow-[4px_4px_0px_var(--border)] bg-[var(--bg)] relative">
          <img 
            src="/assets/IMG_7591_Original 3.jpg" 
            alt="Ekansh Satsangi" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-64 md:w-72 flex flex-col gap-2">
          <div className="flex justify-between items-end font-sans text-xs md:text-sm font-medium text-[var(--text2)]">
            <span>Loading...</span>
            <span>{progress}%</span>
          </div>
          
          <div className="w-full h-4 border-[length:var(--border-w)] border-[var(--border)] bg-[var(--white)] shadow-[2px_2px_0px_var(--border)] overflow-hidden">
            <div 
              className="h-full bg-[var(--accent2)] border-r-[length:var(--border-w)] border-[var(--border)]"
              style={{ width: `${progress}%`, transition: "width 15ms linear" }}
            ></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
