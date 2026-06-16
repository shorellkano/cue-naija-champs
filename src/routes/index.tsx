import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { QuickStats } from "@/components/sections/QuickStats";
import { Highlights } from "@/components/sections/Highlights";
import { Sponsors } from "@/components/sections/Sponsors";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cue Naija Masters | The Pinnacle of Nigerian Snooker" },
      {
        name: "description",
        content:
          "Cue Naija Masters, Magodo Edition 2026. Lagos's premier competitive snooker tournament. Register now for your shot at the title.",
      },
      { property: "og:title", content: "Cue Naija Masters" },
      {
        property: "og:description",
        content: "The Pinnacle of Nigerian Snooker. Magodo Edition 2026.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <QuickStats />
      <SectionDivider variant="diagonal" from="#111811" to="#1A2A1A" />
      <Highlights />
      <SectionDivider variant="wave" from="#1A2A1A" to="#0A0A0A" />
      <Sponsors />
      <FooterCTA />
    </>
  );
}
