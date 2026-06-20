import React, { useState } from 'react'
import { ThemeProvider } from './ThemeContext.jsx'
import Navbar from './sections/Navbar.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import AchievementSection from './sections/AchievementSection.jsx'
import CertificationsSection from './sections/CertificationsSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import WorkSection from './sections/WorkSection.jsx'
import { Toaster } from 'react-hot-toast'
import EkoModal from './components/EkoModal.jsx'

const App = () => {
  const [isEkoOpen, setIsEkoOpen] = useState(false)

  return (
    <ThemeProvider>
      <div>
        <Toaster/>
        <Navbar/>
        <About onOpenEko={() => setIsEkoOpen(true)} />
        <Experience/>
        <SkillsSection/>
        <AchievementSection/>
        <CertificationsSection/>
        <WorkSection/>
        <ContactSection/>
        {/* Floating Action Button for Eko */}
        <button
          onClick={() => setIsEkoOpen(true)}
          className="hidden md:flex fixed bottom-6 right-6 z-[60] items-center gap-2 px-5 py-3 bg-[var(--accent2)] border-2 border-[var(--border)] text-[#1a1a1a] shadow-[var(--shadow)] font-mono font-bold uppercase tracking-wider hover:-translate-y-1 hover:shadow-[6px_6px_0px_var(--border)] transition-all"
        >
          <span className="animate-pulse">✨</span> Meet Eko
        </button>
        <EkoModal isOpen={isEkoOpen} onClose={() => setIsEkoOpen(false)} />
      </div>
    </ThemeProvider>
  )
}

export default App