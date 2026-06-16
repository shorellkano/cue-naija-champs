import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/ui/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Cue Naija Masters" },
      { name: "description", content: "The terms governing participation in Cue Naija Masters." },
    ],
  }),
  component: () => (
    <LegalPage
      title="Terms and Conditions"
      crumb="Terms and Conditions"
      intro="By registering for the Cue Naija Masters tournament, you agree to the following terms and conditions."
      sections={[
        {
          title: "Eligibility",
          content:
            "Participants must be at least 18 years old and provide accurate registration information. The organizers reserve the right to verify eligibility.",
        },
        {
          title: "Entry Fees and Refunds",
          content:
            "Entry fees must be paid in full to confirm a spot. Fees are non-refundable except where the tournament is cancelled by the organizers.",
        },
        {
          title: "Conduct and Disqualification",
          content:
            "Players must follow the rules and code of conduct. The organizers may disqualify any participant for misconduct, with no refund.",
        },
        {
          title: "Liability",
          content:
            "Participants take part at their own risk. The organizers are not liable for personal injury, loss, or damage except where required by Nigerian law.",
        },
      ]}
    />
  ),
});