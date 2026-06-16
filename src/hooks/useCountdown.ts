import { useEffect, useState } from "react";

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function calculate(target: Date): Countdown {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isComplete: false,
  };
}

export function useCountdown(targetDate: Date): Countdown {
  const [time, setTime] = useState<Countdown>(() => calculate(targetDate));

  useEffect(() => {
    const id = setInterval(() => setTime(calculate(targetDate)), 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return time;
}