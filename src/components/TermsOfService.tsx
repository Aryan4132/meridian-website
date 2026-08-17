import React from 'react';
import { FileText, ShieldCheck, AlertTriangle, ArrowLeft } from 'lucide-react';

interface TermsProps {
  onNavigateHome: () => void;
}

export const TermsOfService: React.FC<TermsProps> = ({ onNavigateHome }) => {
  return (
    <div style={{
      minHeight: '100vh',
      padding: '120px 24px 80px 24px',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ maxWidth: '840px' }}>
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
          <ArrowLeft size={16} /> Back to Overview
        </button>

        <div className="glass-card" style={{
          padding: '48px',
          background: 'rgba(10, 10, 14, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B5CF6'
            }}>
              <FileText size={22} />
            </div>
            <span className="glass-pill" style={{ color: '#8B5CF6', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
              END USER LICENSE & TERMS
            </span>
          </div>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '2.5rem',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '12px',
            letterSpacing: '-0.02em'
          }}>
            Terms of Service
          </h1>
          <p style={{ color: '#71717A', fontSize: '0.9rem', marginBottom: '40px' }}>
            Effective Date: August 17, 2026 • Version 1.0.0
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#D4D4D8', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={18} style={{ color: '#8B5CF6' }} /> 1. Open Source & Desktop Software License
              </h2>
              <p>
                Meridian-X is distributed as open-source desktop software under the Apache 2.0 license. You are granted a non-exclusive, worldwide license to install, execute, inspect, and modify the application on your personal or corporate desktop workstations.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <AlertTriangle size={18} style={{ color: '#F59E0B' }} /> 2. Local Execution Responsibility
              </h2>
              <p>
                Because Meridian-X performs direct local tool execution (such as executing shell commands, modifying local file structures, or running local scripts), you retain full responsibility for configuring sandbox parameters and reviewing automated agent actions before approval.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px' }}>
                3. Limitation of Liability
              </h2>
              <p>
                Meridian-X is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. In no event shall the authors or open-source maintainers be liable for any claim, damages, or data loss arising from local agent execution or model inference outputs.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
