import { motion } from "framer-motion";
import logo from "@/assets/cue-naija-logo.png.asset.json";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { GoldButton } from "@/components/ui/GoldButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { TOURNAMENT } from "@/lib/constants";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      className="felt-texture relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, #004D2A 0%, #0A0A0A 70%)",
      }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.15 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.img
          variants={item}
          src={logo.url}
          alt="Cue Naija Masters logo"
          className="h-28 w-28 rounded-full object-cover ring-2 ring-gold/70 sm:h-32 sm:w-32"
        />
        <motion.h1
          variants={item}
          className="mt-6 font-display text-5xl font-black uppercase tracking-tight text-white sm:text-7xl"
        >
          Cue Naija Masters
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-3 font-body text-lg font-light text-gold sm:text-xl"
        >
          {TOURNAMENT.tagline}
        </motion.p>
        <motion.span
          variants={item}
          className="mt-5 rounded-full border border-gold bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          {TOURNAMENT.edition} {TOURNAMENT.year}
        </motion.span>
        <motion.div variants={item} className="mt-10">
          <CountdownTimer targetDate={TOURNAMENT.date.targetDate} />
        </motion.div>
        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <GoldButton to="/registration">Register Now</GoldButton>
          <OutlineButton to="/about">View Details</OutlineButton>
        </motion.div>
      </motion.div>
    </section>
  );
}