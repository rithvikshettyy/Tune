'use client'

import React from 'react'
import { Download, Link2, Terminal, Headphones, ShieldCheck, Zap } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'INSTALL BINARY',
      desc: 'Deploy the Tune CLI globally to your system with a single command.'
    },
    {
      number: '02',
      title: 'LINK ACCOUNT',
      desc: 'Authenticate securely via PKCE and sync your Spotify environment.'
    },
    {
      number: '03',
      title: 'COMMAND FLOW',
      desc: 'Control playback and curate playlists without leaving your editor.'
    }
  ]

  return (
    <section id="how-it-works" className="py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-left">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-4 block">
            THE WORKFLOW
          </h2>
          <p className="text-4xl sm:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
            FROM INSTALL <br />
            TO <span className="text-primary italic">ORCHESTRATION.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-12 bg-white flex flex-col h-full hover:z-10 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
              <span className="font-mono text-5xl font-black text-primary/10 mb-8 block transition-colors group-hover:text-primary">
                {step.number}
              </span>
              <h3 className="text-[18px] font-black text-foreground mb-4 tracking-tighter uppercase">{step.title}</h3>
              <p className="text-xs text-muted-foreground font-bold leading-relaxed uppercase tracking-widest leading-loose">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
