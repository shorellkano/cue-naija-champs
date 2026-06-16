import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/ui/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Cue Naija Masters" },
      { name: "description", content: "How Cue Naija Masters uses cookies." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Cookie Policy"
      crumb="Cookie Policy"
      intro="This Cookie Policy explains how cookies and similar technologies are used on the Cue Naija Masters website."
      sections={[
        {
          title: "What Are Cookies",
          content:
            "Cookies are small text files stored on your device that help websites function and remember your preferences.",
        },
        {
          title: "How We Use Cookies",
          content:
            "We use essential cookies to keep the site working and basic analytics cookies to understand how visitors use the site so we can improve it.",
        },
        {
          title: "Managing Cookies",
          content:
            "You can control or delete cookies through your browser settings. Disabling some cookies may affect how the site works.",
        },
      ]}
    />
  ),
});