'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Download, Package, Play, Pause, ListMusic, Music, Heart, Flame, Github } from 'lucide-react'

const commands = [
  { icon: Play, text: 'tune play <song...>', desc: 'Search and play tracks' },
  { icon: Pause, text: 'tune pause', desc: 'Suspend playback' },
  { icon: ListMusic, text: 'tune queue <song...>', desc: 'Append to queue' },
  { icon: Music, text: 'tune status', desc: 'Get playback state' },
  { icon: Heart, text: 'tune focus', desc: 'Deep Work playlist' },
  { icon: Flame, text: 'tune hype', desc: 'High Tempo playlist' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-20 pb-20 overflow-hidden bg-background">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="animate-slide-up">
          <span className="font-mono text-[11px] font-bold tracking-[0.4em] text-primary uppercase mb-8 block">
            {/* // TERMINAL ORCHESTRATION - text above orchestrate your workflow*/}
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black mb-12 text-foreground leading-[0.8] tracking-[-0.06em] uppercase">
            ORCHESTRATE <br />
            YOUR <span className="text-primary italic">WORKFLOW.</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto font-medium leading-tight uppercase tracking-tight">
            High-performance Spotify management for digital architects. <br className="hidden sm:block" /> Zero friction. Total command.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 whitespace-nowrap">
            <Link href="https://www.npmjs.com/package/@rithvik7/devtune" target="_blank" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 px-12 text-[11px] font-black uppercase tracking-[0.25em] bg-white/40 text-primary hover:bg-primary hover:text-white backdrop-blur-2xl border border-white/80 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] transition-all hover:-translate-y-1 active:scale-95 group">
                <Download className="mr-3 group-hover:translate-y-0.5 transition-transform" size={16} />
                Install CLI
              </Button>
            </Link>
            <Link href="https://github.com/rithvikshettyy" target="_blank" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="h-14 px-12 text-[11px] font-black uppercase tracking-[0.25em] border-white/80 bg-white/10 backdrop-blur-2xl text-foreground hover:bg-black hover:text-white hover:border-black rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] transition-all hover:-translate-y-1 active:scale-95 group">
                <Github className="mr-3 group-hover:rotate-12 transition-transform" size={16} />
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="marquee-container relative z-10 mt-auto">
        <div className="animate-marquee inline-block">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="font-mono text-[11px] font-bold text-primary uppercase tracking-[.3em] mx-12">
              TUNE CLI // v1.2.4 // LOW_LATENCY // PKCE_SECURE // OPEN_SOURCE // GLOBAL_INSTALL // VS_CODE_SYNC //
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
