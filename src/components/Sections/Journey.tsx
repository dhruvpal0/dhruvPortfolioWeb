import { motion } from "motion/react";
import { EXPERIENCE, ACHIEVEMENTS } from "../../constants/data";
import { SectionTitle, GlassCard } from "../UI/Common";
import { Briefcase, Trophy, Award, Calendar, ExternalLink, Cpu, Target, Rocket, Activity, Zap, ShieldCheck } from "lucide-react";

export const Journey = () => {
  return (
    <section id="journey" className="py-32 relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-brand-purple/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Experience Timeline - OS Redesign */}
          <div>
            <SectionTitle 
              title="Career Lifecycle" 
              subtitle="System History"
            />

            <div className="space-y-12 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-[1px] before:bg-gradient-to-b before:from-brand-blue/50 before:via-white/10 before:to-transparent">
               {EXPERIENCE.map((exp, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                   className="relative pl-24 group"
                 >
                    {/* Progress Node */}
                    <div className="absolute left-[27px] top-6 w-[11px] h-[11px] rounded-full bg-bg-dark border border-brand-blue shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 group-hover:scale-150 transition-transform" />
                    
                    {/* Timestamp Tag */}
                    <div className="absolute left-0 -top-2 opacity-40 group-hover:opacity-100 transition-opacity">
                       <span className="text-[9px] font-mono font-bold text-brand-blue uppercase tracking-widest">{exp.date}</span>
                    </div>

                    <div className="glass p-10 rounded-3xl border border-white/5 group-hover:border-brand-blue/30 group-hover:bg-brand-blue/[0.01] transition-all duration-500 relative overflow-hidden">
                       <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                          <div className="space-y-1">
                             <h4 className="text-3xl font-display font-bold text-white tracking-tight group-hover:text-brand-blue transition-colors">
                                {exp.title}
                             </h4>
                             <div className="flex items-center gap-2">
                                <div className="w-4 h-[1px] bg-brand-blue/50" />
                                <div className="text-brand-cyan font-mono text-[9px] uppercase tracking-[0.2em]">
                                   {exp.organization} // SRC_OS
                                </div>
                             </div>
                          </div>
                          
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-500 group-hover:text-brand-blue transition-colors">
                             <Zap size={18} />
                          </div>
                       </div>
                       
                       <p className="text-slate-400 font-light leading-relaxed mb-6 text-base italic">
                          "{exp.description}"
                       </p>

                       <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                          <span className="flex items-center gap-1.5"><ShieldCheck size={12} className="text-brand-blue" /> Verified_Module</span>
                          <span className="flex items-center gap-1.5"><Activity size={12} /> Execution_Success</span>
                       </div>

                       {/* Decorative Scanline */}
                       <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-brand-blue/20 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    </div>
                 </motion.div>
               ))}
            </div>
          </div>

          {/* Achievements & Metrics - Dashboard Style */}
          <div>
            <SectionTitle 
              title="Recognition Signals" 
              subtitle="Achievements"
            />

            <div className="grid gap-8">
               {ACHIEVEMENTS.map((award, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                 >
                    <GlassCard className="p-10 group flex items-start gap-10 hover:border-brand-purple/40 hover:bg-brand-purple/[0.01] transition-all relative overflow-hidden">
                       <div className="w-20 h-20 shrink-0 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-brand-purple group-hover:scale-110 group-hover:bg-brand-purple transition-all duration-500 shadow-2xl">
                          {award.icon === "trophy" ? <Trophy size={40} /> : <Award size={40} />}
                       </div>
                       <div className="space-y-4">
                          <div className="flex items-center gap-3">
                             <h4 className="text-2xl font-display font-bold text-white tracking-tight">{award.title}</h4>
                             <div className="px-2 py-0.5 rounded-md border border-brand-purple/20 text-[8px] font-mono text-brand-purple uppercase">Global_Award</div>
                          </div>
                          <p className="text-slate-400 leading-relaxed font-light text-base lg:max-w-xs">
                             {award.description}
                          </p>
                       </div>
                       
                       {/* Background Symbol */}
                       <div className="absolute -right-4 -bottom-4 opacity-[0.03] rotate-12 group-hover:opacity-[0.06] transition-opacity">
                          {award.icon === "trophy" ? <Trophy size={140} /> : <Award size={140} />}
                       </div>
                    </GlassCard>
                 </motion.div>
               ))}

               {/* Advanced Engineering Status Board */}
               <motion.div
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="glass p-12 rounded-[48px] border border-white/10 group bg-brand-blue/[0.02] relative overflow-hidden"
               >
                  <div className="flex items-center justify-between mb-12">
                     <div className="space-y-1">
                        <h4 className="text-xs font-mono font-bold text-white uppercase tracking-[0.4em] flex items-center gap-3">
                           <Cpu size={18} className="text-brand-blue animate-pulse" /> Neural_Network_Status
                        </h4>
                        <p className="text-[10px] font-mono text-slate-600 uppercase">Dhruv_Pal_Engineer_Profile.v2</p>
                     </div>
                     <div className="flex gap-2">
                        {[1,2,3,4].map(b => (
                          <motion.div 
                            key={b} 
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: b * 0.2 }}
                            className="w-2.5 h-2.5 rounded-sm bg-brand-blue" 
                          />
                        ))}
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-12 relative z-10">
                      <div className="group/stat">
                         <div className="text-5xl font-display font-bold text-white mb-2 tracking-tighter group-hover/stat:text-brand-blue transition-colors">99.9%</div>
                         <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest border-l-2 border-brand-blue/30 pl-4">Architecture Efficiency</div>
                      </div>
                      <div className="group/stat">
                         <div className="text-5xl font-display font-bold text-white mb-2 tracking-tighter group-hover/stat:text-brand-purple transition-colors">500k+</div>
                         <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest border-l-2 border-brand-purple/30 pl-4">Binary Commits</div>
                      </div>
                      <div className="group/stat">
                         <div className="text-5xl font-display font-bold text-white mb-2 tracking-tighter group-hover/stat:text-brand-cyan transition-colors">~12ms</div>
                         <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest border-l-2 border-brand-cyan/30 pl-4">System Latency</div>
                      </div>
                      <div className="group/stat">
                         <div className="text-5xl font-display font-bold text-white mb-2 tracking-tighter group-hover/stat:text-green-500 transition-colors">Zero</div>
                         <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest border-l-2 border-green-500/30 pl-4">Security Breach</div>
                      </div>
                  </div>
                  
                  {/* Contribution Pulse visualization */}
                  <div className="mt-16 relative pt-8 border-t border-white/5">
                     <div className="flex gap-1.5 justify-between items-end h-12">
                        {Array.from({ length: 50 }).map((_, i) => (
                          <motion.div 
                            key={i} 
                            animate={{ height: [
                              Math.random() * 40 + 20 + "%", 
                              Math.random() * 80 + 20 + "%", 
                              Math.random() * 40 + 20 + "%"
                            ] }}
                            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                            className={`w-full rounded-t-sm transition-colors duration-500 ${i % 8 === 0 ? 'bg-brand-blue' : i % 5 === 0 ? 'bg-brand-purple/40' : 'bg-white/5 group-hover:bg-white/10'}`}
                          />
                        ))}
                     </div>
                     <div className="flex justify-between mt-4 text-[8px] font-mono text-slate-600 uppercase tracking-widest">
                        <span>Q1_2023</span>
                        <span>ANALYZING_CORE_WAVES_SIGNAL</span>
                        <span>LIVE_SNAPSHOT</span>
                     </div>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

