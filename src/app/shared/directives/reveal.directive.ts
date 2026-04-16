import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, OnDestroy, OnInit, PLATFORM_ID, inject, input } from '@angular/core';
import { inView, animate } from 'motion';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private stopInView: (() => void) | undefined;
  
  appReveal = input<'fadeUp' | 'fadeRight' | 'fade'>('fadeUp');
  delay = input<number>(0);
  duration = input<number>(0.8);

  ngOnInit() {
    if (!this.isBrowser) return;

    const element = this.el.nativeElement as HTMLElement;

    element.style.opacity = '0';
    
    this.stopInView = inView(element, () => {
      const type = this.appReveal();
      const options = { 
        duration: this.duration(), 
        delay: this.delay(),
        ease: [0.22, 1, 0.36, 1] as const // cubic-bezier matching the design rules
      };
      
      if (type === 'fadeUp') {
        animate(
          element,
          { opacity: [0, 1], y: [40, 0] },
          options
        );
      } else if (type === 'fadeRight') {
        animate(
          element,
          { opacity: [0, 1], x: [-40, 0] },
          options
        );
      } else {
        animate(
          element,
          { opacity: [0, 1] },
          options
        );
      }
    }, { amount: 0.1 });
  }

  ngOnDestroy() {
    this.stopInView?.();
  }
}
