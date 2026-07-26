import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Reveal } from "@/components/shared/Reveal";

const CONTACTS = [
  { icon: Mail, label: "Email", value: "bucignoandrea@gmail.com" },
  { icon: Phone, label: "Telefono", value: "+39 3921006757" },
];

const SOCIALS = [
  { icon: FaInstagram, label: "Instagram", url: "https://www.instagram.com/andreabucigno_/" },
  { icon: FaLinkedinIn, label: "LinkedIn", url: "#" },
  { icon: FaGithub, label: "GitHub", url: "https://github.com/AndreaBucigno" },
];

export function Contact() {
  return (
    <section id="contatti" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl mb-16">
          <span className="text-sm font-semibold text-[#22D3EE] tracking-wide uppercase">
            Contatti
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold text-white">
            Parliamo insieme
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Puoi contattarmi direttamente via email o telefono. Risponderò al più presto.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="rounded-2xl glass p-10 space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  Contattami subito
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Se hai bisogno di un sito web moderno, ottimizzato e su misura,
                  scrivimi oppure chiamami. Sono disponibile per nuove collaborazioni
                  e posso aiutarti a trasformare la tua idea in un progetto reale.
                </p>
              </div>

              <div className="space-y-5">
                {CONTACTS.map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10">
                      <contact.icon className="h-5 w-5 text-[#60A5FA]" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        {contact.label}
                      </p>
                      <p className="mt-1 text-base text-white font-medium">{contact.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl glass-strong p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-semibold text-white mb-4">
                  Seguimi sui social
                </h3>
                <p className="text-slate-400 leading-relaxed mb-8">
                  Resta aggiornato sui progetti e confrontiamoci sulle tue esigenze.
                </p>
              </div>

              <div className="flex items-center gap-3">
                {SOCIALS.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-[#2563EB]/50 hover:bg-[#2563EB]/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-slate-300" />
                  </motion.a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
