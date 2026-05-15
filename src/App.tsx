/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Background } from "./components/UI/Common";
import { Navbar } from "./components/Layout/Navbar";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { Skills } from "./components/Sections/Skills";
import { Projects } from "./components/Sections/Projects";
import { GitHubDashboard } from "./components/Sections/GitHubDashboard";
import { Journey } from "./components/Sections/Journey";
import { Contact, Footer } from "./components/Sections/ContactFooter";
import { CustomCursor, ProgressBar, LoadingScreen, SocialBar } from "./components/UI/Feedback";

export default function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable scrolling initially for loading screen
    document.body.style.overflow = "hidden";

    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-dark selection:bg-brand-blue selection:text-white">
      <LoadingScreen />
      <CustomCursor />
      <ProgressBar />
      <Background />
      <Navbar />
      <SocialBar />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GitHubDashboard />
        <Journey />
        <Contact />
      </main>

      <Footer />
      
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-8 opacity-20 hover:opacity-100 transition-opacity z-50 pointer-events-none">
         <div className="h-8 w-[1px] bg-brand-blue mx-auto" />
         <span className="writing-mode-vertical text-[10px] uppercase tracking-widest font-mono font-bold text-brand-blue">FOUNDER @ PEERLYNK</span>
         <div className="h-8 w-[1px] bg-brand-blue mx-auto" />
      </div>

      {/* Futuristic noise overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://transparenttextures.com/patterns/p6.png')] z-50 overflow-hidden" />
    </div>
  );
}
