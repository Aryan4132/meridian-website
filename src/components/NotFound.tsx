import React from 'react';
import { ShieldAlert, ArrowLeft, Terminal, Cpu } from 'lucide-react';

interface NotFoundProps {
  onNavigateHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onNavigateHome }) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 60px 24px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="glass-card" style={{
        maxWidth: '680px',
        width: '100%',
        padding: '48px 36px',
        textAlign: 'center',
        background: 'rgba(10, 10, 14, 0.85)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        boxShadow: '0 0 50px rgba(239, 68, 68, 0.15)'
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          marginBottom: '24px',
          color: '#EF4444'
        }}>
          <ShieldAlert size={36} />
        </div>

        <div className="glass-pill" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: '#EF4444',
          borderColor: 'rgba(239, 68, 68, 0.3)',
          marginBottom: '16px',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-code)'
        }}>
          <Terminal size={14} /> ERROR CODE: 0x404_SIGNAL_DISRUPTED
        </div>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '2.5rem',
          fontWeight: 800,
          color: '#FFFFFF',
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          Coordinates Lost in Space
        </h1>

        <p style={{
          color: '#A1A1AA',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '32px',
          maxWidth: '520px',
          margin: '0 auto 32px auto'
        }}>
          The quantum pathway or resource endpoint you requested does not exist on this sovereign local node. Return to the main command deck.
        </p>

        <div style={{
          background: 'rgba(0, 0, 0, 0.6)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '32px',
          fontFamily: 'var(--font-code)',
          fontSize: '0.85rem',
          color: '#71717A',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <Cpu size={18} style={{ color: '#EF4444', flexShrink: 0 }} />
          <span>diagnostic: path standard lookup returned NULL — zero memory leaked.</span>
        </div>

        <button
          onClick={onNavigateHome}
          className="btn-primary"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 28px',
            fontSize: '0.95rem',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={18} /> Return to Command Deck
        </button>
      </div>
    </div>
  );
};
