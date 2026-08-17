import React, { useState, useEffect } from 'react';
import { Download, Sparkles, X } from 'lucide-react';
import { analytics } from '../utils/analytics';

interface StickyMobileCTAProps {
  onDownloadClick: () => void;
  detectedOS: string;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onDownloadClick, detectedOS }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero (e.g. 400px) on mobile screen sizes (< 768px)
      const isMobileScreen = window.innerWidth < 768;
      const scrolledPastHero = window.scrollY > 350;
      if (isMobileScreen && scrolledPastHero && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      className="mobile-sticky-cta"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: 'rgba(5, 5, 8, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(0, 242, 254, 0.3)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.8)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/logo.png"
          alt="Meridian-X Mobile Logo"
          style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)' }}
        />
        <div>
          <div style={{ color: '#FFFFFF', fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
            Meridian-X
          </div>
          <div style={{ color: '#A1A1AA', fontSize: '0.72rem' }}>
            Sovereign Agent for {detectedOS}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => {
            analytics.track('sticky_mobile_cta_click', { os: detectedOS });
            onDownloadClick();
          }}
          className="btn-primary"
          style={{
            padding: '8px 16px',
            fontSize: '0.8rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <Download size={14} /> Download
        </button>

        <button
          onClick={() => setDismissed(true)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#71717A',
            padding: '4px',
            cursor: 'pointer'
          }}
          aria-label="Dismiss sticky CTA"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
