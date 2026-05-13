import { Section } from "@/components/layout/Section"
import { Card, CardContent } from "@/components/ui/card"

const members = [
  {
    name: "Vladislav Popov",
    role: "CTO and Technical Lead",
    degree: "PhD, University of York",
    bio: "Software engineering, data products, and ML pipelines. Built and scaled StudyQA (4M+ users), MOTReady, and TokenToad. Designed the Companies House data acquisition system, iXBRL parser, and financial scoring model (AUC 0.9987). Prepared and was awarded the UKRI AIRR compute grant.",
  },
  {
    name: "Aleksandra Griazina",
    role: "Director",
    degree: "PhD, University College London",
    bio: "Business operations, strategic direction, and institutional partnerships. Manages company governance, financial reporting, and partnership strategy. Project Lead on the UKRI AIRR compute grant.",
  },
]

export function Team() {
  return (
    <div className="relative">
      {/* Fluid art background overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/backgrounds/background-5.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/[0.90]" />

      <Section id="team" className="relative">
        <h2 className="text-2xl font-semibold text-foreground mb-1 pb-3 border-b-2 border-accent">
          Team
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {members.map((member) => (
            <Card key={member.name} className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent font-medium mt-0.5">{member.role}</p>
                <p className="text-xs text-muted-foreground italic mt-1">{member.degree}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
