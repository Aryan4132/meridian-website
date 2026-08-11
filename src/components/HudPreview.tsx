import React, { useState, useEffect } from 'react';
import { Zap, CornerDownLeft, Sparkles, Terminal, Shield, Keyboard, Activity, Mic, Lock, Eye, CheckCircle2, ShieldAlert, ClipboardList, RefreshCw } from 'lucide-react';

export const HudPreview: React.FC = () => {
  const [hudActive, setHudActive] = useState<boolean>(true);
  const [activeHotkey, setActiveHotkey] = useState<'alt-m' | 'alt-shift-m' | 'alt-v'>('alt-shift-m');
  const [mascotStatus, setMascotStatus] = useState<'idle' | 'working' | 'failed' | 'success'>('idle');
  const [query, setQuery] = useState<string>('Refactor local SQLite index and vectorize latest notes');
  const [frameTime, setFrameTime] = useState<number>(6.4);

  const mascotColors = {
    idle: { color: '#38BDF8', label: 'Idle · Slow Spin', bg: 'rgba(56, 189, 248, 0.15)' },
    working: { color: '#F59E0B', label: 'Working · Fast Spin', bg: 'rgba(245, 158, 11, 0.15)' },
    failed: { color: '#EF4444', label: 'Failed · Ring Frozen', bg: 'rgba(239, 68, 68, 0.15)' },
    success: { color: '#10B981', label: 'Success · Pulse Green', bg: 'rgba(16, 185, 129, 0.15)' }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.shiftKey && e.code === 'KeyM') {
        e.preventDefault();
        setActiveHotkey('alt-shift-m');
        setHudActive((prev) => !prev);
        setFrameTime(parseFloat((Math.random() * 2 + 4.5).toFixed(1)));
      } else if (e.altKey && e.code === 'KeyM') {
        e.preventDefault();
        setActiveHotkey('alt-m');
      } else if (e.altKey && e.code === 'KeyV') {
        e.preventDefault();
        setActiveHotkey('alt-v');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="overlay" style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px auto' }}>
          <div className="glass-pill" style={{ marginBottom: '16px', color: '#FAFAFA', borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <Zap size={14} />
            <span>Frameless Overlay & Global Hotkeys</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', marginBottom: '16px', fontWeight: 800 }}>
            Sub-10ms Hotkeys & <span className="gradient-text-cyan">3D Mascot Island.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Summon Meridian-X over full-screen IDEs, games, or spreadsheets instantly with native global shortcuts.
          </p>
        </div>

        {/* Global Hotkeys Table / Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
          <button
            onClick={() => {
              setActiveHotkey('alt-m');
              setHudActive(true);
            }}
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              border: `1px solid ${activeHotkey === 'alt-m' ? '#3B82F6' : 'rgba(255, 255, 255, 0.15)'}`,
              background: activeHotkey === 'alt-m' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(12, 12, 18, 0.8)',
              color: '#FFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontFamily: 'var(--font-code)', fontWeight: 700, color: '#3B82F6', background: 'rgba(59, 130, 246, 0.2)', padding: '2px 8px', borderRadius: '6px' }}>Alt + M</span>
            <span style={{ fontSize: '0.9rem' }}>Main Workspace Window</span>
          </button>

          <button
            onClick={() => {
              setActiveHotkey('alt-shift-m');
              setHudActive(!hudActive);
            }}
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              border: `1px solid ${activeHotkey === 'alt-shift-m' ? '#F59E0B' : 'rgba(255, 255, 255, 0.15)'}`,
              background: activeHotkey === 'alt-shift-m' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(12, 12, 18, 0.8)',
              color: '#FFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontFamily: 'var(--font-code)', fontWeight: 700, color: '#F59E0B', background: 'rgba(245, 158, 11, 0.2)', padding: '2px 8px', borderRadius: '6px' }}>Alt + Shift + M</span>
            <span style={{ fontSize: '0.9rem' }}>Mascot / Frameless HUD</span>
          </button>

          <button
            onClick={() => {
              setActiveHotkey('alt-v');
            }}
            style={{
              padding: '12px 20px',
              borderRadius: '12px',
              border: `1px solid ${activeHotkey === 'alt-v' ? '#EC4899' : 'rgba(255, 255, 255, 0.15)'}`,
              background: activeHotkey === 'alt-v' ? 'rgba(236, 72, 153, 0.15)' : 'rgba(12, 12, 18, 0.8)',
              color: '#FFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ fontFamily: 'var(--font-code)', fontWeight: 700, color: '#EC4899', background: 'rgba(236, 72, 153, 0.2)', padding: '2px 8px', borderRadius: '6px' }}>Alt + V</span>
            <span style={{ fontSize: '0.9rem' }}>Push-to-Talk Voice Input</span>
          </button>
        </div>

        {/* Mascot State Color Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Mascot Cognitive State:</span>
          {(['idle', 'working', 'failed', 'success'] as const).map((st) => (
            <button
              key={st}
              onClick={() => {
                setMascotStatus(st);
              }}
              style={{
                background: mascotColors[st].bg,
                border: `1px solid ${mascotColors[st].color}`,
                color: mascotColors[st].color,
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '8px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              {st}
            </button>
          ))}
        </div>

        {/* Simulated Desktop Workspace Box */}
        <div
          style={{
            position: 'relative',
            minHeight: '480px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            background: '#050508',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.9)',
            padding: '32px'
          }}
        >
          {/* Simulated IDE / Desktop Background Content */}
          <div style={{ opacity: 0.25, pointerEvents: 'none', filter: 'blur(2px)' }}>
            <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.85rem', color: '#64748B', lineHeight: 1.8 }}>
              <div>{"import { invokeTauriCommand } from '@tauri-apps/api/core';"}</div>
              <br />
              <div style={{ color: '#00F2FE' }}>{"// Meridian-X v0.4.0 Global Hotkey & Island Engine"}</div>
              <div>{"export function initMeridianEngine() {"}</div>
              <div>{"  const mascot = new MascotIsland({ anchor: 'top-right' });"}</div>
              <div>{"  mascot.bindGlobalHotkey('Alt+Shift+M');"}</div>
              <div>{"  mascot.setStateColor('" + mascotStatus + "');"}</div>
              <div>{"  clipboardSurveillance.start({ maxSlots: 50 });"}</div>
              <div>{"  focusShield.activate();"}</div>
              <div>{"}"}</div>
            </div>
          </div>

          {/* Floating Mascot Island HUD Box */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: hudActive ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.92)',
              opacity: hudActive ? 1 : 0,
              pointerEvents: hudActive ? 'auto' : 'none',
              transition: 'all 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
              width: '92%',
              maxWidth: '680px'
            }}
          >
            <div className="glow-border-card">
              <div
                className="glow-border-card-inner"
                style={{
                  padding: '24px',
                  background: 'rgba(8, 12, 20, 0.95)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  boxShadow: `0 0 60px ${mascotColors[mascotStatus].color}33`
                }}
              >
                {/* Search Input bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: `1px solid ${mascotColors[mascotStatus].color}`,
                    borderRadius: '12px',
                    padding: '14px 18px',
                    marginBottom: '20px'
                  }}
                >
                  <Sparkles size={20} color={mascotColors[mascotStatus].color} className="animate-pulse-glow" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type command or prompt local AI agent..."
                    style={{
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#FFF',
                      fontSize: '1rem',
                      fontFamily: 'var(--font-body)',
                      width: '100%'
                    }}
                  />
                  <div className="glass-pill" style={{ padding: '4px 10px', fontSize: '0.72rem', color: mascotColors[mascotStatus].color, borderColor: mascotColors[mascotStatus].color }}>
                    <CornerDownLeft size={12} />
                    <span>EXECUTE</span>
                  </div>
                </div>

                {/* Agent Action Suggestions / Status */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
                      Live Desktop Widgets
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: mascotColors[mascotStatus].color }}>
                      🦊 Mascot Status: {mascotColors[mascotStatus].label}
                    </span>
                  </div>

                  <div style={hudActionRowStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <ShieldAlert size={15} color="#EF4444" />
                      <span>Focus Distraction Shield: <strong>YouTube & Reddit Blocked</strong></span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#EF4444', fontFamily: 'var(--font-code)' }}>ACTIVE</span>
                  </div>

                  <div style={hudActionRowStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <ClipboardList size={15} color="#8B5CF6" />
                      <span>50-Slot Clipboard Monitor: <strong>3 Urls, 14 Code Snippets Captured</strong></span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#8B5CF6', fontFamily: 'var(--font-code)' }}>50/50 SLOTS</span>
                  </div>

                  <div style={hudActionRowStyle}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Mic size={15} color="#EC4899" />
                      <span>Supertonic Voice Engine: <strong>Male M3 (Deep) Ready</strong></span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#EC4899', fontFamily: 'var(--font-code)' }}>Alt + V</span>
                  </div>
                </div>

                {/* Overlay Metric Footer */}
                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '14px',
                    borderTop: '1px solid var(--border-glass)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={14} color="var(--emerald-accent)" />
                    <span>HUD Response Latency: <strong style={{ color: 'var(--emerald-accent)' }}>{frameTime} ms</strong></span>
                  </div>
                  <span>Frameless Overlay · Tauri v2 + FastAPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const hudActionRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 14px',
  borderRadius: '8px',
  background: 'rgba(15, 23, 42, 0.5)',
  border: '1px solid var(--border-glass)',
  fontSize: '0.88rem',
  color: 'var(--text-main)',
  cursor: 'pointer'
};
