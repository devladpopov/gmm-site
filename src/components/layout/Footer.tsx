export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/60 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-4 text-xs">
        <div>
          &copy; 2026{" "}
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/15738438"
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            Global Mindset Marketing Limited
          </a>
          . Registered in England and Wales.
        </div>
        <div>VAT registered. Company No. 15738438.</div>
      </div>
    </footer>
  )
}
