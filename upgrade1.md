Fix and simplify my portfolio website based on these issues from the last version:

Bug Fixes

Scrolling gets stuck/janky — remove or fix whatever smooth-scroll library (Lenis/GSAP ScrollTrigger) is causing this. Prioritize a lightweight, native-feeling scroll over fancy easing. Test that scroll works smoothly on both mouse wheel and trackpad, no lag, no scroll-jacking.
Custom cursor is too animated/distracting — replace it with a normal default cursor, or at most a very subtle, small dot/ring that follows the mouse with minimal lag (no scaling, no morphing, no magnetic pull).
Remove any unclear/unexplained visual elements (background blobs, noise textures, floating shapes, or effects) that don't serve a clear purpose. Keep the design clean and easy to understand at a glance — I should be able to explain what every element on the page is for.

Simplify Overall

Strip it back to a minimal dark theme: one background color, one accent color, clean typography, simple fade-in-on-scroll animations only (no parallax, no split-text, no scroll-linked timelines).
Keep hover effects simple: underline on links, slight scale or brightness change on buttons/cards — nothing exaggerated.
Site should feel calm, fast, and professional — not flashy.

Content Changes

Skills section: keep it simple — just list HTML, CSS, and JavaScript (with simple icons or a clean tag/badge style, no animated progress bars).
Projects section: add three small beginner-friendly projects with short descriptions and links/screenshots:
Calculator — a simple JS calculator app.
ATM Simulator — a basic ATM interface simulating withdraw/deposit/balance check.
Jarvis AI — a simple voice/text-based JS assistant that responds to basic commands.
Each project card should show: project name, one-line description, tech used (HTML/CSS/JS), and a link/button to view live demo or GitHub repo.

Keep the rest of the structure (Hero, About, Experience, Contact) intact but make sure every animation is smooth, subtle, and purposeful — not overwhelming.