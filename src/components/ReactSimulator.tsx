import React, { useState, useEffect } from 'react';
import { animate } from 'animejs';
import { Play, Pause, RotateCcw, FastForward, CheckCircle, Terminal, Cpu, ShieldAlert, Sparkles, Copy, Check } from 'lucide-react';

interface Step {
  stage: 'THINK' | 'PLAN' | 'ACT' | 'OBSERVE' | 'SELF-CORRECT';
  title: string;
  detail: string;
  codeSnippet?: string;
  color: string;
  duration: number;
}

const DEMO_STEPS: Step[] = [
  {
    stage: 'THINK',
    title: 'Analyze Goal & Assemble Unified Context',
    detail: 'Inspecting workspace context. Assembling prompt context in parallel from Turbovec Vector RAG, Code Graph (code_graph.py), SQLite WAL, and 50-slot clipboard buffer.',
    codeSnippet: `// Hardware & Context Assembly (hardware_detector.py & code_graph.py)
const spec = await hardwareDetector.getSpec(); // Tier: MID (16GB RAM)
const [vectorContext, kgNodes, codeSymbols] = await Promise.all([
  turbovec.query(queryEmbedding, { top_k: 5 }),
  graphRAG.findEntities(topic),
  codeGraph.searchSymbols("loop.py")
]);`,
    color: '#38BDF8',
    duration: 1800
  },
  {
    stage: 'PLAN',
    title: 'Multi-Agent Swarm Debate & Workflow DAG',
    detail: 'Triggering multi-persona debate (swarm.py) and visual automation DAG (workflow_engine.py) to validate complex reasoning steps.',
    codeSnippet: `// Multi-Agent Swarm Debate (swarm.py & /api/swarm/stream)
const debate = await swarmEngine.deliberate({
  personas: ["SecurityAuditor", "CodeArchitect", "PerformanceOptimizer"],
  topic: "Parallel asyncio.gather tool execution flow"
});
// Consensus: APPROVED with 0 security warnings`,
    color: '#F59E0B',
    duration: 2200
  },
  {
    stage: 'ACT',
    title: 'Speculative Concurrency & Playwright Automation',
    detail: 'Dual-lane router executes Tier 0 read-only tools concurrently, while Playwright agent (browser_agent.py) and desktop GUI automation execute Tier 1 actions.',
    codeSnippet: `// Tier 0 Read-Only Concurrency (asyncio.gather)
const [fileData, searchResults] = await asyncio.gather(
  toolRegistry.call("read_file", { path: "meridian_backend/src/core/loop.py" }),
  toolRegistry.call("search_web", { query: "FastAPI SlowAPI rate limiting" })
);
// Playwright Web Agent (browser_agent.py) launched`,
    color: '#10B981',
    duration: 2200
  },
  {
    stage: 'OBSERVE',
    title: 'Self-Healing Engine & Tool Parameter Repair',
    detail: 'Self-correction engine catches tool signature mismatches against TOOL_REGISTRY and auto-injects corrected arguments in loop.py.',
    codeSnippet: `[WARN] Signature mismatch in tool call: 'file_path' expected 'path'.
[HEAL] Self-Healing Applied: Remapped 'file_path' -> 'path'.
[SSE Stream] Telemetry Stream: /api/chat/stream -> EVENT: HEALED
[Mascot State] Three.js Ring: AMBER (Working) -> FAST_SPIN`,
    color: '#F59E0B',
    duration: 2400
  },
  {
    stage: 'SELF-CORRECT',
    title: 'Temporal Rollback Snapshot & Supertonic Speech',
    detail: 'Task completed cleanly. Creating temporal memory snapshot (temporal_memory.py), retrieving AES vault secret (vault.py), and triggering Supertonic TTS voice.',
    codeSnippet: `✓ ReAct Loop Completed (meridian_backend/src/core/loop.py)
💾 Temporal Snapshot Saved (temporal_memory.py / Timeline.tsx)
🔐 AES-256-GCM Vault (vault.py): Secret retrieved via HMAC passphrase
🔊 Supertonic TTS: 10 Local Voices ("Male M3 - Execution completed.")
🦊 Mascot State: GREEN (Success - 60 FPS Three.js Ring)`,
    color: '#10B981',
    duration: 2500
  }
];

