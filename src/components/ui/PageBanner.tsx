import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageBanner({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-surface-2 pt-24">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 1200 400"
      >
        <line x1="-50" y1="380" x2="700" y2="-40" stroke="#D4AF37" strokeWidth="2" />
        <line x1="500" y1="440" x2="1260" y2="20" stroke="#006B3C" strokeWidth="3" />
      </svg>
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <nav className="flex items-center gap-1 text-xs text-text-muted">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-gold">{crumb}</span>
        </nav>
        <h1 className="mt-4 font-display text-4xl font-black text-white sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}