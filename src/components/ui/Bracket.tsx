const rounds = [
  { title: "Round of 16", count: 8 },
  { title: "Quarter-Finals", count: 4 },
  { title: "Semi-Finals", count: 2 },
  { title: "Final", count: 1 },
];

export function Bracket() {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[640px] gap-6">
        {rounds.map((round) => (
          <div key={round.title} className="flex flex-1 flex-col">
            <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {round.title}
            </p>
            <div className="flex flex-1 flex-col justify-around gap-3">
              {Array.from({ length: round.count }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-sm border-l-2 px-3 py-2 text-xs text-text-muted ${
                    round.count === 1
                      ? "border-gold bg-emerald-dark/40 text-white"
                      : "border-emerald bg-surface-2"
                  }`}
                >
                  {round.count === 1 ? "Champion" : "TBD"}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}