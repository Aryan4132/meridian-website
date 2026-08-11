import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Cpu, Database, Bot, Terminal, Mic, ShieldCheck, Radio, Server, Cloud, Zap, ArrowRight, ArrowLeftRight, CheckCircle2, Play, Sparkles, Code, Copy, Check, Activity, Lock, ExternalLink } from 'lucide-react';

export interface ArchNodeDetail {
  id: string;
  subgraph: 'UI' | 'Engine' | 'Storage' | 'Inference';
  title: string;
  subtitle: string;
  icon: any;
  accentColor: string;
  glowGradient: string;
  latency: string;
  desc: string;
  payload: string;
  tags: string[];
}

export const SUBGRAPH_NODES: ArchNodeDetail[] = [
  // UI Subgraph
  {
    id: 'dash',
    subgraph: 'UI',
    title: 'Main Dashboard & Mascot Island',
    subtitle: 'React 18 + Vite HUD Interface',
    icon: Monitor,
    accentColor: '#00f0ff',
    glowGradient: 'linear-gradient(135deg, rgba(0, 240, 255, 0.25) 0%, rgba(0, 140, 255, 0.05) 100%)',
    latency: '< 4.2 ms Frame',
    desc: 'Frameless desktop dashboard providing real-time telemetry, agent task logs, and interactive AI Mascot companion widget.',
    payload: `// Tauri v2 WebView Window Configuration
{
  "title": "Meridian-X Mascot Island",
  "decorations": false,
  "transparent": true,
  "always_on_top": true,
  "shadow": false,
  "theme": "DARK_GLASS"
}`,
    tags: ['Tauri v2 Shell', 'Mascot 3D Canvas', 'Zustand State']
  },
  {
    id: 'hotkeys',
    subgraph: 'UI',
    title: 'Global Hotkeys & Game Overlay',
    subtitle: 'Rust Native Hook (Alt+Shift+M)',
    icon: Zap,
    accentColor: '#38bdf8',
    glowGradient: 'linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(37, 99, 235, 0.05) 100%)',
    latency: '< 2.1 ms Trigger',
    desc: 'Sub-3ms global keyboard shortcut listener and transparent DirectX/OpenGL game HUD overlay injector.',
    payload: `// Rust Native Global Hotkey Registration
#[tauri::command]
fn register_hotkey(app: AppHandle) {
    app.global_shortcut().register("Alt+Shift+M", move || {
        app.get_window("hud").unwrap().show().unwrap();
    });
}`,
    tags: ['Rust IPC', 'DirectX Hook', 'Zero Window Delay']
  },

  // Engine Subgraph
  {
    id: 'react_loop',
    subgraph: 'Engine',
    title: '🧠 ReAct Reasoning Loop',
    subtitle: 'Async Python Control Kernel',
    icon: Cpu,
    accentColor: '#10b981',
    glowGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.05) 100%)',
    latency: 'Tier 0 Async',
    desc: 'Continuous autonomous agent execution loop executing Think -> Plan -> Act -> Observe -> Self-Correct cycles.',
    payload: `// ReAct Iterative Correction Step
async def step(self, user_prompt: str):
    thought = await self.think(user_prompt)
    action = await self.plan_tool_execution(thought)
    obs = await self.execute_tool(action)
    if obs.has_error:
        return await self.self_correct(obs)
    return obs.result`,
    tags: ['Self-Correcting', 'AST Verification', 'Parallel Tooling']
  },
  {
    id: 'voice',
    subgraph: 'Engine',
    title: '🎤 Voice STT / TTS & VAD',
    subtitle: 'Whisper.cpp + Silero VAD',
    icon: Mic,
    accentColor: '#f59e0b',
    glowGradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.05) 100%)',
    latency: '< 180 ms STT',
    desc: 'Local speech recognition and neural text-to-speech with real-time Voice Activity Detection (VAD).',
    payload: `// Local Whisper C++ Stream Pipeline
const stt = new WhisperEngine({
  model: "ggml-small.en.bin",
  sample_rate: 16000,
  vad_threshold: 0.65
});`,
    tags: ['Whisper C++', 'Zero Cloud Audio', 'Silero VAD']
  },
  {
    id: 'vault',
    subgraph: 'Engine',
    title: '🔐 Encrypted Vault & MCP',
    subtitle: 'AES-256-GCM Hardware Keychain',
    icon: ShieldCheck,
    accentColor: '#ec4899',
    glowGradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(190, 24, 93, 0.05) 100%)',
    latency: '0 KB Egress',
    desc: 'Local encrypted secret storage for API tokens and dynamic Model Context Protocol (MCP) server manager.',
    payload: `// AES-256 Keychain Enclave
{
  "mcp_servers": ["stitch_mcp", "codegraph_mcp"],
  "encryption_cipher": "AES-256-GCM",
  "key_derivation": "Argon2id"
}`,
    tags: ['AES-256 Vault', 'MCP Protocol', 'Argon2id Key']
  },
  {
    id: 'p2p',
    subgraph: 'Engine',
    title: '📡 P2P Mesh Daemon',
    subtitle: 'libp2p Peer Discovery & Cron',
    icon: Radio,
    accentColor: '#8b5cf6',
    glowGradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(109, 40, 217, 0.05) 100%)',
    latency: 'Mesh Active',
    desc: 'Decentralized peer-to-peer device sync daemon handling encrypted multi-device workflow triggers.',
    payload: `// libp2p Encrypted Swarm Protocol
const swarm = new SwarmDaemon({
  protocol: "/meridian/p2p/1.0.0",
  noise_handshake: true,
  gossipsub: true
});`,
    tags: ['libp2p Swarm', 'Encrypted Transport', 'Cron Triggers']
  },

  // Storage Subgraph
  {
    id: 'turbovec',
    subgraph: 'Storage',
    title: 'Turbovec Vector DB',
    subtitle: 'Embedded HNSW Memory Index',
    icon: Database,
    accentColor: '#a855f7',
    glowGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(126, 34, 206, 0.05) 100%)',
    latency: '< 3.2 ms RAG',
    desc: 'High-speed local vector database indexing repository codebases for instant context retrieval.',
    payload: `// Turbovec HNSW Vector Search Query
{
  "hnsw_ef_construction": 200,
  "metric_type": "COSINE",
  "top_k": 5,
  "vector_dim": 1536
}`,
    tags: ['HNSW Microsecond', 'Cosine Metric', 'Zero Overhead']
  },
  {
    id: 'sqlite',
    subgraph: 'Storage',
    title: 'SQLite Memory & State',
    subtitle: 'WAL Mode Relational Storage',
    icon: Server,
    accentColor: '#64748b',
    glowGradient: 'linear-gradient(135deg, rgba(100, 116, 139, 0.25) 0%, rgba(51, 65, 85, 0.05) 100%)',
    latency: '< 1.1 ms Read',
    desc: 'Persistent relational database storing conversation trajectories, tool execution logs, and user settings.',
    payload: `// SQLite WAL Execution Protocol
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
SELECT * FROM agent_memory WHERE session_id = ?;`,
    tags: ['WAL Mode', 'Relational State', 'Zero-Config']
  },

  // Inference Subgraph
  {
    id: 'ollama',
    subgraph: 'Inference',
    title: 'Local LLMs (Ollama)',
    subtitle: 'Hardware Accelerated (Metal/CUDA)',
    icon: Bot,
    accentColor: '#10b981',
    glowGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(4, 120, 87, 0.05) 100%)',
    latency: '118 tok/sec',
    desc: '100% offline GGUF local model execution via Ollama runtime (Choose any model: DeepSeek, Llama 3, Qwen, Mistral, Gemma, Phi).',
    payload: `// Local Ollama Hardware Inference
POST http://localhost:11434/api/chat
{
  "model": "your-choice-agent-model",
  "stream": true,
  "options": { "num_gpu": 99, "temperature": 0.2 }
}`,
    tags: ['Ollama Engine', 'CUDA / Metal', 'GGUF Offline']
  },
  {
    id: 'cloud',
    subgraph: 'Inference',
    title: 'Cloud APIs (Hybrid)',
    subtitle: 'Groq · OpenRouter · OpenAI · Anthropic',
    icon: Cloud,
    accentColor: '#f43f5e',
    glowGradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.25) 0%, rgba(190, 18, 60, 0.05) 100%)',
    latency: '~320 ms API',
    desc: 'Optional high-tier cloud model fallback router with user consent and automated key redaction.',
    payload: `// Hybrid Cloud Fallback Gateway
{
  "fallback_providers": ["Groq", "OpenRouter", "Anthropic"],
  "pii_redaction_filter": true,
  "require_user_consent": true
}`,
    tags: ['Groq LPU', 'Anthropic Claude 3.5', 'PII Filter']
  }
];

