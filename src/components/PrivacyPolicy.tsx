import React from 'react';
import { Shield, Lock, Cpu, Server, CheckCircle2, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigateHome: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome }) => {
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
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#00F2FE'
            }}>
              <Shield size={22} />
            </div>
            <span className="glass-pill" style={{ color: '#00F2FE', borderColor: 'rgba(0, 242, 254, 0.3)' }}>
              SOVEREIGN DATA POLICY
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
            Privacy Policy & Data Sovereignty
          </h1>
          <p style={{ color: '#71717A', fontSize: '0.9rem', marginBottom: '40px' }}>
            Effective Date: August 17, 2026 • Version 1.0.0
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#D4D4D8', lineHeight: 1.7 }}>
            <section>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lock size={18} style={{ color: '#00F2FE' }} /> 1. Absolute Local Processing
              </h2>
              <p>
                Meridian-X operates under a strict sovereign local model. When you run Meridian-X on your local workstation (Windows, macOS, Linux), all prompt parsing, code analysis, tool execution, and AST parsing take place exclusively inside your machine's CPU/GPU and local storage.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Server size={18} style={{ color: '#8B5CF6' }} /> 2. Zero Telemetry & Cloud Tracking
              </h2>
              <p>
                We do not collect, send, transmit, or store any user prompts, codebases, file paths, hardware IDs, or interaction logs on external servers. Meridian-X does not ship with phone-home scripts or silent cloud tracking.
              </p>
            </section>

            <section>
              <h2 style={{ color: '#FFFFFF', fontSize: '1.3rem', fontWeight: 700, marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Cpu size={18} style={{ color: '#10B981' }} /> 3. Local Key Vault (AES-256 GCM)
              </h2>
              <p>
                Any API keys provided for local LLM adapters (such as local Ollama instances, LM Studio, or self-hosted vLLM servers) are encrypted locally using AES-256-GCM. Master keys are protected by your operating system's native keychain (Windows Credential Manager, macOS Keychain, or Linux Secret Service).
              </p>
            </section>

            <section style={{
              background: 'rgba(0, 242, 254, 0.04)',
              border: '1px solid rgba(0, 242, 254, 0.15)',
              borderRadius: '12px',
              padding: '24px'
            }}>
              <h3 style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '8px' }}>
                Sovereignty Summary Checklist
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#10B981' }} /> Zero remote prompt logging
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#10B981' }} /> 100% offline-capableReAct runtime
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} style={{ color: '#10B981' }} /> Local encrypted state storage
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
