import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RevealDirective, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center pt-32 pb-16 px-6 md:px-12">
      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="max-w-4xl" appReveal="fadeUp" [delay]="0">
          <p class="text-gold-400 uppercase tracking-[0.2em] text-sm font-semibold mb-6 flex items-center gap-3">
            <span class="w-12 h-px bg-gold-400/50"></span>
            Elevated Marketing
          </p>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
            Influence, <br />
            engineered for <span class="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 text-glow">growth.</span>
          </h1>
          <p class="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-12">
            Viral Nation is the premium bridge between brands and culture. We build creator-led campaigns designed to move markets.
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-6">
            <a routerLink="/contact" class="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 text-zinc-950 font-semibold tracking-wide hover:bg-gold-400 hover:box-glow transition-all duration-500 text-center">
              Start a Campaign
            </a>
            <a routerLink="/talents" class="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-white font-medium tracking-wide hover:bg-white/5 hover:border-gold-500/30 transition-all duration-300 text-center">
              Explore Talents
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Positioning Strip -->
    <section class="py-12 border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm relative z-10" appReveal="fade">
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap justify-between gap-8 text-center sm:text-left">
        <div class="flex-1 min-w-[200px]">
          <h4 class="text-gold-400 text-sm font-medium tracking-widest uppercase mb-2">Strategy</h4>
          <p class="text-white text-lg font-display tracking-wide">Influencer Marketing</p>
        </div>
        <div class="flex-1 min-w-[200px] border-l border-white/5 pl-8 hidden sm:block">
          <h4 class="text-gold-400 text-sm font-medium tracking-widest uppercase mb-2">Activation</h4>
          <p class="text-white text-lg font-display tracking-wide">Creator Partnerships</p>
        </div>
        <div class="flex-1 min-w-[200px] border-l border-white/5 pl-8 hidden lg:block">
          <h4 class="text-gold-400 text-sm font-medium tracking-widest uppercase mb-2">Commerce</h4>
          <p class="text-white text-lg font-display tracking-wide">Live TikTok Sales</p>
        </div>
        <div class="flex-1 min-w-[200px] border-l border-white/5 pl-8 hidden xl:block">
          <h4 class="text-gold-400 text-sm font-medium tracking-widest uppercase mb-2">Scale</h4>
          <p class="text-white text-lg font-display tracking-wide">Campaign Execution</p>
        </div>
      </div>
    </section>

    <!-- Why It Works -->
    <section class="py-32 px-6 md:px-12 relative z-10 bg-black">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24 md:flex items-end justify-between gap-12" appReveal="fadeUp">
          <h2 class="text-4xl md:text-5xl font-display font-medium text-white leading-tight">
            Not just access. <br />
            <span class="text-zinc-500">Strategic execution.</span>
          </h2>
          <p class="text-zinc-400 max-w-md text-lg font-light mt-6 md:mt-0">
            We don't just connect you with creators. We design campaigns from the ground up to ensure every piece of content drives measurable business outcomes.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          @for (pillar of pillars; track pillar.title; let i = $index) {
            <div class="bg-surface p-10 rounded-2xl border-white/5 hover:border-gold-500/20 transition-all duration-500 group" appReveal="fadeUp" [delay]="i * 0.1">
              <div class="w-14 h-14 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all">
                <mat-icon class="text-gold-400">{{ pillar.icon }}</mat-icon>
              </div>
              <h3 class="text-2xl font-display font-medium text-white mb-4">{{ pillar.title }}</h3>
              <p class="text-zinc-400 leading-relaxed font-light">{{ pillar.desc }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Featured Talents -->
    <section class="py-32 px-6 md:px-12 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16" appReveal="fadeUp">
          <div>
            <p class="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-4">Elite Roster</p>
            <h2 class="text-4xl md:text-5xl font-display font-medium text-white">Curated for impact.</h2>
          </div>
          <a routerLink="/talents" class="text-sm uppercase tracking-widest text-white border-b border-gold-400/50 pb-1 hover:border-gold-400 transition-colors">
            View All Talents &rarr;
          </a>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          @for (talent of featuredTalents; track talent.name; let i = $index) {
            <div class="group relative overflow-hidden rounded-xl bg-zinc-900 aspect-[3/4]" appReveal="fadeUp" [delay]="i * 0.1">
              <img [src]="talent.image" [alt]="talent.name" referrerpolicy="no-referrer" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div class="absolute absolute inset-0 border-2 border-transparent group-hover:border-gold-500/30 rounded-xl transition-all duration-500 pointer-events-none"></div>
              
              <div class="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p class="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{{ talent.category }}</p>
                <h3 class="text-2xl font-display font-medium text-white">{{ talent.name }}</h3>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Partners / Proof -->
    <section class="py-24 border-y border-white/5 bg-black relative z-10" appReveal="fade">
      <div class="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p class="text-zinc-500 uppercase tracking-widest text-sm font-medium mb-12">Trusted by global market leaders</p>
        <div class="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <!-- Simplified placeholders for brand logos -->
          <h4 class="text-2xl font-display font-bold text-white uppercase tracking-tight">Acme Corp</h4>
          <h4 class="text-2xl font-display font-bold text-white uppercase tracking-tight">Nebula</h4>
          <h4 class="text-2xl font-display font-bold text-white uppercase tracking-tight">Vortex</h4>
          <h4 class="text-2xl font-display font-bold text-white uppercase tracking-tight">Zenith</h4>
          <h4 class="text-2xl font-display font-bold text-white uppercase tracking-tight">Aura</h4>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-40 px-6 md:px-12 relative z-10">
      <div class="max-w-4xl mx-auto text-center" appReveal="fadeUp">
        <h2 class="text-5xl md:text-7xl font-display font-medium text-white mb-8 leading-tight">
          Let's turn creator attention into <span class="text-gold-400">brand growth.</span>
        </h2>
        <p class="text-xl text-zinc-400 font-light mb-12">Build your next campaign with influence at the center.</p>
        <a routerLink="/contact" class="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-black font-semibold tracking-wide hover:bg-gold-400 text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)]">
          Start a Campaign
        </a>
      </div>
    </section>
  `
})
export class HomeComponent {
  pillars = [
    { title: 'Cultural Relevance', desc: 'We identify creators who don\'t just have an audience, but command genuine cultural influence.', icon: 'public' },
    { title: 'High-Fidelity Match', desc: 'Meticulous alignment between brand ethos, product value, and creator narrative.', icon: 'tune' },
    { title: 'Conversion Intent', desc: 'Every campaign is engineered for action. We move beyond vanity metrics to real ROI.', icon: 'trending_up' }
  ];

  featuredTalents = [
    { name: 'Elena Rostova', category: 'High Fashion', image: 'https://picsum.photos/seed/fashion1/800/1200?blur=1' },
    { name: 'Marcus Chen', category: 'Lifestyle & Tech', image: 'https://picsum.photos/seed/techstyle/800/1200?blur=1' },
    { name: 'Sophia Sterling', category: 'Beauty', image: 'https://picsum.photos/seed/beauty2/800/1200?blur=1' },
    { name: 'David Thorne', category: 'Fitness & Health', image: 'https://picsum.photos/seed/fitness/800/1200?blur=1' }
  ];
}
