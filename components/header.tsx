'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-border/20 bg-background/50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 -ml-1 sm:-ml-2">
            <div className="w-12 h-12 relative transition-transform hover:scale-110">
              <Image
                src="/devtune-logo.png"
                alt="DevTune Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-[34px] leading-none text-foreground tracking-widest font-normal font-[family-name:var(--font-bebas)] translate-y-[1px]">DEVTUNE</span>
          </div>

          <nav className="hidden md:flex items-center gap-10 font-bold">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              How it Works
            </Link>
            <Link href="#install" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Documentation
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/rithvikshetty/DevTune" className="hidden sm:flex text-muted-foreground hover:text-foreground transition-colors mr-2">
              <Github size={20} />
            </Link>
            <Button variant="default" size="lg" className="h-11 px-8 text-sm font-black rounded-xl hover:scale-105 transition-transform shadow-xl shadow-accent/10">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
