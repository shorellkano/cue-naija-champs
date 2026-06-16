import { useState, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

export function CueAccordion({
  items,
  defaultOpen = -1,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="divide-y divide-emerald/20">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span
                className={cn(
                  "font-display text-lg font-bold transition-colors",
                  isOpen ? "text-gold" : "text-white",
                )}
              >
                {item.title}
              </span>
              <span className="text-gold">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen
                  ? "grid-rows-[1fr] pb-5 opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden text-sm leading-relaxed text-text-muted">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}