import React, { useState } from 'react';
import { ShieldCheck, Cpu, Database, Eye, Zap, Lock, Terminal, Sparkles, Activity, Layers, ArrowDown, ArrowRight, CheckCircle2, Server, Volume2, ShieldAlert, FileCode } from 'lucide-react';

export interface SystemNode {
  id: string;
  name: string;
  badge: string;
  tech: string;
  desc: string;
  color: string;
  subItems?: string[];
}

export interface SystemLayer {
  stepNum: number;
  layerTitle: string;
  subtitle: string;
  accentColor: string;
  nodes: SystemNode[];
}

const ARCH_LAYERS: SystemLayer[] = [
  {
    stepNum: 1,
    layerTitle: '1️⃣ Trigger Layer',
    subtitle: 'System Inputs & Event Surveillance',
    accentColor: '#818CF8',
    nodes: [
      { id: 't1', name: '💬 Workspace Chat UI', badge: 'Tauri v2', tech: 'React 18', desc: 'Main desktop workspace window & chat shell', color: '#818CF8' },
      { id: 't2', name: '🎮 Overlay HUD (Alt+Shift+M)', badge: 'Sub-10ms', tech: 'Tauri IPC', desc: 'Frameless GPU overlay HUD', color: '#38BDF8' },
      { id: 't3', name: '🎙️ Voice (Alt+V)', badge: 'Push-to-Talk', tech: 'PyAudio', desc: 'Instant dictation & wake word engine', color: '#EC4899' },
      { id: 't4', name: '📋 Clipboard Watcher', badge: 'Surveillance', tech: 'Pyperclip', desc: '50-slot persistent pastebuffer classifier', color: '#A78BFA' }
    ]
  },
  {
    stepNum: 2,
    layerTitle: '2️⃣ Security Gate',
    subtitle: 'Authentication & Threat Sanitization',
    accentColor: '#38BDF8',
    nodes: [
      { id: 's1', name: '🛡️ Auth & Rate Limiter', badge: 'SEC-01', tech: 'SlowAPI', desc: 'X-API-Key middleware & endpoint rate limits', color: '#38BDF8' },
      { id: 's2', name: '🧹 Prompt Injection Sanitizer', badge: 'SEC-16', tech: 'Regex AST', desc: 'Strips jailbreak directives & zero-width unicode', color: '#0284C7' }
    ]
  },
  {
    stepNum: 3,
    layerTitle: '3️⃣ Context Assembly',
    subtitle: 'Parallel Memory & Knowledge Retrieval',
    accentColor: '#67E8F9',
    nodes: [
      { id: 'c1', name: '⚡ Turbovec Vector RAG', badge: '< 1ms', tech: 'HNSW Index', desc: 'Local vector store for document & repo context', color: '#67E8F9' },
      { id: 'c2', name: '🕸️ Knowledge Graph', badge: 'Entity Graph', tech: 'SQLite WAL', desc: 'Persistent entity-relationship memory graph', color: '#22D3EE' },
      { id: 'c3', name: '📜 Conversation History', badge: 'Buffer', tech: 'FastAPI Session', desc: 'Multi-turn context window history', color: '#06B6D4' }
    ]
  },
  {
    stepNum: 4,
    layerTitle: '4️⃣ ReAct Reasoning',
    subtitle: 'Autonomous Plan & Self-Correction Kernel',
    accentColor: '#A78BFA',
    nodes: [
      { id: 'r1', name: '🧠 Reason Kernel (Local Ollama / Cloud)', badge: 'Reasoning', tech: 'FastAPI Async', desc: 'Generates structured ReAct tool execution plans', color: '#A78BFA' },
      { id: 'r2', name: '❓ Schema & Syntax Auditor', badge: 'Fast Auditor', tech: 'Python AST', desc: 'Validates code & tool schemas before execution', color: '#8B5CF6' },
      { id: 'r3', name: '🩹 Self-Correction Healer', badge: 'Auto-Heal', tech: 'TOOL_REGISTRY', desc: 'Intercepts tool errors and repairs parameters', color: '#7C3AED' }
    ]
  },
  {
    stepNum: 5,
    layerTitle: '5️⃣ Tiered Execution Engine',
    subtitle: 'Speculative Concurrency & Transaction Safety',
    accentColor: '#4ADE80',
    nodes: [
      { id: 'e1', name: '⚡ Tier 0 (Read-Only Concurrent)', badge: 'Parallel', tech: 'asyncio.gather', desc: 'Executes read_file, search_web concurrently', color: '#4ADE80', subItems: ['read_file', 'search_web', 'fetch_url'] },
      { id: 'e2', name: '🔒 Tier 1+ (Mutating Sequential)', badge: 'Sequential', tech: 'Transaction Gate', desc: 'Executes write_file, run_command in order', color: '#FB923C', subItems: ['write_file', 'run_command', 'gui_click'] },
      { id: 'e3', name: '🔌 MCP Server Plugins', badge: '1-Click MCP', tech: 'JSON-RPC', desc: 'Direct tool injection for GitHub, Postgres, Slack', color: '#F43F5E' }
    ]
  },
  {
    stepNum: 6,
    layerTitle: '6️⃣ Observe, Respond & Persist',
    subtitle: 'Telemetry, Telepathic Mascot & Hardware Vault',
    accentColor: '#FF71CE',
    nodes: [
      { id: 'o1', name: '👁️ Observe & Merge Results', badge: 'Loop Check', tech: 'ReAct Cycle', desc: 'Merges tool outputs into final user response', color: '#FF71CE' },
      { id: 'o2', name: '🔊 Supertonic TTS Engine', badge: '10 Voices', tech: 'Local TTS', desc: 'Local speech synthesis & state-change audio FX', color: '#EC4899' },
      { id: 'o3', name: '🔐 AES-256-GCM Vault', badge: 'Encrypted', tech: 'OS Keyring', desc: 'Hardware-bound secret key storage', color: '#FFDE59' },
      { id: 'o4', name: '🦊 Mascot & Dynamic Island', badge: '60 FPS', tech: 'SSE Stream', desc: 'Real-time cognitive state ring (Blue/Amber/Red/Green)', color: '#38BDF8' }
    ]
  }
];

