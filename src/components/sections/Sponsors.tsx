import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/constants";

export function Sponsors() {
  return (
    <section className="bg-ink px-4 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
          Powered By
        </p>
        <Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="flex h-28 items-center justify-center rounded-sm border-2 border-dashed border-gold/70 text-sm font-semibold uppercase tracking-wider text-gold">
              Venue Partner
            </div>
            <div className="flex h-28 items-center justify-center rounded-sm border-2 border-dashed border-gold/30 text-sm font-semibold uppercase tracking-wider text-gold/50">
              Sponsor Slot Available
            </div>
            <div className="flex h-28 items-center justify-center rounded-sm border-2 border-dashed border-gold/30 text-sm font-semibold uppercase tracking-wider text-gold/50">
              Sponsor Slot Available
            </div>
          </div>
        </Reveal>
        <p className="mt-8 text-sm text-text-muted">
          Interested in sponsoring?{" "}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="text-gold underline-offset-4 hover:underline"
          >
            Contact us on WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}