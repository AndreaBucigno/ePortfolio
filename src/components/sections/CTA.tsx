import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export function CTA() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 p-12 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/20 via-transparent to-[#22D3EE]/20" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-[#2563EB]/25 blur-[100px]"
            />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#22D3EE]/20 blur-[100px]" />

            <div className="relative">
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
                Hai un progetto in mente?
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-slate-400 text-lg">
                Trasformiamo insieme la tua idea in un sito web moderno,
                veloce e capace di portare nuovi clienti.
              </p>
              <button
                onClick={() => scrollTo("#contatti")}
                className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(37,99,235,0.5)] transition-all hover:shadow-[0_14px_50px_rgba(37,99,235,0.7)] hover:-translate-y-0.5"
              >
                Richiedi un preventivo gratuito
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
