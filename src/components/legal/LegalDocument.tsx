import Link from "next/link";
import { BRAND } from "@/lib/data";
import { LEGAL, type LegalSection } from "@/lib/legal";

interface LegalDocumentProps {
  title: string;
  description: string;
  sections: LegalSection[];
  sibling?: { label: string; href: string };
}

export function LegalDocument({
  title,
  description,
  sections,
  sibling,
}: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-12 border-b border-brand-plum/10 pb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-plum">
          Legal
        </p>
        <h1 className="mt-3 text-3xl font-bold text-brand-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-brand-ink/70">{description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-brand-ink/55">
          <span>Last updated: {LEGAL.lastUpdated}</span>
          <span className="hidden sm:inline">·</span>
          <span>{LEGAL.company}</span>
        </div>
        {sibling && (
          <p className="mt-4 text-sm">
            See also:{" "}
            <Link
              href={sibling.href}
              className="font-semibold text-brand-flame underline-offset-4 hover:underline"
            >
              {sibling.label}
            </Link>
          </p>
        )}
      </header>

      <nav className="mb-12 rounded-2xl border border-brand-plum/10 bg-brand-plum/[0.04] p-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-brand-plum">
          On this page
        </h2>
        <ol className="mt-4 grid gap-2 sm:grid-cols-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-brand-ink/75 transition hover:text-brand-flame"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h2 className="text-xl font-bold text-brand-ink">{section.title}</h2>
            <div className="mt-4 space-y-4 text-brand-ink/75 leading-relaxed">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
              {section.list && (
                <ul className="list-disc space-y-2 pl-6 marker:text-brand-gold">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.footer && <p>{section.footer}</p>}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-16 rounded-2xl gradient-brand p-px">
        <div className="rounded-[15px] bg-brand-ink p-8 text-white">
          <p className="font-semibold">Questions about this document?</p>
          <p className="mt-2 text-sm text-white/70">
            Reach {BRAND.name} support at{" "}
            <a href={`mailto:${BRAND.email}`} className="text-brand-gold hover:underline">
              {BRAND.email}
            </a>{" "}
            or{" "}
            <a
              href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
              className="text-brand-gold hover:underline"
            >
              {BRAND.phone}
            </a>
            .
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex text-sm font-semibold text-brand-gold hover:underline"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </article>
  );
}
