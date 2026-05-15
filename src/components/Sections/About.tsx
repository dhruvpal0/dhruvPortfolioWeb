import { motion } from "motion/react";
import { BRAND } from "../../constants/data";
import { GlassCard, SectionTitle } from "../UI/Common";
import { Rocket, Target, Users, Zap, Shield, Sparkles, Binary, Cpu, Network } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] bg-brand-purple/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Architecting the Future" 
          subtitle="Mission Core"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Subject Identifier Header */}
            <div className="flex items-center gap-3 mb-6 font-mono text-[9px] text-brand-purple uppercase tracking-[0.4em]">
               <Binary size={14} /> Subject_dhruv_pal.identity
            </div>

            <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none mb-10">
              Transforming <span className="text-brand-purple">Abstractions</span> <br/>
              into <span className="text-gradient">Production-Grade Systems.</span>
            </h2>
            
            <div className="space-y-8 text-xl text-slate-400 font-light leading-relaxed mb-12 relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
              <div className="pl-10 space-y-6">
                 <p>
                   Engineer-Founder specializing in the synthesis of human-centric design and high-availability architecture. Leverages React Ecosystem (React, Native, Next), Node.js, and Distributed Databases to solve systemic challenges.
                 </p>
                 <p className="border-l-2 border-brand-purple/30 pl-6 italic">
                   "Built <span className="text-white font-bold">peerlynk</span>, an integrated academic ecosystem currently scaling to redefine institutional connectivity."
                 </p>
                 <p>
                   Mission: To engineer digital infrastructure that is inherently scalable, secure, and intuitive.
                 </p>
              </div>
            </div>

            <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex px-10 py-4 glass text-white rounded-2xl font-bold border border-white/5 hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all uppercase tracking-[0.3em] text-[10px] items-center gap-3"
              >
                Access Archive <Sparkles size={14} className="text-brand-purple" />
            </motion.a>
          </motion.div>

          {/* Right Column: Interactive OS Logic Modules */}
          <div className="grid sm:grid-cols-2 gap-6 relative">
             {/* Connector Lines */}
             <div className="absolute inset-0 pointer-events-none hidden sm:block">
                <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
                   <path d="M 50,25 L 50,75 M 25,50 L 75,50" stroke="white" strokeWidth="0.5" fill="none" />
                </svg>
             </div>

             <div className="space-y-6">
                <GlassCard className="group relative overflow-hidden border-brand-blue/20 hover:border-brand-blue/50">
                   <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                         <Target size={24} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-tighter">Founder Mindset</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-mono font-light text-[11px] uppercase tracking-wider">
                         Translating stakeholder requirements into technical specifications with high business ROI.
                      </p>
                   </div>
                   {/* Background Glow */}
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-blue/10 blur-[40px] rounded-full group-hover:bg-brand-blue/20 transition-all" />
                </GlassCard>
                
                <GlassCard className="group relative overflow-hidden border-brand-cyan/20 hover:border-brand-cyan/50 sm:translate-y-12" delay={0.2}>
                   <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan mb-6 group-hover:scale-110 transition-transform">
                         <Network size={24} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-tighter">Distributed Architecture</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-mono font-light text-[11px] uppercase tracking-wider">
                         Designing micro-services and real-time streams for seamless global synchronization.
                      </p>
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-cyan/10 blur-[40px] rounded-full group-hover:bg-brand-cyan/20 transition-all" />
                </GlassCard>
             </div>

             <div className="space-y-6 sm:translate-y-12">
                <GlassCard className="group relative overflow-hidden border-brand-purple/20 hover:border-brand-purple/50" delay={0.1}>
                   <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-6 group-hover:scale-110 transition-transform">
                         <Rocket size={24} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-tighter">Full-Stack Synthesis</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-mono font-light text-[11px] uppercase tracking-wider">
                         End-to-end execution from low-level database optimization to high-fidelity UI interaction.
                      </p>
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-purple/10 blur-[40px] rounded-full group-hover:bg-brand-purple/20 transition-all" />
                </GlassCard>

                <GlassCard className="group relative overflow-hidden border-green-500/20 hover:border-green-500/50 sm:translate-y-12" delay={0.3}>
                   <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-6 group-hover:scale-110 transition-transform">
                         <Shield size={24} />
                      </div>
                      <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-tighter">Zero-Trust Framework</h3>
                      <p className="text-sm text-slate-500 leading-relaxed font-mono font-light text-[11px] uppercase tracking-wider">
                         Prioritizing data integrity and system security through hardened protocols.
                      </p>
                   </div>
                   <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/10 blur-[40px] rounded-full group-hover:bg-green-500/20 transition-all" />
                </GlassCard>
             </div>
          </div>
        </div>

        {/* Stats Section Integration */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-5 gap-6">
           {[
             { label: "Projects Built", value: "25+", icon: Rocket, color: "text-brand-blue" },
             { label: "Technologies", value: "18+", icon: Cpu, color: "text-brand-purple" },
             { label: "Hackathons", value: "12", icon: Target, color: "text-brand-cyan" },
             { label: "Certificates", value: "08", icon: Shield, color: "text-green-500" },
             { label: "Learning Status", value: "Live", icon: Zap, color: "text-yellow-400" },
           ].map((stat, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
               <GlassCard className="p-8 group text-center border-white/5 hover:border-brand-blue/30">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${stat.color} mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                     <stat.icon size={22} />
                  </div>
                  <div className="text-3xl font-display font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest leading-none">{stat.label}</div>
               </GlassCard>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

