import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "motion/react";
import { BRAND } from "../../constants/data";
import { ArrowRight, Globe, Cpu, Sparkles, Activity, ShieldCheck, Database, Layout } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("system");
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Software Engineer • Founder";
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(springY, [-500, 500], [15, -15]);
  const rotateY = useTransform(springX, [-500, 500], [-15, 15]);

  const imageParallaxX = useTransform(springX, [-500, 500], [-20, 20]);
  const imageParallaxY = useTransform(springY, [-500, 500], [-20, 20]);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (mounted) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
  }, [mounted]);

  if (!mounted) return null;

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center justify-center pt-20 overflow-hidden bg-bg-dark">
      {/* Cinematic Background Lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-brand-purple/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-brand-cyan/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10 relative">
        
        {/* Left Column: Typography & OS UI */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* System Terminal Header */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
            </div>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-[10px] font-mono font-bold text-brand-blue uppercase tracking-[0.3em] flex items-center gap-2">
              <Activity size={12} className="animate-pulse" /> dhruv_pal_os.sys
            </span>
          </div>

          <h1 className="text-8xl lg:text-[10rem] font-display font-bold text-white tracking-tighter leading-[0.75] mb-8 relative select-none">
            <span className="block overflow-hidden pb-2">
               <motion.span
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                 className="block opacity-90"
               >
                 DHRUV
               </motion.span>
            </span>
            <span className="block overflow-hidden pb-4">
               <motion.span
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                 className="block text-gradient filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
               >
                 PAL
               </motion.span>
            </span>
            
            {/* Split Text Decorative Glitch */}
            <div className="absolute -top-4 -left-4 text-white/5 text-9xl pointer-events-none select-none mask-image-gradient">DHRUV</div>
          </h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6 mb-12"
          >
            <p className="text-2xl text-white font-mono flex items-center gap-2">
               <span className="text-brand-blue">&gt;</span> {displayedText}<span className="animate-pulse">_</span>
            </p>
            <p className="text-xl text-slate-400 max-w-lg font-light leading-relaxed border-l-2 border-brand-blue/30 pl-6">
              {BRAND.tagline}
            </p>
          </motion.div>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-brand-blue text-white rounded-2xl font-bold flex items-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] transition-all"
            >
              Initialize Exploration <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 glass text-white rounded-2xl font-bold border border-white/5 overflow-hidden relative group"
            >
               <span className="relative z-10">Establish Sync</span>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </motion.a>
          </div>
          
          {/* OS Tab Interface */}
          <div className="mt-16 glass border-white/10 rounded-2xl p-6 hidden md:block">
             <div className="flex gap-6 border-b border-white/5 mb-6">
                {["system", "network", "security"].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 text-[10px] font-mono font-bold uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? "text-brand-blue" : "text-slate-500 hover:text-white"}`}
                  >
                    {tab}
                    {activeTab === tab && <motion.div layoutId="tab-active" className="absolute bottom-0 left-0 right-0 h-[1px] bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]" />}
                  </button>
                ))}
             </div>
             <div className="h-24 font-mono text-[11px] text-slate-400 overflow-hidden">
                <AnimatePresence mode="wait">
                  {activeTab === "system" && (
                    <motion.div key="sys" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-1">
                       <div className="flex gap-2"><span className="text-brand-cyan">[CORE]</span> System Kernel: DhruvPal v2.0.1_STABLE</div>
                       <div className="flex gap-2"><span className="text-brand-cyan">[HARD]</span> Architect detected: Full-Stack Synergy Module enabled</div>
                       <div className="flex gap-2"><span className="text-brand-cyan">[STAT]</span> Performance level: CRITICAL_SUCCESS</div>
                       <div className="flex gap-2 animate-pulse"><span className="text-green-500">&gt;</span> system_is_ready_for_innovation_</div>
                    </motion.div>
                  )}
                  {activeTab === "network" && (
                    <motion.div key="net" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-1">
                       <div className="flex justify-between"><span>Node_Ping: 12ms</span> <span className="text-brand-blue">STABLE</span></div>
                       <div className="flex justify-between"><span>Bandwidth: ∞ Gbps</span> <span className="text-brand-blue">OPT_LINK</span></div>
                       <div className="flex justify-between"><span>Location: {BRAND.location}</span> <span className="text-brand-blue">SYNCED</span></div>
                       <div className="w-full h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
                          <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="h-full w-1/3 bg-brand-blue" />
                       </div>
                    </motion.div>
                  )}
                  {activeTab === "security" && (
                    <motion.div key="sec" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-2 gap-4 h-full">
                       <div className="flex items-center gap-3 glass p-3 border-white/5 rounded-xl">
                          <ShieldCheck size={18} className="text-green-500" />
                          <span className="text-[9px]">FIREWALL ACTIVE</span>
                       </div>
                       <div className="flex items-center gap-3 glass p-3 border-white/5 rounded-xl">
                          <Database size={18} className="text-brand-purple" />
                          <span className="text-[9px]">ENCRYPTION 256bit</span>
                       </div>
                       <div className="flex items-center gap-3 glass p-3 border-white/5 rounded-xl">
                          <Cpu size={18} className="text-brand-cyan" />
                          <span className="text-[9px]">THREAT SCAN 0ms</span>
                       </div>
                       <div className="flex items-center gap-3 glass p-3 border-white/5 rounded-xl">
                          <Layout size={18} className="text-white" />
                          <span className="text-[9px]">ZERO TRUST ARCH</span>
                       </div>
                    </motion.div>
                  )}
                </AnimatePresence>
             </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Image Integration */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1500 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center pt-20"
        >
          {/* Main Visual Group */}
          <div className="relative w-full max-w-[500px] z-20 group">
             
             {/* Neon Glow Effects */}
             <div className="absolute inset-[-10%] bg-brand-blue/20 blur-[150px] rounded-full animate-pulse transition-opacity duration-1000 group-hover:opacity-100" />
             <div className="absolute inset-[-5%] bg-gradient-to-tr from-brand-purple/20 to-brand-cyan/20 blur-[100px] rounded-full animate-pulse delay-1000" />
             
             {/* Portrait Image Container */}
             <div className="relative w-full aspect-[1/1] md:aspect-[0.9/1] rounded-[48px] overflow-hidden border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-bg-dark transition-all duration-700 group-hover:border-brand-blue/30 group-hover:shadow-[0_0_80px_rgba(59,130,246,0.15)] flex items-center justify-center">
                
                {/* Parallax Image Wrapper */}
                <motion.div 
                  style={{ x: imageParallaxX, y: imageParallaxY }}
                  className="w-[110%] h-[110%] absolute"
                >
                  <img 
                    src="https://res.cloudinary.com/dqppqvblk/image/upload/v1778862265/dhruvPortfolioImage_n2o3c4.png" 
                    alt="Dhruv Pal - Software Engineer"
                    className="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-[3s] ease-out-expo"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Edge Blending Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent opacity-60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-dark/40 via-transparent to-bg-dark/40 z-10" />
                
                {/* Holographic Lighting Overlays */}
                <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(59,130,246,0.2)] pointer-events-none z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] mix-blend-overlay z-10" />
             </div>

             {/* Dynamic Holographic Labels */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 top-12 glass p-4 rounded-2xl border border-white/20 shadow-2xl z-30 max-w-[200px]"
             >
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
                   <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Bio-Identity</span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 leading-tight">
                   Subject: Dhruv Pal<br/>
                   Role: System Architect<br/>
                   Class: Senior Full-Stack
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-12 bottom-20 glass px-5 py-4 rounded-2xl border border-brand-cyan/30 z-30 shadow-2xl"
             >
                <div className="flex items-center gap-3">
                   <Globe size={18} className="text-brand-cyan animate-pulse" />
                   <div>
                      <div className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Global Status</div>
                      <div className="text-[9px] font-mono text-brand-cyan">LOC_SYNCED: MEERUT_IN</div>
                   </div>
                </div>
             </motion.div>

             {/* Energy Pulse Ring */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/5 rounded-full pointer-events-none opacity-20 scale-[1.2] group-hover:scale-[1.3] transition-transform duration-1000" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full pointer-events-none opacity-10 scale-[1.4] group-hover:scale-[1.5] transition-transform duration-1000 delay-100" />
          </div>

          {/* Background Digital Architecture */}
          <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none select-none">
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] scale-150 rotate-12 opacity-30" />
             {/* Animated Code Streams */}
             <div className="flex flex-col gap-4 absolute -right-20 top-0">
                {Array.from({ length: 40 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    animate={{ x: [0, -100] }}
                    transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                    className="whitespace-nowrap font-mono text-[8px] text-slate-800"
                  >
                    0101110101101010101101010101110101011101
                  </motion.div>
                ))}
             </div>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: 0 
              }}
              animate={{ 
                y: ["0%", "-20%"],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 10, 
                repeat: Infinity, 
                delay: Math.random() * 10 
              }}
              className="absolute w-1 h-1 bg-brand-blue rounded-full blur-[1px]"
            />
          ))}
      </div>

      {/* Bottom Interface Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 glass border-t border-white/5 flex items-center justify-between px-12 z-20 hidden md:flex">
         <div className="flex gap-12">
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">API Latency</span>
               <div className="flex gap-1">
                  {[1,2,3,4,5].map(b => (
                    <motion.div 
                      key={b}
                      animate={{ height: ["40%", "80%", "40%"] }}
                      transition={{ duration: 1, repeat: Infinity, delay: b * 0.1 }}
                      className="w-1 bg-brand-blue rounded-full h-8"
                    />
                  ))}
               </div>
               <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">12ms</span>
            </div>
            <div className="flex items-center gap-4">
               <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">System Load</span>
               <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div animate={{ width: ["10%", "85%", "10%"] }} transition={{ duration: 5, repeat: Infinity }} className="h-full bg-brand-purple" />
               </div>
               <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">32%</span>
            </div>
         </div>
         <div className="flex gap-12">
            <div className="flex items-center gap-3">
               <Sparkles className="text-brand-purple" size={14} />
               <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Creative Mode 2.0</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest leading-none">OPERATIONAL</span>
            </div>
         </div>
      </div>
      
      {/* Cinematic Horizontal Scanline Top & Bottom */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)] z-50" />
      <div className="absolute bottom-16 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)] z-50" />
    </section>
  );
};
