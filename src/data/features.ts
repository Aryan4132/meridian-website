export interface FeaturePillar {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
  metrics: string;
  details: string[];
}

export const FEATURE_PILLARS: FeaturePillar[] = [
  {
    id: "sovereignty",
    title: "100% Offline & Sovereign",
    badge: "Air-Gapped Ready",
    tagline: "Zero telemetry. Zero cloud calls.",
    description: "Operates 100% locally via embedded Ollama runtime & FastAPI microservice. Your code, documents, API keys, and conversation history never leave your device.",
    iconName: "ShieldCheck",
    accentColor: "#10B981",
    metrics: "0 KB Cloud Egress",
    details: ["Local GGUF Model Execution", "Full Air-Gap & Off-Grid Support", "Zero Telemetry & Tracking"]
  },
  {
    id: "react-loop",
    title: "ReAct Reasoning & Self-Correction",
    badge: "Fast Auditor Check",
    tagline: "Reason → Act → Observe → Auto-Heal",
    description: "Asynchronous ReAct loop powered by any local Ollama models or cloud LLMs. Intercepts tool calls, auto-corrects parameter mismatches, and runs syntax verification.",
    iconName: "Cpu",
    accentColor: "#E4E4E7",
    metrics: "Sub-100ms Tool Healing",
    details: ["TOOL_REGISTRY Auto-Fix", "Fast Auditor LLM Gate", "SSE Real-Time Telemetry Stream"]
  },
  {
    id: "mascot-island",
    title: "3D Mascot & Dynamic Island",
    badge: "Orbital-Ring Companion",
    tagline: "Cognitive state reflection in real time",
    description: "Floating 3D desktop companion reflecting execution status with color states (Blue=Idle, Amber=Working, Red=Failed, Green=Success). Compresses into a sleek floating island with 6 anchor points.",
    iconName: "Sparkles",
    accentColor: "#38BDF8",
    metrics: "60 FPS GPU Companion",
    details: ["Blue/Amber/Red/Green State Colors", "Slow/Fast/Frozen Spin Dynamics", "6 Desktop Anchor Positions"]
  },
  {
    id: "global-hotkeys",
    title: "Frameless Overlay & Hotkeys",
    badge: "Sub-10ms Overlay",
    tagline: "Instant HUD without losing window focus",
    description: "Sub-10ms frameless HUD and global hotkey engine. Toggle workspace shell (Alt+M), compact mascot island HUD (Alt+Shift+M), or push-to-talk voice input (Alt+V) seamlessly.",
    iconName: "Zap",
    accentColor: "#F59E0B",
    metrics: "Sub-10ms Frame Latency",
    details: ["Alt + M (Main Workspace)", "Alt + Shift + M (Mascot HUD)", "Alt + V (Voice Push-to-Talk)"]
  },
  {
    id: "speculative-concurrency",
    title: "Speculative Concurrency Router",
    badge: "Dual-Lane Execution",
    tagline: "Parallel reads + sequential transaction safety",
    description: "Dual-lane tool execution engine. Tier 0 read-only tools (read_file, search_web) execute concurrently via asyncio.gather(); Tier ≥ 1 mutating operations run sequentially.",
    iconName: "Layers",
    accentColor: "#A78BFA",
    metrics: "3.4x Throughput Gain",
    details: ["Tier 0 Concurrent asyncio.gather", "Tier 1+ Mutating Transactions", "Zero Race Condition Guarantees"]
  },
  {
    id: "encrypted-vault",
    title: "AES-GCM Secret Vault & MCP",
    badge: "SEC-01..SEC-26 Security",
    tagline: "Machine-bound HMAC derivation & 1-click plugins",
    description: "AES-256-GCM encrypted credential store tied to machine hostname + username HMAC. Connects to 1-Click MCP server plugins (GitHub, PostgreSQL, Slack, Linear).",
    iconName: "Lock",
    accentColor: "#10B981",
    metrics: "256-Bit Hardware Encryption",
    details: ["HMAC-SHA256 Passphrase Derivation", "Direct MCP Tool Injection", "Prompt Injection Sanitizer (SEC-16)"]
  },
  {
    id: "focus-shield",
    title: "Focus Distraction Blocker",
    badge: "Pomodoro Shield",
    tagline: "Block distracting web & desktop apps",
    description: "Blocks distracting websites (YouTube, Reddit, Twitter/X, Twitch) and background desktop processes (discord.exe, steam.exe) during Pomodoro focus blocks.",
    iconName: "ShieldAlert",
    accentColor: "#EF4444",
    metrics: "100% Focus Guarantee",
    details: ["Website Domain Blocking", "Process Surveillance & Termination", "Active Shield Status Indicator"]
  },
  {
    id: "clipboard-surveillance",
    title: "50-Slot Clipboard Surveillance",
    badge: "SQLite WAL Buffer",
    tagline: "Pastebuffer monitoring & prompt analysis",
    description: "Real-time pastebuffer monitoring with 50 persistent slots, automatic URL/Code classification, 1-click prompt analysis, and SQLite WAL database persistence fallback.",
    iconName: "ClipboardList",
    accentColor: "#8B5CF6",
    metrics: "50 Persistent History Slots",
    details: ["URL & Code Snippet Auto-Classify", "1-Click Prompt Analysis", "SQLite WAL Fallback Store"]
  },
  {
    id: "supertonic-voice",
    title: "Supertonic Speech & Voice Engine",
    badge: "10 Voice Synthesizer",
    tagline: "Local text-to-speech & audio sound FX",
    description: "Local text-to-speech engine featuring 10 distinct speaker voices (Male M1–M5, Female F1–F5), dynamic speech volume control, and audio state-change sound FX.",
    iconName: "Volume2",
    accentColor: "#EC4899",
    metrics: "10 Local Voices",
    details: ["5 Male & 5 Female Speaker Profiles", "Dynamic Audio State FX", "Offline Audio Preprocessing"]
  },
  {
    id: "real-stats",
    title: "Developer Productivity Engine",
    badge: "Real SQLite Metrics",
    tagline: "Live metric tracking from SQLite & Git",
    description: "Queries live SQLite task logs and Git repository commits to calculate real metrics: Success Rate, Heals Applied, Git Commits/Snapshots, and Pomodoros Completed.",
    iconName: "BarChart3",
    accentColor: "#3B82F6",
    metrics: "Real-Time Telemetry",
    details: ["Git Commit & Snapshot Tracking", "Task Auto-Heal Analytics", "Pomodoro Analytics"]
  },
  {
    id: "turbovec-rag",
    title: "Turbovec RAG & Knowledge Graph",
    badge: "Sub-ms Hybrid Retrieval",
    tagline: "Vector RAG + entity-relationship memory",
    description: "Local semantic vector store (Turbovec) combined with entity-relationship knowledge graph memory for instant sub-millisecond retrieval without third-party egress.",
    iconName: "Database",
    accentColor: "#14B8A6",
    metrics: "< 1ms Retrieval",
    details: ["On-Device Vector RAG", "Entity Knowledge Graph Memory", "Zero Third-Party Data Leakage"]
  },
  {
    id: "low-ram-optimizer",
    title: "Low RAM Optimizer & Particle Canvas",
    badge: "Resource Control",
    tagline: "Dynamic particles with memory conservation",
    description: "Dynamic background particle renderer with floating nodes & accent connections, featuring a 1-click Low RAM Mode toggle in Settings to conserve memory.",
    iconName: "Feather",
    accentColor: "#64748B",
    metrics: "< 120MB Idle Memory",
    details: ["1-Click Low RAM Mode Toggle", "GPU Particle Canvas", "Resource Governor Controls"]
  }
];

