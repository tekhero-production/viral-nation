import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-partners',
  imports: [RouterLink, RevealDirective],
  template: `
    <!-- Hero Section -->
    <section class="pt-40 pb-20 px-6 md:px-12 bg-black border-b border-white/5 relative z-10">
      <div class="max-w-7xl mx-auto text-center">
        <div class="max-w-3xl mx-auto" appReveal="fadeUp">
          <p class="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-6 flex justify-center items-center gap-4">
            <span class="w-8 h-px bg-gold-400/50"></span>
            Brand Collaborations
            <span class="w-8 h-px bg-gold-400/50"></span>
          </p>
          <h1 class="text-5xl md:text-7xl font-display font-medium text-white leading-[1.05] tracking-tight mb-8">
            Partnership with reach <br/> and <span class="text-gold-400 text-glow">refinement.</span>
          </h1>
          <p class="text-xl text-zinc-400 font-light mb-10">
            Built for enterprise brands that want influence with direction.
          </p>
        </div>
      </div>
    </section>

    <!-- Why Partner / Value Prop -->
    <section class="py-24 px-6 md:px-12 bg-zinc-950 relative z-10">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div appReveal="fadeRight">
           <h2 class="text-3xl lg:text-4xl font-display text-white mb-8">The difference is in the depth.</h2>
           <p class="text-zinc-400 font-light text-lg mb-8 leading-relaxed">
             We do not offer a self-serve platform. We provide an embedded strategic partnership. From initial discovery to final attribution reporting, we handle the complexities of creator marketing so your in-house teams can focus on global brand strategy.
           </p>
           <ul class="space-y-6">
             <li class="flex gap-4">
               <span class="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2.5"></span>
               <div>
                 <h4 class="text-white font-medium mb-1">Curated Alignment</h4>
                 <p class="text-sm text-zinc-500 leading-relaxed max-w-sm">Rigorous vetting ensures creators align with your brand safety guidelines and aesthetic standards.</p>
               </div>
             </li>
             <li class="flex gap-4">
               <span class="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2.5"></span>
               <div>
                 <h4 class="text-white font-medium mb-1">Flawless Execution</h4>
                 <p class="text-sm text-zinc-500 leading-relaxed max-w-sm">White-glove management of contracts, deliverables, legal review, and content compliance.</p>
               </div>
             </li>
           </ul>
        </div>
        <div class="grid sm:grid-cols-2 gap-6" appReveal="fadeUp">
          <div class="bg-black p-8 rounded-2xl border border-white/5 space-y-4">
            <h4 class="text-gold-400 uppercase tracking-widest text-xs font-bold">Model 01</h4>
            <h3 class="text-xl font-display text-white">Always-On Ambassadorship</h3>
            <p class="text-sm text-zinc-500">Long-term integration for sustained brand affinity and predictable growth.</p>
          </div>
          <div class="bg-black p-8 rounded-2xl border border-white/5 space-y-4 sm:translate-y-8">
            <h4 class="text-gold-400 uppercase tracking-widest text-xs font-bold">Model 02</h4>
            <h3 class="text-xl font-display text-white">Product Launches</h3>
            <p class="text-sm text-zinc-500">High-impact, synchronized creator bursts to dominate share-of-voice during rollouts.</p>
          </div>
          <div class="bg-black p-8 rounded-2xl border border-white/5 space-y-4">
            <h4 class="text-gold-400 uppercase tracking-widest text-xs font-bold">Model 03</h4>
            <h3 class="text-xl font-display text-white">Live Activations</h3>
            <p class="text-sm text-zinc-500">Highly produced live commerce events driving direct conversion and scarcity.</p>
          </div>
          <div class="bg-black p-8 rounded-2xl border border-white/5 space-y-4 sm:translate-y-8">
             <h4 class="text-gold-400 uppercase tracking-widest text-xs font-bold">Model 04</h4>
             <h3 class="text-xl font-display text-white">Experiential Events</h3>
             <p class="text-sm text-zinc-500">Inviting select creators to physical activations for authentic behind-the-scenes coverage.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Logos -->
    <section class="py-24 bg-black border-y border-white/5 relative z-10" appReveal="fade">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <h3 class="text-center text-sm font-medium text-zinc-600 uppercase tracking-widest mb-16">Leading brands trust our framework</h3>
        
        <!-- Premium Logo Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center opacity-60">
          <div class="text-2xl font-display font-medium text-white tracking-widest">AETHER</div>
          <div class="text-2xl font-display font-medium text-white tracking-widest">NEXUS</div>
          <div class="text-2xl font-display font-medium text-white tracking-widest">LUMINA</div>
          <div class="text-2xl font-display font-medium text-white tracking-widest">ELEVATE</div>
          <div class="text-2xl font-display font-medium text-white tracking-widest">KINETIC</div>
          <div class="text-2xl font-display font-medium text-white tracking-widest">VALENCE</div>
          <div class="text-2xl font-display font-medium text-white tracking-widest">SYMMETRY</div>
          <div class="text-2xl font-display font-medium text-white tracking-widest">HORIZON</div>
        </div>
      </div>
    </section>

    <!-- Process Flow -->
    <section class="py-32 px-6 md:px-12 bg-zinc-950 relative z-10">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-display text-white mb-20 text-center" appReveal="fadeUp">The Partnership Flow</h2>
        
        <div class="relative max-w-4xl mx-auto">
          <!-- Connecting Line -->
          <div class="absolute left-6 md:left-[50%] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden md:block"></div>
          
          <div class="space-y-16 md:space-y-24">
            @for (step of steps; track step.title; let i = $index) {
              <div class="flex flex-col md:flex-row relative items-center gap-8 md:gap-0" appReveal="fadeUp" [delay]="i * 0.1">
                
                <div class="md:w-1/2 md:pr-16 text-left" [class.md:text-right]="i % 2 === 0" [class.order-1]="i % 2 === 0" [class.order-2]="i % 2 !== 0">
                  @if (i % 2 === 0) {
                     <h3 class="text-2xl font-display text-white mb-3">{{ step.title }}</h3>
                     <p class="text-zinc-400 font-light text-sm">{{ step.desc }}</p>
                  }
                </div>
                
                <div class="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border border-gold-500 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.4)] z-10"></div>
                
                <div class="md:w-1/2 md:pl-16 text-left" [class.order-last]="i % 2 === 0" [class.order-first]="i % 2 !== 0">
                   @if (i % 2 !== 0) {
                     <h3 class="text-2xl font-display text-white mb-3">{{ step.title }}</h3>
                     <p class="text-zinc-400 font-light text-sm">{{ step.desc }}</p>
                  }
                </div>

                <!-- Mobile view layout fallback -->
                <div class="md:hidden w-full flex gap-6">
                   <div class="w-4 h-4 mt-2 bg-black border border-gold-500 rounded-full shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
                   <div>
                     <h3 class="text-2xl font-display text-white mb-3">{{ step.title }}</h3>
                     <p class="text-zinc-400 font-light text-sm">{{ step.desc }}</p>
                   </div>
                </div>

              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-32 px-6 md:px-12 bg-black border-t border-white/5 relative z-10">
      <div class="max-w-3xl mx-auto text-center" appReveal="fadeUp">
        <h2 class="text-4xl md:text-5xl font-display text-white mb-8">Ready to define the standard?</h2>
        <p class="text-zinc-400 mb-12">Submit your partnership brief, and our strategy team will outline the optimal creator integration model for your goals.</p>
        <a routerLink="/contact" class="inline-block px-10 py-4 rounded-full bg-gold-500 text-black font-semibold uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300">
          Start a Brand Conversation
        </a>
      </div>
    </section>
  `
})
export class PartnersComponent {
  steps = [
    { title: 'Discovery & Briefing', desc: 'Deep dive into brand identity, campaign objectives, audience demographics, and core KPIs.' },
    { title: 'Data-Driven Sourcing', desc: 'Identifying creators using both algorithmic relevance sorting and manual qualitative aesthetic review.' },
    { title: 'Strategy & Ideation', desc: 'Collaborative development of creative angles, formats, and integration methods.' },
    { title: 'Contract & Compliance', desc: 'Secure negotiations, usage rights acquisitions, and strict brand safety reviews.' },
    { title: 'Activation', desc: 'Coordinated execution of content drops, live events, or sustained ambassador integration.' },
    { title: 'Reporting & Optimization', desc: 'Granular post-campaign analysis tracking reach, sentiment, engagement, and direct conversion metrics.' }
  ];
}
