import { useCountUp } from "@/hooks/useCountUp";
import { Reveal } from "@/components/shared/Reveal";
import { Palette, Code, HeadphonesIcon, Search } from "lucide-react";

function StatNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref} className="font-display text-5xl sm:text-6xl font-bold text-gradient">
      {value}
      {suffix}
    </div>
  );
}

const QUALITIES = [
  { icon: Code, title: "Codice Pulito", desc: "Best practice e architettura scalabile" },
  { icon: Search, title: "SEO Friendly", desc: "Struttura ottimizzata per i motori di ricerca" },
  { icon: Palette, title: "Design Moderno", desc: "Interfacce curate nei minimi dettagli" },
  { icon: HeadphonesIcon, title: "Assistenza", desc: "Supporto continuo dopo il lancio" },
];

export function Stats() {
  return (
    <section id="perche" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-[#22D3EE] tracking-wide uppercase">
            Perché scegliere me
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white">
            Numeri che parlano chiaro
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Reveal>
            <div className="rounded-2xl glass p-8 text-center">
              <StatNumber target={100} suffix="%" />
              <p className="mt-2 text-sm text-slate-400">Responsive</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl glass p-8 text-center">
              <StatNumber target={90} suffix="+" />
              <p className="mt-2 text-sm text-slate-400">Performance Lighthouse</p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="rounded-2xl glass p-8 text-center">
              <StatNumber target={24} suffix="h" />
              <p className="mt-2 text-sm text-slate-400">Tempo di risposta</p>
            </div>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {QUALITIES.map((q, i) => (
            <Reveal key={q.title} delay={i * 0.08}>
              <div className="flex items-start gap-3 rounded-xl border border-white/5 p-5 hover:border-white/10 transition-colors">
                <q.icon className="h-5 w-5 text-[#60A5FA] mt-0.5 shrink-0" strokeWidth={1.8} />
                <div>
                  <p className="text-sm font-semibold text-white">{q.title}</p>
                  <p className="text-xs text-slate-500 mt-1">{q.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
