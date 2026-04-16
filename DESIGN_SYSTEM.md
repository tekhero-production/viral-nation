# Design System: Cinematic Luxury

## Color Palette
The site heavily relies on strict adherence to a defined palette:
- **Base Black:** \`#0a0a0a\` (Zinc-950)
- **Matte Surface:** \`#121212\` (Zinc-900)
- **Pure Black:** \`#020202\` (Deep background contrast)
- **Primary Text:** White & Zinc-100
- **Secondary Text:** Zinc-400 & Zinc-500
- **Accent (Gold):** Gradation from \`#e0ca8b\` to \`#c5a059\` (muted, premium metallic, avoiding harsh yellows).

## Typography
- **Display:** \`Outfit\` (Geometric, sans-serif, widely spaced and confident)
- **Body:** \`Inter\` (Clean, hyper-readable, sleek)
- **Metadata:** All-caps, wide-tracking (\`tracking-[0.2em]\`), small font scales for eyebrows and structural labels.

## Component Language
- **Glows:** Used sparingly. Defined by \`.box-glow\` and \`.text-glow\` utility classes utilizing rgba(212, 175, 55, alpha).
- **Cards:** Defined by simple thin borders (\`border-white/5\`), transparent interactions and slow transitions (\`duration-500\`).
- **Motion:** Fade-in and fade-up only. Easing is set to a cinematic \`cubic-bezier(0.22, 1, 0.36, 1)\`. No bouncy, elastic, or overly energetic states.

## Responsive Behavior
Designed Mobile-First but structured for Desktop-First luxury:
- Margins and padding heavily expanded on desktop (\`py-32\`, \`px-12\`).
- Content restricted to \`max-w-7xl\` to prevent ultra-widescreen blowout.
