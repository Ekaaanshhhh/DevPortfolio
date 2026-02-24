import React from 'react'
import { motion } from 'motion/react'

const particles = Array.from({ length: 18 }).map((_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 23) % 100}%`,
  size: 2 + (index % 3),
  duration: 6 + (index % 4) * 1.2,
  delay: (index % 5) * 0.35,
}))

const ParticleField = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/35 blur-[1px]"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.65, 0.2] }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

export default ParticleField
