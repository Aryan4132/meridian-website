import React from 'react';
import { TECH_STACK } from '../data/features';
import { Layers, Cpu, Shield, CheckCircle2 } from 'lucide-react';
import { SystemArchitectureGraph } from './SystemArchitectureGraph';

export const Architecture: React.FC = () => {
  return (
    <section id="architecture" style={{ padding: '110px 0', position: 'relative', zIndex: 1, background: '#030303' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 64px auto' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: '20px', letterSpacing: '-0.03em' }}>
            Engineered for <span className="gradient-text-cyan">Sub-Millisecond Autonomy.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.65 }}>
            Decoupled multi-process pipeline uniting Rust native speed, FastAPI async control loops, embedded vector memory, and offline GPU inference.
          </p>
        </div>

        {/* Interactive System Flowchart Visualizer */}
        <div style={{ marginBottom: '48px' }}>
          <SystemArchitectureGraph />
        </div>

        {/* Core Technical Stack Grid */}
        <div style={{ marginBottom: '24px', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-dim)', fontWeight: 700 }}>
          Core Infrastructure Components
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {TECH_STACK.map((item) => (
            <div
              key={item.name}
              className="glass-card"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                background: 'rgba(12, 12, 16, 0.92)',
                borderColor: 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  className="glass-pill"
                  style={{
                    fontSize: '0.72rem',
                    color: '#FAFAFA',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    padding: '3px 10px'
                  }}
                >
                  {item.badge}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', color: '#FFF' }}>{item.name}</h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{item.role}</div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-dim)', lineHeight: 1.55 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* System Requirements & OS Support Matrix */}
        <div style={{ marginTop: '70px', paddingTop: '50px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', fontWeight: 700, marginBottom: '10px' }}>
              System Requirements & Platform Support
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Optimized for hardware efficiency with optional hybrid cloud offloading for CPU-only systems.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            {/* Requirements Table */}
            <div style={{ background: 'rgba(12, 12, 18, 0.9)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '16px', padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#FFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={18} color="#3B82F6" />
                <span>Hardware Specifications</span>
              </h4>

              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--text-dim)', textAlign: 'left' }}>
                    <th style={{ padding: '8px 0' }}>Component</th>
                    <th style={{ padding: '8px 0' }}>Minimum</th>
                    <th style={{ padding: '8px 0', color: '#10B981' }}>Recommended</th>
                  </tr>
                </thead>
                <tbody style={{ color: '#E2E8F0' }}>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '10px 0', fontWeight: 600 }}>CPU</td>
                    <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>i5 / Ryzen 5 (AVX2)</td>
                    <td style={{ padding: '10px 0', color: '#FFF' }}>i7 / Ryzen 7+ (8+ cores)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '10px 0', fontWeight: 600 }}>RAM</td>
                    <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>8 GB</td>
                    <td style={{ padding: '10px 0', color: '#FFF' }}>16–32 GB DDR5</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <td style={{ padding: '10px 0', fontWeight: 600 }}>GPU / VRAM</td>
                    <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>Iris Xe / Vega</td>
                    <td style={{ padding: '10px 0', color: '#FFF' }}>RTX 3060+ (8 GB+ VRAM)</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px 0', fontWeight: 600 }}>Storage</td>
                    <td style={{ padding: '10px 0', color: 'var(--text-muted)' }}>10 GB SSD</td>
                    <td style={{ padding: '10px 0', color: '#FFF' }}>30 GB+ NVMe</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* OS Compatibility Table */}
            <div style={{ background: 'rgba(12, 12, 18, 0.9)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '16px', padding: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '16px', color: '#FFF', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={18} color="#10B981" />
                <span>OS Platform Support</span>
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <strong style={{ color: '#FFF', fontSize: '0.9rem' }}>Windows 11</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>64-bit NSIS / MSI Installer</div>
                  </div>
                  <span style={{ color: '#10B981', fontWeight: 700, fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={15} /> Fully Supported
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <strong style={{ color: '#FFF', fontSize: '0.9rem' }}>macOS 12+</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Apple Silicon M1/M2/M3 & Intel</div>
                  </div>
                  <span style={{ color: '#10B981', fontWeight: 700, fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={15} /> Fully Supported
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <strong style={{ color: '#FFF', fontSize: '0.9rem' }}>Linux Kernel 5.4+</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Ubuntu / Debian / Arch / Fedora</div>
                  </div>
                  <span style={{ color: '#10B981', fontWeight: 700, fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={15} /> Fully Supported
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
