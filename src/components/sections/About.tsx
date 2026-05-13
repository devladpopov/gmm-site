import { useEffect, useRef, useState } from "react"
import { Section } from "@/components/layout/Section"

const stats = [
  { value: "4M+", label: "Annual users\n(StudyQA)" },
  { value: "3.5M", label: "PDF filings\ndownloaded" },
  { value: "20,000", label: "GPU hours\n(UKRI AIRR)" },
  { value: "4", label: "Live\nproducts" },
]

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <span className="block text-3xl font-bold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground whitespace-pre-line">{label}</span>
    </div>
  )
}

export function About() {
  return (
    <Section id="about">
      <h2 className="text-2xl font-semibold text-foreground mb-1 pb-3 border-b-2 border-accent">
        About
      </h2>
      <p className="text-[15px] text-muted-foreground leading-relaxed mb-3">
        Global Mindset Marketing Ltd is a UK-registered company (England and Wales) operating
        across two verticals: <strong className="text-foreground">education technology</strong> and{" "}
        <strong className="text-foreground">AI-powered data services</strong>.
        The company's flagship product,{" "}
        <a href="https://studyqa.com" className="text-accent hover:underline">StudyQA.com</a>,
        is an international student recruitment platform serving over 4 million annual users
        across 100+ countries, operational since 2013.
      </p>
      <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
        In 2025, GMM expanded into AI and financial data applications, focusing on UK Companies House
        filings. The company was awarded a UKRI AIRR compute grant (20,000 GPU hours on the Isambard-AI
        supercomputer) and is currently developing a national open dataset in partnership with
        University College London, supported by the DSIT Sovereign AI Strategic Assets Programme.
      </p>

      <div className="flex flex-wrap gap-12 justify-center md:justify-start">
        {stats.map((s) => (
          <AnimatedStat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </Section>
  )
}
