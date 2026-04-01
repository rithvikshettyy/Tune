'use client'

import React from 'react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-foreground mb-12 tracking-tighter uppercase leading-none">Terms of Service</h1>
        
        <div className="prose prose-neutral max-w-none space-y-12">
          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// LICENSE</h2>
            <p className="text-lg text-muted-foreground font-medium uppercase tracking-tight leading-relaxed mb-6">
              TUNE CLI IS AN OPEN-SOURCE SOFTWARE PROJECT LICENSED UNDER THE MIT LICENSE. THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
            </p>
            <div className="bg-white border border-border p-8 font-mono text-[11px] text-primary/80 uppercase tracking-widest leading-loose">
              PERMISSION IS HEREBY GRANTED, FREE OF CHARGE, TO ANY PERSON OBTAINING A COPY OF THIS SOFTWARE AND ASSOCIATED DOCUMENTATION FILES (THE "SOFTWARE"), TO DEAL IN THE SOFTWARE WITHOUT RESTRICTION...
            </div>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// USAGE LIMITS</h2>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed mb-4">
              USERS MUST ADHERE TO THE <a href="https://developer.spotify.com/terms" className="text-primary underline">SPOTIFY DEVELOPER TERMS OF SERVICE</a>. EXCESSIVE API CALLS OR AUTOMATION THAT VIOLATES SPOTIFY'S POLICIES IS STRICTLY PROHIBITED.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// MODIFICATIONS</h2>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
              WE RESERVE THE RIGHT TO MODIFY THE SOURCE CODE AT ANY TIME. AS AN OPEN-SOURCE PROJECT, USERS ARE ENCOURAGED TO FORK, MODIFY, AND CONTRIBUTE TO THE REPOSITORY VIA GITHUB.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// TERMINATION</h2>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
              YOUR RIGHT TO USE TUNE CLI MAY BE REVOKED BY SPOTIFY IF YOUR AUTHENTICATION TOKENS ARE DEEMED TO BE IN VIOLATION OF THEIR PROVIDER AGREEMENTS.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-xs font-bold text-muted-foreground/40 uppercase tracking-[0.4em]">
              VERIF_HASH: 7ABX901... // LICENSE_MIT_ACTIVE
            </h2>
          </section>
        </div>
      </div>
    </div>
  )
}
