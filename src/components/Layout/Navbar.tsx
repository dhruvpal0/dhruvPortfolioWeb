import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { NAVIGATION, BRAND } from "../../constants/data";
import { Menu, X, Github, Linkedin, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const { scrollY } = useScroll();
  
  const navBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(5, 5, 5, 0)", "rgba(5, 5, 5, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = NAVIGATION.map(n => n.name.toLowerCase());
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      style={{ backgroundColor: navBg }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl border-b ${
        scrolled ? "border-white/10 py-4" : "border-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white font-display font-black text-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:rotate-12 transition-transform">
            D
          </div>
          <span className="text-xl font-display font-bold text-white tracking-widest hidden sm:block">
            PAL<span className="text-brand-cyan">.</span>
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center glass px-6 py-2 rounded-2xl border-white/5 relative">
          <div className="flex items-center gap-8">
            {NAVIGATION.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setActiveSection(item.name)}
                className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all relative py-2 ${
                  activeSection === item.name ? "text-white" : "text-slate-500 hover:text-white"
                }`}
              >
                {item.name}
                {activeSection === item.name && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4 px-4 py-2 glass rounded-xl border-white/5">
            <a href={BRAND.links.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={BRAND.links.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex px-6 py-2.5 bg-white text-bg-dark rounded-xl font-bold text-xs uppercase tracking-widest items-center gap-2"
          >
            Hire Me <Terminal size={14} />
          </motion.a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white p-2 glass rounded-lg border-white/10"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "100vh" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="md:hidden fixed inset-0 top-0 bg-bg-dark/95 backdrop-blur-2xl z-[49] flex flex-col items-center justify-center p-6"
          >
            <div className="flex flex-col items-center gap-12">
              {NAVIGATION.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-bold text-white hover:text-brand-blue tracking-tighter"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <div className="flex gap-8 pt-12 border-t border-white/10 w-full justify-center">
                <a href={BRAND.links.github} className="text-slate-400 hover:text-white scale-150">
                  <Github />
                </a>
                <a href={BRAND.links.linkedin} className="text-slate-400 hover:text-white scale-150">
                  <Linkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
