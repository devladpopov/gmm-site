import { useEffect, useRef, useCallback } from "react"

interface Vector2D {
  x: number
  y: number
}

class Particle {
  pos: Vector2D
  vel: Vector2D
  acc: Vector2D
  target: Vector2D
  color: string
  baseColor: string
  accentColor: string
  isKilled: boolean
  radius: number
  baseRadius: number

  constructor(x: number, y: number, baseColor: string, accentColor: string) {
    this.pos = { x: Math.random() * 800, y: Math.random() * 300 }
    this.vel = { x: 0, y: 0 }
    this.acc = { x: 0, y: 0 }
    this.target = { x, y }
    this.color = baseColor
    this.baseColor = baseColor
    this.accentColor = accentColor
    this.isKilled = false
    this.radius = 2
    this.baseRadius = 2
  }

  update(mouse: Vector2D | null) {
    if (this.isKilled) {
      this.vel.y += 0.15
      this.pos.x += this.vel.x
      this.pos.y += this.vel.y
      return
    }

    const dx = this.target.x - this.pos.x
    const dy = this.target.y - this.pos.y

    this.acc.x = dx * 0.08
    this.acc.y = dy * 0.08

    if (mouse) {
      const mdx = this.pos.x - mouse.x
      const mdy = this.pos.y - mouse.y
      const dist = Math.sqrt(mdx * mdx + mdy * mdy)
      if (dist < 80) {
        const force = (80 - dist) / 80
        this.acc.x += (mdx / dist) * force * 6
        this.acc.y += (mdy / dist) * force * 6
        this.color = this.accentColor
      } else {
        this.color = this.baseColor
      }
    }

    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.vel.x *= 0.88
    this.vel.y *= 0.88
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
  }

  kill() {
    this.isKilled = true
    this.vel.x = (Math.random() - 0.5) * 8
    this.vel.y = (Math.random() - 0.5) * 8 - 3
  }
}

interface ParticleTextEffectProps {
  words?: string[]
  className?: string
  particleColor?: string
  accentColor?: string
  fontSize?: number
  cycleInterval?: number
}

export function ParticleTextEffect({
  words = ["Data", "AI", "Education", "Research", "Scale"],
  className = "",
  particleColor = "#1a1a2e",
  accentColor = "#4a7cff",
  fontSize = 120,
  cycleInterval = 240,
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const frameCountRef = useRef(0)
  const wordIndexRef = useRef(0)
  const mouseRef = useRef<Vector2D | null>(null)

  const getTextPositions = useCallback(
    (text: string, canvas: HTMLCanvasElement) => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return []

      const offscreen = document.createElement("canvas")
      offscreen.width = canvas.width
      offscreen.height = canvas.height
      const offCtx = offscreen.getContext("2d")
      if (!offCtx) return []

      offCtx.fillStyle = "#000"
      offCtx.font = `bold ${fontSize}px Inter, sans-serif`
      offCtx.textAlign = "center"
      offCtx.textBaseline = "middle"
      offCtx.fillText(text, offscreen.width / 2, offscreen.height / 2)

      const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height)
      const positions: Vector2D[] = []
      const step = 4

      for (let y = 0; y < offscreen.height; y += step) {
        for (let x = 0; x < offscreen.width; x += step) {
          const i = (y * offscreen.width + x) * 4
          if (imageData.data[i + 3] > 128) {
            positions.push({ x, y })
          }
        }
      }

      return positions
    },
    [fontSize]
  )

  const setWord = useCallback(
    (canvas: HTMLCanvasElement) => {
      const word = words[wordIndexRef.current % words.length]
      const positions = getTextPositions(word, canvas)
      const particles = particlesRef.current

      // Reuse or create particles
      while (particles.length > positions.length) {
        const p = particles.pop()
        if (p) p.kill()
      }

      for (let i = 0; i < positions.length; i++) {
        if (i < particles.length) {
          particles[i].target = positions[i]
          particles[i].isKilled = false
        } else {
          particles.push(
            new Particle(positions[i].x, positions[i].y, particleColor, accentColor)
          )
        }
      }
    },
    [words, getTextPositions, particleColor, accentColor]
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 800
    canvas.height = 300

    setWord(canvas)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      frameCountRef.current++
      if (frameCountRef.current % cycleInterval === 0) {
        wordIndexRef.current++
        setWord(canvas)
      }

      particlesRef.current = particlesRef.current.filter(
        (p) => !p.isKilled || p.pos.y < canvas.height + 50
      )

      for (const p of particlesRef.current) {
        p.update(mouseRef.current)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.isKilled ? 0.4 : 0.85
        ctx.beginPath()
        ctx.arc(p.pos.x, p.pos.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const scaleX = canvas.width / rect.width
      const scaleY = canvas.height / rect.height
      mouseRef.current = {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = null
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      if (!mouseRef.current) return
      for (const p of particlesRef.current) {
        const dx = p.pos.x - mouseRef.current.x
        const dy = p.pos.y - mouseRef.current.y
        if (Math.sqrt(dx * dx + dy * dy) < 50) {
          p.kill()
        }
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    canvas.addEventListener("contextmenu", handleContextMenu)

    return () => {
      cancelAnimationFrame(animationRef.current)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      canvas.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [setWord, cycleInterval])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", maxWidth: 800, height: "auto", aspectRatio: "8/3" }}
    />
  )
}
