import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppWidget() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {hover && (
        <span className="hidden rounded-sm bg-surface-2 px-3 py-2 text-sm font-medium text-white shadow-lg sm:block">
          Chat with us on WhatsApp
        </span>
      )}
      <span className="wa-pulse flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105">
        <MessageCircle size={28} fill="currentColor" />
      </span>
    </a>
  );
}