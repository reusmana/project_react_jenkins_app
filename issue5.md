# ISSUE 5: WorkScrollStory Responsiveness

## 1. Objective
Make the `WorkScrollStory` component responsive for mobile devices. Currently, it uses a side-by-side layout (40% left, 60% right) which is too narrow for mobile.

## 2. Proposed Changes (Mobile < 768px)
- **Layout Switch**: Change `flex-row` to `flex-col`.
- **Left Column**: 
  - Change from `w-[40%]` to `w-full`.
  - Position: Horizontal scroll or sticky mini-header with active state. Actually, for neo-brutalist feel, a **Vertical Stack** where labels stay at the top or follow the scroll might be better.
- **Right Column**:
  - Change from `w-[60%]` to `w-full`.
  - Content: Maintain the `clip-path` reveal but adjust aspect ratios for mobile screens.

## 3. Visual Concept (Mobile)
1. **Section Header**: "WORK" or Section Title sticky at the top.
2. **Cards**: Each section becomes a full-height (or 80vh) card that snaps or reveals.
3. **Animations**: 
   - Keep the GSAP `ScrollTrigger` pinning but adjust for vertical stacking.
   - On mobile, maybe disable pinning if it feels too cramped, or pin the whole container and reveal layers.

## 4. Implementation Steps
1. Add `flex-col md:flex-row` to the main container.
2. Adjust `w-full md:w-[40%]` and `w-full md:w-[60%]`.
3. Update GSAP `ScrollTrigger` logic to handle vertical layout shifts if necessary.
4. Ensure the `clip-path` animation looks good on smaller viewports.

**Does this mobile layout plan align with your vision?**
