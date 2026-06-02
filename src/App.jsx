import React from 'react'
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

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Toaster/>
        <Navbar/>
        <About/>
        <Experience/>
        <SkillsSection/>
        <AchievementSection/>
        <CertificationsSection/>
        <WorkSection/>
        <ContactSection/>
      </div>
    </ThemeProvider>
  )
}

export default App