export const ReactSimulator: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const el = document.querySelector('.sim-log-active');
    if (el) {
      animate(el, {
        translateY: [12, 0],
        opacity: [0.3, 1],
        duration: 450,
        ease: 'outQuad'
      });
    }
  }, [currentStepIndex]);

  useEffect(() => {
    if (!isPlaying) return;

    const currentStep = DEMO_STEPS[currentStepIndex];
    const timer = setTimeout(() => {
      setCurrentStepIndex((prev) => (prev + 1) % DEMO_STEPS.length);
    }, currentStep.duration / speedMultiplier);

    return () => clearTimeout(timer);
  }, [currentStepIndex, isPlaying, speedMultiplier]);

  const handleCopyLogs = () => {
    const text = DEMO_STEPS.slice(0, currentStepIndex + 1)
      .map((s) => `[${s.stage}] ${s.title}\n${s.detail}\n${s.codeSnippet || ''}`)
      .join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="simulator" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '16px' }}>
            Continuous <span className="gradient-text-cyan">ReAct Engine</span> in Action.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Watch Meridian-X reason, execute code, observe errors, and self-correct on your local hardware without human intervention.
          </p>
        </div>

        {/* Simulator Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 380px) 1fr',
            gap: '24px',
            alignItems: 'start'
          }}
          className="simulator-layout"
        >
          {/* Left Step Controller */}
          <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', background: 'rgba(12, 12, 16, 0.95)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#FFF' }}>Cognitive Loop Pipeline</h3>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-code)', color: '#FAFAFA' }}>
                Step {currentStepIndex + 1} of {DEMO_STEPS.length}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {DEMO_STEPS.map((step, idx) => {
                const isActive = idx === currentStepIndex;
                const isPassed = idx < currentStepIndex;
                return (
                  <div
                    key={step.stage}
                    onClick={() => {
                      setCurrentStepIndex(idx);
                      setIsPlaying(false);
                    }}
                    style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      background: isActive
                        ? 'rgba(255, 255, 255, 0.08)'
                        : isPassed
                        ? 'rgba(10, 10, 14, 0.8)'
                        : 'rgba(8, 8, 12, 0.4)',
                      border: isActive
                        ? '1px solid #FFFFFF'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '8px',
                        background: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.06)',
                        color: isActive ? '#030303' : step.color,
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-code)'
                      }}
                    >
                      0{idx + 1}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.82rem', color: step.color, fontFamily: 'var(--font-code)' }}>
                          [{step.stage}]
                        </span>
                        {isPassed && <CheckCircle size={14} color="#10B981" />}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: isActive ? '#FFF' : 'var(--text-muted)', fontWeight: 500 }}>
                        {step.title}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Playback Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '16px',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={() => {
                    setCurrentStepIndex(0);
                    setIsPlaying(true);
                  }}
                  className="btn-secondary"
                  style={{ padding: '8px 12px' }}
                  title="Reset Simulator"
                >
                  <RotateCcw size={15} />
                </button>
              </div>

              {/* Speed toggle */}
              <button
                onClick={() => setSpeedMultiplier(prev => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1))}
                className="btn-secondary"
                style={{ padding: '8px 12px', fontSize: '0.8rem', fontFamily: 'var(--font-code)' }}
              >
                <FastForward size={14} />
                <span>{speedMultiplier}x Speed</span>
              </button>
            </div>
          </div>

          {/* Right Live Terminal Visualizer */}
          <div className="glow-border-card" style={{ height: '100%', background: 'rgba(10, 10, 14, 0.95)' }}>
            <div className="glow-border-card-inner" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%', background: '#050508' }}>
              {/* Terminal Titlebar */}
              <div
                style={{
                  background: 'rgba(14, 14, 18, 0.98)',
                  padding: '14px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Terminal size={18} color="#FAFAFA" />
                  <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-code)', fontWeight: 600, color: '#FFFFFF' }}>
                    Meridian-X ReAct Terminal Log Stream
                  </span>
                </div>

                <button
                  onClick={handleCopyLogs}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: copied ? 'var(--emerald-accent)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copied ? 'Copied' : 'Copy Logs'}</span>
                </button>
              </div>

              {/* Terminal Screen Content */}
              <div
                className="sim-log-active"
                style={{
                  padding: '24px',
                  background: '#040810',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.88rem',
                  lineHeight: '1.7',
                  color: '#E2E8F0',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                {/* Active Stage Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span
                    style={{
                      background: DEMO_STEPS[currentStepIndex].color,
                      color: '#040D1A',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontWeight: 800,
                      fontSize: '0.8rem'
                    }}
                  >
                    [{DEMO_STEPS[currentStepIndex].stage}]
                  </span>
                  <span style={{ color: '#FFF', fontWeight: 600, fontSize: '0.95rem' }}>
                    {DEMO_STEPS[currentStepIndex].title}
                  </span>
                </div>

                {/* Explanation text */}
                <div style={{ color: 'var(--text-muted)', paddingLeft: '12px', borderLeft: `2px solid ${DEMO_STEPS[currentStepIndex].color}` }}>
                  {DEMO_STEPS[currentStepIndex].detail}
                </div>

                {/* Live Code Snippet View */}
                {DEMO_STEPS[currentStepIndex].codeSnippet && (
                  <div
                    style={{
                      background: 'rgba(15, 23, 42, 0.8)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      padding: '16px',
                      whiteSpace: 'pre-wrap',
                      color: DEMO_STEPS[currentStepIndex].stage === 'OBSERVE' ? '#F59E0B' : '#00F2FE',
                      fontSize: '0.84rem'
                    }}
                  >
                    {DEMO_STEPS[currentStepIndex].codeSnippet}
                  </div>
                )}

                {/* Status Bar */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px dashed rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: 'var(--text-dim)'
                  }}
                >
                  <span>Runtime: Ollama (Offline GPU Engine)</span>
                  <span style={{ color: 'var(--emerald-accent)' }}>● Verification: Passed (0 errors)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .simulator-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
