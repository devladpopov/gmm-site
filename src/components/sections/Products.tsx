import { Section } from "@/components/layout/Section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const products = [
  {
    tag: "Education Technology",
    title: "StudyQA.com",
    href: "https://studyqa.com",
    description:
      "International student recruitment platform connecting prospective students with universities worldwide. Program search, comparison tools, application tracking, and analytics for partner universities.",
    meta: "4M+ annual users, 100+ countries, since 2013",
  },
  {
    tag: "Automotive SaaS",
    title: "MOTReady.co.uk",
    href: "https://motready.co.uk",
    description:
      "MOT reminder and customer retention platform for UK garages. Automated SMS and email reminders, online booking, and garage websites. Integrates with the DVSA MOT History API (UK Government) via OAuth2.",
    meta: "Live platform, UK-wide garage network",
  },
  {
    tag: "Developer Tools",
    title: "TokenToad",
    href: "tokentoad/",
    description:
      "Chrome browser extension for real-time monitoring of AI API spending. Tracks usage and costs across Claude, OpenAI, and other LLM platforms directly in the browser.",
    meta: "Published on Chrome Web Store",
  },
  {
    tag: "AI / Financial Data",
    title: "UK Company Accounts AI Dataset",
    href: "sovereign-ai-proposal.html",
    description:
      "Open national dataset from UK Companies House filings. Document AI pipeline extracting structured financial data from 3.5M PDF company accounts. Consortium with University College London.",
    meta: "UKRI AIRR funded, DSIT Sovereign AI programme",
    badge: "Current project",
  },
]

export function Products() {
  return (
    <div className="relative">
      {/* Fluid art background overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/backgrounds/background-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/[0.88]" />

      <Section id="products" className="relative">
        <h2 className="text-2xl font-semibold text-foreground mb-1 pb-3 border-b-2 border-accent">
          Products and Services
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {products.map((product) => (
            <Card
              key={product.title}
              className="border-t-3 border-t-accent bg-white hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  {product.tag}
                </span>
                <h3 className="text-base font-semibold mt-2 mb-2">
                  <a href={product.href} className="text-foreground hover:underline">
                    {product.title}
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                  {product.description}
                </p>
                <p className="text-xs text-muted-foreground">{product.meta}</p>
                {product.badge && (
                  <Badge variant="secondary" className="mt-3 bg-accent-light text-accent text-xs">
                    {product.badge}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
