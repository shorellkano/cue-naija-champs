import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/ui/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Cue Naija Masters" },
      { name: "description", content: "How Cue Naija Masters collects and uses your data." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      crumb="Privacy Policy"
      intro="This Privacy Policy explains how we collect, use, and protect the personal information you provide when registering for or interacting with the Cue Naija Masters tournament."
      sections={[
        {
          title: "Information We Collect",
          content:
            "We collect the details you submit during registration, including your name, date of birth, contact information, emergency contact, and t-shirt size, as well as basic technical data when you visit the site.",
        },
        {
          title: "How We Use Your Information",
          content:
            "Your information is used to process registrations, manage the tournament, communicate updates, and improve the event experience. We do not sell your personal data.",
        },
        {
          title: "Payment Data",
          content:
            "Payments are processed securely by our payment provider. We do not store your card details on our servers.",
        },
        {
          title: "Your Rights",
          content:
            "You may request access to, correction of, or deletion of your personal data by contacting us at the email below.",
        },
      ]}
    />
  ),
});