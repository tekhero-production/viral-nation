import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, CommonModule, RevealDirective, MatIconModule],
  template: `
    <section class="min-h-[90vh] pt-40 pb-20 px-6 md:px-12 bg-black relative z-10">
      <div class="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        <div class="lg:w-5/12 pt-8" appReveal="fadeRight">
          <p class="text-gold-400 uppercase tracking-widest text-xs font-bold mb-6">Inquiries</p>
          <h1 class="text-5xl md:text-6xl font-display font-medium text-white leading-[1.1] mb-6">
            Let's build your next <span class="text-gold-400 font-serif italic font-light">campaign.</span>
          </h1>
          <p class="text-zinc-400 font-light text-lg mb-12">
            Initiate a conversation with our strategy team. We respond to all qualified inquiries within 24 hours.
          </p>
          
          <div class="space-y-8">
            <div>
              <h4 class="text-white text-sm font-medium mb-2 uppercase tracking-widest">Global HQ</h4>
              <p class="text-zinc-500 font-light">One World Trade Center<br/>Suite 4500<br/>New York, NY 10007</p>
            </div>
            <div>
               <h4 class="text-white text-sm font-medium mb-2 uppercase tracking-widest">Direct Contact</h4>
               <p class="text-zinc-500 font-light">partnerships&#64;viralnation.com<br/>+1 (212) 555-0199</p>
            </div>
          </div>
        </div>

        <div class="lg:w-7/12" appReveal="fadeUp" [delay]="0.2">
          <div class="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-[80px] pointer-events-none"></div>

            @if (isSubmitted) {
              <div class="py-20 text-center" appReveal="fade">
                <div class="w-20 h-20 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mx-auto mb-6">
                  <mat-icon class="text-gold-400 text-3xl">check_circle</mat-icon>
                </div>
                <h3 class="text-3xl font-display text-white mb-4">Inquiry Received.</h3>
                <p class="text-zinc-400 font-light">Our partnership strategy team will review your brief and contact you shortly.</p>
              </div>
            } @else {
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6 relative z-10">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label for="name" class="text-xs uppercase tracking-widest text-zinc-400 font-medium">Full Name</label>
                    <input id="name" type="text" formControlName="name" class="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Jane Doe" />
                  </div>
                  <div class="space-y-2">
                    <label for="company" class="text-xs uppercase tracking-widest text-zinc-400 font-medium">Company</label>
                    <input id="company" type="text" formControlName="company" class="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="Acme Corp" />
                  </div>
                </div>

                <div class="space-y-2">
                  <label for="email" class="text-xs uppercase tracking-widest text-zinc-400 font-medium">Work Email</label>
                  <input id="email" type="email" formControlName="email" class="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors" placeholder="jane@company.com" />
                </div>

                <div class="space-y-2">
                  <label for="service" class="text-xs uppercase tracking-widest text-zinc-400 font-medium">Service Interest</label>
                  <select id="service" formControlName="service" class="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                    <option value="" disabled selected>Select an option</option>
                    <option value="campaign">Broad Campaign Activation</option>
                    <option value="live">Live TikTok Commerce</option>
                    <option value="ambassador">Long-term Ambassadorship</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label for="budget" class="text-xs uppercase tracking-widest text-zinc-400 font-medium">Budget Range</label>
                  <select id="budget" formControlName="budget" class="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                    <option value="<50k">Under $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value="500k+">$500k+</option>
                  </select>
                </div>

                <div class="space-y-2">
                  <label for="message" class="text-xs uppercase tracking-widest text-zinc-400 font-medium">Brief/Message</label>
                  <textarea id="message" formControlName="message" rows="4" class="w-full bg-black/50 border border-white/10 rounded-none px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none" placeholder="Tell us about your objectives..."></textarea>
                </div>

                <div class="pt-4">
                  <button type="submit" [disabled]="!contactForm.valid" class="w-full py-4 bg-gold-500 text-black font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                    Submit Inquiry
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  
  isSubmitted = false;

  contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    company: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    service: ['', Validators.required],
    budget: ['100k-500k', Validators.required],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitted = true;
    }
  }
}
