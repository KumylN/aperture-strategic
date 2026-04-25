import Link from "next/link";
import Reveal from "./reveal";

const EMAIL = "me@aperture-strategic.com";

function ApertureMark({
  className = "h-5 w-5",
}: {
  className?: string;
}) {
  // A restrained six-blade iris mark. Outlined geometry, no fills.
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="20.5" />
      <path d="M24 4.5 L33.8 21.2" />
      <path d="M41.4 14 L24 24" />
      <path d="M41.4 34 L24 24" />
      <path d="M24 43.5 L14.2 26.8" />
      <path d="M6.6 34 L24 24" />
      <path d="M6.6 14 L24 24" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
      <span aria-hidden="true" className="inline-block h-px w-[18px] bg-muted" />
      {children}
    </span>
  );
}

function Hairline({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-hairline ${className}`} />;
}

function PulseDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pulse-dot inline-block h-[6px] w-[6px] rounded-full bg-cyan ${className}`}
    />
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-sm border border-[rgba(232,237,245,0.14)] px-2 py-[5px] font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
      {children}
    </li>
  );
}

export default function Page() {
  const year = 2026;

  return (
    <div className="min-h-screen bg-navy text-offwhite">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-hairline bg-navy/75 backdrop-blur-md supports-[backdrop-filter]:bg-navy/60">
        <div className="mx-auto flex h-14 max-w-content items-center justify-between gap-4 px-6 md:px-10">
          <Link
            href="#top"
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            aria-label="Aperture Strategic — home"
          >
            <ApertureMark className="h-4 w-4 text-offwhite transition-all duration-500 ease-out group-hover:rotate-[30deg] group-hover:text-cyan" />
            <span className="text-[13px] font-medium tracking-wide">
              Aperture Strategic
            </span>
          </Link>

          <div className="flex items-center gap-5">
            <span
              aria-label="Availability status"
              className="hidden items-center gap-2 rounded-full border border-[rgba(232,237,245,0.14)] px-[10px] py-[5px] font-mono text-[10.5px] uppercase tracking-[0.12em] text-offwhite sm:inline-flex"
            >
              <PulseDot />
              Accepting inquiries
            </span>

            <nav aria-label="Primary">
              <a
                href="#contact"
                className="link-underline -mx-2 -my-2 inline-block px-2 py-2 text-[13px] text-offwhite transition-colors hover:text-cyan focus:outline-none focus-visible:text-cyan"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero-backdrop relative overflow-hidden pb-20 pt-28 md:pb-28 md:pt-40">
          <div className="relative z-10 mx-auto max-w-content px-6 md:px-10">
            <Reveal as="div" className="mb-10 flex flex-col items-start gap-2 md:mb-12 md:flex-row md:items-center md:justify-between md:gap-4">
              <SectionLabel>Aperture Strategic</SectionLabel>
              <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted md:tracking-[0.2em]">
                Toronto · Los Angeles · Remote
              </span>
            </Reveal>

            <Reveal
              as="h1"
              delay={1}
              className="max-w-[22ch] text-pretty text-[38px] font-medium leading-[1.05] tracking-tightest text-offwhite md:text-[68px] md:leading-[0.98] lg:text-[76px]"
            >
              Independent technology advisory for companies that take{" "}
              <span className="whitespace-nowrap text-cyan">
                engineering
                <span aria-hidden="true" className="cursor-blade" />
              </span>{" "}
              seriously.
            </Reveal>

            <Reveal
              as="p"
              delay={2}
              className="mt-8 max-w-[44rem] text-balance text-[17px] leading-relaxed text-muted md:mt-10 md:text-[20px]"
            >
              Principal-led strategy, architecture, and leadership engagements
              for founders, executives, and investment teams.
            </Reveal>

            <Reveal
              as="div"
              delay={3}
              className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-6 md:mt-20 md:grid-cols-4 md:gap-8"
              aria-label="Firm dossier"
            >
              {[
                ["Practice", "Independent · Senior-only"],
                ["Locations", "Toronto · Los Angeles · Remote"],
                ["Engagements", "Retained · Project · Advisory"],
                ["Introductions", "By referral"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {k}
                  </div>
                  <div className="mt-2 font-mono text-[12px] leading-[1.5] text-offwhite sm:text-[13px]">
                    {v}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <Hairline />

        {/* Practice */}
        <section
          id="practice"
          aria-labelledby="practice-heading"
          className="relative overflow-hidden py-24 md:py-36"
        >
          <span aria-hidden="true" className="ghost-numeral">
            01
          </span>

          <div className="relative z-10 mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-12 md:px-10">
            <Reveal as="div" className="md:col-span-4">
              <SectionLabel>01 / Practice</SectionLabel>
              <h2
                id="practice-heading"
                className="mt-6 text-[30px] font-medium leading-[1.15] tracking-tight text-offwhite md:text-[36px]"
              >
                Three areas of work.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-muted">
                Engagements are small in number and high in depth. Each begins
                with a defined scope and ends with a written brief.
              </p>
            </Reveal>

            <div className="space-y-11 md:col-span-8 md:space-y-14">
              <Reveal as="article">
                <div className="flex items-baseline gap-5">
                  <span className="min-w-[2.25rem] font-mono text-[11px] tracking-[0.15em] text-muted">
                    / 01
                  </span>
                  <h3 className="text-[22px] font-medium leading-tight tracking-tight text-offwhite md:text-[26px]">
                    Technology Strategy &amp; Architecture
                  </h3>
                </div>
                <p className="mt-4 max-w-[44rem] text-[15.5px] leading-relaxed text-muted md:ml-[3.5rem] md:text-[17px]">
                  Platform decisions, build-versus-buy, technical due diligence,
                  and engineering organization design for companies scaling from
                  seed to Series C. Most engagements begin with a short
                  assessment and end with a written brief a board can read in
                  one sitting.
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-x-[10px] gap-y-[6px] p-0 md:ml-[3.5rem]"
                  aria-label="Capabilities"
                >
                  <Tag>Due Diligence</Tag>
                  <Tag>Platform Review</Tag>
                  <Tag>Org Design</Tag>
                  <Tag>Buy vs. Build</Tag>
                </ul>
              </Reveal>

              <Hairline />

              <Reveal as="article" delay={1}>
                <div className="flex items-baseline gap-5">
                  <span className="min-w-[2.25rem] font-mono text-[11px] tracking-[0.15em] text-muted">
                    / 02
                  </span>
                  <h3 className="text-[22px] font-medium leading-tight tracking-tight text-offwhite md:text-[26px]">
                    AI &amp; Emerging Technology Advisory
                  </h3>
                </div>
                <p className="mt-4 max-w-[44rem] text-[15.5px] leading-relaxed text-muted md:ml-[3.5rem] md:text-[17px]">
                  Leadership teams face constant pressure to adopt AI,
                  blockchain, and adjacent technologies. We help them separate
                  the applications that compound into durable advantage from the
                  ones that add vendor dependencies, headcount, and technical
                  debt without return.
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-x-[10px] gap-y-[6px] p-0 md:ml-[3.5rem]"
                  aria-label="Capabilities"
                >
                  <Tag>AI Readiness</Tag>
                  <Tag>Vendor Strategy</Tag>
                  <Tag>ROI Framing</Tag>
                  <Tag>Risk Review</Tag>
                </ul>
              </Reveal>

              <Hairline />

              <Reveal as="article" delay={2}>
                <div className="flex items-baseline gap-5">
                  <span className="min-w-[2.25rem] font-mono text-[11px] tracking-[0.15em] text-muted">
                    / 03
                  </span>
                  <h3 className="text-[22px] font-medium leading-tight tracking-tight text-offwhite md:text-[26px]">
                    Fractional &amp; Interim Leadership
                  </h3>
                </div>
                <p className="mt-4 max-w-[44rem] text-[15.5px] leading-relaxed text-muted md:ml-[3.5rem] md:text-[17px]">
                  Short engagements as a fractional CTO, technical advisor, or
                  board observer. Suited to founders without a senior technical
                  co-founder, and to private equity and venture firms assessing
                  the engineering function of a portfolio company or a
                  prospective investment.
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-x-[10px] gap-y-[6px] p-0 md:ml-[3.5rem]"
                  aria-label="Capabilities"
                >
                  <Tag>Fractional CTO</Tag>
                  <Tag>Board Advisory</Tag>
                  <Tag>Portfolio Review</Tag>
                  <Tag>Interim Leadership</Tag>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <Hairline />

        {/* Approach */}
        <section
          id="approach"
          aria-labelledby="approach-heading"
          className="relative overflow-hidden py-24 md:py-36"
        >
          <span aria-hidden="true" className="ghost-numeral">
            02
          </span>

          <div className="relative z-10 mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-12 md:px-10">
            <Reveal as="div" className="md:col-span-4">
              <SectionLabel>02 / Approach</SectionLabel>
              <h2
                id="approach-heading"
                className="mt-6 text-[30px] font-medium leading-[1.15] tracking-tight text-offwhite md:text-[36px]"
              >
                Senior only. By introduction.
              </h2>
            </Reveal>

            <Reveal as="div" delay={1} className="md:col-span-8">
              <div className="space-y-6 text-[17px] leading-relaxed text-offwhite/90 md:text-[18px]">
                <p>
                  Every engagement is led directly by a principal with
                  operating experience as a CTO and engineering leader at
                  venture-backed companies and digital product agencies. The
                  practice has delivered hundreds of engagements, including
                  seven-figure technology programs. There are no associates,
                  no pyramids, and no handoffs.
                </p>
                <p>
                  The firm takes on a small number of clients at a time and
                  declines work that is not a good fit — including work that
                  would be profitable. Most introductions come through existing
                  clients, investors, and operators we have worked alongside.
                </p>
                <p>
                  Fees are transparent and quoted per engagement, not per hour.
                  Scope, deliverables, and duration are defined before the first
                  invoice.
                </p>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-hairline pt-8 md:grid-cols-3">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Engagement Type
                  </dt>
                  <dd className="mt-3 text-[14.5px] text-offwhite">
                    Retained · Project · Advisory
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Typical Duration
                  </dt>
                  <dd className="mt-3 text-[14.5px] text-offwhite">
                    3 to 12 months
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Client Stage
                  </dt>
                  <dd className="mt-3 text-[14.5px] text-offwhite">
                    Seed — Series C · PE · VC
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* Ticker */}
        <div className="border-y border-hairline">
          <div className="mx-auto grid max-w-content grid-cols-1 gap-x-8 gap-y-1 px-6 py-[18px] sm:grid-cols-2 md:px-10 lg:grid-cols-4">
            <div className="flex items-baseline gap-3 py-[5px] font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              <PulseDot className="-translate-y-[1px]" />
              <span className="text-[rgba(232,237,245,0.45)]">Availability</span>
              <span className="tracking-[0.1em] text-offwhite">Please contact</span>
            </div>
            <div className="flex items-baseline gap-3 py-[5px] font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              <span className="text-[rgba(232,237,245,0.45)]">Focus</span>
              <span className="tracking-[0.1em] text-offwhite">
                Senior-only · By referral
              </span>
            </div>
            <div className="flex items-baseline gap-3 py-[5px] font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              <span className="text-[rgba(232,237,245,0.45)]">Sectors</span>
              <span className="tracking-[0.1em] text-offwhite">
                SaaS · Fintech · Infra
              </span>
            </div>
            <div className="flex items-baseline gap-3 py-[5px] font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              <span className="text-[rgba(232,237,245,0.45)]">Response</span>
              <span className="tracking-[0.1em] text-offwhite">
                ≤ 2 business days
              </span>
            </div>
          </div>
        </div>

        {/* Contact */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="relative overflow-hidden py-28 md:py-32"
        >
          <span aria-hidden="true" className="ghost-numeral">
            03
          </span>

          <div className="relative z-10 mx-auto grid max-w-content grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-12 md:px-10">
            <Reveal as="div" className="md:col-span-4">
              <SectionLabel>03 / Contact</SectionLabel>
              <h2
                id="contact-heading"
                className="mt-6 text-[30px] font-medium leading-[1.15] tracking-tight text-offwhite md:text-[36px]"
              >
                Direct inquiries.
              </h2>
            </Reveal>

            <Reveal as="div" delay={1} className="md:col-span-8">
              <p className="max-w-[38rem] text-[16px] leading-relaxed text-muted md:text-[17.5px]">
                A principal responds to every email. Include a short note on
                the company, the question, and the timeframe.
              </p>

              <div
                className="email-card mt-10 block w-full border border-[rgba(232,237,245,0.14)] bg-gradient-to-b from-[rgba(14,28,51,0.55)] to-[rgba(10,22,40,0)] p-6 sm:inline-block sm:w-auto sm:p-8"
              >
                <span aria-hidden="true" className="corner-tl" />
                <span aria-hidden="true" className="corner-bl" />

                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-baseline gap-[10px] text-cyan focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan/60 focus-visible:ring-offset-4 focus-visible:ring-offset-navy sm:gap-[14px]"
                  aria-label="Email Aperture Strategic"
                >
                  <span className="break-all text-[19px] font-medium tracking-tight sm:break-normal sm:text-[24px] md:text-[36px]">
                    {EMAIL}
                  </span>
                  <span
                    aria-hidden="true"
                    className="-translate-y-[2px] font-mono text-[14px] text-muted transition-transform group-hover:translate-x-[3px] group-hover:text-cyan sm:text-[15px]"
                  >
                    →
                  </span>
                </a>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
                  <span>
                    <span className="text-[rgba(232,237,245,0.55)]">
                      Response
                    </span>
                    &nbsp;&nbsp;≤ 2 business days
                  </span>
                  <span>
                    <span className="text-[rgba(232,237,245,0.55)]">Signal</span>
                    &nbsp;&nbsp;On request
                  </span>
                </div>
              </div>

              <p className="mt-10 max-w-[36rem] font-mono text-[11.5px] leading-relaxed text-muted">
                Aperture Strategic does not take cold sales outreach. The firm
                accepts a limited number of new engagements each quarter.
              </p>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-hairline">
        <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-9 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-2.5">
            <ApertureMark className="h-4 w-4 text-muted" />
            <span className="text-[13px] font-medium tracking-wide text-offwhite">
              Aperture Strategic
            </span>
          </div>

          <div className="flex flex-col gap-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted md:flex-row md:items-center md:gap-6">
            <span>© {year} Aperture Strategic</span>
            <span aria-hidden="true" className="hidden md:inline">
              ·
            </span>
            <span>Independent Advisory</span>
            <span aria-hidden="true" className="hidden md:inline">
              ·
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="-my-1 inline-block py-1 transition-colors hover:text-cyan"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
