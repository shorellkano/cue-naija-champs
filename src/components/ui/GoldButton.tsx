import { Link } from "@tanstack/react-router";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 bg-gold text-ink font-semibold px-8 py-3 rounded-sm tracking-wide transition-all duration-200 hover:bg-gold-light hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none";

interface CommonProps {
  children: ReactNode;
  className?: string;
}

export function GoldButton({
  to,
  href,
  className,
  children,
  ...props
}: CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    to?: string;
    href?: string;
  }) {
  if (to) {
    return (
      <Link to={to} className={cn(base, className)}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(base, className)}
      >
        {children}
      </a>
    );
  }
  return (
    <button className={cn(base, className)} {...props}>
      {children}
    </button>
  );
}