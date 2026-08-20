import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'

interface Step {
  title: string;
  desc: string;
  tag: string;
}

const steps: Step[] = [
  {
    title: "Assessment & Diagnostic Inspection",
    desc: "A thorough evaluation of the stone's condition, identifying the stone type, structural integrity, and depth of damage.",
    tag: "Stage 01"
  },
  {
    title: "Surrounding Area Protection",
    desc: "Masking off walls, baseboards, cabinets, and wood trim to ensure your home remains pristine and protected from any splashes.",
    tag: "Stage 02"
  },
  {
    title: "Mechanical Honing & Grinding",
    desc: "Removing the damaged surface layer using water-fed diamond abrasive pads. Dustless process that flattens and smooths the stone.",
    tag: "Stage 03"
  },
  {
    title: "Polishing & Impregnating Sealer",
    desc: "Achieving the desired finish (matte, satin, or high-gloss) followed by a deep penetrating sealer to prevent future absorption.",
    tag: "Stage 04"
  },
  {
    title: "Post-Service Care Consultation",
    desc: "We leave you with a clean floor and a customized maintenance plan, educating you on proper pH-neutral cleaning routines.",
    tag: "Stage 05"
  }
]

// Vertical percentages for the 5 milestones on desktop (spread safely between 10% and 90%)
const NODE_POSITIONS = [10, 30, 50, 70, 90]

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  })

  // Height of the animated timeline line (0% to 100%)
  const lineHeight = useTransform(smoothProgress, [0, 1], ["10%", "90%"])

  return (
    <section id="process" ref={containerRef} className="relative h-[400vh] bg-[#F8F9FA] text-[#1A1D20]">
      {/* Sticky Fullscreen Arena */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 py-6 md:px-12 md:py-8 lg:px-16">
        
        {/* Header (with solid z-index and clear background separation) */}
        <div className="relative z-30 flex flex-col items-start justify-between border-b border-[#1A1D20]/15 pb-4 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-[0.9] tracking-tight md:text-4xl lg:text-5xl">
              Restoration <span className="text-[#0F172A]/40">Process</span>
            </h2>
            <p className="mt-1 font-mono2 text-[11px] uppercase tracking-[0.15em] text-[#1A1D20]/70 md:text-xs">
              Dustless • Methodical • Progressive
            </p>
          </div>
          <div className="mt-2 max-w-sm text-[11px] leading-relaxed text-[#1A1D20]/70 md:mt-0 md:text-right md:text-xs">
            Scroll to follow each stage. As you advance, each phase glides down to meet the next milestone in sequence.
          </div>
        </div>

        {/* Central Stage (Desktop View: Alternating Central Timeline) */}
        <div className="relative z-20 my-auto hidden h-[66vh] w-full max-w-5xl items-center justify-center self-center md:flex">
          
          {/* Background Static Track */}
          <div className="absolute left-1/2 top-[10%] bottom-[10%] w-[2px] -translate-x-1/2 bg-[#1A1D20]/10" />
          
          {/* Active Animated Progress Track */}
          <motion.div 
            className="absolute left-1/2 top-[10%] w-[2px] origin-top -translate-x-1/2 bg-[#0F172A]"
            style={{ height: lineHeight }}
          />

          {/* Fixed Milestone Hubs along the center track */}
          {NODE_POSITIONS.map((pos, idx) => (
            <TimelineNode
              key={idx}
              index={idx}
              positionPercent={pos}
              progress={smoothProgress}
            />
          ))}

          {/* Meeting Bridge Connectors (Horizontal line connecting the two items when they meet) */}
          <MeetingBridge progress={smoothProgress} />

          {/* Alternating Moving Stage Cards */}
          <div className="relative h-full w-full">
            {steps.map((step, idx) => (
              <DesktopStageCard
                key={idx}
                step={step}
                index={idx}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>

        {/* Mobile View: Clean, non-overlapping step showcase */}
        <div className="relative z-20 my-auto flex h-[64vh] w-full flex-col justify-center md:hidden">
          <MobileProcessStage progress={smoothProgress} />
        </div>

        {/* Footer Progress Tracker */}
        <div className="relative z-30 flex items-center justify-between border-t border-[#1A1D20]/15 pt-3 font-mono2 text-[10px] uppercase tracking-widest text-[#1A1D20]/60 md:text-xs">
          <span>01 / Diagnostic</span>
          <ProgressStepTracker progress={smoothProgress} />
          <span>05 / Handover</span>
        </div>

      </div>
    </section>
  )
}

/** Milestone Node on Central Line */
function TimelineNode({
  index,
  positionPercent,
  progress
}: {
  index: number;
  positionPercent: number;
  progress: MotionValue<number>;
}) {
  const threshold = index * 0.25

  const isActive = useTransform(progress, (p) => {
    return p >= Math.max(0, threshold - 0.05)
  })

  const scale = useTransform(
    progress,
    [Math.max(0, threshold - 0.05), threshold, Math.min(1, threshold + 0.05)],
    [0.9, 1.3, 1]
  )

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${positionPercent}%` }}
    >
      <motion.div
        style={{ scale }}
        className="relative flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#F8F9FA] bg-[#F8F9FA] shadow-sm"
      >
        <motion.div
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: useTransform(isActive, (active) => active ? '#0F172A' : '#CBD5E1')
          }}
        />
      </motion.div>
    </div>
  )
}

/** Horizontal connecting line when two stages meet at the same level */
function MeetingBridge({ progress }: { progress: MotionValue<number> }) {
  // Check which phase we are in (0-1, 1-2, 2-3, 3-4)
  const currentMeetLevel = useTransform(progress, (p) => {
    if (p >= 0.20 && p <= 0.28) return NODE_POSITIONS[1] // Met at Stage 2 level
    if (p >= 0.45 && p <= 0.53) return NODE_POSITIONS[2] // Met at Stage 3 level
    if (p >= 0.70 && p <= 0.78) return NODE_POSITIONS[3] // Met at Stage 4 level
    if (p >= 0.95 && p <= 1.00) return NODE_POSITIONS[4] // Met at Stage 5 level
    return null
  })

  const opacity = useTransform(progress, (p) => {
    const isMeeting1 = Math.abs(p - 0.24) < 0.05
    const isMeeting2 = Math.abs(p - 0.49) < 0.05
    const isMeeting3 = Math.abs(p - 0.74) < 0.05
    const isMeeting4 = p >= 0.94
    return (isMeeting1 || isMeeting2 || isMeeting3 || isMeeting4) ? 1 : 0
  })

  return (
    <motion.div
      style={{
        opacity,
        top: useTransform(currentMeetLevel, (lvl) => lvl !== null ? `${lvl}%` : '-100px'),
      }}
      className="pointer-events-none absolute left-1/2 h-[1px] w-[50%] -translate-x-1/2 -translate-y-1/2 border-t border-dashed border-[#0F172A]/40 transition-opacity duration-300"
    />
  )
}

/**
 * Desktop Stage Card:
 * Alternates Left / Right across the central line.
 * During its active phase, it smoothly travels down along the track to meet the next node,
 * then returns to its clean home position once the handover is complete to eliminate overlap.
 */
function DesktopStageCard({
  step,
  index,
  progress
}: {
  step: Step;
  index: number;
  progress: MotionValue<number>;
}) {
  const isLeft = index % 2 === 0
  const homePos = NODE_POSITIONS[index]
  const targetMeetPos = index < 4 ? NODE_POSITIONS[index + 1] : NODE_POSITIONS[4]

  const phaseStart = index * 0.25
  const phaseEnd = (index + 1) * 0.25

  // Dynamically calculate vertical position:
  // 1. Before active phase: rests safely at Home position
  // 2. During active phase: glides smoothly from Home position down to Target Meeting position
  // 3. After active phase: rests safely at Home position (completed) so no cards ever collide!
  const topPos = useTransform(progress, (p) => {
    if (index === 4) {
      // Last step stays at its node (90%)
      return `${homePos}%`
    }

    if (p < phaseStart) {
      return `${homePos}%`
    } else if (p <= phaseEnd) {
      // Traveling down to meet the next node
      const phaseProgress = (p - phaseStart) / 0.25
      const current = homePos + phaseProgress * (targetMeetPos - homePos)
      return `${current}%`
    } else {
      // Phase passed: settles safely at Home position as completed milestone
      return `${homePos}%`
    }
  })

  // Determine visual prominence
  const isCurrentlyMoving = useTransform(progress, (p) => {
    return p >= phaseStart && p <= phaseEnd
  })

  const isCompleted = useTransform(progress, (p) => {
    return p > phaseEnd
  })

  const isNextTarget = useTransform(progress, (p) => {
    if (index === 0) return false
    const prevPhaseStart = (index - 1) * 0.25
    const prevPhaseEnd = index * 0.25
    return p >= prevPhaseStart && p <= prevPhaseEnd
  })

  // Dynamic opacity and styling
  const opacity = useTransform(progress, (p) => {
    const isMoving = p >= phaseStart && p <= phaseEnd
    const isTarget = index > 0 && p >= (index - 1) * 0.25 && p <= index * 0.25
    const isDone = p > phaseEnd

    if (isMoving || isTarget) return 1
    if (isDone) return 0.75
    return 0.35 // Future step preview
  })

  const scale = useTransform(progress, (p) => {
    const isMoving = p >= phaseStart && p <= phaseEnd
    const isTarget = index > 0 && p >= (index - 1) * 0.25 && p <= index * 0.25
    if (isMoving || isTarget) return 1.02
    return 0.96
  })

  return (
    <motion.div
      style={{
        top: topPos,
        opacity,
        translateY: "-50%"
      }}
      className={`absolute flex w-full items-center ${
        isLeft 
          ? 'left-0 justify-start pr-[calc(50%+28px)]' 
          : 'left-0 pl-[calc(50%+28px)] justify-start'
      }`}
    >
      <motion.div 
        style={{ scale }}
        className={`w-full max-w-[350px] rounded-lg border bg-white/95 p-4 shadow-sm transition-all duration-300 lg:max-w-[400px] lg:p-5 ${
          isLeft ? 'text-right' : 'text-left'
        }`}
      >
        <div className={`flex items-center gap-2.5 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
          <motion.span
            className="inline-flex items-center rounded px-2 py-0.5 font-mono2 text-[10px] font-bold text-white uppercase tracking-wider"
            style={{
              backgroundColor: useTransform(isCurrentlyMoving, (m) => m ? '#0F172A' : '#475569')
            }}
          >
            0{index + 1}
          </motion.span>
          
          <span className="font-mono2 text-[10px] uppercase tracking-widest text-[#1A1D20]/50">
            {step.tag}
          </span>

          <motion.span 
            className="font-mono2 text-[9px] font-semibold uppercase text-emerald-600"
            style={{
              display: useTransform(isCompleted, (c) => c ? 'inline' : 'none')
            }}
          >
            ✓ Done
          </motion.span>

          <motion.span 
            className="font-mono2 text-[9px] font-semibold uppercase text-blue-600 animate-pulse"
            style={{
              display: useTransform(isNextTarget, (t) => t ? 'inline' : 'none')
            }}
          >
            • Meeting Point
          </motion.span>
        </div>

        <h3 className="mt-2 font-display text-sm font-bold uppercase tracking-tight text-[#1A1D20] lg:text-base">
          {step.title}
        </h3>

        <p className="mt-1.5 text-xs leading-relaxed text-[#1A1D20]/75">
          {step.desc}
        </p>
      </motion.div>
    </motion.div>
  )
}

/**
 * Mobile Process Stage:
 * Displays clear, sequential active step cards with smooth transitions,
 * completely avoiding crowded multi-card vertical collisions on smaller screens.
 */
function MobileProcessStage({ progress }: { progress: MotionValue<number> }) {
  const activeIndex = useTransform<number, number>(progress, (p) => {
    if (p < 0.25) return 0
    if (p < 0.50) return 1
    if (p < 0.75) return 2
    if (p < 0.95) return 3
    return 4
  })

  return (
    <div className="relative flex flex-col items-center justify-center px-2">
      {/* Visual Timeline Path Indicator */}
      <div className="mb-6 flex w-full items-center justify-between px-3">
        {steps.map((_, i) => (
          <MobileStepIndicator key={i} index={i} activeIndex={activeIndex} />
        ))}
      </div>

      {/* Dynamic Stage Display */}
      <div className="relative h-[250px] w-full">
        {steps.map((step, idx) => (
          <MobileStageCardItem
            key={idx}
            step={step}
            index={idx}
            activeIndex={activeIndex}
          />
        ))}
      </div>
    </div>
  )
}

function MobileStepIndicator({ index, activeIndex }: { index: number; activeIndex: MotionValue<number> }) {
  const isCurrent = useTransform(activeIndex, (a) => a === index)
  const isPassed = useTransform(activeIndex, (a) => a >= index)

  return (
    <div className="flex items-center gap-1">
      <motion.div
        className="flex h-7 w-7 items-center justify-center rounded-full font-mono2 text-[10px] font-bold transition-all duration-300"
        style={{
          backgroundColor: useTransform(isCurrent, (c) => c ? '#0F172A' : '#F1F5F9'),
          color: useTransform(isCurrent, (c) => c ? '#FFFFFF' : '#64748B'),
          borderColor: useTransform(isPassed, (p) => p ? '#0F172A' : '#CBD5E1'),
          borderWidth: '1px'
        }}
      >
        0{index + 1}
      </motion.div>
    </div>
  )
}

function MobileStageCardItem({
  step,
  index,
  activeIndex
}: {
  step: Step;
  index: number;
  activeIndex: MotionValue<number>;
}) {
  const isVisible = useTransform(activeIndex, (a) => a === index)

  return (
    <motion.div
      style={{
        opacity: useTransform(isVisible, (v) => v ? 1 : 0),
        y: useTransform(isVisible, (v) => v ? 0 : 15),
        pointerEvents: useTransform(isVisible, (v) => v ? 'auto' : 'none')
      }}
      className="absolute inset-0 flex flex-col justify-center rounded-xl border border-[#1A1D20]/15 bg-white p-5 shadow-md"
    >
      <div className="flex items-center justify-between">
        <span className="inline-block rounded bg-[#0F172A] px-2.5 py-0.5 font-mono2 text-[11px] font-bold text-white uppercase">
          0{index + 1}
        </span>
        <span className="font-mono2 text-[10px] uppercase tracking-widest text-[#1A1D20]/50">
          {step.tag}
        </span>
      </div>

      <h3 className="mt-3 font-display text-base font-bold uppercase tracking-tight text-[#1A1D20]">
        {step.title}
      </h3>

      <p className="mt-2 text-xs leading-relaxed text-[#1A1D20]/80">
        {step.desc}
      </p>
    </motion.div>
  )
}

/** Step status indicator in bottom bar */
function ProgressStepTracker({ progress }: { progress: MotionValue<number> }) {
  const currentStep = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [1, 2, 3, 4, 5])
  
  return (
    <div className="flex items-center gap-1.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <StepDot key={s} stepNumber={s} currentStep={currentStep} />
      ))}
    </div>
  )
}

function StepDot({ stepNumber, currentStep }: { stepNumber: number; currentStep: MotionValue<number> }) {
  const width = useTransform(currentStep, (c) => Math.round(c) === stepNumber ? '20px' : '6px')
  const backgroundColor = useTransform(currentStep, (c) => Math.round(c) >= stepNumber ? '#0F172A' : '#CBD5E1')

  return (
    <motion.div
      className="h-1.5 rounded-full transition-all duration-300"
      style={{ width, backgroundColor }}
    />
  )
}
