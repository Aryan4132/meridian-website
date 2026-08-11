import React, { useState } from 'react';
import { FEATURE_PILLARS, FEATURE_PILLARS as PillarsData, DESIGN_STYLES, DesignStyle } from '../data/features';
import { ShieldCheck, Cpu, Database, Eye, Zap, Lock, CheckCircle, Code, Sparkles, Layers, ShieldAlert, ClipboardList, Volume2, BarChart3, Feather, Palette } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck size={22} color="#10B981" />,
  Cpu: <Cpu size={22} color="#E4E4E7" />,
  Sparkles: <Sparkles size={22} color="#38BDF8" />,
  Zap: <Zap size={22} color="#F59E0B" />,
  Layers: <Layers size={22} color="#A78BFA" />,
  Lock: <Lock size={22} color="#10B981" />,
  ShieldAlert: <ShieldAlert size={22} color="#EF4444" />,
  ClipboardList: <ClipboardList size={22} color="#8B5CF6" />,
  Volume2: <Volume2 size={22} color="#EC4899" />,
  BarChart3: <BarChart3 size={22} color="#3B82F6" />,
  Database: <Database size={22} color="#14B8A6" />,
  Feather: <Feather size={22} color="#64748B" />
};

export const FeaturePillars: React.FC = () => {
  const [themeFilter, setThemeFilter] = useState<'All' | 'Dark' | 'Light'>('All');
  const [activeThemeId, setActiveThemeId] = useState<string>('cyber-slate');

  return (
    <section id="features" style={{ padding: '90px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 56px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '18px', fontWeight: 800 }}>
            Key Features & <span className="gradient-text-purple">System Capabilities</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Complete list of sovereign offline agentic functions, background surveillance engines, security gates, and UI companions.
          </p>
        </div>

        {/* Features Clean Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {PillarsData.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                background: 'rgba(10, 10, 14, 0.92)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px'
              }}
            >
              {/* Header: Icon & Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(5, 5, 8, 0.95)',
                    border: `1px solid ${pillar.accentColor}44`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {iconMap[pillar.iconName]}
                </div>

                <span
                  className="glass-pill"
                  style={{
                    fontSize: '0.75rem',
                    color: pillar.accentColor,
                    borderColor: `${pillar.accentColor}44`,
                    padding: '3px 10px'
                  }}
                >
                  {pillar.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: '#FFF' }}>{pillar.title}</h3>
                <div style={{ fontSize: '0.84rem', color: pillar.accentColor, fontWeight: 600, marginBottom: '8px' }}>
                  {pillar.tagline}
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                  {pillar.description}
                </p>
              </div>

              {/* Feature Highlights List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {pillar.details.map((detail, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#E2E8F0' }}>
                    <CheckCircle size={13} color={pillar.accentColor} />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Metric Footer */}
              <div style={{ paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-code)' }}>
                <span>Spec Target</span>
                <span style={{ color: pillar.accentColor, fontWeight: 600 }}>{pillar.metrics}</span>
              </div>
            </div>
          ))}

          {/* 13th Card: More Features Coming Soon */}
          <div
            className="glass-card"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              background: 'rgba(18, 18, 28, 0.6)',
              border: '1px dashed rgba(255, 255, 255, 0.25)',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-code)',
                  color: '#38BDF8',
                  background: 'rgba(56, 189, 248, 0.15)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  fontWeight: 700
                }}
              >
                UPCOMING ROADMAP
              </span>
              <Sparkles size={18} color="#38BDF8" className="animate-pulse" />
            </div>

            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: '#FFF' }}>More Features Coming Soon</h3>
              <div style={{ fontSize: '0.84rem', color: '#38BDF8', fontWeight: 600, marginBottom: '8px' }}>
                Continuous Expansion & Community MCPs
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.55 }}>
                Active development pipeline introducing enhanced multi-modal agents, expanded MCP server ecosystem, and advanced workflow automation.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {['Multi-Agent Swarm Orchestration', 'Local Speech-to-Speech Engine', 'Automated Workflow Scripting', 'Community MCP Plugin Store'].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#E2E8F0' }}>
                  <Sparkles size={13} color="#38BDF8" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ paddingTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-code)' }}>
              <span>Status</span>
              <span style={{ color: '#38BDF8', fontWeight: 600 }}>Active Development</span>
            </div>
          </div>
        </div>

        {/* 11 Selectable Design Styles Showcase */}
        <div style={{ marginTop: '80px', paddingTop: '50px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginBottom: '10px', fontWeight: 700 }}>
              11 Built-in Design Styles
            </h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 20px auto', fontSize: '0.95rem' }}>
              Selectable in Settings → Mascot & Style with live visual theme swatches & font pairings.
            </p>

            {/* Category Filters */}
            <div style={{ display: 'inline-flex', gap: '8px', background: 'rgba(15, 15, 20, 0.8)', padding: '6px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              {(['All', 'Dark', 'Light'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setThemeFilter(filter)}
                  style={{
                    background: themeFilter === filter ? 'var(--cyan-accent)' : 'transparent',
                    color: themeFilter === filter ? '#000000' : 'var(--text-muted)',
                    fontWeight: themeFilter === filter ? 700 : 500,
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px 16px',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {filter} Themes
                </button>
              ))}
            </div>
          </div>

          {/* Theme List Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px' }}>
            {DESIGN_STYLES.filter((style) => themeFilter === 'All' || style.type === themeFilter).map((style) => {
              const isActive = activeThemeId === style.id;
              return (
                <div
                  key={style.id}
                  onClick={() => setActiveThemeId(style.id)}
                  style={{
                    background: style.type === 'Dark' ? 'rgba(12, 12, 18, 0.9)' : 'rgba(240, 240, 245, 0.95)',
                    color: style.type === 'Dark' ? '#FFFFFF' : '#111827',
                    border: `2px solid ${isActive ? style.accentColor : 'rgba(255, 255, 255, 0.1)'}`,
                    borderRadius: '14px',
                    padding: '18px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          background: style.accentColor,
                          boxShadow: `0 0 8px ${style.accentColor}`
                        }}
                      />
                      <span style={{ fontWeight: 700, fontSize: '0.92rem' }}>{style.name}</span>
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: '6px',
                        background: style.type === 'Dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        color: style.type === 'Dark' ? '#E2E8F0' : '#334155'
                      }}
                    >
                      {style.type}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.8rem', opacity: 0.8, marginBottom: '10px', lineHeight: 1.4 }}>
                    {style.description}
                  </p>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      fontFamily: style.typography.includes('Mono') || style.typography.includes('VT323') ? 'monospace' : 'sans-serif',
                      paddingTop: '8px',
                      borderTop: `1px solid ${style.type === 'Dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                    }}
                  >
                    <span>Font: {style.typography}</span>
                    {isActive && <CheckCircle size={14} color={style.accentColor} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
