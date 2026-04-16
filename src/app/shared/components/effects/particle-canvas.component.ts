import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone, PLATFORM_ID, inject, input } from '@angular/core';

@Component({
  selector: 'app-particle-canvas',
  template: `<canvas #canvas class="fixed inset-0 w-full h-full pointer-events-none z-0 mix-blend-screen opacity-60"></canvas>`,
})
export class ParticleCanvasComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  dense = input<boolean>(false);
  
  private ctx!: CanvasRenderingContext2D | null;
  private animationFrameId = 0;
  private particles: { x: number; y: number; s: number; sx: number; sy: number; a: number }[] = [];
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly resizeHandler = () => this.resize();
  
  // Use minimal zone interaction to avoid performance hits
  private ngZone = inject(NgZone);

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    this.ngZone.runOutsideAngular(() => {
      this.initCanvas();
      this.animate();
      window.addEventListener('resize', this.resizeHandler);
    });
  }

  ngOnDestroy() {
    if (!this.isBrowser) return;

    cancelAnimationFrame(this.animationFrameId);
    window.removeEventListener('resize', this.resizeHandler);
  }

  private initCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    if (!this.ctx) return;

    this.resize();
    const particleCount = this.dense() ? Math.min(window.innerWidth / 4, 250) : Math.min(window.innerWidth / 15, 80);
    
    this.particles = Array.from({ length: particleCount }).map(() => this.createParticle());
  }

  private createParticle() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      s: Math.random() * 2 + 0.5, // size
      sx: (Math.random() - 0.5) * 0.2, // speed x
      sy: (Math.random() - 0.5) * -0.5 - 0.1, // speed y (mostly upwards)
      a: Math.random() * 0.5 + 0.1 // alpha
    };
  }

  private resize() {
    if(!this.canvasRef) return;
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private animate() {
    if (!this.ctx) return;
    const canvas = this.canvasRef.nativeElement;
    
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (const p of this.particles) {
      p.x += p.sx;
      p.y += p.sy;
      
      // Wrap around
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;
      
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(212, 175, 55, ${p.a})`;
      this.ctx.fill();
    }
    
    this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }
}
