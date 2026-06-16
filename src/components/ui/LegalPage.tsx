import { PageBanner } from "@/components/ui/PageBanner";
import { CueAccordion, type AccordionItem } from "@/components/ui/CueAccordion";
import { TOURNAMENT } from "@/lib/constants";

export function LegalPage({
  title,
  crumb,
  intro,
  sections,
}: {
  title: string;
  crumb: string;
  intro: string;
  sections: AccordionItem[];
}) {
  return (
    <>
      <PageBanner title={title} crumb={crumb} />
      <section className="bg-ink px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="leading-[1.8] text-text-muted">{intro}</p>
          <div className="mt-8">
            <CueAccordion items={sections} defaultOpen={0} />
          </div>
          <p className="mt-10 text-sm text-text-muted">
            Data controller: {TOURNAMENT.name} ({TOURNAMENT.contact.email}).
            Governing law: Nigerian law. Last updated: {TOURNAMENT.year}.
          </p>
        </div>
      </section>
    </>
  );
}