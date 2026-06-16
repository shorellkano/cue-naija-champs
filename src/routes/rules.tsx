import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { Check, X, FileDown } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { CueAccordion } from "@/components/ui/CueAccordion";
import { Bracket } from "@/components/ui/Bracket";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { GoldButton } from "@/components/ui/GoldButton";

export const Route = createFileRoute("/rules")({
  head: () => ({
    meta: [
      { title: "Rules and Format | Cue Naija Masters" },
      {
        name: "description",
        content:
          "Tournament format, match rules, and code of conduct for the Cue Naija Masters, Magodo Edition.",
      },
      { property: "og:title", content: "Rules and Format" },
      {
        property: "og:description",
        content: "Group stage to grand final. Played to WPBSA standards.",
      },
    ],
  }),
  component: Rules,
});

const matchRules = [
  {
    title: "Frame Format",
    content:
      "Group stage matches are Best of 3 frames. Knockout matches are Best of 5, and the Final is Best of 7 frames.",
  },
  {
    title: "Break Order",
    content:
      "A coin toss decides the opening break. The winner breaks the first frame, the loser breaks the second, alternating thereafter.",
  },
  {
    title: "Time Limits",
    content:
      "Players have 60 seconds per shot. The referee issues a warning at 45 seconds. Repeated delays may result in a foul.",
  },
  {
    title: "Foul Rules",
    content:
      "Standard WPBSA foul and miss rules apply throughout the tournament. The referee's call on fouls is final.",
  },
  {
    title: "Match Defaults",
    content:
      "A walkover is awarded if a player is absent 10 minutes after the scheduled start time of their match.",
  },
];

const allowed = ["Snooker trousers", "Collared shirt", "Closed-toe shoes"];
const notAllowed = ["Jeans", "Shorts", "Open-toe footwear", "Casual t-shirts"];

function Rules() {
  return (
    <>
      <PageBanner title="Rules and Format" crumb="Rules" />

      {/* Format */}
      <section className="bg-surface px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-white">
              Tournament <span className="text-gold">Format</span>
            </h2>
            <p className="mt-3 max-w-2xl text-text-muted">
              Eight groups of four players. The top two from each group advance to
              a single-elimination knockout, all the way to the grand final.
            </p>
          </Reveal>
          <Reveal className="mt-10">
            <Bracket />
          </Reveal>
        </div>
      </section>

      <SectionDivider variant="wave" from="#111811" to="#1A2A1A" />

      {/* Match rules accordion */}
      <section className="bg-surface-2 px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-white">
              Match <span className="text-gold">Rules</span>
            </h2>
          </Reveal>
          <Reveal className="mt-6">
            <CueAccordion items={matchRules} defaultOpen={0} />
          </Reveal>
        </div>
      </section>

      {/* Code of conduct */}
      <section className="bg-ink px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="font-display text-3xl font-black text-white">
              Code of <span className="text-gold">Conduct</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal>
              <h3 className="font-display text-lg font-bold text-gold">
                Dress Code
              </h3>
              <ul className="mt-4 space-y-2">
                {allowed.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-text-muted">
                    <Check size={18} className="text-emerald-light" /> {a}
                  </li>
                ))}
                {notAllowed.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-text-muted">
                    <X size={18} className="text-red-400" /> {a}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-lg font-bold text-gold">
                Conduct
              </h3>
              <ul className="mt-4 space-y-3 text-text-muted">
                <li>Professional conduct is expected at all times.</li>
                <li>Phones must be on silent mode during active frames.</li>
                <li>The head referee's decision is final and binding.</li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PDF download */}
      <section className="bg-emerald-dark px-4 py-16">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-black text-white">
            Want the Full Rulebook?
          </h2>
          <p className="mt-3 text-white/80">
            Download the complete rules to read before the tournament.
          </p>
          <div className="mt-8 flex justify-center">
            <GoldButton
              onClick={() =>
                toast("Rules PDF will be available soon.", {
                  description: "Check back before the tournament.",
                })
              }
            >
              <FileDown size={18} /> Download Full Rules as PDF
            </GoldButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}