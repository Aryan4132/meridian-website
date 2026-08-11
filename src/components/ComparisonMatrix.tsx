import React from 'react';
import { Shield, Check, X, Sparkles, Zap, Lock, Cpu } from 'lucide-react';

interface MatrixRow {
  feature: string;
  meridianX: string;
  cloudAgents: string;
  highlight: boolean;
}

const COMPARISON_ROWS: MatrixRow[] = [
  {
    feature: 'Data Execution & Privacy',
    meridianX: '100% Offline (Local GGUF via Ollama)',
    cloudAgents: 'Cloud Servers (Data sent externally)',
    highlight: true
  },
  {
    feature: 'Overlay Launcher & Hotkeys',
    meridianX: 'Sub-10ms Overlay (Alt+M, Alt+Shift+M, Alt+V)',
    cloudAgents: 'Browser-only / High latency API',
    highlight: true
  },
  {
    feature: '3D Mascot Companion & Themes',
    meridianX: '4-State Orbital Companion + 11 Selectable Themes',
    cloudAgents: 'Generic Browser Web Dashboard',
    highlight: false
  },
  {
    feature: 'Focus Shield & Pastebuffer',
    meridianX: 'Pomodoro Blocker + 50-Slot Clipboard Monitor',
    cloudAgents: 'None',
    highlight: false
  },
  {
    feature: 'Autonomous ReAct Loop',
    meridianX: 'Self-Healing AST & Fast Auditor (Any Local LLM)',
    cloudAgents: 'Basic Prompting / Retries',
    highlight: true
  },
  {
    feature: 'Speculative Concurrency',
    meridianX: 'Tier 0 Parallel asyncio + Tier 1 Sequential',
    cloudAgents: 'Single Thread / Blocking',
    highlight: false
  },
  {
    feature: 'Persistent Vector Memory',
    meridianX: 'Turbovec Vector RAG + Knowledge Graph',
    cloudAgents: 'Ephemeral Session Context',
    highlight: false
  },
  {
    feature: 'API Key Security',
    meridianX: 'AES-256-GCM Vault + HMACPassphrase',
    cloudAgents: 'Plaintext / Server-Side Key Vault',
    highlight: false
  },
  {
    feature: 'Supertonic Voice Engine',
    meridianX: '10 Local Speaker Voices (Male/Female)',
    cloudAgents: 'Cloud API TTS ($/char)',
    highlight: false
  },
  {
    feature: 'Monthly Cost',
    meridianX: '$0 / Forever Free & Open Source',
    cloudAgents: '$20 - $500 / month Subscription',
    highlight: true
  }
];

export const ComparisonMatrix: React.FC = () => {
  return (
    <section style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '18px' }}>
            Built Sovereign. <span className="gradient-text-cyan">Compared to Cloud Agents.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            See why developers and privacy-focused teams choose local execution over centralized cloud LLM services.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="glow-border-card" style={{ maxWidth: '960px', margin: '0 auto', background: 'rgba(10, 10, 14, 0.95)' }}>
          <div className="glow-border-card-inner" style={{ padding: '0', overflow: 'hidden', background: '#050508' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1.2fr 1fr',
                background: 'rgba(14, 14, 18, 0.98)',
                padding: '20px 28px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                fontWeight: 700,
                fontSize: '0.95rem'
              }}
              className="matrix-header"
            >
              <div style={{ color: 'var(--text-muted)' }}>Feature Architecture</div>
              <div style={{ color: '#FFFFFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles size={16} />
                <span>Meridian-X (Sovereign)</span>
              </div>
              <div style={{ color: 'var(--text-dim)' }}>Cloud AI Agents</div>
            </div>

            {/* Matrix Rows */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {COMPARISON_ROWS.map((row, idx) => (
                <div
                  key={row.feature}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1.4fr 1.2fr 1fr',
                    padding: '18px 28px',
                    borderBottom: idx < COMPARISON_ROWS.length - 1 ? '1px solid var(--border-glass)' : 'none',
                    background: row.highlight ? 'rgba(0, 242, 254, 0.03)' : 'transparent',
                    alignItems: 'center',
                    fontSize: '0.9rem'
                  }}
                  className="matrix-row"
                >
                  <div style={{ fontWeight: 600, color: 'var(--text-main)' }}>{row.feature}</div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--emerald-accent)', fontWeight: 600 }}>
                    <Check size={16} color="var(--emerald-accent)" />
                    <span>{row.meridianX}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-dim)' }}>
                    <X size={15} color="#F43F5E" />
                    <span>{row.cloudAgents}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .matrix-header, .matrix-row {
            grid-template-columns: 1fr !important;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
};
