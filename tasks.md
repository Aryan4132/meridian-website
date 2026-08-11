# Tasks: Meridian-X Website v0.4.0 Update

## Task 1: Update Data Definitions (`src/data/features.ts`)
- Acceptance: Features, tech stack, model presets, themes, and global hotkeys reflect v0.4.0.
- Verify: Code imports without errors in components.
- Files: `src/data/features.ts`

## Task 2: Update Hero Component (`src/components/Hero.tsx`)
- Acceptance: Version 0.4.0 tag, tagline, one-line PowerShell install command, updated model presets, and CTA modal triggers.
- Verify: Hero section displays v0.4.0 branding and installation commands accurately.
- Files: `src/components/Hero.tsx`

## Task 3: Update Feature Pillars & Theme Switcher Component (`src/components/FeaturePillars.tsx`)
- Acceptance: Displays all feature pillars (Mascot Island, 50-Slot Clipboard, Focus Shield, Supertonic TTS, Security Vault, Speculative Concurrency) and an interactive 11 Design Styles preview.
- Verify: Pillars and Theme grid render cleanly with interactive theme selection.
- Files: `src/components/FeaturePillars.tsx`

## Task 4: Update HUD Overlay Preview & Mascot Visual (`src/components/HudPreview.tsx`)
- Acceptance: Interactive simulation of Overlay HUD featuring Hotkey bar (`Alt+M`, `Alt+Shift+M`, `Alt+V`), Mascot state indicator (Idle/Working/Failed/Success), Clipboard monitor, and Focus Blocker.
- Verify: HUD overlay preview renders hotkeys and mascot state toggles.
- Files: `src/components/HudPreview.tsx`

## Task 5: Update System Architecture & Specs (`src/components/Architecture.tsx` & `src/components/Architecture3DGraph.tsx`)
- Acceptance: Reflects 6-Layer Architecture (Trigger -> Security Gate -> Context Assembly -> ReAct Reasoning -> Tiered Execution -> Observe/Respond/Persist), tech stack breakdown, and System Requirements table (Min vs Recommended).
- Verify: Architecture component displays 6 layers, requirements table, and OS support matrix.
- Files: `src/components/Architecture.tsx`, `src/components/Architecture3DGraph.tsx`

## Task 6: Update ReAct Simulator & MCP Marketplace (`src/components/ReactSimulator.tsx`, `src/components/McpMarketplace.tsx`)
- Acceptance: ReAct simulator shows live tool call self-healing, fast auditor validation, Tier 0/1 execution, and Supertonic TTS audio telemetry. MCP Marketplace includes GitHub, PostgreSQL, Slack, Linear.
- Verify: Terminal trace runs smoothly through reasoning steps.
- Files: `src/components/ReactSimulator.tsx`, `src/components/McpMarketplace.tsx`

## Task 7: Update FAQ, Comparison Matrix & Footer Download Modal (`src/components/ComparisonMatrix.tsx`, `src/components/FaqSection.tsx`, `src/components/Footer.tsx`)
- Acceptance: Matrix compares Meridian-X v0.4.0 vs Cloud AI; FAQ covers v0.4.0 features (hotkeys, themes, offline models, Supertonic speech, RAM mode); Footer & Download Modal point to v0.4.0 releases (`meridian-x_0.4.0_x64-setup.exe` & `meridian-x_0.4.0_x64_en-US.msi`).
- Verify: FAQ toggles work, modal download links match v0.4.0 artifacts.
- Files: `src/components/ComparisonMatrix.tsx`, `src/components/FaqSection.tsx`, `src/components/Footer.tsx`

## Task 8: Verification Gate & Build Check
- Acceptance: `npm run build` succeeds without TypeScript or bundle errors.
- Verify: Run `npm run build` command.