export interface DesignStyle {
  id: string;
  name: string;
  type: 'Dark' | 'Light';
  accentColor: string;
  typography: string;
  description: string;
}

export const DESIGN_STYLES: DesignStyle[] = [
  { id: 'cyber-slate', name: 'Classic Cyber Slate', type: 'Dark', accentColor: '#E8A020', typography: 'IBM Plex Mono', description: 'Solar Amber accents with deep slate obsidian backdrop' },
  { id: 'art-deco', name: 'Art Deco Luxury', type: 'Dark', accentColor: '#D4AF37', typography: 'Playfair Display (Serif)', description: 'Metallic Gold geometric sophistication' },
  { id: 'neobrutalism', name: 'Neobrutalism', type: 'Dark', accentColor: '#FFDE59', typography: 'Space Grotesk', description: 'Canary Yellow stark high-contrast boundaries' },
  { id: 'cyberpunk-neon', name: 'Cyberpunk Neon', type: 'Dark', accentColor: '#FF0055', typography: 'Orbitron', description: 'Electric Magenta glowing terminal vibe' },
  { id: 'retro-synthwave', name: 'Retro Synthwave', type: 'Dark', accentColor: '#FF71CE', typography: 'VT323 (Pixel Mono)', description: 'Hot Pink 80s arcade aesthetic' },
  { id: 'ink-slate', name: 'Ink & Slate', type: 'Dark', accentColor: '#818CF8', typography: 'Inter', description: 'Muted Indigo clean developer workspace' },
  { id: 'nordic-frost', name: 'Nordic Frost', type: 'Dark', accentColor: '#38BDF8', typography: 'DM Sans', description: 'Sky Blue crisp Scandinavian minimalism' },
  { id: 'maximalism', name: 'Maximalism', type: 'Dark', accentColor: '#FF007A', typography: 'Syne', description: 'Vibrant Pink expressive high-density layout' },
  { id: 'paper-ink', name: 'Paper & Ink', type: 'Light', accentColor: '#D95338', typography: 'Lora (Serif)', description: 'Terracotta Coral warm editorial feel' },
  { id: 'sakura-blossom', name: 'Sakura Blossom', type: 'Light', accentColor: '#E85D75', typography: 'Outfit', description: 'Rose Quartz soft modern aesthetic' },
  { id: 'solaris-light', name: 'Solaris Light', type: 'Light', accentColor: '#2563EB', typography: 'DM Sans', description: 'Cobalt Blue professional daylight layout' }
];

export interface TechStackItem {
  name: string;
  role: string;
  description: string;
  badge: string;
  color: string;
}

export const TECH_STACK: TechStackItem[] = [
  {
    name: "Tauri v2",
    role: "Desktop Core & Security Shell",
    description: "Rust-powered lightweight desktop container with zero Electron bloat, fast startup, frameless HUD, and native OS global hotkeys.",
    badge: "Rust v2 Engine",
    color: "#F59E0B"
  },
  {
    name: "FastAPI",
    role: "Async Local Execution Backend",
    description: "Asynchronous Python engine orchestrating local tool calling, system commands, SSE streaming, and background ReAct loops.",
    badge: "Async FastAPI",
    color: "#009688"
  },
  {
    name: "Turbovec & SQLite WAL",
    role: "On-Device Vector Memory & Storage",
    description: "Blazing fast local vector index storing embeddings for instant semantic RAG combined with SQLite WAL database persistence.",
    badge: "Vector RAG + WAL",
    color: "#8B5CF6"
  },
  {
    name: "Ollama Runtime",
    role: "Local LLM Inference Engine",
    description: "Direct hardware acceleration (CUDA/Metal/ROCm) running Qwen 2.5 Coder, Llama 3.2 Vision, and Nomic Embed locally.",
    badge: "GPU Accelerated",
    color: "#10B981"
  }
];
