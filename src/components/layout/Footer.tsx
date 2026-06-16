import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/cue-naija-logo.png.asset.json";
import {
  LEGAL_LINKS,
  NAV_LINKS,
  TOURNAMENT,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img
                src={logo.url}
                alt="Cue Naija Masters logo"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/60"
              />
              <span className="font-display text-lg font-bold text-white">
                Cue Naija <span className="text-gold">Masters</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {TOURNAMENT.tagline}. {TOURNAMENT.edition}, {TOURNAMENT.year}.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
                >
                  <MessageCircle size={16} className="text-gold" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${TOURNAMENT.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-white"
                >
                  <Mail size={16} className="text-gold" /> {TOURNAMENT.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Follow
            </h4>
            <div className="mt-4 flex gap-4">
              <a
                href={TOURNAMENT.contact.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gold transition-transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href={TOURNAMENT.contact.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-gold transition-transform hover:scale-110"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-emerald/20 pt-6 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {TOURNAMENT.year} {TOURNAMENT.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs text-text-muted transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}