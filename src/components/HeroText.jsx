import React from 'react'
import { FlipWords } from './FlipWords.jsx'
import { motion } from 'motion/react'

const HeroText = () => {
  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text '>
    {/* Desktop View */}
     <motion.div 
     className='flex-col hidden md:flex c-space '>
        <motion.div 
        initial={{opacity:0 , x:-50}}
        animate={{opacity:1 , x:0}}
        transition = {{duration:1}}
        className='text-4xl font-medium '>Hi I'm Ekansh</motion.div>
        <motion.div className='flex flex-col items-start'>
            <motion.div
            initial={{opacity:0 , x:-50}}
            animate={{opacity:1 , x:0}}
            transition = {{duration:1.2}} 
            className='text-5xl font-medium text-neutral-300'>A Developer Dedicated to Crafting</motion.div>
            <motion.div 
            initial={{opacity:0 , x:-50}}
            animate={{opacity:1 , x:0}}
            transition = {{duration:1.3}} 
            className='font-black text-white text-8xl'>
                <FlipWords words = {["Secure","Mordern","Scalable"]}/>
            </motion.div>
            <motion.div 
            initial={{opacity:0 , x:-50}}
            animate={{opacity:1 , x:0}}
            transition = {{duration:1.4}} 
            className='text-4xl font-medium text-neutral-300'>Web Solutions</motion.div>
        </motion.div>
    </motion.div>  
    {/* Mobile View */}
    <div className="flex flex-col space-y-6 md:hidden ">
        <p className='text-4xl font-medium'>Hi I'm Ekansh</p>
        <div>
            <p className='text-5xl font-black text-neutral-300 '>Building</p>
            <div>
                <FlipWords className='font-bold text-7xl text-white'
                words = {["Secure","Modern","Scalable"]}/>
            </div>
            <p className='text-4xl font-black text-neutral-300'>Web Solutions</p>
        </div>
    </div>
    </div>
  )
}

export default HeroText