'use client'

import React from 'react'
import { Terminal, Download, ShieldCheck, Zap, ArrowRight, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Integration() {
  return (
    <section id="install" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none translate-x-1/3 opacity-40 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <div className="lg:w-1/2 animate-slide-up">
            <span className="text-[10px] uppercase font-black text-primary tracking-[0.4em] mb-8 inline-block bg-primary/5 px-6 py-2 rounded-xl border border-primary/20 backdrop-blur-md">
               Direct Installation
            </span>
            <h2 className="text-6xl sm:text-7xl font-black mb-10 text-foreground tracking-tighter leading-none text-balance">
              Zero <span className="text-muted-foreground/30 italic">Friction.</span><br />
              Maximum Output.
            </h2>
            <p className="text-lg text-muted-foreground/60 mb-14 font-medium leading-relaxed max-w-xl">
              Add DevTune CLI to your development environment and start managing Spotify with enterprise-grade security and minimal overhead.
            </p>

            <div className="space-y-10 mb-14">
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-primary/10 rounded-2[2.5rem] flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 rounded-3xl">
                  <Download size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-foreground mb-1 tracking-tight">Global Package</h4>
                  <p className="text-md text-muted-foreground/50 font-medium leading-relaxed">Install once, use everywhere locally from any terminal.</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-primary/10 rounded-[2.5rem] flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 rounded-3xl">
                  <ShieldCheck size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-foreground mb-1 tracking-tight">Verified Integration</h4>
                  <p className="text-md text-muted-foreground/50 font-medium leading-relaxed">Official Spotify API integration with secure OAuth2 protocols.</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-primary/10 rounded-[2.5rem] flex items-center justify-center flex-shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-all duration-500 rounded-3xl">
                  <Zap size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-foreground mb-1 tracking-tight">Ultra Fast Binary</h4>
                  <p className="text-md text-muted-foreground/50 font-medium leading-relaxed">Built with performance in mind for zero latency commands.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="h-16 px-12 text-md font-black rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform bg-primary text-background hover:bg-primary/95">
                Get DevTune CLI <ArrowRight className="ml-3" size={24} />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 text-md font-black rounded-2xl backdrop-blur-xl border-white/10 hover:bg-white/5 group transition-all">
                <Github size={24} className="mr-3" /> GitHub Docs
              </Button>
            </div>
          </div>

          {/* Code Mockup Panel */}
          <div className="lg:w-1/2 w-full relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] blur-[80px] pointer-events-none -z-10 group-hover:bg-primary/20 transition-all duration-1000" />
            <div className="terminal-window p-12 rounded-[3rem] relative z-10 glass-card">
              <div className="flex items-center gap-4 mb-12">
                 <div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-white/10"></div>
                 <div className="w-3.5 h-3.5 rounded-full bg-primary/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]"></div>
                 <div className="ml-6 px-5 py-2 bg-white/5 rounded-full flex items-center border border-white/5 backdrop-blur-md">
                    <span className="text-[10px] font-black text-muted-foreground/60 tracking-[0.2em] uppercase leading-none">installation.sh</span>
                 </div>
              </div>
              <div className="space-y-8 font-mono text-sm sm:text-lg tracking-tighter">
                <div className="flex gap-6">
                  <span className="text-primary/40 font-black">❯</span>
                  <span className="text-foreground font-black">npm install -g devtune-cli</span>
                </div>
                <div className="flex flex-col gap-3 pl-10 border-l-2 border-white/5 ml-3 py-4 bg-white/2 rounded-2xl">
                   <div className="text-sky-400 font-bold animate-pulse-glow">Fetching DevTune binary v1.0.0...</div>
                   <div className="flex items-center gap-4 text-muted-foreground/40 text-xs">
                      <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                         <div className="w-full h-full bg-primary animate-gradient-shift shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                      </div>
                      100% COMPLETE
                   </div>
                   <div className="text-sky-400 font-black pt-2">✓ DevTune successfully linked to $PATH.</div>
                </div>

                <div className="flex gap-6 pt-8">
                  <span className="text-primary/40 font-black">❯</span>
                  <span className="text-foreground font-black underline decoration-primary/50 underline-offset-[12px] decoration-2">devtune search "Radiohead"</span>
                </div>
                <div className="pl-10 pt-6 space-y-6">
                   <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-primary/5 transition-all duration-500 group/item cursor-pointer shadow-lg">
                      <div className="text-primary text-[10px] uppercase font-black tracking-widest mb-2 group-hover/item:translate-x-2 transition-transform">Top Recommendation</div>
                      <div className="text-foreground text-2xl font-black tracking-tighter">Paranoid Android</div>
                      <div className="text-muted-foreground/60 italic text-sm font-medium">Radiohead — OK Computer (Remastered)</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
