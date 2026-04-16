import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent"
      [class.py-6]="!isScrolled()"
      [class.py-4]="isScrolled()"
      [class.bg-zinc-950/80]="isScrolled()"
      [class.backdrop-blur-md]="isScrolled()"
      [class.border-white/5]="isScrolled()"
    >
      <div class="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <!-- Logo -->
        <a routerLink="/" class="text-2xl font-display font-medium tracking-wide flex items-center gap-2 group">
          <span class="w-8 h-8 rounded-full border border-gold-500/50 flex items-center justify-center group-hover:border-gold-400 group-hover:box-glow transition-all duration-500">
            <span class="w-2 h-2 bg-gold-400 rounded-full group-hover:scale-125 transition-transform duration-500"></span>
          </span>
          Viral Nation
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden lg:flex items-center gap-8">
          <a routerLink="/" routerLinkActive="text-gold-400" [routerLinkActiveOptions]="{exact: true}" class="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300">Home</a>
          <a routerLink="/live" routerLinkActive="text-gold-400" class="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 relative group">
            Live TikTok
            <span class="absolute -top-1 -right-2 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
          </a>
          <a routerLink="/about" routerLinkActive="text-gold-400" class="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300">About</a>
          <a routerLink="/talents" routerLinkActive="text-gold-400" class="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300">Talents</a>
          <a routerLink="/partners" routerLinkActive="text-gold-400" class="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300">Partners</a>
        </nav>

        <!-- CTA -->
        <div class="hidden lg:flex items-center">
          <a routerLink="/contact" class="px-6 py-2.5 rounded-full border border-gold-500 text-gold-400 text-sm font-medium tracking-wide hover:bg-gold-500 hover:text-zinc-950 hover:box-glow transition-all duration-300">
            Start a Campaign
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="lg:hidden text-zinc-300 hover:text-white" (click)="toggleMenu()">
          <mat-icon>{{ isMenuOpen() ? 'close' : 'menu' }}</mat-icon>
        </button>
      </div>
    </header>

    <!-- Mobile Menu Overlay -->
    @if (isMenuOpen()) {
      <div class="fixed inset-0 z-40 bg-zinc-950 border-t border-white/5 pt-24 px-6 flex flex-col">
        <nav class="flex flex-col gap-6 text-2xl font-display font-light">
          <a routerLink="/" (click)="closeMenu()" class="hover:text-gold-400 transition-colors">Home</a>
          <a routerLink="/live" (click)="closeMenu()" class="hover:text-gold-400 transition-colors flex items-center gap-3">
            Live TikTok
            <span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </a>
          <a routerLink="/about" (click)="closeMenu()" class="hover:text-gold-400 transition-colors">About Us</a>
          <a routerLink="/talents" (click)="closeMenu()" class="hover:text-gold-400 transition-colors">Talents</a>
          <a routerLink="/partners" (click)="closeMenu()" class="hover:text-gold-400 transition-colors">Partners</a>
        </nav>
        <div class="mt-12">
          <a routerLink="/contact" (click)="closeMenu()" class="inline-flex w-full justify-center px-6 py-4 rounded-full bg-gold-500 text-zinc-950 font-medium tracking-wide hover:bg-gold-400 transition-colors">
            Start a Campaign
          </a>
        </div>
      </div>
    }
  `
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
    if (this.isMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    document.body.style.overflow = '';
  }
}
