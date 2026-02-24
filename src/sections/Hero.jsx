import React, { Suspense } from 'react'
import HeroText from '../components/HeroText'
import ParallaxBackground from '../components/ParallaxBackground.jsx'
import { Canvas } from '@react-three/fiber'
import Astronaut from '../components/Astronaut.jsx'
import { Float,  OrbitControls } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
    const isMobile = useMediaQuery({maxWidth:853});
  return (
    <section 
    className='flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden text-3xl text-white'>
        <HeroText/>
        <ParallaxBackground/>
        <figure className='absolute inset-0'
        style={{width:"100vw",height:"100vh"}}
        >
            <Canvas camera={{position:[0,1,3]}}>
                <Float> 
                <Astronaut scale={isMobile && 0.23} position={isMobile && [0,-1.5,0]}/>
                </Float>
            </Canvas>
        </figure>
    </section>
  )
}

export default Hero