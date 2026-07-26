import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

const LINKS = [
  { href: "#servizi", label: "Servizi" },
  { href: "#perche", label: "Perché me" },
  { href: "#processo", label: "Processo" },
  { href: "#tecnologie", label: "Stack" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, #2563EB, #22D3EE)",
        }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.35)]" : ""
            }`}
          >
            <a href="#top" className="flex items-center gap-2 group">
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#22D3EE] shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-transform duration-300 group-hover:rotate-[-8deg]">
                <Code2 className="h-4 w-4 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-[15px] font-bold tracking-tight text-white">
                Andrea<span className="text-[#22D3EE]">.Bucigno</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg transition-colors hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNav("#contatti")}
                className="group inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all hover:shadow-[0_6px_28px_rgba(37,99,235,0.55)] hover:-translate-y-0.5"
              >
                Contattami
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[72px] left-0 right-0 z-40 mx-4 overflow-hidden rounded-2xl glass-strong lg:hidden"
          >
            <div className="flex flex-col p-4">
              {LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="px-4 py-3 text-left text-slate-200 hover:text-white text-[15px] border-b border-white/5 last:border-0"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNav("#contatti")}
                className="mt-3 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#3B82F6] px-4 py-3 text-sm font-semibold text-white text-center"
              >
                Contattami
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
