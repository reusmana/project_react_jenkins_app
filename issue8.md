# ISSUE 8: Potential Improvements

Based on the current state of the Neo-Brutalism portfolio and the original `design.md`, here are several areas that could be improved to elevate the project further:

## 1. Performance & SEO (Next.js Consideration)
- **Current State**: The project is a Vite SPA (Single Page Application).
- **Improvement**: If SEO and initial load performance are critical (especially for a portfolio), consider gradually migrating core parts to Next.js for SSR (Server-Side Rendering) or SSG (Static Site Generation). Even if staying with Vite, we should implement code-splitting/lazy loading for heavy components (like GSAP heavy sections or 3D elements if any).
- **Image Optimization**: Ensure all images used in `WorkScrollStory` and `Projects` are optimized (WebP format, compressed) and preloaded if they appear "above the fold" or immediately upon scroll.

## 2. Accessibility (A11y)
- **Contrast & Hierarchy**: Neo-Brutalism relies heavily on high contrast (often black borders on bright colors). We should run a contrast checker to ensure all text is highly legible.
- **Keyboard Navigation**: The custom cursor (`CustomCursor.jsx`) and GSAP pinning can sometimes interfere with standard keyboard navigation. We need to ensure that users can tab through the `Navbar`, `Projects` links, and `ContactSection` smoothly, and that focus states have a clear Neo-Brutalist indicator (e.g., a thick dashed outline).
- **Aria Labels**: Add descriptive `aria-labels` to non-text interactive elements, especially if using icons or abstract CTA buttons.

## 3. Advanced Animations (GSAP Refinements)
- **Marquee Velocity**: In `design.md`, it was mentioned: "kecepatannya akan merespon percepatan scroll". Ensure `MarqueeSection.jsx` actually accelerates when the user scrolls faster.
- **Bento Grid Reveal**: Ensure `SkillsBentoGrid.jsx` uses a stagger effect that feels organic, not just a simple fade-in.
- **Custom Cursor Trailing**: Verify `CustomCursor.jsx` uses `gsap.quickTo()` for that highly responsive, yet slightly delayed organic feel mentioned in the design doc.

## 4. UI/UX Details
- **Button Press Consistency**: Ensure the "Button Press" hover animation (from `issue2.md`) is applied consistently across *every* clickable element in the app.
- **Mobile Navigation**: Ensure the `Navbar` has a robust mobile menu (e.g., full-screen overlay with massive typography) that matches the Brutalist aesthetic.

## 5. Content Management
- **Centralized Data**: Currently, project data is hardcoded in `Projects.tsx` and `WorkScrollStory.tsx`. Moving this to a central `src/data/projects.ts` file or implementing a simple headless CMS (like Sanity or Contentful) would make the portfolio much easier to update in the future.

**Would you like me to create implementation plans for any specific items from this list?**
