import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Terminal, Shield, Zap, Sparkles, RefreshCw } from 'lucide-react';
import { useMeridianVersion } from '../utils/version';

interface HeaderProps {
  onDownloadClick: () => void;
  detectedOS: string;
}

export const Header: React.FC<HeaderProps> = ({ onDownloadClick, detectedOS }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const versionInfo = useMeridianVersion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled
          ? 'rgba(3, 3, 3, 0.92)'
          : 'rgba(3, 3, 3, 0.5)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : '1px solid rgba(255, 255, 255, 0.04)',
        boxShadow: scrolled ? '0 12px 36px rgba(0, 0, 0, 0.9)' : 'none',
        padding: scrolled ? '12px 0' : '18px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          <img
            src="/logo.png"
            alt="Meridian-X Logo"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.6), 0 0 12px rgba(255, 255, 255, 0.15)'
            }}
          />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  letterSpacing: '-0.03em',
                  color: '#FFFFFF'
                }}
              >
                Meridian<span style={{ color: '#A1A1AA', fontWeight: 600 }}>-X</span>
              </span>
              <span
                className="glass-pill"
                style={{
                  fontSize: '0.68rem',
                  padding: '2px 8px',
                  color: '#FAFAFA',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  fontFamily: 'var(--font-code)'
                }}
              >
                {versionInfo.tagName}
              </span>
            </div>
          </div>
        </a>

        {/* Floating Center Desktop Nav Links */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            background: 'rgba(18, 18, 22, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '9999px',
            padding: '6px 20px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
          }}
        >
          <a href="#simulator" className="nav-item-link">
            Terminal Demo
          </a>
          <a href="#features" className="nav-item-link">
            Features
          </a>

          <a href="#architecture" className="nav-item-link">
            Architecture
          </a>
          <a href="#mcp" className="nav-item-link">
            MCP Marketplace
          </a>
        </nav>

        {/* Action CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button onClick={onDownloadClick} className="btn-primary" style={{ padding: '9px 18px', fontSize: '0.86rem', borderRadius: '10px' }}>
            <Download size={15} />
            <span>Download ({detectedOS})</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            style={{
              background: 'rgba(18, 18, 22, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              color: '#FFFFFF',
              cursor: 'pointer',
              padding: '8px',
              display: 'none'
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(8, 8, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '12px'
          }}
        >
          <a href="#simulator" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>
            Terminal Demo
          </a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>
            Core Pillars
          </a>

          <a href="#architecture" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>
            Architecture
          </a>
          <a href="#mcp" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>
            MCP Marketplace
          </a>
        </div>
      )}

      <style>{`
        .nav-item-link {
          color: #A1A1AA;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.25s ease;
          padding: 4px 8px;
          border-radius: 6px;
        }
        .nav-item-link:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.08);
        }
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
};

const mobileNavLinkStyle: React.CSSProperties = {
  color: '#FAFAFA',
  textDecoration: 'none',
  fontSize: '1.05rem',
  fontWeight: 600
};

