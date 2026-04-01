'use client'

import React from 'react'
import { Terminal, Command, Zap, Target, Cpu, Code, Settings, Share2, ShieldCheck, Fingerprint } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Advanced CLI Engine',
      description: 'Run powerful playback commands directly from any shell. Experience zero-latency control over your Spotify sessions.',
      icon: Terminal,
      color: 'from-primary/20 to-cyan-500/10'
    },
    {
      title: 'OAuth2 with PKCE',
      description: 'Ultra-secure authentication that protects your account without exposing client secrets. Direct browser-based authorization.',
      icon: ShieldCheck,
      color: 'from-blue-500/20 to-indigo-500/10'
    },
    {
      title: 'Real-time State Sync',
      description: 'Instant status updates for track names, progress, and volume. Your terminal stays perfectly in sync.',
      icon: Activity,
      color: 'from-emerald-500/20 to-teal-500/10'
    },
    {
      title: 'Zero Context Switching',
      description: 'Keep your focus in your IDE. Control music without ever touching your mouse or switching applications.',
      icon: Target,
      color: 'from-purple-500/20 to-pink-500/10'
    },
    {
      title: 'Hyper Lightweight',
      description: 'Built for performance. Minimal CPU and RAM overhead, so it never impacts your development workflow.',
      icon: Cpu,
      color: 'from-orange-500/20 to-amber-500/10'
    },
    {
      title: 'Fully Configurable',
      description: 'Customize every key mapping, playlist focus, and display setting to match your personal workflow.',
      icon: Settings,
      color: 'from-rose-500/20 to-red-500/10'
    }
  ]

  return (
    <section id="features" className="relative py-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background/50">
      {/* Refined Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 translate-y-1/2 animate-pulse-glow delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary/80 font-black">
              Core Capabilities
            </span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black mb-8 text-foreground tracking-[-0.04em] leading-[0.9]">
            Built for <span className="text-muted-foreground/40 italic font-medium">Precision.</span> <br />
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Speed.</span>
          </h2>
          <p className="text-xl text-muted-foreground/60 max-w-3xl mx-auto font-medium leading-relaxed">
            Every feature is meticulously crafted to maximize your focus and simplify your audio experience within the terminal ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-12 rounded-[2.5rem] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_100px_-20px_rgba(56,189,248,0.15)] cursor-default overflow-hidden relative"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/10 shadow-inner">
                <feature.icon size={28} className="text-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-2xl font-black mb-5 text-foreground tracking-tight group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground/60 group-hover:text-muted-foreground/80 font-medium leading-relaxed transition-colors">{feature.description}</p>
              
              <div className="mt-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-black text-muted-foreground/20 group-hover:text-primary/40 transition-colors">
                <span>View Documentation</span>
                <div className="h-[1px] w-8 bg-current opacity-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Activity } from 'lucide-react'
