import { ParticleTextEffect } from "./ParticleTextEffect"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background accent image */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/backgrounds/background-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            opacity: 0.35,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-2xl">
          <ParticleTextEffect
            words={["Data", "AI", "Education", "Research", "Scale"]}
            className="mb-6"
            particleColor="#1a1a2e"
            accentColor="#4a7cff"
            fontSize={120}
          />

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8">
            UK company specialising in AI, data engineering, and education technology.
            From international student platforms to national financial datasets.
            Operational since 2013.
          </p>

          <a
            href="#products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Our Work
          </a>
        </div>
      </div>
    </section>
  )
}
