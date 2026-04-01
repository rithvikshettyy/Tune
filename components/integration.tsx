'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Terminal, Download, ShieldCheck, Zap, ArrowRight, Github, Copy, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

function StatCounter({ label, value, suffix = "+" }: { label: string, value: number, suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const counter = setInterval(() => {
      current += step
      if (current >= value) {
        setCount(value)
        clearInterval(counter)
      } else {
        setCount(current)
      }
    }, 16)
    return () => clearInterval(counter)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-center">
      <span className="block text-5xl font-black text-foreground mb-2">{count.toLocaleString()}{suffix}</span>
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">{label}</span>
    </div>
  )
}

export default function Integration() {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npm install -g @rithvik7/devtune')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const features = [
    {
      badge: 'CLI_BINARY',
      title: 'TUNE CORE',
      desc: 'High-performance binary for near-instant execution using minimal local resources.',
      badgeColor: 'bg-blue-100 text-blue-600',
      preview: '$ tune play "Midnight City"'
    },
    {
      badge: 'IDE_EXTENSION',
      title: 'VS CODE SYNC',
      desc: 'Seamless command palette integration for zero-friction playback control.',
      badgeColor: 'bg-purple-100 text-purple-600',
      preview: '> Tune: Toggle playback'
    },
    {
      badge: 'AUTH_LAYER',
      title: 'SECURE PKCE',
      desc: 'Official Spotify API integration with secure OAuth2 PKCE protocols.',
      badgeColor: 'bg-green-100 text-green-600',
      preview: '✔ Authorizing via PKCE...'
    }
  ]

  return (
    <section id="features" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-left">
          <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-4 block">
            DEVELOPER TOOLS FOR SPOTIFY
          </h2>
          <p className="text-4xl sm:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">
            EVERYTHING YOU NEED <br />
            TO <span className="text-primary italic">BUILD FLOW.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-border border border-border">
          {features.map((f, i) => (
            <div key={i} className="tool-card group flex flex-col items-start bg-white p-12 hover:z-10 h-full transition-colors hover:bg-[#FAF9F6]">
              <span className={`inline-block px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest mb-10 border border-current ${f.badgeColor.replace('bg-', 'bg-opacity-10 bg-')}`}>
                {f.badge}
              </span>
              <div className="w-14 h-14 bg-white border border-border rounded-xl flex items-center justify-center mb-10 shadow-sm">
                <Terminal size={24} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-black text-foreground mb-4 tracking-tight uppercase leading-tight">{f.title}</h3>
              <p className="text-sm text-muted-foreground/60 mb-12 font-medium leading-relaxed uppercase tracking-tight">
                {f.desc}
              </p>

              <div className="mt-auto w-full">
                <div className="bg-[#F5F3EE] border border-border p-5 rounded-none font-mono text-[11px] text-primary mb-12 relative overflow-hidden group-hover:border-primary/20 transition-colors">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/20" />
                  {f.preview}
                </div>

                <div className="flex items-center gap-4 group/doc cursor-pointer">
                  <span className="font-mono text-[10px] font-black tracking-[0.2em] text-foreground uppercase group-hover/doc:text-primary transition-colors">
                    VIEW DOCS
                  </span>
                  <div className="h-px flex-1 bg-border group-hover/doc:bg-primary/30 transition-colors" />
                  <ArrowRight size={14} className="text-muted-foreground group-hover/doc:text-primary transition-transform group-hover/doc:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border-x border-b border-border mb-32">
          <div className="bg-white p-12"><StatCounter label="Downloads" value={500} /></div>
          <div className="bg-white p-12"><StatCounter label="GitHub Stars" value={2} /></div>
          <div className="bg-white p-12"><StatCounter label="Contributors" value={1} /></div>
          <div className="bg-white p-12"><StatCounter label="Uptime" value={100} suffix="%" /></div>
        </div>

        {/* Final CTA Card - Only Dark Inverted Section */}
        <div className="bg-[#1A1A1A] p-20 text-center relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-16 tracking-tighter uppercase leading-none">
              READY TO <span className="text-primary italic">TUNE IN?</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="bg-white/5 border border-white/10 px-6 py-4 font-mono text-white/60 text-sm">
                npm install -g @rithvik7/devtune
              </div>
              <Button
                onClick={copyToClipboard}
                size="lg"
                className="h-[60px] px-10 bg-white text-black hover:bg-white/90 rounded-none font-bold uppercase text-xs tracking-widest transition-all"
              >
                {copied ? <Check size={18} className="mr-3" /> : <Copy size={18} className="mr-3" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
