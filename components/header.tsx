'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4 -ml-1">
            <div className="bg-black p-1.5 rounded-lg shadow-sm">
              <Image 
                src="/devtune-logo.png" 
                alt="Tune CLI Logo" 
                width={24} 
                height={24} 
                className="opacity-90"
              />
            </div>
            <span className="font-mono font-extrabold text-xl tracking-tighter text-foreground uppercase select-none">TUNE CLI // 01</span>
          </div>

          <nav className="hidden md:flex items-center gap-12">
            {[
              { name: 'Features', href: '#features' },
              { name: 'Workflow', href: '#how-it-works' },
              { name: 'Docs', href: 'https://github.com/rithvikshettyy' }
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.name === 'Docs' ? '_blank' : '_self'}
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/rithvikshettyy"
              target="_blank"
              className="hidden sm:flex text-muted-foreground/60 hover:text-foreground transition-all hover:scale-110"
            >
              <Github size={18} />
            </Link>
            <Link href="https://www.npmjs.com/package/@rithvik7/devtune" target="_blank">
              <Button variant="default" size="sm" className="px-6 h-10 text-[10px] uppercase font-bold tracking-widest bg-primary text-white hover:bg-primary/90 border-none rounded-lg shadow-sm">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
