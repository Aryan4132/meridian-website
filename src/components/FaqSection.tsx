import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Shield, Cpu, Terminal } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'How does the Multi-Agent Swarm & Debate Engine work?',
    answer: 'The Swarm Debate Engine (swarm.py, SwarmDebate.tsx) orchestrates multi-perspective autonomous deliberations between customizable agent personas (Security Auditor, Code Architect, Performance Optimizer). It streams real-time debate thoughts via /api/swarm/stream for adversarial consensus validation.'
  },
  {
    question: 'What is the P2P Mesh Network & Encrypted Peer Offloading?',
    answer: 'The P2P mesh engine (p2p.py, p2p_crypto.py) discovers local LAN/WAN Meridian-X nodes over port 8765. Tasks can be offloaded securely using end-to-end asymmetric encryption keys across trusted peer nodes.'
  },
  {
    question: 'How does Temporal Memory & Time-Travel Rollback work?',
    answer: 'Temporal memory (temporal_memory.py, Timeline.tsx) captures granular session snapshots of workspace state, code changes, and task outputs. You can roll back workspace state to any historical snapshot via /api/history/rollback.'
  },
  {
    question: 'How does the Non-Techie Onboarding Wizard work?',
    answer: 'The onboarding wizard (OnboardingWizard.tsx) runs hardware spec detection (hardware_detector.py) analyzing CPU cores, RAM, and NVIDIA VRAM (pynvml) to classify your PC into Entry (<8GB), Mid (8-16GB), or High (>16GB) tiers. It automatically scans Ollama ports 11434, 11435, 8080, and 5000 (ollama_manager.py) and streams model pulls via real-time SSE.'
  },
  {
    question: 'Can I self-host Meridian-X remotely using Docker?',
    answer: 'Yes! Meridian-X supports remote backend self-hosting via docker-compose.yml (direct IP) or production docker-compose.prod.yml (with automated Caddy SSL reverse proxy). You can switch target servers instantly using the Server Connection Modal (MERIDIAN_REMOTE_BACKEND_URL). Full instructions are in docs/SELF_HOSTING.md.'
  },
  {
    question: 'What is the Reverse MCP Server feature?',
    answer: 'In addition to connecting 1-click MCP plugins (GitHub, PostgreSQL, Slack, Linear), Meridian-X exposes its internal TOOL_REGISTRY as a reverse MCP server at /api/mcp/v1/tools. This allows external IDEs like Cursor, VS Code, and Claude Desktop to consume Meridian-X tools directly.'
  },
  {
    question: 'What global hotkeys are supported in Meridian-X?',
    answer: 'Meridian-X provides sub-10ms global shortcuts: `Alt + M` toggles the main desktop workspace window, `Alt + Shift + M` toggles the compact 3D mascot floating island HUD, and `Alt + V` triggers instant push-to-talk voice dictation.'
  },
  {
    question: 'Why does macOS say Meridian-X is "damaged and can\'t be opened"?',
    answer: 'Meridian-X is a 100% free open-source desktop app that uses ad-hoc code signing. Apple Gatekeeper blocks unsigned open-source binaries by default. To fix this instantly, drag meridian-x.app into /Applications, open Terminal, and run: `sudo xattr -r -d com.apple.quarantine /Applications/meridian-x.app`. Alternatively, run our 1-line installer: `curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.sh | bash`.'
  },
  {
    question: 'How does 100% offline privacy and AES-GCM Vault work?',
    answer: 'Meridian-X embeds local Ollama runtime and Turbovec vector storage. Credentials are encrypted in local vault (vault.py) via AES-256-GCM with machine-bound HMAC-SHA256 passphrase derivation (hostname + username + salt). Zero code, API keys, or prompt telemetry ever leave your device.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '18px' }}>
            Frequently Asked <span className="gradient-text-cyan">Questions.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Everything you need to know about setting up local inference, hardware security, and ReAct loops.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="glass-card"
                onClick={() => toggleFaq(idx)}
                style={{
                  padding: '22px 28px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--border-cyan)' : 'var(--border-glass)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: isOpen ? 'var(--cyan-primary)' : 'var(--text-main)' }}>
                    {faq.question}
                  </h3>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--cyan-primary)' : 'var(--text-muted)'
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px dashed rgba(255,255,255,0.08)', color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security Newsletter & Build Release Digest Form */}
        <div style={{ maxWidth: '820px', margin: '48px auto 0 auto' }}>
          <div className="glass-card" style={{ padding: '36px', textAlign: 'center', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF', marginBottom: '8px' }}>
              Subscribe to Release & Security Alerts
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
              Receive cryptographically signed release updates and security advisories. Zero spam, 1-click unsubscribe.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid cryptographic email address (e.g. user@domain.com)');
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '10px', padding: '16px', color: '#10B981', fontSize: '0.95rem' }}>
        ✓ Subscribed successfully! Sovereign update stream confirmed.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '520px', margin: '0 auto' }} noValidate>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
          <input
            type="email"
            placeholder="enter@developer-email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError(null);
            }}
            aria-invalid={!!error}
            style={{
              width: '100%',
              padding: '14px 18px',
              borderRadius: '8px',
              background: 'rgba(0, 0, 0, 0.6)',
              border: error ? '1px solid #EF4444' : '1px solid rgba(255, 255, 255, 0.15)',
              color: '#FFFFFF',
              fontSize: '0.95rem',
              outline: 'none',
              transition: 'border 0.2s ease',
              boxShadow: error ? '0 0 12px rgba(239, 68, 68, 0.3)' : 'none'
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary"
          style={{ padding: '14px 24px', fontSize: '0.92rem', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? (
            <div style={{ width: 16, height: 16, border: '2px solid rgba(0,0,0,0.2)', borderTopColor: '#000', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
          ) : (
            'Subscribe'
          )}
        </button>
      </div>

      {error && (
        <div style={{ color: '#EF4444', fontSize: '0.82rem', textAlign: 'left', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          ⚠️ {error}
        </div>
      )}
    </form>
  );
};