export const Architecture3DGraph: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchNodeDetail>(SUBGRAPH_NODES[2]);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const handleCopyPayload = () => {
    navigator.clipboard.writeText(selectedNode.payload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  const IconComp = selectedNode.icon;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        background: 'linear-gradient(180deg, rgba(12, 14, 24, 0.95) 0%, rgba(6, 7, 12, 0.98) 100%)',
        border: '1px solid rgba(0, 240, 255, 0.3)',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 30px 80px rgba(0, 0, 0, 0.95), 0 0 40px rgba(0, 240, 255, 0.12)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Cyber Grid Accent Lines */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.08), transparent 70%), linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
          backgroundSize: '100% 100%, 32px 32px, 32px 32px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      {/* Top Section Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '20px', gap: '16px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              padding: '10px',
              borderRadius: '12px',
              background: 'rgba(0, 240, 255, 0.12)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              color: '#00f0ff',
              boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
            }}
          >
            <Sparkles size={22} />
          </div>
          <div>
            <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#00f0ff', fontFamily: 'monospace', fontWeight: 700 }}>
              System Topology Graph
            </span>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFF', margin: 0, letterSpacing: '-0.02em' }}>
              Meridian-X Multi-Process Subgraph Pipeline
            </h3>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.8rem', fontFamily: 'monospace' }}>
          <div
            style={{
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.4)',
              color: '#10b981',
              padding: '6px 14px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: 700
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981', display: 'inline-block' }}></span>
            <span>4 / 4 SUBGRAPHS ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Protocol Inter-Subgraph Cable Banner */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-around',
          background: 'rgba(5, 7, 14, 0.8)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '14px',
          padding: '12px 20px',
          gap: '12px',
          fontSize: '0.78rem',
          fontFamily: 'monospace',
          position: 'relative',
          zIndex: 1
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f0ff' }}>
          <span>💻 UI</span>
          <ArrowLeftRight size={14} color="#00f0ff" />
          <span style={{ background: 'rgba(0,240,255,0.1)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(0,240,255,0.3)' }}>HTTP / SSE Events</span>
          <ArrowLeftRight size={14} color="#00f0ff" />
          <span>⚙️ Engine</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a855f7' }}>
          <span>⚙️ Engine</span>
          <ArrowLeftRight size={14} color="#a855f7" />
          <span style={{ background: 'rgba(168,85,247,0.1)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(168,85,247,0.3)' }}>RAG Vector & State</span>
          <ArrowLeftRight size={14} color="#a855f7" />
          <span>💾 Storage</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981' }}>
          <span>⚙️ Engine</span>
          <ArrowLeftRight size={14} color="#10b981" />
          <span style={{ background: 'rgba(16,185,129,0.1)', padding: '2px 8px', borderRadius: '4px', border: '1px solid rgba(16,185,129,0.3)' }}>Local & Cloud Prompts</span>
          <ArrowLeftRight size={14} color="#10b981" />
          <span>🤖 Inference</span>
        </div>
      </div>

      {/* Main 4-Subgraph Flow Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          position: 'relative',
          zIndex: 1
        }}
      >
        {/* SUBGRAPH 1: UI */}
        <div className="subgraph-card" style={subgraphCardStyle('#00f0ff')}>
          <div style={subgraphHeaderStyle('#00f0ff')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>💻 Client Interface</span>
            <span style={pillBadgeStyle('#00f0ff')}>Tauri v2 + React</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SUBGRAPH_NODES.filter(n => n.subgraph === 'UI').map((node) => (
              <InteractiveNodeButton
                key={node.id}
                node={node}
                isSelected={selectedNode.id === node.id}
                isHovered={hoveredNodeId === node.id}
                onHover={(h) => setHoveredNodeId(h ? node.id : null)}
                onSelect={() => {
                  setSelectedNode(node);
                }}
              />
            ))}
          </div>
        </div>

        {/* SUBGRAPH 2: ENGINE */}
        <div className="subgraph-card" style={subgraphCardStyle('#10b981')}>
          <div style={subgraphHeaderStyle('#10b981')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>⚙️ Backend Engine</span>
            <span style={pillBadgeStyle('#10b981')}>FastAPI Python</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SUBGRAPH_NODES.filter(n => n.subgraph === 'Engine').map((node) => (
              <InteractiveNodeButton
                key={node.id}
                node={node}
                isSelected={selectedNode.id === node.id}
                isHovered={hoveredNodeId === node.id}
                onHover={(h) => setHoveredNodeId(h ? node.id : null)}
                onSelect={() => {
                  setSelectedNode(node);
                }}
              />
            ))}
          </div>
        </div>

        {/* SUBGRAPH 3: STORAGE */}
        <div className="subgraph-card" style={subgraphCardStyle('#a855f7')}>
          <div style={subgraphHeaderStyle('#a855f7')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>💾 Storage & RAG</span>
            <span style={pillBadgeStyle('#a855f7')}>Vector + State</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SUBGRAPH_NODES.filter(n => n.subgraph === 'Storage').map((node) => (
              <InteractiveNodeButton
                key={node.id}
                node={node}
                isSelected={selectedNode.id === node.id}
                isHovered={hoveredNodeId === node.id}
                onHover={(h) => setHoveredNodeId(h ? node.id : null)}
                onSelect={() => {
                  setSelectedNode(node);
                }}
              />
            ))}
          </div>
        </div>

        {/* SUBGRAPH 4: INFERENCE */}
        <div className="subgraph-card" style={subgraphCardStyle('#f43f5e')}>
          <div style={subgraphHeaderStyle('#f43f5e')}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>🤖 Hybrid AI Models</span>
            <span style={pillBadgeStyle('#f43f5e')}>Local + Cloud</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SUBGRAPH_NODES.filter(n => n.subgraph === 'Inference').map((node) => (
              <InteractiveNodeButton
                key={node.id}
                node={node}
                isSelected={selectedNode.id === node.id}
                isHovered={hoveredNodeId === node.id}
                onHover={(h) => setHoveredNodeId(h ? node.id : null)}
                onSelect={() => {
                  setSelectedNode(node);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Selected Node Live Inspector Drawer */}
      <div
        style={{
          background: 'linear-gradient(135deg, #05070f 0%, #080a14 100%)',
          border: `2px solid ${selectedNode.accentColor}`,
          borderRadius: '18px',
          padding: '24px 28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          boxShadow: `0 20px 40px -10px ${selectedNode.accentColor}33`,
          position: 'relative',
          zIndex: 1,
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Left Column Spec */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                padding: '12px',
                borderRadius: '12px',
                background: selectedNode.glowGradient,
                border: `1.5px solid ${selectedNode.accentColor}`,
                color: selectedNode.accentColor,
                boxShadow: `0 0 20px ${selectedNode.accentColor}44`
              }}
            >
              <IconComp size={26} />
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: selectedNode.accentColor, fontFamily: 'monospace', fontWeight: 800, letterSpacing: '1px' }}>
                {selectedNode.subgraph} Subgraph Inspector
              </span>
              <h4 style={{ fontSize: '1.3rem', color: '#FFF', margin: '2px 0 0 0', fontWeight: 800 }}>
                {selectedNode.title}
              </h4>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted, #94a3b8)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
            {selectedNode.desc}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
            {selectedNode.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${selectedNode.accentColor}44`,
                  color: selectedNode.accentColor,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  fontFamily: 'monospace',
                  fontWeight: 600
                }}
              >
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Code Payload Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#FFF', fontSize: '0.82rem', fontFamily: 'monospace', fontWeight: 700 }}>
              <Code size={16} color={selectedNode.accentColor} />
              <span>IPC Protocol Payload Spec</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '0.78rem', fontFamily: 'monospace', color: selectedNode.accentColor, fontWeight: 700 }}>
                ⚡ {selectedNode.latency}
              </span>
              <button
                onClick={handleCopyPayload}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: copiedPayload ? '#10b981' : '#cbd5e1',
                  borderRadius: '6px',
                  padding: '4px 10px',
                  fontSize: '0.72rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'monospace',
                  transition: 'all 0.2s'
                }}
              >
                {copiedPayload ? <Check size={14} /> : <Copy size={14} />}
                <span>{copiedPayload ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          <pre
            style={{
              background: '#000000',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '12px',
              padding: '16px',
              fontFamily: 'var(--font-code, monospace)',
              fontSize: '0.78rem',
              color: '#e4e4e7',
              whiteSpace: 'pre-wrap',
              lineHeight: 1.55,
              margin: 0,
              flex: 1,
              maxHeight: '190px',
              overflowY: 'auto',
              boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.9)'
            }}
          >
            {selectedNode.payload}
          </pre>
        </div>
      </div>
    </div>
  );
};

interface InteractiveNodeButtonProps {
  node: ArchNodeDetail;
  isSelected: boolean;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onSelect: () => void;
}

const InteractiveNodeButton: React.FC<InteractiveNodeButtonProps> = ({
  node,
  isSelected,
  isHovered,
  onHover,
  onSelect,
}) => {
  const Icon = node.icon;
  return (
    <button
      onClick={onSelect}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        background: isSelected
          ? node.glowGradient
          : isHovered
          ? 'rgba(255, 255, 255, 0.05)'
          : 'rgba(255, 255, 255, 0.02)',
        border: '1px solid',
        borderColor: isSelected
          ? node.accentColor
          : isHovered
          ? `${node.accentColor}88`
          : 'rgba(255, 255, 255, 0.08)',
        borderRadius: '12px',
        padding: '14px 16px',
        textAlign: 'left',
        cursor: 'pointer',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        width: '100%',
        boxShadow: isSelected
          ? `0 0 20px ${node.accentColor}44`
          : isHovered
          ? `0 5px 15px ${node.accentColor}22`
          : 'none',
        transform: isSelected || isHovered ? 'translateY(-2px)' : 'translateY(0)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            padding: '8px',
            borderRadius: '8px',
            background: isSelected ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.05)',
            border: `1px solid ${isSelected ? node.accentColor : 'transparent'}`
          }}
        >
          <Icon size={18} color={isSelected || isHovered ? node.accentColor : '#94a3b8'} />
        </div>
        <div>
          <div style={{ fontSize: '0.88rem', fontWeight: isSelected ? 800 : 600, color: isSelected ? '#FFF' : '#e2e8f0' }}>
            {node.title}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-dim, #64748b)', marginTop: '2px' }}>
            {node.subtitle}
          </div>
        </div>
      </div>

      <span style={{ fontSize: '0.7rem', color: node.accentColor, fontFamily: 'monospace', fontWeight: 700 }}>
        {node.latency}
      </span>
    </button>
  );
};

const subgraphCardStyle = (accentColor: string): React.CSSProperties => ({
  background: 'rgba(10, 12, 22, 0.85)',
  border: `1px solid ${accentColor}44`,
  borderRadius: '16px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  boxShadow: `0 15px 35px -10px ${accentColor}22`,
  backdropFilter: 'blur(16px)'
});

const subgraphHeaderStyle = (accentColor: string): React.CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '0.9rem',
  fontWeight: 800,
  color: '#FFF',
  borderBottom: `1px solid ${accentColor}33`,
  paddingBottom: '12px'
});

const pillBadgeStyle = (accentColor: string): React.CSSProperties => ({
  fontSize: '0.7rem',
  fontFamily: 'monospace',
  color: accentColor,
  background: `${accentColor}15`,
  border: `1px solid ${accentColor}44`,
  padding: '3px 8px',
  borderRadius: '6px',
  fontWeight: 700
});
