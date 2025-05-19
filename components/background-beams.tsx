"use client"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({
  className,
}: {
  className?: string
}) => {
  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!beamsRef.current) return

    const beamsEl = beamsRef.current
    let mouseX = 0
    let mouseY = 0
    const cursorRadius = window.innerWidth > 768 ? 400 : 200

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    const animateBeams = () => {
      if (!beamsEl) return

      const beams = Array.from(beamsEl.querySelectorAll(".beam"))

      beams.forEach((beam, i) => {
        const beamEl = beam as HTMLElement
        const bounds = beamEl.getBoundingClientRect()
        const beamCenterX = bounds.left + bounds.width / 2
        const beamCenterY = bounds.top + bounds.height / 2

        const distanceFromCursor = Math.sqrt(Math.pow(mouseX - beamCenterX, 2) + Math.pow(mouseY - beamCenterY, 2))

        const isInRadius = distanceFromCursor < cursorRadius

        if (isInRadius) {
          const opacity = 1 - distanceFromCursor / cursorRadius
          beamEl.style.opacity = Math.min(0.3 + opacity * 0.7, 1).toString()
        } else {
          beamEl.style.opacity = "0.3"
        }
      })

      requestAnimationFrame(animateBeams)
    }

    animateBeams()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={beamsRef} className={cn("absolute inset-0 overflow-hidden", className)}>
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="beam absolute opacity-30 bg-gradient-to-b from-transparent to-orange-400"
          style={{
            width: `${Math.random() * 2 + 0.5}px`,
            height: `${Math.random() * 30 + 10}vh`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            transformOrigin: "center",
            boxShadow: "0 0 10px 2px rgba(249, 115, 22, 0.3)",
          }}
        />
      ))}
      {/* <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100 via-orange-400/90 to-orange-950/20" /> */}
    </div>
  )
}
