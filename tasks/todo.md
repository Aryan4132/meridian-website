# Task List: Next-Gen 3D Enhancements

- [x] **Task 1: Model-Synced 3D Morphing & Click Shockwave (`CyberCore3D.tsx`)**
  - Acceptance: `CyberCore3D` accepts active model accent color & model ID props, smoothly lerping geometry morphs, colors, floating 3D HUD telemetry pins, and triggering WebGL particle shockwaves on canvas click.
  - Files: `src/components/CyberCore3D.tsx`

- [x] **Task 2: Hero Integration (`Hero.tsx`)**
  - Acceptance: Pass `selectedModel` props to `CyberCore3D` so model switching triggers real-time 3D Core shape & color morphs.
  - Files: `src/components/Hero.tsx`

- [x] **Task 3: Scroll-Driven Warp Acceleration (`Starfield.tsx`)**
  - Acceptance: Track scroll velocity to accelerate 3D star tunnel into hyperdrive warp lines during scrolling.
  - Files: `src/components/Starfield.tsx`

- [ ] **Task 5: Interactive 3D Mascot (`Mascot3D.tsx`)**
  - Acceptance: Create `Mascot3D` component with Three.js emblem, theme-adaptive materials, Anime.js spring cursor tracking, idle float loop, and click 360° flip spin. Mount as AI companion widget.
  - Files: `src/components/Mascot3D.tsx`, `src/App.tsx`, `src/components/Header.tsx`

- [ ] **Task 6: Dual Theme System (Dark Glassmorphism vs. Light Neo-Brutalism)**
  - Acceptance: Define `[data-theme="dark"]` (Cyber Glassmorphism) and `[data-theme="light"]` (Light Neo-Brutalism: 3px solid black borders, hard offset 6px shadow, vibrant pops). Add theme toggle switch to `Header.tsx`. Adapt Three.js scenes (`CyberCore3D`, `Mascot3D`, `Starfield`) to light/dark themes cleanly.
  - Files: `src/index.css`, `src/components/Header.tsx`, `src/components/Tilt3DCard.tsx`, `src/components/CyberCore3D.tsx`, `src/App.tsx`

- [ ] **Task 7: Micro-Animations & Audio Polish**
  - Acceptance: Add `anime.stagger()` reveals, magnetic button hovers, audio FX feedback, and terminal typing polish. Keep layout structure strictly 100% identical.
  - Files: `src/components/ReactSimulator.tsx`, `src/components/FeaturePillars.tsx`, `src/components/Header.tsx`

- [ ] **Task 8: Verification & Build Check**
  - Acceptance: `npm run lint` and `npm run build` pass with zero errors. Verify smooth theme toggling and 3D mascot interaction.




