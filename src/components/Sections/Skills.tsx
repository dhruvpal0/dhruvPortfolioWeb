import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { SKILLS } from "../../constants/data";
import { SectionTitle, GlassCard } from "../UI/Common";
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  ShieldAlert, 
  Wrench,
  Layout,
  Globe,
  Layers,
  Smartphone,
  Flame,
  Binary,
  Activity
} from "lucide-react";
import { useRef } from "react";

const getIcon = (category: string) => {
  switch (category) {
    case "Frontend": return <Layout size={20} />;
    case "Backend": return <Server size={20} />;
    case "Database": return <Database size={20} />;
    case "Languages": return <Globe size={20} />;
    case "Auth & Security": return <ShieldAlert size={20} />;
    case "Tools & Soft Skills": return <Wrench size={20} />;
    default: return <Cpu size={20} />;
  }
};

const SkillItem = ({ name, icon }: { name: string; icon?: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="glass p-4 rounded-xl border border-white/5 flex flex-col items-center justify-center gap-3 group relative overflow-hidden transition-all duration-300 hover:border-brand-blue/40"
    >
      <div style={{ transform: "translateZ(20px)" }} className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-brand-blue group-hover:bg-brand-blue/10 transition-colors">
        {icon || <Binary size={20} />}
      </div>
      <span style={{ transform: "translateZ(15px)" }} className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest group-hover:text-white text-center">
        {name}
      </span>
      {/* Animated Glow Border */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Tech Grid Background Decorations */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none select-none">
         <div className="grid grid-cols-12 h-full gap-4">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/10" />
            ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle 
          title="Technology Control Panel" 
          subtitle="System Core"
        />

        <div className="grid lg:grid-cols-12 gap-12">
           {/* Left Info Column */}
           <div className="lg:col-span-4 space-y-8">
              <GlassCard className="border-brand-blue/20 bg-brand-blue/[0.02]">
                 <div className="flex items-center gap-3 mb-6">
                    <Activity size={20} className="text-brand-blue animate-pulse" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">Stack Analytics</span>
                 </div>
                 <div className="space-y-4">
                    {[
                      { l: "Frontend Mastery", v: 95, c: "bg-brand-blue" },
                      { l: "Backend Engineering", v: 90, c: "bg-brand-purple" },
                      { l: "DevOps & Cloud", v: 80, c: "bg-brand-cyan" },
                      { l: "System Design", v: 85, c: "bg-white" },
                    ].map(s => (
                      <div key={s.l} className="space-y-2">
                         <div className="flex justify-between text-[10px] font-mono text-slate-400">
                            <span>{s.l}</span>
                            <span>{s.v}%</span>
                         </div>
                         <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${s.v}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              className={`h-full ${s.c}`} 
                            />
                         </div>
                      </div>
                    ))}
                 </div>
              </GlassCard>
              
              <div className="p-8 border-l border-brand-blue/30 space-y-4 bg-gradient-to-r from-brand-blue/5 to-transparent">
                 <p className="text-xs font-mono text-slate-400 leading-relaxed uppercase tracking-widest">
                    Execution Mode:<br/>
                    <span className="text-white">OPTIMIZED_PERFORMANCE</span>
                 </p>
                 <p className="text-[10px] font-mono text-slate-500 leading-relaxed">
                    Continuously upgrading the kernel with modern abstractions and high-performance patterns.
                 </p>
              </div>
           </div>

           {/* Right Grid Column */}
           <div className="lg:col-span-8 space-y-12">
             {SKILLS.map((group, idx) => (
               <motion.div 
                 key={group.category}
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
               >
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue text-xs">
                       {getIcon(group.category)}
                    </div>
                    <h3 className="text-[11px] font-mono font-bold text-white uppercase tracking-[0.4em]">{group.category}</h3>
                    <div className="flex-grow h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
                 </div>

                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {group.items.map((item) => (
                      <SkillItem key={item} name={item} />
                    ))}
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};

