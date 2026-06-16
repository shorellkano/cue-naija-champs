import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/cue-naija-logo.png.asset.json";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Cue Naija Masters logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/60"
          />
          <span className="hidden font-display text-lg font-bold tracking-wide text-white sm:block">
            Cue Naija <span className="text-gold">Masters</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group relative text-sm font-medium text-text-muted transition-colors hover:text-white"
            >
              <span className={cn(isActive(link.to) && "text-white")}>
                {link.label}
              </span>
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-0.5 bg-gold transition-all duration-300",
                  isActive(link.to)
                    ? "w-full"
                    : "w-0 group-hover:w-full",
                )}
              />
            </Link>
          ))}
        </nav>

        <Link
          to="/registration"
          className="hidden rounded-sm bg-gold px-5 py-2 text-sm font-semibold text-ink transition-all hover:bg-gold-light hover:scale-[1.02] md:inline-flex"
        >
          Register Now
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-72 transform bg-ink px-6 pt-20 transition-transform duration-300 md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-6 top-6 text-white"
        >
          <X size={26} />
        </button>
        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "rounded-sm px-3 py-3 text-lg font-medium transition-colors",
                isActive(link.to)
                  ? "bg-surface-2 text-gold"
                  : "text-text-muted hover:text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/registration"
            className="mt-4 rounded-sm bg-gold px-5 py-3 text-center text-base font-semibold text-ink"
          >
            Register Now
          </Link>
        </nav>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}