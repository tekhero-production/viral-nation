# Architecture Guide

## Angular Setup
This project leverages **Angular v21+** with a **strictly zoneless** configuration.
It uses Signals (\`signal()\`, \`computed()\`) and Standalone Components exclusively.

## Directory Structure
\`\`\`text
src/
  app/
    layout/
      public-layout/         # Main wrapper with Header, Footer, and Canvas
    features/                # Page-level components
      home/
      about/
      talents/
      partners/
      live-tiktok/
      contact/
    shared/
      components/            # Reusable UI (Header, Footer)
      directives/            # Reusable behaviors (appReveal)
      effects/               # Canvas rendering
\`\`\`

## Routing & Layout Strategy
All primary routes are nested under the \`PublicLayoutComponent\`. This ensures the \`HeaderComponent\`, \`FooterComponent\`, and \`ParticleCanvasComponent\` persist seamlessly across page navigations without re-rendering the WebGL canvas, preserving performance.

## State & Performance
- **Change Detection:** Uses \`provideExperimentalZonelessChangeDetection()\`.
- **Animations:** Uses \`motion\` inside the \`RevealDirective\` which binds to intersection observers via \`inView()\`. Evaluates completely outside the Angular runtime loop, ensuring strict performance.
- **Canvas:** Runs on \`requestAnimationFrame\` completely isolated from the component tree.
