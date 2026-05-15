import { motion } from "motion/react";
import { GlassCard, SectionTitle } from "../UI/Common";
import { Github, GitBranch, GitPullRequest, GitCommit, Star, ArrowUpRight, Activity, Terminal } from "lucide-react";

const GITHUB_STATS = [
  { label: "Repositories", value: "48", icon: Github },
  { label: "Total Stars", value: "1.2k", icon: Star },
  { label: "Pull Requests", value: "340", icon: GitPullRequest },
  { label: "Commits (2024)", value: "2,481", icon: GitCommit },
];

export const GitHubDashboard = () => {
  return (
    <section id="github" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle 
          title="Engineering Pulse" 
          subtitle="Open Source Dashboard"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Activity Monitor */}
          <GlassCard className="lg:col-span-2 p-1 border-white/5 rounded-[32px] overflow-hidden bg-[#050508] relative group">
             <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             
             <div className="relative bg-[#08080a] rounded-[31px] p-8 lg:p-12 h-full">
                <div className="flex items-center justify-between mb-12">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                         <Activity size={24} />
                      </div>
                      <div>
                         <h3 className="text-xl font-display font-bold text-white tracking-tight">Contribution Heatmap</h3>
                         <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Global_Commit_Frequency</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-2 px-4 py-2 glass rounded-full border border-white/5 text-[9px] font-mono text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      LIVE_TRACKING
                   </div>
                </div>

                {/* Heatmap Simulation */}
                <div className="space-y-4">
                   {Array.from({ length: 7 }).map((_, rowIndex) => (
                     <div key={rowIndex} className="flex gap-2 justify-between">
                        {Array.from({ length: 42 }).map((_, colIndex) => {
                          const level = Math.random() > 0.7 ? (Math.random() > 0.6 ? 3 : 2) : (Math.random() > 0.4 ? 1 : 0);
                          const colors = [
                            "bg-white/5",
                            "bg-brand-blue/20",
                            "bg-brand-blue/50",
                            "bg-brand-blue"
                          ];
                          return (
                            <motion.div
                              key={colIndex}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: (rowIndex + colIndex) * 0.005 }}
                              className={`w-3 h-3 rounded-[2px] ${colors[level]} hover:scale-150 hover:shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all cursor-crosshair`}
                            />
                          );
                        })}
                     </div>
                   ))}
                </div>

                <div className="mt-12 flex flex-wrap gap-8 pt-8 border-t border-white/5">
                   {GITHUB_STATS.map((stat, i) => (
                     <div key={i} className="space-y-1">
                        <div className="flex items-center gap-2 text-slate-500">
                           <stat.icon size={14} />
                           <span className="text-[9px] font-mono uppercase tracking-widest">{stat.label}</span>
                        </div>
                        <div className="text-2xl font-display font-bold text-white tracking-tight">{stat.value}</div>
                     </div>
                   ))}
                </div>
             </div>
          </GlassCard>

          {/* Side: Repository Feed */}
          <div className="space-y-6">
             <div className="glass p-8 rounded-[32px] border border-white/5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-8">
                   <h3 className="text-sm font-mono font-bold text-white uppercase tracking-[.3em] flex items-center gap-3">
                      <Terminal size={16} className="text-brand-purple" /> Active_Repos
                   </h3>
                   <Github size={18} className="text-slate-600" />
                </div>

                <div className="space-y-4 flex-grow">
                   {[
                     { name: "peerlynk-core", lang: "TypeScript", stars: 124, status: "stable" },
                     { name: "distributed-mesh", lang: "Rust", stars: 89, status: "dev" },
                     { name: "os-v2-interface", lang: "React", stars: 256, status: "active" },
                     { name: "quantum-auth", lang: "Go", stars: 42, status: "research" },
                   ].map((repo, i) => (
                     <motion.a
                        key={i}
                        href="#"
                        whileHover={{ x: 5 }}
                        className="block p-5 rounded-2xl border border-white/5 bg-white/[0.01] hover:border-white/10 hover:bg-white/[0.03] transition-all group/repo"
                     >
                        <div className="flex items-center justify-between mb-3">
                           <span className="text-sm font-display font-bold text-slate-200 group-hover/repo:text-brand-blue transition-colors">{repo.name}</span>
                           <ArrowUpRight size={14} className="text-slate-600 group-hover/repo:text-brand-blue group-hover/repo:-translate-y-0.5 group-hover/repo:translate-x-0.5 transition-all" />
                        </div>
                        <div className="flex items-center gap-4 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                           <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-brand-blue" /> {repo.lang}</span>
                           <span className="flex items-center gap-1.5"><Star size={10} /> {repo.stars}</span>
                           <span className="px-2 py-0.5 rounded border border-white/5 bg-white/5">{repo.status}</span>
                        </div>
                     </motion.a>
                   ))}
                </div>

                <motion.a
                  href="https://github.com/dhruvpal"
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full py-4 glass text-white rounded-2xl font-bold uppercase tracking-[.2em] text-[10px] flex items-center justify-center gap-2 border border-white/5 hover:border-brand-purple/40 hover:bg-brand-purple/5 transition-all"
                >
                   View Full Profile <ExternalLink size={14} />
                </motion.a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExternalLink = ({ size }: { size: number }) => (
  <ArrowUpRight size={size} />
);
