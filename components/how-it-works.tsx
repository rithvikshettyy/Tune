'use client'

import React from 'react'
import { Download, Link2, Terminal, Headphones, ArrowRight, Play } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Global Install',
      description: 'npm install -g devtune-cli to add the binary to your shell.',
      icon: Download
    },
    {
      number: '02',
      title: 'Spotify Auth',
      description: 'Run devtune login to link your premium Spotify account securely.',
      icon: Link2
    },
    {
      number: '03',
      title: 'Control Music',
      description: 'Use 17+ unique commands to manage your queue and playback.',
      icon: Terminal
    },
    {
      number: '04',
      title: 'Full Immersion',
      description: 'Switch between hype or focus modes instantly from any console.',
      icon: Headphones
    }
  ]

  return (
    <section id="how-it-works" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden border-y border-white/5">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-slide-up">
          <span className="text-[10px] uppercase tracking-[.3em] text-primary font-black mb-4 inline-block px-4 py-2 bg-primary/10 rounded-lg border border-primary/20 backdrop-blur-md">
            Workflow Overview
          </span>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-foreground tracking-tighter text-balance">
            Setup <span className="text-muted-foreground/40 italic">in Seconds.</span>
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
            Go from zero to full terminal music control with four simple integration steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <div key={index} className="relative group p-8 glass-card rounded-[2.5rem] transition-all hover:-translate-y-2 cursor-default border-white/5">
              <div className="text-5xl font-black text-primary/10 mb-8 group-hover:text-primary/20 transition-colors uppercase tracking-tighter">{step.number}</div>
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-primary/20">
                 <step.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-black mb-3 text-foreground tracking-tight">{step.title}</h3>
              <p className="text-sm text-muted-foreground/60 font-medium leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Command Display Terminal */}
        <div className="relative group max-w-4xl mx-auto terminal-window p-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] transition-all hover:scale-[1.01] border border-white/5">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-3 h-3 rounded-full bg-red-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400/30"></div>
            <div className="w-3 h-3 rounded-full bg-primary/30"></div>
            <div className="ml-4 h-7 px-4 bg-white/5 rounded-full flex items-center border border-white/5">
              <span className="text-[10px] font-mono text-muted-foreground/60 font-black uppercase tracking-widest leading-none">bash — devtune --v1.0.0</span>
            </div>
          </div>
          
          <div className="space-y-6 font-mono text-sm sm:text-base selection:bg-primary/20">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-primary font-black tracking-tight">$ devtune login</span>
              <span className="text-muted-foreground/30 animate-pulse-glow">•</span>
            </div>
            <div className="text-sky-400 font-bold ml-6">✓ Successfully authenticated with Spotify Premium.</div>
            
            <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-3">
              <span className="text-primary font-black tracking-tight">$ devtune play "Midnight City"</span>
              <span className="text-muted-foreground/30 animate-pulse-glow">•</span>
            </div>
            <div className="ml-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 flex flex-col sm:flex-row sm:items-center gap-8 shadow-inner relative group/card overflow-hidden">
               <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
               <div className="w-20 h-20 bg-primary rounded-[1.5rem] flex items-center justify-center animate-pulse relative z-10 shadow-2xl shadow-primary/40">
                  <Play size={32} className="text-background" fill="currentColor" />
               </div>
               <div className="flex flex-col relative z-10">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 brightness-125">Now Playing</span>
                  <span className="text-2xl font-black text-foreground tracking-tighter">Midnight City</span>
                  <span className="text-sm text-muted-foreground/60 font-bold italic">M83 — Hurry Up, We're Dreaming.</span>
               </div>
               <div className="ml-auto w-full sm:w-auto h-2 bg-white/10 rounded-full overflow-hidden mt-6 sm:mt-0 relative z-10 shadow-inner">
                  <div className="w-1/3 h-full bg-primary shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
               </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-3 font-black">
              <span className="text-primary tracking-tight">$ devtune focus</span>
              <span className="text-muted-foreground/30 animate-pulse-glow">•</span>
            </div>
            <div className="text-sky-400 font-bold ml-6 group-hover:translate-x-3 transition-transform">✓ Focusing... Switching to your personal Deep Work playlist. 🧘</div>
          </div>
        </div>
      </div>
    </section>
  )
}
