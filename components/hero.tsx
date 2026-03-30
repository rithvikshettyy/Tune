'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShaderAnimation } from '@/components/ui/shader-animation'
import { Music, ListMusic, Volume2, Play, Pause, SkipForward, SkipBack, Search, LogIn, Settings, HelpCircle, Activity, Heart, Flame } from 'lucide-react'

const commands = [
  { icon: Play, text: 'devtune play <song name>', desc: 'Search and play a track' },
  { icon: Play, text: 'devtune play', desc: 'Resume paused playback' },
  { icon: Pause, text: 'devtune pause', desc: 'Pause current track' },
  { icon: SkipForward, text: 'devtune next', desc: 'Skip to next track' },
  { icon: SkipBack, text: 'devtune prev', desc: 'Previous track' },
  { icon: ListMusic, text: 'devtune queue <song>', desc: 'Add song to queue' },
  { icon: ListMusic, text: 'devtune queue-list', desc: 'Show upcoming songs' },
  { icon: Volume2, text: 'devtune volume <0-100>', desc: 'Set playback volume' },
  { icon: Music, text: 'devtune status', desc: 'Show current track' },
  { icon: Search, text: 'devtune search <query>', desc: 'Search and list tracks' },
  { icon: Heart, text: 'devtune focus', desc: 'Start Focus playlist 🧘' },
  { icon: Flame, text: 'devtune hype', desc: 'Start Hype playlist 🔥' },
  { icon: LogIn, text: 'devtune login', desc: 'Auth with Spotify' },
  { icon: LogIn, text: 'devtune logout', desc: 'Clear saved tokens' },
  { icon: Settings, text: 'devtune config set <k> <v>', desc: 'Update config' },
  { icon: Settings, text: 'devtune config list', desc: 'Current settings' },
  { icon: HelpCircle, text: 'devtune commands list', desc: 'Show all commands' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      {/* Background Shader Layer */}
      <div className="absolute inset-0 z-0 opacity-60">
        <ShaderAnimation />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-primary/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 flex flex-col items-center animate-slide-up">
          <div className="mb-8 flex items-center justify-center relative group">
            <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Image 
              src="/devtune-logo.png" 
              alt="DevTune Logo" 
              width={140} 
              height={140}
              className="relative z-10 object-contain drop-shadow-[0_0_15px_rgba(56,189,248,0.3)]"
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-primary font-black bg-primary/5 px-6 py-2 rounded-full border border-primary/20 backdrop-blur-md mb-6">
            Universal Spotify CLI Control
          </span>
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black mb-8 text-foreground text-balance leading-tight tracking-tighter">
            Control Spotify <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient-shift">
              Everywhere.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto text-balance font-medium leading-relaxed">
            Revolutionize your developer flow. Control Spotify from any terminal without ever context switching. Built for efficiency, designed for developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 text-md font-black rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-transform bg-primary text-background hover:bg-primary/90">
              Install DevTune CLI
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 h-14 text-md font-black rounded-2xl backdrop-blur-md border-white/10 hover:bg-white/5 transition-all">
              Read Documentation
            </Button>
          </div>
        </div>

        {/* Command Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-slide-up delay-300">
          {commands.map((cmd, i) => (
            <div 
              key={i} 
              className="glass-card p-5 rounded-[1.5rem] flex items-center gap-4 text-left group transition-all hover:scale-[1.02] cursor-default border-white/5"
            >
              <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                <cmd.icon size={20} className="text-primary" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <span className="text-sm font-mono text-foreground font-black tracking-tight truncate">
                  {cmd.text}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-black">
                  {cmd.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade filter at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
    </section>
  )
}
