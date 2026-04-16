import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ParticleCanvasComponent } from '../../shared/components/effects/particle-canvas.component';

@Component({
  selector: 'app-public-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ParticleCanvasComponent],
  template: `
    <app-particle-canvas [dense]="false"></app-particle-canvas>
    <app-header></app-header>
    <main class="relative z-10 w-full min-h-screen">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `
})
export class PublicLayoutComponent {}
