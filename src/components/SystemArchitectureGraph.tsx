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
    layerTitle: '1️⃣ Trigger & Entry Layer',
    subtitle: 'Workspace Chat, ONNX Wake-Word, Social Bridges & P2P Mesh',
    accentColor: '#818CF8',
    nodes: [
      { id: 't1', name: '💬 Workspace Chat UI', badge: 'Tauri v2', tech: 'React 18', desc: 'Main desktop workspace window & React chat shell', color: '#818CF8' },
      { id: 't2', name: '🎮 Overlay HUD (Alt+Shift+M)', badge: 'Sub-10ms', tech: 'Tauri IPC', desc: 'Frameless GPU overlay & compact mascot island', color: '#38BDF8' },
      { id: 't3', name: '🎙️ Wake Word ("Hey Meridian")', badge: 'ONNX Engine', tech: 'wakeword.py', desc: 'Hands-free ONNX wake-word listener & Supertonic voice', color: '#EC4899' },
      { id: 't4', name: '📋 Clipboard & Watchers', badge: 'clipboard.py', tech: 'watcher.py', desc: '50-slot pastebuffer listener & proactive event monitors', color: '#A78BFA' },
      { id: 't5', name: '🤖 Social Bot Bridges', badge: 'Discord/TG/WA', tech: 'social_bridge', desc: 'Discord, Telegram & WhatsApp remote control bridges', color: '#67E8F9' },
      { id: 't6', name: '🌐 Remote & P2P Peer Req', badge: 'P2P Mesh', tech: 'p2p.py (8765)', desc: 'Remote backend URL switcher & P2P mesh task offload', color: '#34D399' }
    ]
  },
  {
    stepNum: 2,
    layerTitle: '2️⃣ Security & Verification Gate',
    subtitle: 'SEC-01..SEC-26 Security, Rate Limiting & Sandboxed Execution',
    accentColor: '#38BDF8',
    nodes: [
      { id: 's1', name: '🛡️ Auth Check (X-API-Key)', badge: 'require_api_key', tech: 'FastAPI Depends', desc: 'X-API-Key middleware & token auth verification', color: '#38BDF8' },
      { id: 's2', name: '⏱️ SlowAPI Rate Limiter', badge: 'SlowAPI', tech: '20 req/min', desc: '20 req/min chat & 10 req/min vault endpoint protection', color: '#0EA5E9' },
      { id: 's3', name: '🧹 Prompt Injection Sanitizer', badge: 'SEC-16', tech: 'prompt_injection.py', desc: 'Strips jailbreak directives & zero-width unicode exploits', color: '#0284C7' },
      { id: 's4', name: '🛡️ Defense & Sandbox Runner', badge: 'system_defense', tech: 'sandbox_runner.py', desc: 'System Defense Shield and isolated execution runner', color: '#6366F1' }
    ]
  },
  {
    stepNum: 3,
    layerTitle: '3️⃣ Unified Context Assembly',
    subtitle: 'Turbovec Vector RAG, Knowledge Graph & LSP Symbols',
    accentColor: '#67E8F9',
    nodes: [
      { id: 'c1', name: '⚡ Turbovec Vector RAG', badge: '< 1ms RAG', tech: 'rag_optimizer.py', desc: 'Local vector store for document & repo embeddings', color: '#67E8F9' },
      { id: 'c2', name: '🕸️ Knowledge Graph', badge: 'graph_rag.py', tech: 'SQLite WAL + Mongo', desc: 'Entity-relationship graph memory with Mongo sync', color: '#22D3EE' },
      { id: 'c3', name: '📜 Temporal Memory History', badge: 'Timeline.tsx', tech: 'temporal_memory.py', desc: 'Granular conversation snapshots & time-travel rollback', color: '#06B6D4' },
      { id: 'c4', name: '💻 System Specs & Env State', badge: 'hardware_detector.py', tech: 'pynvml + Ollama Scan', desc: 'Entry/Mid/High tier classification & multi-port scan', color: '#38BDF8' },
      { id: 'c5', name: '🔍 Code Graph & LSP Symbols', badge: 'code_graph.py', tech: 'lsp_client.py', desc: 'LSP client symbol graph, AST references & linting', color: '#A78BFA' }
    ]
  },
  {
    stepNum: 4,
    layerTitle: '4️⃣ Reasoning & Execution Engine',
    subtitle: 'ReAct Loop (loop.py), Multi-Agent Swarm & Workflow DAG',
    accentColor: '#A78BFA',
    nodes: [
      { id: 'r1', name: '🧠 LLM ReAct Loop (loop.py)', badge: 'Async ReAct', tech: 'loop.py', desc: 'Asynchronous Reason → Act → Observe iterative execution loop', color: '#A78BFA' },
      { id: 'r2', name: '🐝 Swarm Debate Engine', badge: 'SwarmDebate.tsx', tech: 'swarm.py', desc: 'Multi-agent persona debate & adversarial consensus', color: '#F59E0B' },
      { id: 'r3', name: '⚡ Workflow DAG Engine', badge: 'WorkflowBuilder', tech: 'workflow_engine.py', desc: 'Node-based visual automation graph & conditional loops', color: '#8B5CF6' },
      { id: 'r4', name: '❓ Tool Signature Auditor', badge: 'TOOL_REGISTRY', tech: 'registry.py', desc: 'Validates tool schemas & code blocks before execution', color: '#7C3AED' },
      { id: 'r5', name: '🩹 Self-Healing Corrector', badge: 'Auto-Fix', tech: 'Parameter Corrector', desc: 'Catches schema mismatches & re-injects repaired arguments', color: '#EC4899' }
    ]
  },
  {
    stepNum: 5,
    layerTitle: '5️⃣ Tiered Tool & Automation Execution',
    subtitle: 'Speculative Concurrency, Playwright & P2P Mesh',
    accentColor: '#4ADE80',
    nodes: [
      { id: 'e1', name: '⚡ Tier 0 (Parallel Read-Only)', badge: 'asyncio.gather', tech: 'Parallel Exec', desc: 'Executes read_file, search_web, code_graph concurrently', color: '#4ADE80', subItems: ['read_file', 'search_web', 'code_graph', 'db_query'] },
      { id: 'e2', name: '🔒 Tier 1+ (Mutating Sequential)', badge: 'Transaction Safety', tech: 'Sequential Gate', desc: 'Executes write_file, run_command in transactional safety', color: '#FB923C', subItems: ['write_file', 'run_command', 'desktop_gui', 'browser_agent'] },
      { id: 'e3', name: '🌐 Playwright & Desktop Agent', badge: 'browser_agent.py', tech: 'desktop.py', desc: 'Playwright web agent & GUI mouse/keyboard recording', color: '#38BDF8' },
      { id: 'e4', name: '🔌 MCP Marketplace & P2P Mesh', badge: '/api/mcp/v1/tools', tech: 'p2p.py + MCP', desc: 'Reverse MCP server at /api/mcp/v1/tools & P2P task offload', color: '#F43F5E' }
    ]
  },
  {
    stepNum: 6,
    layerTitle: '6️⃣ Telemetry, Persistence & Output',
    subtitle: 'AES Vault, Temporal Snapshots & 3D Mascot Ring',
    accentColor: '#FF71CE',
    nodes: [
      { id: 'o1', name: '👁️ Observe & Merge Output', badge: 'ReAct Cycle', tech: 'Loop Evaluator', desc: 'Merges tool outputs & checks task completion status', color: '#FF71CE' },
      { id: 'o2', name: '🔐 AES-256-GCM Key Vault', badge: 'vault.py', tech: 'HMAC Passphrase', desc: 'AES-GCM encryption bound to hostname + username + salt', color: '#FFDE59' },
      { id: 'o3', name: '💾 SQLite WAL & Temporal Log', badge: 'temporal_memory', tech: 'database.py', desc: 'Task execution logging & time-travel state rollback', color: '#34D399' },
      { id: 'o4', name: '📡 Real-Time SSE Telemetry', badge: '/api/chat/stream', tech: 'SSE Stream', desc: 'Streams PLANNING, EXEC, STATUS, WARNING telemetry to UI', color: '#38BDF8' },
      { id: 'o5', name: '🔊 Supertonic Neural TTS', badge: 'duplex.py', tech: 'tts.py + stt.py', desc: '10-voice local neural speech synthesis & Faster-Whisper STT', color: '#EC4899' },
      { id: 'o6', name: '🦊 3D Mascot State Animation', badge: 'Three.js 60 FPS', tech: 'Mascot.tsx', desc: 'Blue (Idle), Amber (Working), Red (Error), Green (Success)', color: '#10B981' }
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
