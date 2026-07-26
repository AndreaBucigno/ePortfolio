import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const FAQS = [
  {
    q: "Quanto costa un sito?",
    a: "Il costo varia in base a complessità e funzionalità richieste. Dopo una breve call conoscitiva ti invio un preventivo dettagliato e senza sorprese, tarato sulle reali esigenze del tuo progetto.",
  },
  {
    q: "Quanto tempo serve?",
    a: "In media una landing page richiede 1-2 settimane, mentre un sito aziendale completo dalle 3 alle 5 settimane. I tempi esatti vengono concordati insieme prima di iniziare.",
  },
  {
    q: "È incluso il dominio?",
    a: "Dominio e hosting non sono inclusi nel prezzo base, ma posso occuparmi dell'acquisto e della configurazione per conto tuo, guidandoti nella scelta migliore.",
  },
  {
    q: "Posso modificarlo?",
    a: "Sì. Ogni sito viene realizzato con una struttura semplice da aggiornare, e su richiesta posso fornire una breve guida o un pannello per modificare testi e immagini in autonomia.",
  },
  {
    q: "Il sito sarà visibile su smartphone?",
    a: "Assolutamente sì. Ogni progetto è sviluppato con approccio mobile-first e testato su desktop, tablet e smartphone per garantire un'esperienza perfetta ovunque.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center mb-14">
          <span className="text-sm font-semibold text-[#22D3EE] tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white">
            Domande frequenti
          </h2>
        </Reveal>

        <Reveal>
          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="rounded-xl glass overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-white text-[15px] font-medium">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown className="h-4 w-4 text-[#60A5FA]" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-slate-400 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
