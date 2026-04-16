import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="bg-black pt-24 pb-12 border-t border-white/5 relative z-10">
      <div class="max-w-7xl mx-auto px-6 md:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div class="col-span-1 lg:col-span-1 border-r border-transparent lg:border-white/5 pr-8">
            <a routerLink="/" class="text-2xl font-display font-medium tracking-wide flex items-center gap-2 mb-6">
              <span class="w-6 h-6 rounded-full border border-gold-500/50 flex items-center justify-center">
                <span class="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
              </span>
              Viral Nation
            </a>
            <p class="text-zinc-500 text-sm leading-relaxed mb-6">
              Luxury-level influencer marketing built to move brands forward. We turn creator attention into brand growth.
            </p>
          </div>
          
          <div>
            <h4 class="text-sm font-medium tracking-widest text-zinc-100 uppercase mb-6">Company</h4>
            <ul class="space-y-4 text-sm text-zinc-500">
              <li><a routerLink="/about" class="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a routerLink="/partners" class="hover:text-gold-400 transition-colors">Partners</a></li>
              <li><a routerLink="/careers" class="hover:text-gold-400 transition-colors">Careers</a></li>
              <li><a routerLink="/contact" class="hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-medium tracking-widest text-zinc-100 uppercase mb-6">Services</h4>
            <ul class="space-y-4 text-sm text-zinc-500">
              <li><a routerLink="/talents" class="hover:text-gold-400 transition-colors">Creator Partnerships</a></li>
              <li><a routerLink="/live" class="hover:text-gold-400 transition-colors">TikTok Live Activations</a></li>
              <li><a routerLink="/campaigns" class="hover:text-gold-400 transition-colors">Campaign Strategy</a></li>
              <li><a routerLink="/reporting" class="hover:text-gold-400 transition-colors">Analytics & Reporting</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-medium tracking-widest text-zinc-100 uppercase mb-6">Connect</h4>
            <div class="flex gap-4">
              <a href="#" class="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex flex-col items-center justify-center text-zinc-400 hover:text-white hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <span class="text-xs uppercase">IG</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex flex-col items-center justify-center text-zinc-400 hover:text-white hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <span class="text-xs uppercase">LI</span>
              </a>
              <a href="#" class="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex flex-col items-center justify-center text-zinc-400 hover:text-white hover:border-gold-500/50 hover:bg-gold-500/10 transition-all">
                <span class="text-xs uppercase">TK</span>
              </a>
            </div>
          </div>
        </div>

        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-xs text-zinc-600">&copy; {{ year }} Viral Nation. All rights reserved.</p>
          <div class="flex gap-6 text-xs text-zinc-600">
            <a href="#" class="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
