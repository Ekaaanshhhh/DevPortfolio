import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx'
import AchievementSection from './sections/AchievementSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'
import WorkSection from './sections/WorkSection.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <Toaster/>
      <Navbar/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <AchievementSection/>
      <WorkSection/>
      <ContactSection/>
      
    </div>
  )
}

export default App