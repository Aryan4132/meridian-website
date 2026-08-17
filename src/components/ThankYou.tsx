import React, { useState } from 'react';
import { CheckCircle2, Download, Terminal, Copy, Check, ExternalLink, ArrowLeft, ShieldCheck } from 'lucide-react';

interface ThankYouProps {
  onNavigateHome: () => void;
  detectedOS: string;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onNavigateHome, detectedOS }) => {
  const [copied, setCopied] = useState(false);
  const checksum = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      padding: '120px 24px 80px 24px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <button
          onClick={onNavigateHome}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#A1A1AA',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            marginBottom: '24px',
            fontFamily: 'var(--font-heading)'
          }}
        >
          <ArrowLeft size={16} /> Return Home
        </button>

        <div className="glass-card" style={{
          padding: '48px',
          background: 'rgba(10, 10, 14, 0.9)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 0 50px rgba(16, 185, 129, 0.1)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              marginBottom: '20px'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <span className="glass-pill" style={{ color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)', marginBottom: '12px' }}>
              BINARY TRANSFER INITIATED
            </span>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.4rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '12px',
              letterSpacing: '-0.02em'
            }}>
              Welcome to Meridian-X
            </h1>

            <p style={{ color: '#A1A1AA', fontSize: '1rem', maxWidth: '560px', margin: '0 auto' }}>
              Your desktop download for <strong style={{ color: '#FFFFFF' }}>{detectedOS}</strong> has started. Follow the verification steps below to verify build integrity.
            </p>
          </div>

          {/* Checksum Box */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            padding: '20px',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.8rem', color: '#10B981', fontFamily: 'var(--font-code)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={14} /> SHA256 Verification Checksum
              </span>
              <button
                onClick={handleCopyChecksum}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#A1A1AA',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {copied ? <Check size={12} style={{ color: '#10B981' }} /> : <Copy size={12} />}
                {copied ? 'Copied' : 'Copy Hash'}
              </button>
            </div>
            <code style={{
              display: 'block',
              fontFamily: 'var(--font-code)',
              fontSize: '0.78rem',
              color: '#D4D4D8',
              wordBreak: 'break-all',
              background: 'rgba(0,0,0,0.4)',
              padding: '10px',
              borderRadius: '6px'
            }}>
              {checksum}
            </code>
          </div>

          {/* Quickstart instructions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700 }}>
              Quick Launch Sequence
            </h3>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                color: '#00F2FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0
              }}>1</div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Run Binary Setup</strong>
                <p style={{ color: '#A1A1AA', fontSize: '0.85rem', margin: 0 }}>Launch the installer and allow local system overlay permissions.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: '#8B5CF6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0
              }}>2</div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Trigger Hotkey Overlay</strong>
                <p style={{ color: '#A1A1AA', fontSize: '0.85rem', margin: 0 }}>Press <code style={{ color: '#00F2FE', background: 'rgba(0, 242, 254, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>Option + Space</code> (macOS) or <code style={{ color: '#00F2FE', background: 'rgba(0, 242, 254, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>Alt + Space</code> (Windows) anywhere to invoke Meridian-X HUD.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px' }}>
            <button
              onClick={onNavigateHome}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              Return to Command Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
