import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-talents',
  imports: [RouterLink, RevealDirective],
  template: `
    <!-- Hero Section -->
    <section class="pt-40 pb-20 px-6 md:px-12 bg-black border-b border-white/5 relative z-10">
      <div class="max-w-7xl mx-auto text-center">
        <div class="max-w-3xl mx-auto" appReveal="fadeUp">
          <p class="text-gold-400 uppercase tracking-widest text-sm font-semibold mb-6">World-Class Representation</p>
          <h1 class="text-5xl md:text-7xl font-display font-medium text-white leading-[1.05] tracking-tight mb-8">
            Creators selected for <span class="text-gold-400">impact.</span>
          </h1>
          <p class="text-xl text-zinc-400 font-light">
            Premium talent for brands that demand more than just visibility.
          </p>
        </div>
      </div>
    </section>

    <!-- Filters & Grid -->
    <section class="py-16 px-6 md:px-12 bg-zinc-950 relative z-10 min-h-screen">
      <div class="max-w-7xl mx-auto">
        
        <!-- Filter Row -->
        <div class="flex overflow-x-auto pb-4 mb-16 gap-4 no-scrollbar border-b border-white/5" appReveal="fade">
          @for (cat of categories; track cat) {
            <button 
              (click)="activeCategory.set(cat)"
              class="whitespace-nowrap px-6 py-2 rounded-full border transition-all duration-300 text-sm tracking-wide font-medium"
              [class.border-gold-500]="activeCategory() === cat"
              [class.bg-gold-500/10]="activeCategory() === cat"
              [class.text-gold-400]="activeCategory() === cat"
              [class.border-transparent]="activeCategory() !== cat"
              [class.text-zinc-500]="activeCategory() !== cat"
              [class.hover:text-white]="activeCategory() !== cat"
            >
              {{ cat }}
            </button>
          }
        </div>

        <!-- Talent Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-24">
          @for (talent of filteredTalents(); track talent.id; let i = $index) {
            <div class="group relative overflow-hidden rounded-xl bg-zinc-900 border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]" appReveal="fadeUp" [delay]="(i % 4) * 0.1">
              
              <div class="aspect-[3/4] overflow-hidden bg-black relative">
                 <img [src]="talent.image" [alt]="talent.name" referrerpolicy="no-referrer" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out">
                 <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>
              
              <!-- Content overlay for a sleek, card-within-card feel -->
              <div class="absolute inset-x-0 bottom-0 p-6 pt-16 flex flex-col justify-end">
                <span class="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] uppercase tracking-widest w-fit mb-3">
                  {{ talent.category }}
                </span>
                <h3 class="text-2xl font-display font-medium text-white mb-1 group-hover:text-gold-400 transition-colors">{{ talent.name }}</h3>
                <p class="text-zinc-400 text-sm mb-4">{{ talent.followerCount }} Followers</p>
                <div class="h-0 overflow-hidden group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a routerLink="/contact" class="inline-block border-b border-gold-400/50 pb-1 text-xs uppercase tracking-widest text-gold-400 hover:border-gold-400 transition-colors">
                    Inquire Availability &rarr;
                  </a>
                </div>
              </div>
              
            </div>
          }
        </div>

        <!-- Featured Spotlight -->
        <div class="bg-black border border-white/5 rounded-3xl overflow-hidden" appReveal="fadeUp">
          <div class="grid lg:grid-cols-2">
            <div class="p-12 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-zinc-900 to-black">
              <p class="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold mb-6">Talent Spotlight</p>
              <h2 class="text-4xl md:text-5xl font-display text-white mb-6">Isabella Torres</h2>
              <p class="text-zinc-400 font-light text-lg mb-8 max-w-md">
                Blending haute couture with accessible beauty, Isabella consistently drives exceptional ROAS for premier luxury cosmetics and fashion houses.
              </p>
              <div class="grid grid-cols-2 gap-8 mb-10 border-t border-white/5 pt-8">
                <div>
                  <p class="text-3xl font-display text-white">4.2M</p>
                  <p class="text-zinc-600 text-xs uppercase tracking-widest">Total Audience</p>
                </div>
                <div>
                  <p class="text-3xl font-display text-white">8.5%</p>
                  <p class="text-zinc-600 text-xs uppercase tracking-widest">Avg. Engagement</p>
                </div>
              </div>
              <div>
                <a routerLink="/contact" class="px-8 py-3 rounded-full bg-white text-black text-sm font-semibold tracking-wide hover:bg-gold-400 hover:text-white transition-colors">
                  Start Conversation
                </a>
              </div>
            </div>
            <div class="aspect-square lg:aspect-auto relative bg-zinc-800">
               <img src="https://picsum.photos/seed/luxurymodel/1000/1200?blur=1" alt="Isabella Torres" referrerpolicy="no-referrer" class="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-80" />
            </div>
          </div>
        </div>

      </div>
    </section>
  `
})
export class TalentsComponent {
  categories = ['All', 'Fashion', 'Beauty', 'Lifestyle', 'Entertainment', 'Fitness', 'Live Commerce'];
  activeCategory = signal('All');

  allTalents = [
    { id: 1, name: 'Ava Monroe', category: 'Fashion', followerCount: '1.2M', image: 'https://picsum.photos/seed/ava/600/800?blur=1' },
    { id: 2, name: 'Julian Reed', category: 'Lifestyle', followerCount: '850K', image: 'https://picsum.photos/seed/julian/600/800?blur=1' },
    { id: 3, name: 'Chloe Vance', category: 'Beauty', followerCount: '2.5M', image: 'https://picsum.photos/seed/chloe/600/800?blur=1' },
    { id: 4, name: 'Leon Cross', category: 'Entertainment', followerCount: '5.1M', image: 'https://picsum.photos/seed/leon/600/800?blur=1' },
    { id: 5, name: 'Sara Lin', category: 'Fashion', followerCount: '3.4M', image: 'https://picsum.photos/seed/sara/600/800?blur=1' },
    { id: 6, name: 'Matteo Silva', category: 'Fitness', followerCount: '920K', image: 'https://picsum.photos/seed/matteo/600/800?blur=1' },
    { id: 7, name: 'Nadia Hayes', category: 'Live Commerce', followerCount: '4.8M', image: 'https://picsum.photos/seed/nadia/600/800?blur=1' },
    { id: 8, name: 'Dylan Cole', category: 'Entertainment', followerCount: '2.1M', image: 'https://picsum.photos/seed/dylan/600/800?blur=1' }
  ];

  filteredTalents() {
    if (this.activeCategory() === 'All') return this.allTalents;
    return this.allTalents.filter(t => t.category === this.activeCategory());
  }
}
