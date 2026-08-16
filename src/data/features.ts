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
    tagline: "Zero telemetry. Zero cloud egress.",
    description: "Operates 100% locally via embedded Ollama runtime & FastAPI microservice. Your code, documents, API keys, and SQLite database memory never leave your device.",
    iconName: "ShieldCheck",
    accentColor: "#10B981",
    metrics: "0 KB Cloud Egress",
    details: ["Local GGUF Model Execution", "Full Air-Gap & Off-Grid Support", "Zero Telemetry & Tracking"]
  },
  {
    id: "react-loop",
    title: "ReAct Engine & Self-Healing",
    badge: "loop.py ReAct Engine",
    tagline: "Reason → Act → Observe → Auto-Heal",
    description: "Asynchronous ReAct loop (meridian_backend/src/core/loop.py). Intercepts tool calls, auto-corrects parameter signature mismatches against TOOL_REGISTRY, and runs Code Auditor model checks.",
    iconName: "Cpu",
    accentColor: "#E4E4E7",
    metrics: "Sub-100ms Tool Healing",
    details: ["TOOL_REGISTRY Auto-Fix", "Code Auditor Security Check", "Live SSE Telemetry Stream"]
  },
  {
    id: "swarm-debate",
    title: "Multi-Agent Swarm & Debate Engine",
    badge: "SwarmDebate.tsx",
    tagline: "Adversarial consensus & multi-persona debate",
    description: "Multi-perspective autonomous debate between customized agent personas (swarm.py, SwarmDebate.tsx). Parallel reasoning synthesis for complex problem-solving and consensus verification.",
    iconName: "Users",
    accentColor: "#F59E0B",
    metrics: "Multi-Persona Swarm",
    details: ["Parallel Agent Deliberation (swarm.py)", "Adversarial Consensus Validation", "Live SSE Debate Stream (/api/swarm/stream)"]
  },
  {
    id: "workflow-dag",
    title: "Visual Workflow & DAG Engine",
    badge: "WorkflowBuilder.tsx",
    tagline: "Node-based visual automation graph builder",
    description: "Drag-and-drop workflow DAG builder (workflow_engine.py, WorkflowBuilder.tsx). Combines LLM steps, shell scripts, API calls, and watchers into sequential and conditional execution graphs.",
    iconName: "GitMerge",
    accentColor: "#8B5CF6",
    metrics: "Visual Node Builder",
    details: ["Node-Based DAG Graph Builder", "Conditional Execution Loops", "Watcher & Trigger Integrations"]
  },
  {
    id: "p2p-mesh",
    title: "P2P Mesh & Encrypted Peer Offload",
    badge: "Encrypted LAN/WAN Mesh",
    tagline: "Distributed peer discovery & task offloading",
    description: "Distributed peer-to-peer node discovery and handshake (p2p.py, p2p_crypto.py). End-to-end encrypted task offloading between trusted LAN/WAN Meridian-X nodes over port 8765.",
    iconName: "Network",
    accentColor: "#EC4899",
    metrics: "End-to-End Encrypted",
    details: ["P2P Node Handshake (p2p_crypto.py)", "Distributed Peer Task Offload", "Port 8765 Mesh Gateway"]
  },
  {
    id: "code-lsp",
    title: "Code Graph & LSP Client Engine",
    badge: "AST Symbol Indexer",
    tagline: "Deep code AST analysis & symbol graph",
    description: "Language Server Protocol integration (lsp_client.py, code_graph.py) for deep AST symbol analysis, type checking, and automated code quality reviewing (auto_reviewer.py).",
    iconName: "FileCode",
    accentColor: "#38BDF8",
    metrics: "AST Symbol Graph",
    details: ["LSP Client Integration (lsp_client.py)", "Symbol Knowledge Graph (code_graph.py)", "Automated Code Reviewer"]
  },
  {
    id: "browser-desktop",
    title: "Playwright Web & Desktop Agent",
    badge: "GUI & Web Automation",
    tagline: "Headless browser scraping & GUI macros",
    description: "Headless and visual Playwright browser agent (browser_agent.py, web_browser.py). Desktop GUI mouse/keyboard macro recording and playback (desktop.py, recording.py).",
    iconName: "MonitorPlay",
    accentColor: "#67E8F9",
    metrics: "Playwright + GUI Macros",
    details: ["Playwright Browser Agent", "Desktop GUI Macro Recorder", "Visual Click & Screen Perception"]
  },
  {
    id: "temporal-memory",
    title: "Temporal Memory & State Rollback",
    badge: "Time-Travel Rollback",
    tagline: "Granular session snapshots & history rollback",
    description: "Granular conversation session state snapshots and time-travel rollback (temporal_memory.py, Timeline.tsx). Instant state restoration via /api/history/rollback.",
    iconName: "History",
    accentColor: "#14B8A6",
    metrics: "Instant Snapshots",
    details: ["Temporal Memory Snapshots", "Time-Travel State Rollback", "Telemetry Log Exporter"]
  },
  {
    id: "social-bridges",
    title: "Social & Communication Bridges",
    badge: "Discord / Telegram / WhatsApp",
    tagline: "Out-of-the-box bot communication bridges",
    description: "Bidirectional bot integration bridges for Discord (discord_bridge.py), Telegram (telegram_bridge.py), and WhatsApp (whatsapp_manager.py) for remote control.",
    iconName: "MessageSquare",
    accentColor: "#A78BFA",
    metrics: "3 Bot Channels",
    details: ["Discord Bot Bridge (discord_bridge.py)", "Telegram Bot Bridge (telegram_bridge.py)", "WhatsApp Manager (whatsapp_manager.py)"]
  },
  {
    id: "onboarding-wizard",
    title: "Non-Techie Onboarding Wizard",
    badge: "Auto Spec Classifier",
    tagline: "Hardware auto-detect & multi-port Ollama scanner",
    description: "Detects system CPU cores, RAM, and NVIDIA VRAM (pynvml) to classify machines into Entry (<8GB), Mid (8-16GB), or High (>16GB) tiers. Auto-scans ports 11434, 11435, 8080, 5000 and streams model downloads via SSE.",
    iconName: "Sparkles",
    accentColor: "#38BDF8",
    metrics: "4-Port Auto-Discovery",
    details: ["Hardware Tier Detection (hardware_detector.py)", "Multi-Port Ollama Scanner (ollama_manager.py)", "Real-Time SSE Model Puller"]
  },
  {
    id: "remote-selfhost",
    title: "Remote Backend & Docker Stacks",
    badge: "Caddy SSL Automated",
    tagline: "Self-host on private servers or cloud VMs",
    description: "Deploy with standard docker-compose.yml or docker-compose.prod.yml featuring automated Caddy SSL reverse proxy. Switch between local and remote backends instantly via ServerConnectionModal.",
    iconName: "Server",
    accentColor: "#67E8F9",
    metrics: "1-Click Docker Stack",
    details: ["Production Caddy SSL Proxy", "docs/SELF_HOSTING.md Guide", "Remote Backend URL Switcher"]
  },
  {
    id: "mcp-reverse",
    title: "MCP Plugins & Reverse MCP Server",
    badge: "/api/mcp/v1/tools",
    tagline: "1-Click plugins + reverse tool export for IDEs",
    description: "Marketplace for PostgreSQL, GitHub, Linear, and Slack MCP servers. Exposes internal TOOL_REGISTRY as a reverse MCP server at /api/mcp/v1/tools for external IDE consumption.",
    iconName: "Plug",
    accentColor: "#F43F5E",
    metrics: "Reverse MCP Server",
    details: ["GitHub / Postgres / Slack MCP", "Reverse Endpoint /api/mcp/v1/tools", "Dynamic JSON-RPC Schema Injection"]
  },
  {
    id: "encrypted-vault",
    title: "AES-256-GCM Secret Vault",
    badge: "Hardware HMAC Passphrase",
    tagline: "Machine-bound HMAC derivation & encrypted keys",
    description: "AES-256-GCM encrypted credential vault (vault.py) bound to hostname + username HMAC passphrase. Manages keys for OpenAI, Anthropic, Gemini, Groq, DeepSeek, Tavily, Discord, and Telegram.",
    iconName: "Lock",
    accentColor: "#10B981",
    metrics: "256-Bit Key Hardware Vault",
    details: ["HMAC Passphrase Derivation", "Cloud API Key Vault (vault.py)", "SEC-01..SEC-26 Security Gateways"]
  },
  {
    id: "supertonic-voice",
    title: "Supertonic Voice & ONNX Wake-Word",
    badge: "'Hey Meridian' Wake-Word",
    tagline: "Hands-free wake-word + 10-voice neural TTS",
    description: "Hands-free ONNX wake-word listener for 'Hey Meridian' (wakeword.py), Faster-Whisper local speech-to-text (stt.py), and 10-voice neural text-to-speech with Supertonic (tts.py).",
    iconName: "Volume2",
    accentColor: "#EC4899",
    metrics: "ONNX Wake-Word",
    details: ["'Hey Meridian' Wake-Word (wakeword.py)", "Faster-Whisper Local STT (stt.py)", "Supertonic 10-Voice TTS (tts.py)"]
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
