import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-live-tiktok',
  imports: [RouterLink, RevealDirective, MatIconModule],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-[80vh] flex items-center pt-32 pb-16 px-6 md:px-12 bg-black border-b border-white/5 overflow-hidden">
      <!-- Glow effect for Live emphasis -->
      <div class="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div class="max-w-7xl mx-auto w-full relative z-10">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div appReveal="fadeRight">
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 mb-8">
              <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span class="text-white text-xs font-medium tracking-widest uppercase">Live Commerce</span>
            </div>
            
            <h1 class="text-5xl md:text-7xl font-display font-medium text-white leading-[1.05] tracking-tight mb-8">
              Real-time energy. <br />
              <span class="text-gold-400">Immediate conversion.</span>
            </h1>
            <p class="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-lg">
              Unlock the highest-converting channel in modern social commerce. We produce premium TikTok Live activations that turn attention directly into sales.
            </p>
            <a routerLink="/contact" class="inline-block px-8 py-4 rounded-full bg-gold-500 text-zinc-950 font-semibold tracking-wide hover:bg-gold-400 hover:box-glow transition-all duration-300">
              Launch a Live Campaign
            </a>
          </div>
          
          <div class="relative hidden lg:block" appReveal="fadeUp" [delay]="0.2">
            <!-- Simulated Live UI -->
            <div class="relative w-full max-w-md mx-auto aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-zinc-900">
              <img src="https://picsum.photos/seed/tiktoklivebg/1080/1920" alt="Live Event Background" referrerpolicy="no-referrer" class="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40">
              
              <!-- Gradient Overlay overlaying the image -->
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div class="absolute top-8 left-6 right-6 flex justify-between items-center z-10">
                <div class="flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
                  <span class="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center">
                    <mat-icon class="text-[18px]">person</mat-icon>
                  </span>
                  <span class="text-white text-sm font-medium">ViralNation</span>
                </div>
                <div class="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Live
                </div>
              </div>

              <!-- Product overlay simulator -->
              <div class="absolute bottom-8 left-6 right-6 z-10">
                <div class="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl flex gap-4 items-center">
                  <div class="w-16 h-16 bg-black/50 rounded-lg overflow-hidden border border-white/10">
                     <img src="https://picsum.photos/seed/product1/200/200" alt="Product" referrerpolicy="no-referrer" class="w-full h-full object-cover">
                  </div>
                  <div class="flex-1">
                    <h4 class="text-white font-medium mb-1 line-clamp-1">Luxury Campaign Package #1</h4>
                    <p class="text-gold-400 font-bold">$4,500.00</p>
                  </div>
                  <button class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
                    <mat-icon>shopping_bag</mat-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Live Works -->
    <section class="py-32 px-6 md:px-12 relative z-10 bg-zinc-950">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-20" appReveal="fadeUp">
          <h2 class="text-4xl md:text-5xl font-display font-medium text-white mb-6">The architecture of urgency.</h2>
          <p class="text-xl text-zinc-400 font-light">
            Live commerce isn't just broadcasting. It's a highly engineered sales environment where trust, exclusivity, and limited-time offer dynamics intersect.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          @for (feature of liveFeatures; track feature.title; let i = $index) {
             <div class="bg-black border border-white/5 p-8 rounded-2xl hover:bg-zinc-900 transition-colors duration-300" appReveal="fadeUp" [delay]="i * 0.1">
                <h3 class="text-2xl font-display text-white mb-3">{{ feature.title }}</h3>
                <p class="text-zinc-500 font-light text-sm leading-relaxed">{{ feature.desc }}</p>
             </div>
          }
        </div>
      </div>
    </section>

    <!-- How It Works / Process -->
    <section class="py-32 px-6 md:px-12 bg-black border-t border-white/5 relative z-10">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20" appReveal="fadeUp">
          <p class="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-4">Activation Flow</p>
          <h2 class="text-4xl md:text-5xl font-display font-medium text-white">From strategy to stream.</h2>
        </div>

        <div class="space-y-6">
          @for (step of steps; track step.num; let i = $index) {
            <div class="group border-t border-white/5 pt-6 pb-2" appReveal="fadeUp" [delay]="i * 0.1">
              <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div class="md:col-span-2">
                  <span class="text-6xl font-display font-medium text-zinc-800 group-hover:text-gold-500/30 transition-colors duration-500">
                    {{ step.num }}
                  </span>
                </div>
                <div class="md:col-span-3 pt-4">
                  <h3 class="text-xl font-medium text-white group-hover:text-gold-400 transition-colors">{{ step.title }}</h3>
                </div>
                <div class="md:col-span-7 pt-4">
                  <p class="text-zinc-400 font-light leading-relaxed max-w-2xl">{{ step.desc }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Use Cases & CTA -->
    <section class="py-32 px-6 md:px-12 bg-zinc-950 relative z-10">
       <div class="max-w-7xl mx-auto text-center" appReveal="fadeUp">
         <h2 class="text-4xl md:text-5xl font-display font-medium text-white mb-16">Perfect for high-stakes moments.</h2>
         <div class="flex flex-wrap justify-center gap-4 mb-20 text-sm tracking-widest uppercase font-medium">
           <span class="px-6 py-3 rounded-full border border-white/10 text-white">Product Drops</span>
           <span class="px-6 py-3 rounded-full border border-white/10 text-white">Seasonal Sales</span>
           <span class="px-6 py-3 rounded-full border border-white/10 text-white">Beauty Demos</span>
           <span class="px-6 py-3 rounded-full border border-white/10 text-white">Exclusive Access</span>
         </div>

         <div class="p-16 border border-gold-500/20 bg-gold-500/5 rounded-[2rem] max-w-4xl mx-auto backdrop-blur-sm">
           <h3 class="text-3xl font-display text-white mb-6">Ready to go live?</h3>
           <p class="text-zinc-400 mb-10 max-w-xl mx-auto">Skip the learning curve. Let our experts run a fully managed Live commerce activation that guarantees ROI.</p>
           <a routerLink="/contact" class="inline-block px-10 py-4 rounded-full bg-white text-zinc-950 font-semibold uppercase tracking-wide hover:bg-gold-400 hover:text-white transition-all duration-300">
              Start Your Live Activation
           </a>
         </div>
       </div>
    </section>
  `
})
export class LiveTiktokComponent {
  liveFeatures = [
    { title: 'Urgency', desc: 'The ephemeral nature of live video demands immediate attention and forces buying decisions on the spot.' },
    { title: 'Authenticity', desc: 'Unedited, real-time creator interaction builds instant trust that highly produced ads cannot replicate.' },
    { title: 'Interaction', desc: 'Direct Q&A and personalized shoutouts convert casual viewers into emotionally invested buyers.' },
    { title: 'Data Velocity', desc: 'Immediate performance feedback allows us to optimize pricing, offers, and messaging mid-stream.' }
  ];

  steps = [
    { num: '01', title: 'Target Strategy', desc: 'We identify the exact combination of inventory, promotional levers, and audience targeting needed to maximize GMV.' },
    { num: '02', title: 'Creator Selection', desc: 'We source proven live-selling talent who align with your brand prestige and possess deep product fluency.' },
    { num: '03', title: 'Broadcast Execution', desc: 'Full-service production management including run-of-show scripting, technical setup, and real-time moderation.' },
    { num: '04', title: 'Amplification', desc: 'Pre-event hype campaigns and post-event repackaging of top-performing clips for sustained ad performance.' }
  ];
}
