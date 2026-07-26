import { motion } from "framer-motion";
import {
  Building2,
  Rocket,
  ShoppingCart,
  UserSquare2,
  RefreshCcw,
  Search,
  Gauge,
  Smartphone,
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const SERVICES = [
  {
    icon: Building2,
    title: "Siti Web Aziendali",
    desc: "Presenza online professionale che comunica affidabilità e valore ai tuoi clienti.",
  },
  {
    icon: Rocket,
    title: "Landing Page",
    desc: "Pagine ad alta conversione pensate per trasformare i visitatori in lead qualificati.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    desc: "Negozi online veloci, sicuri e ottimizzati per vendere ogni giorno di più.",
  },
  {
    icon: UserSquare2,
    title: "Portfolio Professionali",
    desc: "Vetrine digitali per freelance e professionisti che vogliono distinguersi.",
  },
  {
    icon: RefreshCcw,
    title: "Restyling Siti Web",
    desc: "Rinnoviamo il tuo sito esistente con un design moderno e performante.",
  },
  {
    icon: Search,
    title: "SEO Base",
    desc: "Impostazione tecnica corretta per farti trovare su Google fin da subito.",
  },
  {
    icon: Gauge,
    title: "Ottimizzazione Performance",
    desc: "Velocità di caricamento ai massimi livelli, per utenti e motori di ricerca.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Esperienza impeccabile su ogni dispositivo, dal desktop allo smartphone.",
  },
];

export function Services() {
  return (
    <section id="servizi" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-[#22D3EE] tracking-wide uppercase">
            Servizi
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white">
            Tutto ciò che serve per il tuo progetto digitale
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Dalla progettazione al lancio, mi occupo di ogni aspetto tecnico
            e creativo del tuo sito web.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-2xl glass p-6 overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-[#2563EB]/0 group-hover:bg-[#2563EB]/20 blur-2xl transition-all duration-500" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#2563EB]/20 to-[#22D3EE]/20 border border-white/10 mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <s.icon className="h-5 w-5 text-[#60A5FA]" strokeWidth={1.8} />
                </div>
                <h3 className="relative font-display text-[17px] font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="relative text-sm text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
