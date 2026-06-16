import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GoldButton } from "@/components/ui/GoldButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { WHATSAPP_URL } from "@/lib/constants";

export function FooterCTA() {
  return (
    <section
      className="px-4 py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, #004D2A 0%, #0A0A0A 75%)",
      }}
    >
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl font-black text-white sm:text-5xl">
          Ready to Prove Your Skills?
        </h2>
        <p className="mt-4 text-lg text-text-muted">
          32 spots. One champion. Your time is now.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GoldButton to="/registration">Register Now</GoldButton>
          <OutlineButton href={WHATSAPP_URL}>
            <MessageCircle size={18} /> Message Us
          </OutlineButton>
        </div>
      </Reveal>
    </section>
  );
}