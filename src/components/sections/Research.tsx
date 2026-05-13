import { Section } from "@/components/layout/Section"

export function Research() {
  return (
    <div className="relative">
      {/* Decorative accent image */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-80 rounded-2xl hidden lg:block"
        style={{
          backgroundImage: "url(/backgrounds/background-3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          transform: "translateY(-50%) rotate(3deg)",
          marginRight: "-2rem",
        }}
      />

      <Section id="research" className="relative">
        <h2 className="text-2xl font-semibold text-foreground mb-1 pb-3 border-b-2 border-accent">
          Research and Grants
        </h2>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
          GMM participates in competitive UK public research funding programmes,
          working with national HPC infrastructure and university research partners.
        </p>

        <ul className="space-y-6 max-w-2xl">
          <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-accent">
            <strong className="text-foreground text-[15px]">UKRI AIRR Compute Grant</strong>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              20,000 GPU hours on{" "}
              <a href="https://isambard.ac.uk/" className="text-accent hover:underline">Isambard-AI</a>{" "}
              (NVIDIA GH200 Grace-Hopper, University of Bristol).
              Award reference{" "}
              <a href="https://portal-airr.isambard.ac.uk/" className="text-accent hover:underline">
                0261-4941-0401-1
              </a>.
              Active April to July 2026. Research focus: document AI for financial filings.
            </p>
          </li>
          <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2.5 before:h-2.5 before:rounded-full before:bg-accent">
            <strong className="text-foreground text-[15px]">DSIT Sovereign AI Strategic Assets Programme</strong>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              Consortium proposal with{" "}
              <a href="https://www.ucl.ac.uk/statistics" className="text-accent hover:underline">
                University College London
              </a>{" "}
              (Department of Statistical Science).
              Non-commercial track, 100% funded.{" "}
              <a href="sovereign-ai-proposal.html" className="text-accent hover:underline">
                View proposal
              </a>.
            </p>
          </li>
        </ul>
      </Section>
    </div>
  )
}
