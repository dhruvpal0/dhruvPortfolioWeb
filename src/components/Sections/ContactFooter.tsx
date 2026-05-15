import { motion } from "motion/react";
import { BRAND } from "../../constants/data";
import { GlassCard, SectionTitle } from "../UI/Common";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, Terminal, Cpu, ShieldCheck, Activity } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Initialize Handshake" 
          subtitle="Sync Protocol"
          align="center"
        />

        <div className="max-w-5xl mx-auto">
           <GlassCard className="p-1 lg:p-1 border-white/5 relative overflow-hidden group rounded-[40px] bg-[#050508]">
              {/* Outer Glow Border Simulation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 via-transparent to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              
              <div className="relative bg-[#08080a] rounded-[39px] p-8 lg:p-16 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                   <div className="space-y-12">
                      <div className="space-y-6">
                         <div className="flex items-center gap-3 text-brand-blue font-mono text-[10px] uppercase tracking-[0.4em]">
                            <Cpu size={14} /> connection_params.init
                         </div>
                         <h3 className="text-5xl lg:text-6xl font-display font-bold text-white tracking-tighter leading-none">
                            Ready for the <span className="text-brand-blue italic">Next Epoch?</span>
                         </h3>
                         <p className="text-xl text-slate-400 font-light leading-relaxed max-w-md">
                            Actively seeking high-bandwidth collaborations and engineering leadership opportunities.
                         </p>
                      </div>

                      <div className="space-y-6">
                         <motion.a 
                           href={`mailto:${BRAND.email}`} 
                           whileHover={{ x: 10 }}
                           className="flex items-center gap-6 text-slate-300 hover:text-brand-blue transition-all group/link p-6 glass rounded-2xl border border-white/5 hover:border-brand-blue/30"
                         >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover/link:bg-brand-blue group-hover/link:text-white transition-all shadow-xl">
                               <Mail size={24} />
                            </div>
                            <div>
                               <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold mb-1">Direct Uplink</div>
                               <div className="text-lg font-medium tracking-tight">{BRAND.email}</div>
                            </div>
                         </motion.a>
                         
                         <div className="flex items-center gap-6 text-slate-300 p-6 glass rounded-2xl border border-white/5">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-purple shadow-xl">
                               <MapPin size={24} />
                            </div>
                            <div>
                               <div className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold mb-1">Base Geo-Sync</div>
                               <div className="text-lg font-medium tracking-tight">{BRAND.location}</div>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* OS Terminal Contact Form Simulation */}
                   <div className="relative">
                      {/* Terminal Shadow Glow */}
                      <div className="absolute -inset-4 bg-brand-purple/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                      
                      <div className="glass p-10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl space-y-8 relative z-10 shadow-2xl">
                         {/* Terminal Header */}
                         <div className="flex items-center justify-between border-b border-white/5 pb-6">
                            <div className="flex gap-2">
                               <div className="w-3 h-3 rounded-full bg-red-500/30" />
                               <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                               <div className="w-3 h-3 rounded-full bg-green-500/30" />
                            </div>
                            <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                               <ShieldCheck size={12} className="text-green-500" /> secure_transmission_active
                            </div>
                         </div>
                         
                         <div className="font-mono text-sm space-y-6 pt-4">
                            <div className="flex gap-4">
                               <span className="text-slate-600">01</span> 
                               <span className="text-brand-blue">&gt; initialize_comms(session_id: "0x{Math.random().toString(16).slice(2, 8).toUpperCase()}")</span>
                            </div>
                            <div className="space-y-4">
                               <div className="flex gap-4 items-start">
                                  <span className="text-slate-600">02</span> 
                                  <div className="flex-grow">
                                     <span className="text-slate-400">await.dispatch(&#123;</span>
                                     <div className="pl-10 space-y-2 mt-2">
                                        <div className="flex gap-2">
                                           <span className="text-brand-purple">"type":</span> 
                                           <span className="text-green-400">"NEW_INQUIRY",</span>
                                        </div>
                                        <div className="flex gap-2">
                                           <span className="text-brand-purple">"priority":</span> 
                                           <span className="text-green-400">"PLATINUM",</span>
                                        </div>
                                        <div className="flex gap-2">
                                           <span className="text-brand-purple">"encryption":</span> 
                                           <span className="text-green-400">"AES-256-GCM"</span>
                                        </div>
                                     </div>
                                     <span className="text-slate-400"> &#125;)</span>
                                  </div>
                               </div>
                            </div>
                            <div className="flex gap-4">
                               <span className="text-slate-600">03</span> 
                               <span className="text-brand-blue animate-pulse">&gt; system.awaiting_handshake..._</span>
                            </div>
                         </div>

                         <motion.a
                           href={`mailto:${BRAND.email}`}
                           whileHover={{ scale: 1.02 }}
                           whileTap={{ scale: 0.98 }}
                           className="w-full py-5 bg-brand-blue text-white rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 mt-6 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all"
                         >
                            Establish Sync <Send size={16} />
                         </motion.a>
                      </div>

                      {/* Floating UI Bits */}
                      <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-6 -right-6 glass p-4 rounded-2xl border border-white/20 shadow-2xl z-20"
                      >
                         <Activity size={20} className="text-brand-blue" />
                      </motion.div>
                   </div>
                </div>
              </div>
           </GlassCard>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-24 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <div className="space-y-6 max-w-sm">
            <h2 className="text-4xl font-display font-bold text-white tracking-tighter">
              DHRUV PAL<span className="text-brand-blue">.</span>
            </h2>
            <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.5em] leading-relaxed">
               Founder • Engineer • System Architect<br/>
               Building the Infrastructure of Tomorrow.
            </p>
            <div className="flex gap-6 pt-4">
               {[
                 { icon: Github, link: BRAND.links.github },
                 { icon: Linkedin, link: BRAND.links.linkedin },
                 { icon: Twitter, link: BRAND.links.twitter }
               ].map((s, i) => (
                 <motion.a 
                   key={i}
                   href={s.link} 
                   target="_blank"
                   whileHover={{ y: -5, color: "#3B82F6" }}
                   className="text-slate-600 transition-colors"
                 >
                   <s.icon size={22} />
                 </motion.a>
               ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
             <div className="space-y-6">
                <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">Protocol</h4>
                <ul className="space-y-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                   <li><a href="#about" className="hover:text-brand-blue transition-colors">Core_About</a></li>
                   <li><a href="#skills" className="hover:text-brand-blue transition-colors">Stack_Control</a></li>
                   <li><a href="#projects" className="hover:text-brand-blue transition-colors">Lab_Archives</a></li>
                </ul>
             </div>
             <div className="space-y-6">
                <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">System</h4>
                <ul className="space-y-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                   <li><a href="#" className="hover:text-brand-blue transition-colors">Privacy_OS</a></li>
                   <li><a href="#" className="hover:text-brand-blue transition-colors">Security_Layer</a></li>
                   <li><a href="#" className="hover:text-brand-blue transition-colors">Neural_Sync</a></li>
                </ul>
             </div>
             <div className="space-y-6 hidden sm:block">
                <div className="text-[9px] font-mono text-slate-700 uppercase tracking-widest font-bold">Terminal_State</div>
                <div className="flex items-center gap-3 text-green-500 text-[10px] font-mono font-bold mt-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                   HEALTHY // v2.0.{new Date().getFullYear()}
                </div>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-[10px] font-mono text-slate-800 uppercase tracking-[0.3em] font-bold">
              &copy; {new Date().getFullYear()} DHRUV_PAL // DESIGNED_FOR_THE_FUTURE
           </div>
           <div className="flex items-center gap-3 text-slate-800 font-mono text-[9px] uppercase tracking-widest">
              <ShieldCheck size={12} /> E2E_ENCRYPTED_SESSION
           </div>
        </div>
      </div>
      
      {/* Decorative OS Background Element */}
      <div className="absolute right-0 bottom-0 text-[18vw] font-display font-black text-white/[0.01] select-none pointer-events-none translate-y-1/4 translate-x-1/4">
         SYSTEM
      </div>
    </footer>
  );
};

