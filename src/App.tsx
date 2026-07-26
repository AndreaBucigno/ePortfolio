import { useEffect, useState } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Lenis from "lenis";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

import { Preloader } from "@/components/shared/Preloader";
import { BackToTop } from "@/components/shared/BackToTop";
import { CustomCursor } from "@/components/shared/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    let frameId: number;
    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>dev.folio — Sviluppo siti web moderni per aziende e professionisti</title>
        <meta
          name="description"
          content="Realizzo siti web moderni, veloci e ottimizzati per aziende, negozi e professionisti. Design su misura, performance elevate, risultati misurabili."
        />
        <meta property="og:title" content="dev.folio — Web Developer Freelance" />
        <meta
          property="og:description"
          content="Siti web moderni, veloci e ottimizzati per trasformare i visitatori in clienti."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Preloader show={loading} />
      <CustomCursor />

      <div className="relative min-h-screen bg-[#0B0F19]">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Stats />
          <Process />
          <TechStack />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
