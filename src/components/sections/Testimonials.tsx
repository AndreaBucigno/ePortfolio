import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const REVIEWS = [
  {
    name: "Laura Bianchi",
    company: "Fondatrice, Bottega Verde Home",
    text: "Un lavoro impeccabile. Il nuovo sito ha aumentato le richieste di preventivo del 60% nel primo mese. Comunicazione chiara dall'inizio alla fine.",
    initials: "LB",
  },
  {
    name: "Davide Conti",
    company: "Titolare, Nova Fitness Club",
    text: "Professionalità e attenzione ai dettagli fuori dal comune. La landing page ha convertito da subito, con tempi di consegna rispettati alla lettera.",
    initials: "DC",
  },
  {
    name: "Sara Moretti",
    company: "Studio Legale Marino",
    text: "Finalmente un sito che rispecchia la serietà del nostro studio. Veloce, elegante e semplicissimo da aggiornare in autonomia.",
    initials: "SM",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center mb-16">
          <span className="text-sm font-semibold text-[#22D3EE] tracking-wide uppercase">
            Testimonianze
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white">
            Cosa dicono i clienti
          </h2>
        </Reveal>

        <div className="relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl glass-strong p-10 text-center"
            >
              <Quote className="h-8 w-8 text-[#2563EB] mx-auto mb-5" />
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>
              <p className="text-lg text-slate-200 leading-relaxed mb-7">
                "{REVIEWS[index].text}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#22D3EE] text-sm font-bold text-white">
                  {REVIEWS[index].initials}
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {REVIEWS[index].name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {REVIEWS[index].company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-[#2563EB]" : "w-1.5 bg-white/20"
              }`}
              aria-label={`Recensione ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
