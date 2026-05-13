import { Section } from "@/components/layout/Section"

export function Contact() {
  return (
    <Section id="contact">
      <h2 className="text-2xl font-semibold text-foreground mb-1 pb-3 border-b-2 border-accent">
        Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-6">
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Email</dt>
            <dd>
              <a href="mailto:info@globalmindsetmarketing.co.uk" className="text-accent hover:underline">
                info@globalmindsetmarketing.co.uk
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Phone</dt>
            <dd className="text-muted-foreground">+44 7934 892954</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Address</dt>
            <dd className="text-muted-foreground leading-relaxed">
              Bartle House, 9 Oxford Court,<br />
              M2 3WQ, Bishopsgate,<br />
              United Kingdom
            </dd>
          </div>
        </dl>

        <dl className="space-y-4 text-sm bg-muted rounded-lg p-6">
          <div>
            <dt className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Company Number</dt>
            <dd>
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/15738438"
                className="text-accent hover:underline"
              >
                15738438
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Jurisdiction</dt>
            <dd className="text-muted-foreground">England and Wales</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">VAT</dt>
            <dd className="text-muted-foreground">Registered (number available on request)</dd>
          </div>
          <div>
            <dt className="font-semibold text-foreground text-xs uppercase tracking-wider mb-1">Website</dt>
            <dd>
              <a href="https://globalmindsetmarketing.co.uk" className="text-accent hover:underline">
                globalmindsetmarketing.co.uk
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
