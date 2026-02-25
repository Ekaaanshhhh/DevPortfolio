import React from 'react'
import Navbar from './sections/Navbar.jsx'
import Hero from "./sections/Hero.jsx"
import About from './sections/About.jsx'
import AchievementSection from './sections/AchievementSection.jsx'
import ContactSection from './sections/ContactSection.jsx'
import SkillsSection from './sections/SkillsSection.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <SkillsSection/>
      <AchievementSection/>
      <ContactSection/>
      
    </div>
  )
}

export default App