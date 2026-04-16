import { Directive, ElementRef, OnInit, inject, input } from '@angular/core';
import { inView, animate } from 'motion';

@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit {
  private el = inject(ElementRef);
  
  appReveal = input<'fadeUp' | 'fadeRight' | 'fade'>('fadeUp');
  delay = input<number>(0);
  duration = input<number>(0.8);

  ngOnInit() {
    this.el.nativeElement.style.opacity = '0';
    
    inView(this.el.nativeElement, () => {
      const type = this.appReveal();
      const options = { 
        duration: this.duration(), 
        delay: this.delay(),
        ease: [0.22, 1, 0.36, 1] as const // cubic-bezier matching the design rules
      };
      
      if (type === 'fadeUp') {
        animate(
          this.el.nativeElement,
          { opacity: [0, 1], y: [40, 0] },
          options
        );
      } else if (type === 'fadeRight') {
        animate(
          this.el.nativeElement,
          { opacity: [0, 1], x: [-40, 0] },
          options
        );
      } else {
        animate(
          this.el.nativeElement,
          { opacity: [0, 1] },
          options
        );
      }
    }, { amount: 0.1 });
  }
}
