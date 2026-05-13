import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  className?: string
  containerClassName?: string
  children: ReactNode
}

export function Section({ id, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6", className)}>
      <div className={cn("max-w-5xl mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  )
}
