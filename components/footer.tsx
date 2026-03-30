'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Disc as Discord, Shield, HelpCircle, Laptop } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-border/20 bg-background/50 backdrop-blur-3xl overflow-hidden py-32 selection:bg-primary/30 selection:text-white">
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-20 -ml-1">
              <div className="w-16 h-16 relative transition-transform hover:scale-110">
                <Image 
                  src="/devtune-logo.png" 
                  alt="DevTune Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-[42px] leading-none text-foreground tracking-widest font-normal font-[family-name:var(--font-bebas)] translate-y-[2px]">DEVTUNE</span>
            </div>
            <p className="text-lg text-muted-foreground/60 font-medium leading-relaxed mb-10 max-w-sm">
              Level up your terminal with the most powerful Spotify controller for developers. Built for performance and maximum focus.
            </p>
            <div className="flex items-center gap-8">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform shadow-lg">
                <Twitter size={24} />
              </Link>
              <Link href="https://github.com" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform shadow-lg">
                <Github size={24} />
              </Link>
              <Link href="https://discord.com" className="text-muted-foreground hover:text-primary transition-all hover:scale-125 transform shadow-lg">
                <Discord size={24} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-10 tracking-tight text-xl uppercase tracking-widest text-primary/80">Product</h4>
            <ul className="space-y-6">
              <li><Link href="#features" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">CLI Features</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">Documentation</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">Changelog</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-10 tracking-tight text-xl uppercase tracking-widest text-primary/80">Resources</h4>
            <ul className="space-y-6">
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block flex items-center gap-3"><HelpCircle size={18} /> Support Center</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block flex items-center gap-3"><Shield size={18} /> API Reference</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block flex items-center gap-3"><Laptop size={18} /> Community Examples</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">GitHub Discussions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-foreground mb-10 tracking-tight text-xl uppercase tracking-widest text-primary/80">Legal</h4>
            <ul className="space-y-6">
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">Privacy Policy</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">Terms of Service</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">License (MIT)</Link></li>
              <li><Link href="#" className="text-lg text-muted-foreground/60 hover:text-foreground font-medium transition-colors hover:translate-x-2 inline-block">Contact Sales</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-muted-foreground/40 font-medium text-sm flex items-center gap-3 opacity-60">
             <span>© 2024 DevTune. All rights reserved.</span>
             <span className="w-1.5 h-1.5 bg-primary/30 rounded-full" />
             <span>Handcrafted for Developers.</span>
          </div>
          <div className="flex items-center gap-12 font-black text-xs uppercase tracking-[.3em] text-muted-foreground/40">
             <span className="cursor-default hover:text-primary transition-colors">V1.0.0 Global</span>
             <span className="cursor-default hover:text-primary transition-colors">Production Build</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
