import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { Reveal } from "@/components/ui/Reveal";
import { GoldButton } from "@/components/ui/GoldButton";
import { usePaystack } from "@/hooks/usePaystack";
import { TOURNAMENT, formatNaira } from "@/lib/constants";

export const Route = createFileRoute("/registration")({
  head: () => ({
    meta: [
      { title: "Register | Cue Naija Masters" },
      {
        name: "description",
        content:
          "Secure your spot in the Cue Naija Masters, Magodo Edition. Only 32 places available.",
      },
      { property: "og:title", content: "Register Now" },
      {
        property: "og:description",
        content: "32 spots. One champion. Register today.",
      },
    ],
  }),
  component: Registration,
});

const phoneRegex = /^(?:\+234|0)\d{9,10}$/;

const schema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name"),
    dateOfBirth: z.string().min(1, "Required"),
    phoneNumber: z
      .string()
      .regex(phoneRegex, "Use a valid Nigerian number, e.g. 08012345678"),
    sameAsPhone: z.boolean().optional(),
    whatsappNumber: z.string().optional(),
    email: z.string().trim().email("Enter a valid email"),
    experienceLevel: z.enum([
      "Beginner",
      "Intermediate",
      "Advanced",
      "Professional",
    ]),
    emergencyContactName: z.string().trim().min(2, "Required"),
    emergencyContactPhone: z
      .string()
      .regex(phoneRegex, "Use a valid Nigerian number"),
    tshirtSize: z.enum(["XS", "S", "M", "L", "XL", "XXL"]),
    agreeToRules: z.literal(true, {
      errorMap: () => ({ message: "You must agree to the rules" }),
    }),
  })
  .refine(
    (d) => {
      const dob = new Date(d.dateOfBirth);
      const age =
        (Date.now() - dob.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
      return age >= 18;
    },
    { message: "You must be at least 18 years old", path: ["dateOfBirth"] },
  );

type FormValues = z.infer<typeof schema>;

const included = [
  "Tournament participation across all stages",
  "Complimentary drinks during your matches",
  "Official Cue Naija Masters tournament T-shirt",
  "Player certificate of participation",
  "WhatsApp tournament group access",
];

const inputClass =
  "w-full rounded-sm border border-emerald/40 bg-surface-2 px-4 py-3 text-white placeholder:text-text-muted outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30";
const labelClass =
  "mb-1 block text-xs uppercase tracking-wider text-text-muted";
const errorClass = "mt-1 text-sm text-red-400";

function Registration() {
  const { pay, isProcessing } = usePaystack();
  const [reference, setReference] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { experienceLevel: "Beginner", tshirtSize: "M" },
  });

  const sameAsPhone = watch("sameAsPhone");
  const spotsLeft = TOURNAMENT.registration.slots - TOURNAMENT.registration.spotsTaken;
  const progress =
    (TOURNAMENT.registration.spotsTaken / TOURNAMENT.registration.slots) * 100;

  const onSubmit = (data: FormValues) => {
    pay(
      {
        email: data.email,
        fullName: data.fullName,
        tshirtSize: data.tshirtSize,
        experienceLevel: data.experienceLevel,
      },
      (result) => setReference(result.reference),
    );
  };

  return (
    <>
      <PageBanner title="Registration" crumb="Registration" />

      {/* Entry details */}
      <section className="bg-emerald-dark px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Entry Fee
          </p>
          <p className="mt-2 font-display text-5xl font-black text-white">
            {formatNaira(TOURNAMENT.registration.entryFeeNaira)}
          </p>
          <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white/90">
                <Check size={20} className="mt-0.5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mx-auto mt-10 max-w-md">
            <div className="flex justify-between text-sm text-white/80">
              <span>Only {TOURNAMENT.registration.slots} spots available</span>
              <span>{spotsLeft} left</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-black/30">
              <div
                className="h-full rounded-full bg-gold"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-surface px-4 py-20">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-black text-white">
            Player <span className="text-gold">Details</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div>
              <label className={labelClass}>Full Name</label>
              <input className={inputClass} {...register("fullName")} />
              {errors.fullName && (
                <p className={errorClass}>{errors.fullName.message}</p>
              )}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Date of Birth</label>
                <input
                  type="date"
                  className={inputClass}
                  {...register("dateOfBirth")}
                />
                {errors.dateOfBirth && (
                  <p className={errorClass}>{errors.dateOfBirth.message}</p>
                )}
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  className={inputClass}
                  {...register("email")}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  className={inputClass}
                  placeholder="08012345678"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <p className={errorClass}>{errors.phoneNumber.message}</p>
                )}
              </div>
              <div>
                <label className={labelClass}>WhatsApp Number</label>
                <input
                  className={inputClass}
                  placeholder="08012345678"
                  disabled={sameAsPhone}
                  {...register("whatsappNumber")}
                />
                <label className="mt-2 flex items-center gap-2 text-xs text-text-muted">
                  <input type="checkbox" {...register("sameAsPhone")} /> Same as
                  phone
                </label>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Experience Level</label>
                <select className={inputClass} {...register("experienceLevel")}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Professional</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>T-Shirt Size</label>
                <select className={inputClass} {...register("tshirtSize")}>
                  {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Emergency Contact Name</label>
                <input
                  className={inputClass}
                  {...register("emergencyContactName")}
                />
                {errors.emergencyContactName && (
                  <p className={errorClass}>
                    {errors.emergencyContactName.message}
                  </p>
                )}
              </div>
              <div>
                <label className={labelClass}>Emergency Contact Phone</label>
                <input
                  className={inputClass}
                  placeholder="08012345678"
                  {...register("emergencyContactPhone")}
                />
                {errors.emergencyContactPhone && (
                  <p className={errorClass}>
                    {errors.emergencyContactPhone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="flex items-start gap-3 text-sm text-text-muted">
                <input
                  type="checkbox"
                  className="mt-1"
                  {...register("agreeToRules")}
                />
                I have read and agree to the tournament rules and code of conduct.
              </label>
              {errors.agreeToRules && (
                <p className={errorClass}>{errors.agreeToRules.message}</p>
              )}
            </div>

            <GoldButton type="submit" className="w-full" disabled={isProcessing}>
              {isProcessing ? "Processing..." : "Proceed to Payment"}
            </GoldButton>
          </form>
        </Reveal>
      </section>

      {reference && (
        <SuccessModal reference={reference} onClose={() => setReference(null)} />
      )}
    </>
  );
}

function SuccessModal({
  reference,
  onClose,
}: {
  reference: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-md rounded-sm border border-emerald/40 bg-surface p-8 text-center"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 text-text-muted hover:text-white"
        >
          <X size={22} />
        </button>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring" }}
          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20"
        >
          <CheckCircle2 size={40} className="text-gold" />
        </motion.div>
        <h3 className="mt-5 font-display text-2xl font-black text-white">
          Registration Complete!
        </h3>
        <p className="mt-2 text-sm text-text-muted">Reference: {reference}</p>
        <p className="mt-1 text-sm text-text-muted">
          Check your email for confirmation.
        </p>
        {TOURNAMENT.registration.whatsappGroupLink ? (
          <a
            href={TOURNAMENT.registration.whatsappGroupLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-sm bg-[#25D366] px-6 py-3 font-semibold text-white"
          >
            Join the WhatsApp Group
          </a>
        ) : null}
        <GoldButton to="/" className="mt-4 w-full">
          Back to Home
        </GoldButton>
      </motion.div>
    </div>
  );
}