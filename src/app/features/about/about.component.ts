import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RouterLink, RevealDirective],
  template: `
    <!-- Hero Section -->
    <section class="pt-40 pb-24 px-6 md:px-12 bg-black relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-4xl" appReveal="fadeUp">
          <p class="text-gold-400 uppercase tracking-[0.2em] text-sm font-semibold mb-6 flex items-center gap-3">
            <span class="w-12 h-px bg-gold-400/50"></span>
            Our Identity
          </p>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white leading-[1.05] tracking-tight mb-8">
            We build influence <br />
            <span class="text-zinc-600">with intention.</span>
          </h1>
        </div>
      </div>
    </section>

    <!-- Narrative Section -->
    <section class="py-24 px-6 md:px-12 bg-zinc-950 border-t border-white/5 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div appReveal="fadeRight">
            <h2 class="text-3xl md:text-4xl font-display font-medium text-white mb-8">Not a directory.<br/>A strategic growth partner.</h2>
            <div class="space-y-6 text-zinc-400 font-light text-lg leading-relaxed">
              <p>
                The era of transactional, spray-and-pray influencer marketing is over. Today, brands don't just need visibility; they need cultural alignment and measurable business impact.
              </p>
              <p>
                Viral Nation was built to solve the modern brand's hardest problem: turning fragmented social attention into sustained economic growth.
              </p>
              <p>
                We do not operate an open marketplace. We operate a highly curated, strategically deployed roster of premium talent. We act as architects—designing campaigns where the right creator, the right brand, and the right moment intersect flawlessly.
              </p>
            </div>
          </div>
          
          <div class="relative rounded-2xl overflow-hidden aspect-square lg:aspect-[4/5] bg-zinc-900 border border-white/10" appReveal="fadeUp" [delay]="0.2">
             <img src="https://picsum.photos/seed/officeculture/1000/1200?grayscale" alt="Agency Culture" referrerpolicy="no-referrer" class="w-full h-full object-cover opacity-80 mix-blend-screen mix-blend-luminosity">
             <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Differentiators -->
    <section class="py-32 px-6 md:px-12 bg-black relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20 text-center" appReveal="fadeUp">
          <h2 class="text-4xl font-display font-medium text-white">The architecture of influence.</h2>
        </div>
        
        <div class="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
           @for (diff of differentiators; track diff.title; let i = $index) {
             <div class="bg-black p-12 lg:p-16" appReveal="fade" [delay]="i * 0.1">
               <h3 class="text-xl font-display text-white mb-4 flex items-center gap-4">
                 <span class="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                 {{ diff.title }}
               </h3>
               <p class="text-zinc-500 font-light leading-relaxed">{{ diff.desc }}</p>
             </div>
           }
        </div>
      </div>
    </section>

    <!-- Stats / Trust -->
    <section class="py-32 px-6 md:px-12 bg-zinc-950 relative z-10 border-t border-white/5">
       <div class="max-w-7xl mx-auto">
         <div class="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center" appReveal="fadeUp">
           <div class="border-l border-white/5 pl-6 text-left">
             <p class="text-5xl md:text-6xl font-display text-white font-medium mb-2">5B+</p>
             <p class="text-gold-400 text-sm tracking-widest uppercase">Global Impressions</p>
           </div>
           <div class="border-l border-white/5 pl-6 text-left">
             <p class="text-5xl md:text-6xl font-display text-white font-medium mb-2">350+</p>
             <p class="text-gold-400 text-sm tracking-widest uppercase">Brand Partners</p>
           </div>
           <div class="border-l border-white/5 pl-6 text-left">
             <p class="text-5xl md:text-6xl font-display text-white font-medium mb-2">Top 1%</p>
             <p class="text-gold-400 text-sm tracking-widest uppercase">Exclusive Creators</p>
           </div>
           <div class="border-l border-white/5 pl-6 text-left">
             <p class="text-5xl md:text-6xl font-display text-white font-medium mb-2">$200M+</p>
             <p class="text-gold-400 text-sm tracking-widest uppercase">Attributed Sales</p>
           </div>
         </div>
       </div>
    </section>

    <!-- Closing CTA -->
    <section class="py-32 px-6 md:px-12 bg-black relative z-10">
      <div class="max-w-4xl mx-auto text-center" appReveal="fadeUp">
        <h2 class="text-4xl md:text-5xl font-display text-white mb-10">Elevate your brand's presence.</h2>
        <a routerLink="/contact" class="inline-flex px-10 py-4 rounded-full border border-gold-500/50 text-gold-400 font-medium tracking-wide hover:bg-gold-500 hover:text-black transition-colors duration-300">
          Work With Viral Nation
        </a>
      </div>
    </section>
  `
})
export class AboutComponent {
  differentiators = [
    { title: 'Curated Access', desc: 'We reject 90% of creators who approach us. Our roster is strictly reserved for those who demonstrate true engagement, undisputed aesthetic quality, and brand safety.' },
    { title: 'Strategic Campaign Thinking', desc: 'We don\'t just facilitate introductions. We provide end-to-end creative direction, ensuring the content aligns with broader marketing objectives.' },
    { title: 'Culture Fluency', desc: 'We operate at the speed of internet culture, identifying micro-trends before they peak, allowing our partners to enter conversations authentically.' },
    { title: 'Elevated Execution', desc: 'From contract negotiation to final asset delivery, our operational protocols guarantee a friction-free, enterprise-grade experience for brands.' }
  ];
}
