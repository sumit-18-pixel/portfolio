Redesign my portfolio website with a minimal, premium dark theme and smooth, high-end scroll motion. Follow these specifics:

Visual Style

Dark theme using a near-black base (
#0a0a0a or 
#0d0d0d), not pure black — with a subtle secondary surface tone (
#131313 / 
#1a1a1a) for cards/sections.
One accent color used sparingly (e.g. electric lime 
#c8ff00, soft violet 
#8b5cf6, or warm amber 
#ff8a00) — just enough for CTAs, links, and highlights, not everywhere.
Muted off-white text (
#e8e8e8) instead of pure white, with a dimmer gray (
#8a8a8a) for secondary text.
Generous whitespace, large clean typography (a modern sans like Inter, Neue Montreal, or Satoshi), strong type hierarchy.
Thin 1px borders / subtle gradients instead of heavy shadows for depth.

Scroll Motion & Animation

Smooth scroll (Lenis-style easing) across the whole site.
Scroll-triggered reveal animations: fade + slight upward translate for sections/text as they enter viewport (staggered for lists/cards).
Parallax movement on hero text/images and background elements.
A subtle scroll-progress indicator (thin bar or dot navigation on the side).
Text/heading split animations (words or letters animating in) on key sections like Hero and About.
Hover micro-interactions: magnetic buttons, cursor-follow effects, image tilt/scale on hover, underline draw-on-hover for links.
Smooth section transitions — sections shouldn't just "appear," they should feel choreographed.
Subtle background motion (grain texture, gradient blobs, or animated noise) to avoid a flat/static feel.

Structure/Sections

Hero with big bold intro statement + animated subtext + CTA.
About / Skills with animated counters or skill bars.
Projects grid/gallery with hover reveal (image scale + overlay info).
Experience timeline with scroll-linked progress.
Contact section with animated form fields and social links.

Overall Feel

Should feel like an agency-grade / award-winning site (Awwwards-style), not template-like.
Animations should feel intentional and smooth (ease-out curves, no jank), not excessive or gimmicky.
Fully responsive — animations should degrade gracefully on mobile (reduce parallax, keep fades).
Fast load, no animation causing layout shift.

Use [React + Framer Motion / GSAP + ScrollTrigger / vanilla JS] (pick your stack) and make it production-ready, clean code, well-commented.