import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { BRAND } from "../../constants/data";

interface Particle {
  id: number;
  x: number;
  y: number;
  symbol: string;
}

const SYMBOLS = ["</>", "{ }", "const", "npm", "async", "=>", "01", "git", "[]", "ptr", "JWT", "SQL", "API", "Node"];

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleId = useRef(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const cursorY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);

      // Add particle
      if (Math.random() > 0.75) {
        const id = particleId.current++;
        setParticles((prev) => [
          ...prev.slice(-20),
          { 
            id, 
            x: clientX, 
            y: clientY, 
            symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)] 
          }
        ]);
        
        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== id));
        }, 800);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.tagName === "A" || 
                        target.tagName === "BUTTON" || 
                        target.closest("a") || 
                        target.closest("button") ||
                        target.classList.contains("clickable");
      setIsHovering(!!clickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Particles Trail */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            initial={{ opacity: 0.8, scale: 0.5, y: 0 }}
            animate={{ opacity: 0, scale: 1.2, y: -20 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 pointer-events-none z-[9998] text-[10px] font-mono text-brand-blue/40"
            style={{ x: p.x, y: p.y, translateX: "-50%", translateY: "-50%" }}
          >
            {p.symbol}
          </motion.span>
        ))}
      </AnimatePresence>

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-blue/30 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.2)" : "transparent",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand-cyan pointer-events-none z-[10000] hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-white/5 z-[60]">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-cyan shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export const LoadingScreen = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const baseLogs = [
    "Dhruv_Pal_OS v2026.0.1 initializing...",
    "Loading kernel modules...",
    "Scanning hardware: Full-Stack Developer detected",
    "Connecting to peerlynk.cloud...",
    "Fetching identity: Founder & Engineer",
    "Bootstrapping futuristic UI components...",
    "Applying glassmorphism shaders...",
    "Compiling creative vision...",
    "Starting system..."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < baseLogs.length) {
        setLogs((prev) => [...prev, baseLogs[current]]);
        current++;
      } else {
        clearInterval(interval);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      onAnimationComplete={() => {
        if (typeof document !== 'undefined') {
          document.body.style.overflow = "auto";
        }
      }}
      className="fixed inset-0 z-[100] bg-bg-dark flex flex-col items-center justify-center overflow-hidden p-6"
    >
      <div className="max-w-md w-full font-mono text-[11px] space-y-1 mb-8">
        {logs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-slate-600">[{new Date().toLocaleTimeString()}]</span>
            <span className={i === logs.length - 1 ? "text-brand-cyan terminal-cursor" : "text-slate-400"}>
              {log}
            </span>
          </div>
        ))}
      </div>

      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="text-5xl font-display font-bold text-white mb-2 tracking-tighter"
        >
          DHRUV<span className="text-brand-blue">.</span>PAL
        </motion.div>
        <motion.div
           initial={{ width: 0 }}
           animate={{ width: "100%" }}
           transition={{ duration: 2, ease: "easeInOut" }}
           className="h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full"
        />
      </div>
    </motion.div>
  );
};

export const SocialBar = () => {
  const socialLinks = [
    { icon: Github, href: BRAND.links.github, label: "GitHub" },
    { icon: Linkedin, href: BRAND.links.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${BRAND.email}`, label: "Email" },
    { icon: Twitter, href: BRAND.links.twitter, label: "Twitter" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1 }}
      className="fixed left-8 top-1/2 -translate-y-1/2 z-[50] hidden xl:flex flex-col gap-6"
    >
      <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-brand-blue/30 to-brand-blue/50 mx-auto" />
      {socialLinks.map((social, i) => (
        <motion.a
          key={i}
          href={social.href}
          target="_blank"
          whileHover={{ x: 5, color: "#3B82F6", scale: 1.1 }}
          className="text-slate-600 transition-all group relative p-2"
        >
          <social.icon size={20} />
          <span className="absolute left-full ml-4 px-2 py-1 bg-brand-blue text-[8px] font-mono font-bold text-white uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {social.label}
          </span>
        </motion.a>
      ))}
      <div className="w-[1px] h-24 bg-gradient-to-t from-transparent via-brand-blue/30 to-brand-blue/50 mx-auto" />
    </motion.div>
  );
};
