import { motion, useMotionValue, useSpring } from "motion/react";
import { ReactNode, useEffect } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard = ({ children, className = "", delay = 0 }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className={`glass rounded-2xl p-6 glass-hover relative overflow-hidden group shadow-2xl ${className}`}
    >
      {children}
      {/* Subtle inner glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

const CODE_SNIPPETS = [
  "const peerlynk = new Startup();",
  "import { Innovation } from '@dhruv/core';",
  "async function buildFuture() { ... }",
  "export default dhruvPal;",
  "npm install scaling-ecosystem",
  "git push origin master",
  "01001000 01101001",
  "while(alive) { innovate(); }",
  "() => nextGeneration()",
  "await success;"
];

export const Background = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowX = useSpring(mouseX, { stiffness: 45, damping: 25 });
  const glowY = useSpring(mouseY, { stiffness: 45, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#020205] overflow-hidden">
      {/* Deep Space Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,10,25,0.8),#020205)]" />
      
      {/* Animated Mesh Gradient - More Cinematic */}
      <div className="absolute inset-0 bg-glow-mesh opacity-[0.15] mix-blend-screen" />
      
      {/* Reactive Mouse Glow - More Refined */}
      <motion.div 
        style={{ 
          x: glowX, 
          y: glowY,
          translateX: "-50%",
          translateY: "-50%" 
        }}
        className="absolute w-[65vw] h-[65vw] bg-brand-blue/[0.08] blur-[140px] rounded-full pointer-events-none z-0"
      />
      
      {/* Secondary Magenta Accent Glow */}
      <motion.div 
        style={{ 
          x: useSpring(mouseX, { stiffness: 30, damping: 40 }), 
          y: useSpring(mouseY, { stiffness: 30, damping: 40 }),
          translateX: "-30%",
          translateY: "-30%" 
        }}
        className="absolute w-[40vw] h-[40vw] bg-brand-purple/[0.04] blur-[120px] rounded-full pointer-events-none z-0"
      />

      {/* Floating Blobs with Cinematic Movement */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 0.9, 1.1, 1],
          x: [0, 100, -80, 50, 0],
          y: [0, -50, 60, -30, 0]
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-brand-blue/[0.03] blur-[160px] rounded-full"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1.3, 1],
          x: [0, -80, 40, 0],
          y: [0, 100, -50, 0]
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] -right-[20%] w-[60%] h-[60%] bg-brand-purple/[0.03] blur-[160px] rounded-full"
      />
      
      {/* Moving Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-20" />
      
      {/* Matrix-like Code Streams (Subtle) */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] pointer-events-none mix-blend-overlay">
         {Array.from({ length: 12 }).map((_, i) => (
           <motion.div
             key={i}
             initial={{ y: "-100%", x: (i * 8.33) + "%" }}
             animate={{ y: "200%" }}
             transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 10 }}
             className="absolute font-mono text-[10px] text-brand-cyan whitespace-nowrap writing-mode-vertical"
           >
             01011001 10110010 01101100 01101111 01110110 01100101 01110010 01100100 01101000 01110010 01110101 01110110
           </motion.div>
         ))}
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: 0.5
            }}
            animate={{ 
              y: ["0%", "-30%"],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 15 + Math.random() * 20, 
              repeat: Infinity, 
              delay: Math.random() * 20 
            }}
            className="absolute font-mono text-[12px] whitespace-nowrap text-white filter blur-[0.5px]"
          >
            {CODE_SNIPPETS[i % CODE_SNIPPETS.length]}
          </motion.div>
        ))}
      </div>

      {/* Carbon Fibre Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
      
      {/* Top light effect - More glowy */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
      
      {/* Scanline Effect Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[size:100%_2px,3px_100%] pointer-events-none opacity-20" />
    </div>
  );
};


export const SectionTitle = ({ title, subtitle, align = "left" }: { title: string; subtitle?: string; align?: "left" | "center" }) => {
  return (
    <div className={`mb-24 ${align === "center" ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex items-center gap-4 mb-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <div className="w-12 h-[1px] bg-brand-blue/50" />
        <span className="text-brand-blue font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
          {subtitle || "Section"}
        </span>
        {align === "center" && <div className="w-12 h-[1px] bg-brand-blue/50" />}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none"
      >
        {title.split(" ").map((word, i) => (
          <span key={i} className={i % 2 !== 0 ? "text-gradient relative block md:inline" : "inline"}>
            {word}{" "}
            {i % 2 !== 0 && (
              <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent" />
            )}
          </span>
        ))}
      </motion.h2>
    </div>
  );
};
