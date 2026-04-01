'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Twitter, Disc as Discord, Shield, HelpCircle, Laptop } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-black p-2 rounded-xl shadow-lg">
                <Image 
                  src="/devtune-logo.png" 
                  alt="Tune CLI Logo" 
                  width={32} 
                  height={32} 
                  className="opacity-90"
                />
              </div>
              <span className="font-mono font-extrabold text-xl tracking-tighter text-foreground uppercase select-none">
                TUNE CLI // 01
              </span>
            </div>
            <p className="text-sm text-muted-foreground/60 max-w-sm mb-10 leading-relaxed font-medium">
              Professional-grade CLI and VS Code extension for high-performance Spotify management. Designed for deep work and minimal context switching.
            </p>
            <div className="flex gap-6">
              <Link href="https://github.com/rithvikshettyy" target="_blank" className="text-muted-foreground/40 hover:text-foreground transition-colors hover:scale-110">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground/40 hover:text-foreground transition-colors hover:scale-110">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-12">
            {[
              { title: 'Product', links: ['Features', 'Workflow', 'Docs'] },
              { title: 'Resources', links: ['GitHub', 'NPM Package', 'Changelog'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Contact'] }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-mono text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase mb-8">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link 
                        href={
                          link === 'Features' ? '#features' :
                          link === 'Workflow' ? '#how-it-works' :
                          link === 'Docs' ? 'https://github.com/rithvikshettyy' :
                          link === 'GitHub' ? 'https://github.com/rithvikshettyy' :
                          link === 'NPM Package' ? 'https://www.npmjs.com/package/@rithvik7/devtune' :
                          link === 'Changelog' ? 'https://github.com/rithvikshettyy' :
                          link === 'Privacy' ? '/privacy' :
                          link === 'Terms' ? '/terms' :
                          link === 'Contact' ? 'https://github.com/rithvikshettyy' : '#'
                        }
                        target={link.includes('GitHub') || link.includes('NPM') || link.includes('Docs') ? '_blank' : '_self'}
                        className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 hover:text-primary transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-16 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex gap-12">
            <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">© 2026 TUNE CLI</span>
            <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest">Built by rithvikshettyy</span>
          </div>
          <div className="flex gap-8">
            <span className="font-mono text-[10px] font-bold text-primary/40 tracking-tighter uppercase italic">v1.2.4 // LATEST_STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
