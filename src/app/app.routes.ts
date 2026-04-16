import {Routes} from '@angular/router';
import {PublicLayoutComponent} from './layout/public-layout/public-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'live',
        loadComponent: () => import('./features/live-tiktok/live-tiktok.component').then(m => m.LiveTiktokComponent)
      },
      {
        path: 'about',
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: 'talents',
        loadComponent: () => import('./features/talents/talents.component').then(m => m.TalentsComponent)
      },
      {
        path: 'partners',
        loadComponent: () => import('./features/partners/partners.component').then(m => m.PartnersComponent)
      },
      {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
