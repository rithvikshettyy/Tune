'use client'

import React from 'react'
import { Terminal, Command, Zap, Target, Cpu, Code, Settings, Share2, ShieldCheck, Fingerprint } from 'lucide-react'

export default function Features() {
  const features = [
    {
      title: 'Advanced CLI Engine',
      description: 'Run 17+ powerful commands directly from any shell. Experience zero latency control over your Spotify playback.',
      icon: Terminal
    },
    {
      title: 'Spotify OAuth 2.0',
      description: 'Ultra-secure, industry-standard authentication that protects your account while keeping you connected.',
      icon: ShieldCheck
    },
    {
      title: 'Real-time State Sync',
      description: 'Instant status updates for track names, progress, and volume. Your terminal stays perfectly in sync.',
      icon: Activity
    },
    {
      title: 'Zero Context Switching',
      description: 'Keep your focus in your IDE. Control music without ever touching your mouse or switching applications.',
      icon: Target
    },
    {
      title: 'Hyper Lightweight',
      description: 'Built for performance. Minimal CPU and RAM overhead, so it never impacts your development workflow.',
      icon: Cpu
    },
    {
      title: 'Fully Configurable',
      description: 'Customize every key mapping, playlist focus, and display setting to match your personal workflow.',
      icon: Settings
    }
  ]

  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-slide-up">
          <span className="text-xs uppercase tracking-widest text-accent font-black mb-4 inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
            Core Capabilities
          </span>
          <h2 className="text-5xl sm:text-6xl font-black mb-6 text-foreground tracking-tighter">
            Precision Built for <br />
            <span className="text-muted-foreground">High Efficiency Development.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Every feature is engineered to maximize your focus and simplify your audio experience within the terminal ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-card p-10 rounded-[2rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,255,0,0.05)] cursor-default"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent/20 transition-colors border border-accent/10">
                <feature.icon size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-foreground tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Activity } from 'lucide-react'
