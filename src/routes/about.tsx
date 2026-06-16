import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { GoldButton } from "@/components/ui/GoldButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { WHATSAPP_URL } from "@/lib/constants";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Cue Naija Masters" },
      {
        name: "description",
        content:
          "The story behind Cue Naija Masters and the grand vision to build a statewide snooker championship across Lagos.",
      },
      { property: "og:title", content: "About the Tournament" },
      {
        property: "og:description",
        content: "Grassroots. Professional. Nigerian.",
      },
    ],
  }),
  component: About,
});

const phases = [
  {
    title: "Magodo Edition",
    label: "Now, proof of concept",
    desc: "Our flagship tournament establishing the gold standard for competitive snooker in Lagos.",
    state: "filled",
  },
  {
    title: "Lagos LGA Circuit",
    label: "Next, quarterly qualifiers",
    desc: "Tournaments expanding across Ikeja, Lekki, Yaba, and Surulere, building a state-wide league.",
    state: "outline",
  },
  {
    title: "Lagos State Grand Final",
    label: "The vision, statewide championship",
    desc: "The ultimate stage where LGA champions compete for the Lagos State Snooker Grand Final title.",
    state: "dim",
  },
];

function About() {
  return (
    <>
      <PageBanner title="About the Tournament" crumb="About" />

      {/* Founder */}
      <section className="bg-surface px-4 py-20">
        <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[200px_1fr]">
          <Reveal className="flex flex-col items-center text-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-emerald-dark font-display text-4xl font-black text-gold ring-2 ring-gold/60">
              K
            </div>
            <p className="mt-4 font-display text-lg font-bold text-white">
              Mr. King
            </p>
            <p className="text-sm text-gold">Founder</p>
          </Reveal>
          <Reveal>
            <h2 className="font-display text-3xl font-black text-white">
              A Passion for the Green Baize
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted">
              Cue Naija Masters was born from a simple belief: Nigeria is home to
              world-class snooker talent that deserves a professional stage. What
              started as friendly frames among friends in Magodo has grown into a
              mission to develop the sport, celebrate skill, and bring the
              community together around the table.
            </p>
            <p className="mt-4 leading-relaxed text-text-muted">
              Every detail of this tournament, from certified referees to the
              championship trophy, reflects a commitment to doing things the right
              way and giving players an experience worthy of their ambition.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Organizers */}
      <section className="bg-surface-2 px-4 py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-black text-white">
            The Organizing Team
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            Our Tournament Director oversees scheduling, officiating, and fair
            play across both days, supported by a dedicated team ensuring every
            player and guest has a seamless experience.
          </p>
          <div className="mt-8 flex justify-center">
            <OutlineButton href={WHATSAPP_URL}>
              <MessageCircle size={18} /> Reach the Team
            </OutlineButton>
          </div>
        </Reveal>
      </section>

      {/* Grand Vision Timeline */}
      <section className="relative overflow-hidden bg-ink px-4 py-24">
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
          viewBox="0 0 800 600"
        >
          <path
            d="M100 100 L300 120 L500 80 L700 140 M200 300 L450 280 L650 340 M150 480 L400 500 L680 470"
            stroke="#D4AF37"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="text-center">
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              The <span className="text-gold">Grand Vision</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-muted">
              Magodo is only the beginning. Here is how Cue Naija Masters grows
              into a statewide movement.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {phases.map((phase, i) => (
              <Reveal key={phase.title} delay={i * 0.12}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span
                      className={
                        phase.state === "filled"
                          ? "h-6 w-6 rounded-full bg-gold"
                          : phase.state === "outline"
                            ? "h-6 w-6 rounded-full border-2 border-gold"
                            : "h-6 w-6 rounded-full border-2 border-gold/40"
                      }
                    />
                    {i < phases.length - 1 && (
                      <span className="hidden h-0.5 flex-1 border-t-2 border-dashed border-gold/40 md:block" />
                    )}
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {phase.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {phase.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider variant="cue" from="#0A0A0A" />

      {/* Why this matters */}
      <section className="bg-emerald-dark px-4 py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
            Grassroots. Professional. Nigerian.
          </h2>
          <p className="mt-6 leading-relaxed text-white/80">
            Snooker in Nigeria has long lived in lounges and back rooms, full of
            raw talent but starved of a real platform. Cue Naija Masters changes
            that by bringing professional structure to the local game.
          </p>
          <p className="mt-4 leading-relaxed text-white/80">
            We give players a stage to compete fairly, be recognized, and grow.
            Each edition raises the standard and the profile of Nigerian snooker.
          </p>
          <p className="mt-4 leading-relaxed text-white/80">
            This is more than a tournament. It is the foundation of a lasting
            competitive snooker culture in Lagos and beyond.
          </p>
          <div className="mt-10 flex justify-center">
            <GoldButton to="/registration">Be Part of History</GoldButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}