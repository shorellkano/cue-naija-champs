interface SectionDividerProps {
  variant?: "wave" | "diagonal" | "fade" | "cue";
  from?: string;
  to?: string;
  className?: string;
}

export function SectionDivider({
  variant = "wave",
  from = "#0A0A0A",
  to = "#1A2A1A",
  className = "",
}: SectionDividerProps) {
  if (variant === "diagonal") {
    return (
      <div
        aria-hidden
        className={className}
        style={{
          height: 100,
          background: to,
          clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div
          style={{
            height: "100%",
            background: from,
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />
      </div>
    );
  }

  if (variant === "fade") {
    return (
      <div
        aria-hidden
        className={className}
        style={{
          height: 96,
          background: `linear-gradient(to bottom, ${from}, ${to})`,
        }}
      />
    );
  }

  if (variant === "cue") {
    return (
      <div
        aria-hidden
        className={className}
        style={{ background: from }}
      >
        <svg
          viewBox="0 0 1200 110"
          preserveAspectRatio="none"
          className="block h-[110px] w-full"
        >
          <rect width="1200" height="110" fill={from} />
          <line
            x1="120"
            y1="55"
            x2="980"
            y2="55"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeDasharray="2 10"
          />
          <circle cx="1010" cy="55" r="14" fill="#006B3C" stroke="#D4AF37" strokeWidth="2" />
          <rect x="180" y="50" width="700" height="10" rx="5" fill="#D4AF37" opacity="0.85" />
          <rect x="180" y="50" width="36" height="10" rx="5" fill="#E8C94E" />
        </svg>
      </div>
    );
  }

  // wave
  return (
    <div aria-hidden className={className} style={{ background: from }}>
      <svg
        viewBox="0 0 1200 110"
        preserveAspectRatio="none"
        className="block h-[110px] w-full"
      >
        <path
          d="M0,40 C300,110 900,-20 1200,60 L1200,110 L0,110 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}