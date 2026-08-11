# SPEC: Meridian-X Website v0.4.0 Synchronization

## Objective
Update `meridian_website` to reflect the latest release of **Meridian-X (v0.4.0)** based on the main project `README.md`. Ensure all 3D visuals, feature pillars, system architecture, telemetry, overlay HUD specs, design styles, installation options, system requirements, and comparison matrices match the new capabilities.

## Tech Stack & Dependencies
- **Framework**: React 18 with TypeScript, Vite
- **Styling**: Vanilla CSS (`src/index.css`) with custom CSS variables & glassmorphism
- **Animations**: Anime.js, Three.js / React Three Fiber / Lucide Icons
- **Target OS**: Windows, macOS, Linux

## Commands
- Build: `npm run build`
- Dev: `npm run dev`

## Key Architecture & Content Updates
1. **Hero & Top Navigation**:
   - Update version tag to `v0.4.0`
   - Tagline: "Intelligent Agentic Desktop Workspace Companion"
   - Model presets: `qwen2.5-coder:7b-instruct-q4_K_M`, `qwen2.5-coder:1.5b-instruct`, `llama3.2-vision:11b`, `moondream:1.8b`, `nomic-embed-text`
   - One-Line Installation: PowerShell `irm https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.ps1 | iex`

2. **Feature Pillars & 11 Design Styles**:
   - ReAct Reasoning Agent (Self-Correction & Fast Auditor LLM)
   - Encrypted Secret Vault (AES-GCM, machine-bound HMAC-SHA256)
   - MCP Server Registry (1-Click GitHub, PostgreSQL, Slack, Linear)
   - Interactive Mascot & Dynamic Island (3D orbital-ring, 4 state colors: Blue/Amber/Red/Green, 6 anchor positions)
   - Frameless Overlay & Global Hotkeys (`Alt+M`, `Alt+Shift+M`, `Alt+V`)
   - Speculative Concurrency Filtering (Tier 0 parallel vs Tier 1 sequential)
   - Focus Distraction Blocker (Website & process shield)
   - 50-Slot Clipboard Surveillance (Grid, classification, prompt analysis)
   - Supertonic Speech Engine (10 local voices: Male M1-M5, Female F1-F5)
   - Developer Productivity Stats (Live SQLite + Git metrics)
   - 11 Selectable Design Styles preview (Classic Cyber Slate, Art Deco, Neobrutalism, Cyberpunk Neon, Retro Synthwave, Ink & Slate, Nordic Frost, Maximalism, Paper & Ink, Sakura Blossom, Solaris Light)

3. **6-Layer System Architecture & Specs**:
   - Trigger Layer -> Security Gate -> Context Assembly -> ReAct Reasoning -> Tiered Execution -> Observe/Respond/Persist
   - Minimum & Recommended System Requirements table
   - OS Support matrix

4. **Terminal ReAct Simulator & HUD Preview**:
   - ReAct loop trace: Reason -> Schema Check -> Heal -> Speculative Concurrency Router (Tier 0 / Tier 1) -> Supertonic TTS output
   - HUD Preview showing Hotkeys (`Alt+M`, `Alt+Shift+M`, `Alt+V`), Mascot state, Clipboard surveillance, and Distraction shield status

## Boundaries
- **Always do**: Preserve full TypeScript type safety, ensure responsive UI, test build (`npm run build`).
- **Ask first**: Major component removals or structure changes.
- **Never do**: Truncate code, insert placeholdes, or hardcode broken paths.

## Success Criteria
- Website reflects all v0.4.0 Meridian-X features, setup instructions, metrics, architecture, and themes.
- Build (`npm run build`) completes with zero errors.
