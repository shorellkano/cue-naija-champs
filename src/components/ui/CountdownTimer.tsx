import { useCountdown } from "@/hooks/useCountdown";

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-4xl font-black tabular-nums text-gold sm:text-5xl">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-text-muted sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span className="font-display text-3xl font-black text-gold/60 sm:text-4xl">
      :
    </span>
  );
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(targetDate);

  if (isComplete) {
    return (
      <p className="font-display text-2xl font-bold text-gold">
        The tournament is live!
      </p>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      <Unit value={days} label="Days" />
      <Colon />
      <Unit value={hours} label="Hrs" />
      <Colon />
      <Unit value={minutes} label="Min" />
      <Colon />
      <Unit value={seconds} label="Sec" />
    </div>
  );
}