import { Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#2563EB] to-[#22D3EE]">
            <Code2 className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm font-bold text-white">
            Andrea<span className="text-[#22D3EE]">.Bucigno</span>
          </span>
          <span className="text-xs text-slate-600 ml-2">
            © {new Date().getFullYear()} — Tutti i diritti riservati
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-500">
          <a href="#servizi" className="hover:text-white transition-colors">Servizi</a>
          <a href="#contatti" className="hover:text-white transition-colors">Contatti</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie</a>
        </div>
      </div>
    </footer>
  );
}
