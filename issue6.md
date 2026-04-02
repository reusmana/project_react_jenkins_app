# ISSUE 6: Mobile Title Synchronization (WorkScrollStory)

## 1. Objective
Refine the mobile view of `WorkScrollStory` so that only the active title is visible in the header section at any given time, preventing text cutoff and improving focus.

## 2. Proposed Behavior (Mobile < 768px)
- **Header Section**: The top 30% section will display ONLY the currently active title (INTERFACE, DEVELOPMENT, or CYBER_SEC).
- **Synchronized Reveal**: 
  - 0-100vh: Show Title 1, hide others.
  - 101-200vh: Show Title 2, hide others.
  - 201-300vh: Show Title 3, hide others.
- **Visuals**: Centers the text, uses `opacity: 0` for non-active titles on mobile, while maintaining the side-by-side layout for desktop.

## 3. Implementation Logic
- **CSS**: Use `hidden md:block` for the non-active state logic if necessary, or simply animate `display: none` / `opacity: 0` in GSAP specifically for small screens.
- **GSAP**: Update the `tl` (Timeline) to include `display: none` / `opacity: 0` transitions for mobile users.

## 4. Verification
- Verify that only one title is visible on mobile.
- Verify that desktop view still shows all three labels with opacity-based interaction as before.
