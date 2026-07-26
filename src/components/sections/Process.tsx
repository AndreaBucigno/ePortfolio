import { Reveal } from "@/components/shared/Reveal";
import {
  MessageCircle,
  SearchCheck,
  PenTool,
  Code2,
  Eye,
  Rocket,
} from "lucide-react";

const STEPS = [
  { icon: MessageCircle, title: "Contatto", desc: "Ci confrontiamo sulle tue esigenze e sugli obiettivi del progetto." },
  { icon: SearchCheck, title: "Analisi", desc: "Studio il tuo settore, la concorrenza e il pubblico di riferimento." },
  { icon: PenTool, title: "Progettazione", desc: "Definisco struttura, wireframe e identità visiva del sito." },
  { icon: Code2, title: "Sviluppo", desc: "Scrivo codice pulito e performante seguendo le best practice moderne." },
  { icon: Eye, title: "Revisione", desc: "Verifichiamo insieme ogni dettaglio prima della pubblicazione." },
  { icon: Rocket, title: "Pubblicazione", desc: "Il tuo sito va online, pronto ad accogliere i primi visitatori." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-20">
          <span className="text-sm font-semibold text-[#22D3EE] tracking-wide uppercase">
            Processo di lavoro
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white">
            Un metodo chiaro, dal primo contatto al lancio
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="grid lg:grid-cols-6 gap-10 lg:gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B0F19] border-2 border-[#2563EB] shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                    <step.icon className="h-5 w-5 text-[#60A5FA]" strokeWidth={1.8} />
                  </div>
                  <div className="mt-5">
                    <span className="text-xs font-mono text-[#22D3EE]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-semibold text-white mt-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
