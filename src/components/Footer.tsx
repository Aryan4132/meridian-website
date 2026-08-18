import React from 'react';
import { Github, Twitter, Shield, Heart, Terminal, FileText, ExternalLink, Download, X } from 'lucide-react';
import { useMeridianVersion } from '../utils/version';

interface FooterProps {
  onDownloadClick: () => void;
  detectedOS: string;
}

export const Footer: React.FC<FooterProps> = ({ onDownloadClick, detectedOS }) => {
  const versionInfo = useMeridianVersion();
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(5, 5, 8, 0.85)',
        backdropFilter: 'blur(10px)',
        padding: '80px 0 40px 0',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
            marginBottom: '60px'
          }}
        >
          {/* Col 1: Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src="/logo.png"
                alt="Meridian-X Logo"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: '0 0 12px rgba(255, 255, 255, 0.15)'
                }}
              />
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', color: '#FFF' }}>
                Meridian<span style={{ color: '#A1A1AA', fontWeight: 600 }}>-X</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
              Local execution. Total privacy. Absolute autonomy. Sovereign desktop AI continuous reasoning engine.
            </p>

            <div style={{ fontSize: '0.85rem', color: '#FAFAFA', fontWeight: 600 }}>
              Architected & Built by <strong style={{ color: '#10B981' }}>Aryan</strong>
            </div>
          </div>

          {/* Col 2: Product */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>
              Product
            </h4>
            <a href="#simulator" style={footerLinkStyle}>ReAct Terminal Demo</a>
            <a href="#features" style={footerLinkStyle}>System Features</a>
            <a href="#architecture" style={footerLinkStyle}>Tauri v2 & Architecture</a>
            <a href="#mcp" style={footerLinkStyle}>MCP Marketplace</a>
            <a
              href="/docs"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/docs');
                window.dispatchEvent(new Event('popstate'));
              }}
              style={footerLinkStyle}
            >
              Documentation & Server Setup
            </a>
          </div>

          {/* Col 3: Platforms & Download */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>
              Supported Platforms
            </h4>
            <span style={footerTextStyle}>Windows 10 / 11 (x64 & ARM64)</span>
            <span style={footerTextStyle}>macOS Sonoma / Sequoia (Apple Silicon & Intel)</span>
            <span style={footerTextStyle}>Linux (AppImage / Deb / Arch PKGBUILD)</span>
            <button onClick={onDownloadClick} className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem', width: 'fit-content', marginTop: '6px' }}>
              <Download size={14} />
              <span>Get Desktop App</span>
            </button>
          </div>

          {/* Col 4: Project Maintainer & Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h4 style={{ fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-main)' }}>
              Maintainer & Community
            </h4>
            <span style={{ fontSize: '0.84rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
              Open-source project maintained by <strong>Aryan</strong>. Built for complete local data sovereignty.
            </span>
            <a href="https://github.com/Aryan4132/Meridian-X" target="_blank" rel="noopener noreferrer" style={footerLinkStyle}>
              <Github size={14} /> GitHub Repository
            </a>
            <div style={{ display: 'flex', gap: '12px', marginTop: '6px', flexWrap: 'wrap' }}>
              <a href="/docs" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/docs'); window.dispatchEvent(new Event('popstate')); }} style={footerLinkStyle}>Docs</a>
              <a href="/privacy" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new Event('popstate')); }} style={footerLinkStyle}>Privacy Policy</a>
              <a href="/terms" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/terms'); window.dispatchEvent(new Event('popstate')); }} style={footerLinkStyle}>Terms</a>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.84rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Meridian-X by <strong>Aryan</strong>. All rights reserved. 100% Sovereign & Offline.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacy" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/privacy'); window.dispatchEvent(new Event('popstate')); }} style={footerLinkStyle}>Privacy First Policy</a>
            <a href="/thank-you" onClick={(e) => { e.preventDefault(); window.history.pushState({}, '', '/thank-you'); window.dispatchEvent(new Event('popstate')); }} style={footerLinkStyle}>Verification Checksums</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const DownloadModal: React.FC<{ isOpen: boolean; onClose: () => void; detectedOS: string }> = ({
  isOpen,
  onClose,
  detectedOS
}) => {
  const versionInfo = useMeridianVersion();
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(4, 8, 16, 0.85)',
        backdropFilter: 'blur(16px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div
        className="glow-border-card"
        style={{ width: '100%', maxWidth: '540px' }}
      >
        <div className="glow-border-card-inner" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Download size={22} color="var(--cyan-primary)" />
              <h3 style={{ fontSize: '1.3rem' }}>Download Meridian-X {versionInfo.tagName}</h3>
            </div>
            <button
              onClick={onClose}
              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px', lineHeight: 1.6 }}>
            Select your operating system binary. All builds are signed, standalone Tauri v2 executables requiring zero cloud connectivity.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a
                href={versionInfo.downloadUrlExe}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  onClose();
                  window.history.pushState({}, '', '/thank-you');
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'space-between', borderColor: detectedOS.includes('Windows') ? 'var(--cyan-primary)' : 'var(--border-glass)' }}
              >
                <div>
                  <strong>🪟 Windows (.exe)</strong>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>x64 Setup</div>
                </div>
                <Download size={15} color="var(--cyan-primary)" />
              </a>

              <a
                href={versionInfo.downloadUrlMsi}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  onClose();
                  window.history.pushState({}, '', '/thank-you');
                  window.dispatchEvent(new Event('popstate'));
                }}
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'space-between', borderColor: 'var(--border-glass)' }}
              >
                <div>
                  <strong>🪟 Windows (.msi)</strong>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>MSI Package</div>
                </div>
                <Download size={15} color="var(--cyan-primary)" />
              </a>
            </div>

            <a
              href={versionInfo.downloadUrlDmg}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                onClose();
                window.history.pushState({}, '', '/thank-you');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="btn-secondary"
              style={{ justifyContent: 'space-between', borderColor: detectedOS.includes('macOS') ? 'var(--cyan-primary)' : 'var(--border-glass)' }}
            >
              <div>
                <strong>🍎 macOS Installer (.dmg)</strong>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Universal / Apple Silicon & Intel</div>
              </div>
              <Download size={16} color="var(--cyan-primary)" />
            </a>

            <a
              href={versionInfo.downloadUrlDeb}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                onClose();
                window.history.pushState({}, '', '/thank-you');
                window.dispatchEvent(new Event('popstate'));
              }}
              className="btn-secondary"
              style={{ justifyContent: 'space-between', borderColor: detectedOS.includes('Linux') ? 'var(--cyan-primary)' : 'var(--border-glass)' }}
            >
              <div>
                <strong>🐧 Linux Installer (.deb)</strong>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>Debian / Ubuntu / Linux Mint</div>
              </div>
              <Download size={16} color="var(--cyan-primary)" />
            </a>
          </div>

          <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textAlign: 'center' }}>
            SHA-256 Checksums available on <a href="https://github.com/Aryan4132/Meridian-X/releases" target="_blank" rel="noreferrer" style={{ color: 'var(--cyan-primary)' }}>GitHub v0.4.0 Releases</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const footerLinkStyle: React.CSSProperties = {
  color: 'var(--text-muted)',
  textDecoration: 'none',
  fontSize: '0.88rem',
  transition: 'color 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  gap: '8px'
};

const footerTextStyle: React.CSSProperties = {
  color: 'var(--text-dim)',
  fontSize: '0.84rem'
};
