import React, { useState, useEffect } from 'react';
import { ShieldCheck, Check, X } from 'lucide-react';
import { analytics } from '../utils/analytics';

export const CookieBanner: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('meridian_cookie_consent');
    if (!consent) {
      // Delay display slightly for smooth UI intro
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('meridian_cookie_consent', 'accepted');
    setVisible(false);
    analytics.track('cookie_consent_accepted');
  };

  const handleDecline = () => {
    localStorage.setItem('meridian_cookie_consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '480px',
      margin: '0 auto',
      zIndex: 999,
      background: 'rgba(10, 10, 14, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(0, 242, 254, 0.3)',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.15)',
      animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: 'rgba(0, 242, 254, 0.1)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00F2FE',
          flexShrink: 0
        }}>
          <ShieldCheck size={20} />
        </div>
        <div>
          <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, margin: '0 0 4px 0' }}>
            Zero-Telemetry Sovereignty
          </h4>
          <p style={{ color: '#A1A1AA', fontSize: '0.82rem', margin: 0, lineHeight: 1.5 }}>
            Meridian-X does not use third-party tracking cookies. We only save UI state locally in <code style={{ color: '#00F2FE' }}>localStorage</code>.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#A1A1AA',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '0.82rem',
            cursor: 'pointer',
            fontWeight: 500
          }}
        >
          Strict Necessary Only
        </button>
        <button
          onClick={handleAccept}
          className="btn-primary"
          style={{
            padding: '8px 18px',
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Check size={14} /> Accept & Enable
        </button>
      </div>
    </div>
  );
};
