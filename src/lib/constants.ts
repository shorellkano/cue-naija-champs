export const TOURNAMENT = {
  name: "Cue Naija Masters",
  edition: "Magodo Edition",
  tagline: "The Pinnacle of Nigerian Snooker",
  year: 2026,
  date: {
    day1: "Saturday, March 14 2026",
    day2: "Sunday, March 15 2026",
    // Countdown target. Update to the confirmed start time.
    targetDate: new Date("2026-03-14T10:00:00+01:00"),
  },
  venue: {
    name: "The Cue Lounge, Magodo",
    address: "Magodo Phase 1, Lagos, Nigeria",
    // Replace with the confirmed Google Maps embed URL.
    mapEmbedUrl:
      "https://www.google.com/maps?q=Magodo+Phase+1+Lagos&output=embed",
    parking: "Free parking available on premises",
  },
  contact: {
    // Replace with the real WhatsApp business number (international format, no +).
    whatsapp: "2348000000000",
    email: "info@cuenaijamasters.com",
    instagram: "https://instagram.com/cuenaijamasters",
    twitter: "https://twitter.com/cuenaijamasters",
    facebook: "https://facebook.com/cuenaijamasters",
  },
  registration: {
    slots: 32,
    spotsTaken: 19,
    entryFeeNaira: 10000,
    get entryFeeKobo() {
      return this.entryFeeNaira * 100;
    },
    deadline: new Date("2026-03-07T23:59:00+01:00"),
    // Replace when the player WhatsApp group is created.
    whatsappGroupLink: "",
  },
  paystack: {
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string | undefined,
  },
} as const;

export const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I'm interested in the Cue Naija Masters, Magodo Edition. Please send me more details.",
);

export const WHATSAPP_URL = `https://wa.me/${TOURNAMENT.contact.whatsapp}?text=${WHATSAPP_MESSAGE}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Rules", to: "/rules" },
  { label: "Schedule", to: "/schedule" },
  { label: "Registration", to: "/registration" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms and Conditions", to: "/terms" },
  { label: "Cookie Policy", to: "/cookies" },
] as const;

export function formatNaira(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}