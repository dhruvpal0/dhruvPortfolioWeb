import { motion } from "motion/react";
import { PROJECTS } from "../../constants/data";
import { SectionTitle, GlassCard } from "../UI/Common";
import { ExternalLink, Github, Globe, ArrowRight, Smartphone, Laptop, Layout, Layers, ShieldCheck, Activity } from "lucide-react";

export const Projects = () => {
  const featured = PROJECTS[0];
  const others = PROJECTS.slice(1);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Engineered Ecosystems" 
          subtitle="Portfolio OS"
        />

        {/* Featured Project - Deep Tech Redesign */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="mb-40 group"
        >
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Project Frame Wrapper */}
            <div className="lg:col-span-7 relative order-2 lg:order-1">
               {/* Background Decorative Bloom */}
               <div className="absolute -inset-10 bg-brand-blue/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               
               {/* Realistic Futuristic Browser Frame */}
               <div className="relative glass rounded-3xl border border-white/10 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 group-hover:border-brand-blue/30">
                  {/* Browser Header */}
                  <div className="bg-bg-dark/80 backdrop-blur-md px-6 py-4 border-b border-white/5 flex justify-between items-center sm:px-8">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                     </div>
                     <div className="hidden sm:flex px-16 py-1.5 glass rounded-lg text-[10px] font-mono text-slate-500 items-center gap-2 border border-white/5 mx-4 flex-grow max-w-[400px] justify-center">
                        <Globe size={10} className="text-brand-blue" /> {featured.links.live ? featured.links.live.replace("https://", "") : "peerlynk.com"}
                     </div>
                     <div className="flex gap-4">
                        <Smartphone size={14} className="text-slate-600 hover:text-white transition-colors cursor-pointer" />
                        <Laptop size={14} className="text-brand-blue" />
                     </div>
                  </div>
                  
                  {/* Web Showcase Area */}
                  <div className="aspect-[16/10] bg-[#0a0a0c] relative overflow-hidden group/screen cursor-pointer">
                     {/* Auto-scrolling image simulation */}
                     <motion.div 
                        initial={{ y: 0 }}
                        whileHover={{ y: "-60%" }}
                        transition={{ duration: 10, ease: "linear" }}
                        className="w-full absolute top-0"
                     >
                        <img 
                           src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                           alt="peerlynk preview"
                           className="w-full h-auto opacity-70 group-hover/screen:opacity-100 transition-opacity duration-700"
                           referrerPolicy="no-referrer"
                        />
                     </motion.div>

                     {/* Glass Reflection Overlay */}
                     <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/[0.03] via-transparent to-white/[0.05] z-10" />
                     
                     {/* Interactive UI Layers on Hover */}
                     <div className="absolute inset-0 bg-bg-dark/20 backdrop-blur-[2px] opacity-100 group-hover/screen:opacity-0 transition-opacity duration-700 flex items-center justify-center z-20">
                        <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 2.5 }}
                          className="text-center p-12"
                        >
                           <h4 className="text-5xl font-display font-bold text-white mb-4 tracking-tighter uppercase italic filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">Peerlynk_v2</h4>
                           <p className="text-brand-cyan font-mono text-[10px] uppercase tracking-[0.4em] font-bold border-y border-brand-cyan/20 py-2 inline-block">LIVE_DEPLOYMENT_ACTIVE</p>
                        </motion.div>
                     </div>
                  </div>
               </div>

               {/* Decorative Side Floating Card */}
               <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute -right-6 -bottom-6 glass p-6 rounded-2xl border border-brand-blue/30 shadow-2xl z-20 hidden md:block max-w-[240px]"
               >
                  <Activity size={24} className="text-brand-blue mb-4 animate-pulse" />
                  <h5 className="text-xs font-mono font-bold text-white mb-2 uppercase tracking-widest">Real-time Sync</h5>
                  <p className="text-[10px] font-mono text-slate-500 leading-tight">Latency: 18ms<br/>Users: 3,000+ Active<br/>Uptime: 99.98%</p>
               </motion.div>
            </div>

            {/* Project Details Column */}
            <div className="lg:col-span-5 space-y-10 order-1 lg:order-2">
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-[9px] font-mono font-bold text-brand-blue uppercase tracking-widest">
                       {featured.highlight}
                    </span>
                    <div className="h-[1px] w-12 bg-brand-blue/30" />
                 </div>
                 
                 <h3 className="text-7xl font-display font-bold text-white tracking-tighter leading-none">
                    {featured.title}<span className="text-brand-blue">.</span>
                 </h3>
                 <p className="text-brand-cyan font-mono text-[10px] uppercase tracking-[0.2em]">{featured.subtitle}</p>
              </div>
              
              <p className="text-xl text-slate-400 font-light leading-relaxed border-l-2 border-brand-blue/20 pl-8 italic">
                 "{featured.description}"
              </p>

              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <h5 className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mb-4">Architecture</h5>
                    <div className="flex flex-wrap gap-2">
                       {featured.tech.map(t => (
                         <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-mono font-bold text-slate-300 uppercase tracking-wider">
                            {t}
                         </span>
                       ))}
                    </div>
                 </div>
                 <div>
                    <h5 className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest mb-4">Capabilities</h5>
                    <ul className="space-y-2">
                       {featured.features.slice(0, 3).map(f => (
                         <li key={f} className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                            <ShieldCheck size={12} className="text-brand-cyan" /> {f}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>

              <div className="flex gap-4 pt-4">
                 <motion.a 
                    href={featured.links.live}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 bg-brand-blue text-white rounded-2xl font-bold flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                 >
                    Launch System <ArrowRight size={18} />
                 </motion.a>
                 <motion.a 
                    href={featured.links.github}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 glass text-white rounded-2xl font-bold border border-white/5 hover:border-brand-blue/30"
                 >
                    Repo Sync
                 </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* OS Dashboard Grid for Other Projects */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {others.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="group"
            >
              <GlassCard className="h-full p-0 border-white/5 hover:border-brand-purple/40 hover:bg-brand-purple/[0.01] flex flex-col transition-all duration-500 overflow-hidden group">
                 {/* Mini Browser Header */}
                 <div className="px-6 py-3 border-b border-white/5 bg-white/[0.02] flex justify-between items-center transition-colors group-hover:border-brand-purple/20">
                    <div className="flex gap-1.5">
                       <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-brand-purple transition-colors" />
                       <div className="w-2 h-2 rounded-full bg-slate-800" />
                    </div>
                    <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">{project.category} // DASH_v1</span>
                 </div>

                 <div className="p-10 space-y-8">
                    <div className="flex justify-between items-start">
                       <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-brand-purple transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-purple/10">
                          <Layers size={32} />
                       </div>
                       <motion.div 
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="px-3 py-1 rounded-full border border-brand-purple/20 text-[8px] font-mono text-brand-purple"
                       >
                          STABLE_CHANNEL
                       </motion.div>
                    </div>

                    <div className="space-y-4">
                       <h4 className="text-3xl font-display font-bold text-white transition-colors group-hover:text-brand-purple tracking-tighter">{project.title}</h4>
                       <p className="text-slate-400 font-light leading-relaxed text-sm">
                          {project.description}
                       </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                       {project.tech.map(t => (
                         <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[8px] font-mono font-bold text-slate-500 uppercase transition-colors group-hover:text-slate-300">
                            {t}
                         </span>
                       ))}
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5 mt-auto">
                       <div className="flex gap-4">
                          <motion.a whileHover={{ y: -2 }} href={project.links.github} className="text-slate-500 hover:text-white transition-colors">
                             <Github size={20} />
                          </motion.a>
                          <motion.a whileHover={{ y: -2 }} href={project.links.live} className="text-slate-500 hover:text-white transition-colors">
                             <ExternalLink size={20} />
                          </motion.a>
                       </div>
                       <motion.a 
                         href={project.links.live}
                         whileHover={{ x: 5 }}
                         className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase tracking-[0.2em] group-hover:text-brand-purple"
                       >
                          Launch <ArrowRight size={14} />
                       </motion.a>
                    </div>
                 </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Full Engineering Archive Section - Redesigned */}
        <div className="mt-40 pt-20 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-20" />
            
            <div className="text-center group">
               <motion.a
                  href="https://github.com/dhruv-pal"
                  target="_blank"
                  className="inline-block"
               >
                  <div className="mb-10 space-y-4">
                     <h3 className="text-4xl font-display font-bold text-white tracking-tighter">Access the Engineering Archive</h3>
                     <p className="text-slate-500 font-mono text-sm tracking-widest uppercase">Decentralized Repository Control</p>
                  </div>
                  
                  <div className="p-px bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent rounded-2xl">
                     <div className="px-12 py-6 bg-bg-dark/80 backdrop-blur-xl rounded-2xl text-slate-400 group-hover:text-brand-blue transition-all font-mono text-sm tracking-[0.3em] uppercase flex items-center gap-6 border border-white/5">
                        <span className="text-brand-blue/50">$</span> git pull dhruv-pal/labs --prod
                        <Github size={24} className="group-hover:rotate-12 transition-transform" />
                     </div>
                  </div>
               </motion.a>
            </div>
            
            {/* Background Digital Rain Effect (Small area) */}
            <div className="absolute inset-x-0 bottom-0 h-32 opacity-[0.05] pointer-events-none overflow-hidden [mask-image:linear-gradient(to_top,black,transparent)]">
               <div className="grid grid-cols-12 gap-2 text-[8px] font-mono text-brand-blue">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="flex flex-col gap-1">
                       {Array.from({ length: 20 }).map((_, j) => (
                         <span key={j}>{Math.random() > 0.5 ? "1" : "0"}</span>
                       ))}
                    </div>
                  ))}
               </div>
            </div>
        </div>
      </div>
    </section>
  );
};


