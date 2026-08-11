import React from 'react';
import { Lock, Plug, Github, Database, MessageSquare, CheckCircle, Shield, Key } from 'lucide-react';

interface McpExtension {
  name: string;
  category: string;
  description: string;
  installed: boolean;
  color: string;
}

const MCP_EXTENSIONS: McpExtension[] = [
  {
    name: 'GitHub Protocol',
    category: 'Code Automation',
    description: 'Create PRs, read repos, review code diffs & manage issues locally.',
    installed: true,
    color: '#FAFAFA'
  },
  {
    name: 'PostgreSQL Direct',
    category: 'Database RAG',
    description: 'Inspect schemas, run sandboxed queries, and vectorize database rows.',
    installed: true,
    color: '#E4E4E7'
  },
  {
    name: 'Linear Workflows',
    category: 'Issue Tracking',
    description: 'Sync project tasks, estimate issues, and auto-update sprint status.',
    installed: false,
    color: '#10B981'
  },
  {
    name: 'Slack Local Bridge',
    category: 'Communications',
    description: 'Summarize internal threads and draft responses securely.',
    installed: false,
    color: '#FAFAFA'
  }
];

export const McpMarketplace: React.FC = () => {
  return (
    <section id="mcp" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '18px' }}>
            Universal MCP Marketplace & <span className="gradient-text-amber">Encrypted Key Vault.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Connect Meridian-X to your developer toolchain via open Model Context Protocol (MCP) servers with hardware-backed AES-256-GCM credential security.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(300px, 380px) 1fr',
            gap: '28px',
            alignItems: 'start'
          }}
          className="mcp-grid"
        >
          {/* AES Vault Box */}
          <div className="glass-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Lock size={22} color="var(--emerald-accent)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem' }}>Local Key Vault</h3>
                <span style={{ fontSize: '0.78rem', color: 'var(--emerald-accent)', fontFamily: 'var(--font-code)' }}>
                  AES-256-GCM OS Keychain
                </span>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              API keys & secrets stay AES-256-GCM encrypted in your local OS Keychain. Machine-bound HMAC-SHA256 passphrase derived from <code>hostname + username</code> with <code>slowapi</code> rate limiting. Zero plain text on disk.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={vaultItemStyle}>
                <Key size={14} color="var(--emerald-accent)" />
                <span>GitHub PAT Token</span>
                <strong style={{ color: 'var(--emerald-accent)' }}>ENCRYPTED</strong>
              </div>
              <div style={vaultItemStyle}>
                <Key size={14} color="var(--emerald-accent)" />
                <span>Postgres DB Connection URI</span>
                <strong style={{ color: 'var(--emerald-accent)' }}>ENCRYPTED</strong>
              </div>
              <div style={vaultItemStyle}>
                <Key size={14} color="var(--emerald-accent)" />
                <span>Linear API Secret</span>
                <strong style={{ color: 'var(--emerald-accent)' }}>ENCRYPTED</strong>
              </div>
            </div>
          </div>

          {/* MCP Extensions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
            {MCP_EXTENSIONS.map((ext) => (
              <div
                key={ext.name}
                className="glass-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                  borderColor: ext.installed ? `${ext.color}44` : 'var(--border-glass)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: ext.color, fontFamily: 'var(--font-code)' }}>
                    {ext.category}
                  </span>
                  <span
                    className="glass-pill"
                    style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      color: ext.installed ? 'var(--emerald-accent)' : 'var(--text-muted)',
                      borderColor: ext.installed ? 'rgba(16, 185, 129, 0.3)' : 'var(--border-glass)'
                    }}
                  >
                    {ext.installed ? 'Installed' : '1-Click Add'}
                  </span>
                </div>

                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '4px' }}>{ext.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {ext.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .mcp-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const vaultItemStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 14px',
  borderRadius: '8px',
  background: 'rgba(15, 23, 42, 0.6)',
  border: '1px solid var(--border-glass)',
  fontSize: '0.82rem',
  color: 'var(--text-main)',
  fontFamily: 'var(--font-code)'
};
