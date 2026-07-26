import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play, CheckCircle2 } from "lucide-react";

export function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-[#2563EB]/25 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full bg-[#22D3EE]/20 blur-[130px]" />
        <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-[#3B82F6]/15 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-slate-300">
                Disponibile per nuovi progetti
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl lg:text-[3.6rem] font-bold tracking-tight text-white"
            >
              Realizzo siti web che{" "}
              <span className="text-gradient">fanno crescere</span> il tuo
              business.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-6 max-w-lg text-lg text-slate-400 leading-relaxed"
            >
              Siti web moderni, veloci e ottimizzati per trasformare i
              visitatori in clienti. Design su misura, codice pulito,
              risultati misurabili.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-9 flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("#contatti")}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(37,99,235,0.4)] transition-all hover:shadow-[0_10px_40px_rgba(37,99,235,0.6)] hover:-translate-y-0.5"
              >
                Richiedi un preventivo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("#contatti")}
                className="group inline-flex items-center justify-center gap-2 rounded-xl glass px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <Play className="h-3.5 w-3.5 fill-white" />
                Contatti
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {["Codice pulito", "Performance 90+", "SEO ready"].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-sm text-slate-400">
                  <CheckCircle2 className="h-4 w-4 text-[#22D3EE]" />
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right - mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
              style={{ perspective: 1200 }}
            >
              <div
                className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-[#151b2e] to-[#0d1220] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                style={{ transform: "rotateY(-14deg) rotateX(6deg)" }}
              >
                <div className="flex items-center gap-1.5 px-2 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
                <div className="rounded-lg overflow-hidden bg-[#0B0F19] border border-white/5">
                  <div className="h-64 relative overflow-hidden p-5">
                    <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#2563EB]/30 blur-3xl" />
                    <div className="h-3 w-24 rounded bg-gradient-to-r from-[#2563EB] to-[#22D3EE] mb-4" />
                    <div className="h-5 w-3/4 rounded bg-white/20 mb-2" />
                    <div className="h-5 w-1/2 rounded bg-white/20 mb-5" />
                    <div className="grid grid-cols-3 gap-2">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + i * 0.15 }}
                          className="h-16 rounded-lg glass"
                        />
                      ))}
                    </div>
                    <div className="mt-4 h-8 w-28 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#3B82F6]" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-10 top-10 glass-strong rounded-xl px-4 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#22D3EE]" />
                  <div>
                    <p className="text-xs text-slate-400">Performance</p>
                    <p className="text-sm font-bold text-white">98/100</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-14 glass-strong rounded-xl px-4 py-3 shadow-2xl"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  <div>
                    <p className="text-xs text-slate-400">Deploy</p>
                    <p className="text-sm font-bold text-white">Completato</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
