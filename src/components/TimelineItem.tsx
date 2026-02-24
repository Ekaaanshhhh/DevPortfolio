import React from 'react'
import { motion } from 'motion/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { cn } from '../lib/utils'

type TimelineSide = 'left' | 'right'

interface TimelineItemProps {
  achievement: string
  index: number
  side: TimelineSide
  isActive: boolean
  onActivate: (index: number) => void
}

const TimelineItem = ({ achievement, index, side, isActive, onActivate }: TimelineItemProps) => {
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-14">
      <div className={cn(side === 'left' ? 'md:col-start-1' : 'md:col-start-2')}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.35 }}
          onViewportEnter={() => onActivate(index)}
        >
          <Card className="relative overflow-hidden border-white/10 bg-slate-950/55">
            <div className="pointer-events-none absolute inset-0 rounded-2xl p-[1px]">
              <div className="h-full w-full rounded-2xl bg-gradient-to-br from-[#a855f7]/35 via-[#06b6d4]/15 to-[#ec4899]/35" />
            </div>
            <CardHeader className="relative z-10">
              <CardDescription className="text-xs uppercase tracking-[0.2em] text-slate-300/65">
                Milestone {index + 1}
              </CardDescription>
              <CardTitle className="text-lg font-medium text-slate-100">{achievement}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10 pt-0">
              <p className="text-sm text-slate-300/80">
                Mission checkpoint secured with measurable academic and engineering impact.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-10 hidden -translate-x-1/2 md:block">
        <motion.span
          className={cn(
            'block h-5 w-5 rounded-full border border-white/20 bg-slate-900',
            isActive &&
              'border-0 bg-gradient-to-br from-[#a855f7] via-[#06b6d4] to-[#ec4899] shadow-[0_0_24px_rgba(168,85,247,0.9)]',
          )}
          animate={isActive ? { scale: [1, 1.12, 1] } : { scale: 1 }}
          transition={{ duration: 1.2, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

export default TimelineItem
