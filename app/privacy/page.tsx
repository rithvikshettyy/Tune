'use client'

import React from 'react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-black text-foreground mb-12 tracking-tighter uppercase">Privacy Policy</h1>
        
        <div className="prose prose-neutral max-w-none space-y-12">
          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// INTRODUCTION</h2>
            <p className="text-lg text-muted-foreground font-medium uppercase tracking-tight leading-relaxed">
              TUNE CLI IS A LOCALLY EXECUTED DEVELOPER TOOL. WE PRIORITIZE USER PRIVACY AND DATA SOVEREIGNTY. THIS DOCUMENT OUTLINES HOW YOUR DATA IS HANDLED WHEN USING THE TUNE ECOSYSTEM.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// DATA COLLECTION</h2>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed mb-4">
              TUNE CLI DOES NOT COLLECT OR STORE PERSONAL DATA ON EXTERNAL SERVERS. ALL INTERACTION WITH THE SPOTIFY API IS HANDLED DIRECTLY FROM YOUR MACHINE.
            </p>
            <ul className="list-none space-y-4 font-mono text-[11px] uppercase tracking-widest text-primary">
              <li>• SPOTIFY AUTHENTICATION TOKENS (STORED LOCALLY)</li>
              <li>• PREFERENCE CONFIGURATIONS (STORED LOCALLY)</li>
              <li>• PLAYBACK METADATA (DURING EXECUTION ONLY)</li>
            </ul>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// THIRD PARTY SERVICES</h2>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
              THE ONLY THIRD-PARTY SERVICE TUNE INTERACTS WITH IS THE SPOTIFY WEB API. DATA EXCHANGED WITH SPOTIFY IS SUBJECT TO THE <a href="https://www.spotify.com/privacy" className="text-primary underline">SPOTIFY PRIVACY POLICY</a>.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-sm font-bold text-foreground uppercase tracking-[0.3em] mb-6 block">// SECURITY</h2>
            <p className="text-sm text-foreground/70 font-medium leading-relaxed">
              TUNE USES PKCE (PROOF KEY FOR CODE EXCHANGE) FOR SECURE OAUTH2 AUTHORIZATION. YOUR CLIENT SECRET IS NEVER EXPOSED, AND TOKENS REMAIN LOCAL TO YOUR SYSTEM'S SECURE STORAGE PATHS.
            </p>
          </section>

          <section className="border-t border-border pt-8">
            <h2 className="text-xs font-bold text-muted-foreground/40 uppercase tracking-[0.4em]">
              LAST UPDATED: 2026-04-02 // SYSTEM_SECURE
            </h2>
          </section>
        </div>
      </div>
    </div>
  )
}