export const SystemArchitectureGraph: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<SystemNode>(ARCH_LAYERS[3].nodes[0]);
  const [activeLayerFilter, setActiveLayerFilter] = useState<number | 'ALL'>('ALL');

  return (
    <div style={{ width: '100%' }}>
      {/* Visual Header */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 800, marginBottom: '8px' }}>
          Meridian-X 6-Layer Execution Pipeline
        </h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '640px', margin: '0 auto' }}>
          Interactive system flow: click any node to inspect data contracts, execution concurrency, and telemetry streams.
        </p>

        {/* Layer Filter Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', flexWrap: 'wrap', marginTop: '18px' }}>
          <button
            onClick={() => setActiveLayerFilter('ALL')}
            style={{
              padding: '6px 12px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              background: activeLayerFilter === 'ALL' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(12, 12, 18, 0.8)',
              color: activeLayerFilter === 'ALL' ? '#FFF' : 'var(--text-dim)',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Show All Layers
          </button>
          {ARCH_LAYERS.map((layer) => (
            <button
              key={layer.stepNum}
              onClick={() => setActiveLayerFilter(layer.stepNum)}
              style={{
                padding: '6px 12px',
                borderRadius: '8px',
                border: `1px solid ${activeLayerFilter === layer.stepNum ? layer.accentColor : 'rgba(255, 255, 255, 0.1)'}`,
                background: activeLayerFilter === layer.stepNum ? `${layer.accentColor}22` : 'rgba(12, 12, 18, 0.8)',
                color: activeLayerFilter === layer.stepNum ? layer.accentColor : 'var(--text-dim)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Layer {layer.stepNum}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flowchart Pipeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
        {ARCH_LAYERS.filter((l) => activeLayerFilter === 'ALL' || activeLayerFilter === l.stepNum).map((layer, lIdx) => (
          <div key={layer.stepNum} style={{ position: 'relative' }}>
            {/* Layer Header Bar */}
            <div
              style={{
                background: 'rgba(14, 14, 20, 0.95)',
                border: `1px solid ${layer.accentColor}44`,
                borderLeft: `5px solid ${layer.accentColor}`,
                borderRadius: '12px',
                padding: '14px 20px',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxShadow: `0 4px 20px ${layer.accentColor}15`
              }}
            >
              <div>
                <strong style={{ fontSize: '1.05rem', color: '#FFF' }}>{layer.layerTitle}</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginLeft: '12px' }}>
                  {layer.subtitle}
                </span>
              </div>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-code)',
                  color: layer.accentColor,
                  background: `${layer.accentColor}22`,
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontWeight: 700
                }}
              >
                {layer.nodes.length} Component Nodes
              </span>
            </div>

            {/* Nodes Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
              {layer.nodes.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{
                      background: isSelected ? 'rgba(20, 20, 30, 0.95)' : 'rgba(10, 10, 14, 0.8)',
                      border: `2px solid ${isSelected ? node.color : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '12px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: isSelected ? 'translateY(-2px)' : 'none',
                      boxShadow: isSelected ? `0 8px 24px ${node.color}33` : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#FFF' }}>{node.name}</span>
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-code)', color: node.color, background: `${node.color}22`, padding: '2px 6px', borderRadius: '4px' }}>
                        {node.badge}
                      </span>
                    </div>

                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4, marginBottom: '10px' }}>
                      {node.desc}
                    </p>

                    {node.subItems && (
                      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        {node.subItems.map((si) => (
                          <span key={si} style={{ fontSize: '0.68rem', fontFamily: 'var(--font-code)', background: 'rgba(255, 255, 255, 0.06)', color: '#E2E8F0', padding: '1px 6px', borderRadius: '4px' }}>
                            {si}
                          </span>
                        ))}
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-dim)', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '8px' }}>
                      <span>Tech: {node.tech}</span>
                      {isSelected && <CheckCircle2 size={13} color={node.color} />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Downward Flow Indicator */}
            {lIdx < ARCH_LAYERS.length - 1 && activeLayerFilter === 'ALL' && (
              <div style={{ textAlign: 'center', margin: '10px 0 -10px 0', opacity: 0.4 }}>
                <ArrowDown size={18} color={layer.accentColor} className="animate-bounce" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Selected Node Spec Inspector Drawer */}
      <div
        style={{
          marginTop: '32px',
          background: 'rgba(12, 12, 18, 0.95)',
          border: `1px solid ${selectedNode.color}`,
          borderRadius: '16px',
          padding: '24px',
          boxShadow: `0 10px 30px ${selectedNode.color}22`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileCode size={18} color={selectedNode.color} />
            <h4 style={{ fontSize: '1.15rem', color: '#FFF' }}>{selectedNode.name}</h4>
          </div>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-code)', color: selectedNode.color, background: `${selectedNode.color}22`, padding: '3px 10px', borderRadius: '6px' }}>
            {selectedNode.tech}
          </span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
          {selectedNode.desc}
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.8rem', color: '#E2E8F0', fontFamily: 'var(--font-code)' }}>
          <span>Execution Target: <strong style={{ color: selectedNode.color }}>100% On-Device / Sandboxed</strong></span>
          <span>Security Gate: <strong style={{ color: '#10B981' }}>Enforced (SEC-01..SEC-26)</strong></span>
          <span>Latency Spec: <strong style={{ color: '#38BDF8' }}>Microsecond IPC</strong></span>
        </div>
      </div>
    </div>
  );
};
