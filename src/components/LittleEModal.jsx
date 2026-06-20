import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, X } from 'lucide-react';
import RobotMascot from './RobotMascot.jsx';
import { API_URL } from '../config/api.js';

const SUGGESTIONS = [
  "Tell me about ReelOps",
  "Explain MediSaar",
  "What technologies does Ekansh know?",
  "Why should I hire Ekansh?",
];

export default function LittleEModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [messages, isThinking, isOpen]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    
    const userMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsThinking(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: text }),
      });
      const data = await res.json();
      
      let aiContent = data.answer || "I'm sorry, I couldn't process that.";
      let sources = data.sources || [];
      
      setMessages((prev) => [...prev, { role: "assistant", content: aiContent, sources }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "assistant", content: "Oops, something went wrong connecting to my brain. Is the backend running?" }]);
    } finally {
      setIsThinking(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12">
      {/* Glassmorphic Backdrop overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/40 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Neo-Brutalist Chat Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-[92%] sm:w-[95%] max-w-4xl h-full max-h-[90vh] md:max-h-[85vh] bg-[var(--bg)] border-[length:var(--border-w)] border-[var(--border)] shadow-[var(--shadow-lg)] flex flex-col font-sans overflow-hidden mx-auto"
      >
        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b-[length:var(--border-w)] border-[var(--border)] bg-[var(--bg2)]">
          <div className="flex items-center gap-3 font-mono font-bold uppercase tracking-wider text-[var(--text)] text-[14px]">
            LITTLE-E <span className="flex h-3 w-3 bg-green-500 border-2 border-black"></span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 border-2 border-transparent hover:border-[var(--border)] transition-colors text-[var(--text)] bg-[var(--bg)] shadow-[var(--shadow-sm)]"
          >
            <X size={20} strokeWidth={3} />
          </button>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar bg-[var(--bg)]">
          {messages.length === 0 ? (
            <motion.div 
              className="flex flex-col items-center justify-center h-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-24 h-24 md:w-28 md:h-28 mb-6">
                <RobotMascot />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-[var(--text)]">Hi, I'm LittleE</h1>
              <p className="text-[var(--text2)] text-base md:text-lg mb-10 max-w-xl border-l-[length:var(--border-w)] border-[var(--accent)] pl-4 bg-[var(--bg2)] py-3 px-4 shadow-[var(--shadow-sm)] text-left font-sans">
                Ekansh's personal AI assistant. <br/><br/> I can tell you about his projects, experience, technical skills, achievements, and software engineering journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => handleSend(s)}
                    className="text-left px-5 py-4 bg-[var(--bg2)] border-[length:var(--border-w)] border-[var(--border)] shadow-[var(--shadow-sm)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_var(--accent2)] transition-all font-mono font-bold text-[13px] text-[var(--text)]"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-6">
              <AnimatePresence>
                {messages.map((m, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex w-full ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {m.role === "assistant" && (
                      <div className="hidden sm:flex w-10 h-10 border-[length:var(--border-w)] border-[var(--border)] bg-[var(--bg2)] items-center justify-center mr-3 shrink-0 shadow-[var(--shadow-sm)]">
                        <RobotMascot className="scale-[0.6]" />
                      </div>
                    )}
                    <div 
                      className={`max-w-[90%] md:max-w-[75%] px-6 py-4 text-[16px] border-[length:var(--border-w)] border-[var(--border)] text-left ${
                        m.role === "user" 
                          ? "bg-[var(--accent2)] text-[#1a1a1a] shadow-[var(--shadow-sm)]" 
                          : "bg-[var(--bg2)] text-[var(--text)] shadow-[var(--shadow-sm)]"
                      }`}
                    >
                      <p className="whitespace-pre-wrap font-sans leading-relaxed font-medium break-words">{m.content}</p>
                      {m.sources && m.sources.length > 0 && (
                        <div className="mt-4 pt-4 border-t-[length:var(--border-w)] border-[var(--border)] flex flex-col gap-2">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[var(--text2)]">Sources</span>
                          <div className="flex flex-wrap gap-2">
                            {m.sources.map((src, i) => (
                              <span key={i} className="text-[12px] font-mono font-bold px-2 py-1 bg-[var(--bg)] border-2 border-[var(--border)] text-[var(--text)]">
                                {src}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
                {isThinking && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex w-full justify-start items-center"
                  >
                    <div className="hidden sm:flex w-10 h-10 border-[length:var(--border-w)] border-[var(--border)] bg-[var(--bg2)] items-center justify-center mr-3 shrink-0 shadow-[var(--shadow-sm)]">
                      <RobotMascot className="scale-[0.6]" />
                    </div>
                    <div className="bg-[var(--bg2)] border-[length:var(--border-w)] border-[var(--border)] shadow-[var(--shadow-sm)] px-5 py-4 flex items-center gap-3">
                      <span className="font-mono font-bold text-[12px] md:text-[13px] uppercase text-[var(--text)]">Thinking</span>
                      <div className="flex gap-2 items-center">
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-2 h-2 bg-[var(--border)]" />
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-2 h-2 bg-[var(--border)]" />
                        <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 bg-[var(--border)]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>
          )}
        </main>

        {/* Input Area */}
        <div className="p-3 md:p-6 bg-[var(--bg2)] border-t-[length:var(--border-w)] border-[var(--border)]">
          <form 
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
            className="relative flex items-center"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-[var(--bg)] border-[length:var(--border-w)] border-[var(--border)] shadow-[var(--shadow-sm)] px-5 py-4 md:px-6 md:py-5 font-sans text-[16px] md:text-[18px] text-[var(--text)] focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0px_var(--border)] transition-all placeholder-[var(--text2)]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isThinking}
              className="absolute right-2 md:right-3 p-2.5 md:p-3 bg-[var(--accent)] border-2 border-[var(--border)] text-[#1a1a1a] hover:bg-[var(--accent2)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ArrowUp size={24} strokeWidth={3} />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
