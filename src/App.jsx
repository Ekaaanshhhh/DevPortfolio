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
import LittleEModal from './components/LittleEModal.jsx'

const App = () => {
  const [isLittleEOpen, setIsLittleEOpen] = useState(false)

  return (
    <ThemeProvider>
      <div>
        <Toaster/>
        <Navbar/>
        <About onOpenLittleE={() => setIsLittleEOpen(true)} />
        <Experience/>
        <SkillsSection/>
        <AchievementSection/>
        <CertificationsSection/>
        <WorkSection/>
        <ContactSection/>
        <LittleEModal isOpen={isLittleEOpen} onClose={() => setIsLittleEOpen(false)} />
      </div>
    </ThemeProvider>
  )
}

export default App