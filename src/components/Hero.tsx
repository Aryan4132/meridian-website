import React, { useState, useEffect } from 'react';
import { animate, stagger } from 'animejs';
import { Download, Github, Shield, Sparkles, Terminal, Cpu, Play, CheckCircle2, Copy, Check, Lock, Zap, ArrowUpRight, Activity } from 'lucide-react';
import { OllamaTelemetry } from './OllamaTelemetry';
import { CyberCore3D } from './CyberCore3D';

interface HeroProps {
  detectedOS: string;
  isMobile: boolean;
  onDownloadClick: () => void;
}

export interface ModelPreset {
  id: string;
  name: string;
  tag: string;
  vram: string;
  vramPct: number;
  speed: string;
  latency: string;
  purpose: string;
  accent: string;
}

export const MODEL_PRESETS: ModelPreset[] = [
  { id: 'custom-ollama', name: 'Any Local Agent (Your Choice via Ollama)', tag: 'ollama pull <any-model>', vram: 'Configurable', vramPct: 35, speed: '120 tok/s', latency: '2.8 ms', purpose: 'Choose Any Agent Model (DeepSeek, Llama 3, Qwen, Mistral, Gemma, Phi)', accent: '#3B82F6' },
  { id: 'code-agent', name: 'Code Synthesis Agent', tag: 'qwen2.5-coder / deepseek-coder', vram: '4.7 GB', vramPct: 39, speed: '118 tok/s', latency: '3.2 ms', purpose: 'Full-Stack Code Synthesis & AST Verification', accent: '#10B981' },
  { id: 'vision-agent', name: 'GUI Perception Agent', tag: 'llama3.2-vision / moondream', vram: '7.8 GB', vramPct: 65, speed: '64 tok/s', latency: '6.1 ms', purpose: 'Screen Bounding Box Detection & GUI Automation', accent: '#8B5CF6' },
  { id: 'fast-auditor', name: 'Fast Auditor Micro Agent', tag: '1.5B - 3B Lightweight Models', vram: '1.2 GB', vramPct: 10, speed: '185 tok/s', latency: '1.5 ms', purpose: 'Sub-second Syntax & Logic Self-Healer', accent: '#F59E0B' },
  { id: 'cloud-vault', name: 'Cloud Provider Vault (Optional)', tag: 'OpenAI / Gemini / Groq / Anthropic', vram: '0 GB Local', vramPct: 0, speed: '200 tok/s', latency: '1.2 ms', purpose: 'Offload Inference to Cloud API Keys in Encrypted Vault', accent: '#EC4899' }
];

export const Hero: React.FC<HeroProps> = ({ detectedOS, isMobile, onDownloadClick }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'powershell' | 'ollama' | 'batch' | 'winget'>('powershell');
  const [selectedModel, setSelectedModel] = useState<ModelPreset>(MODEL_PRESETS[0]);

  const installCmds: Record<string, string> = {
    powershell: 'powershell -ExecutionPolicy Bypass -Command "irm https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.ps1 | iex"',
    ollama: 'ollama pull <any-agent-model-of-your-choice>',
    batch: 'start_meridian.bat',
    winget: 'winget install Aryan.MeridianX'
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const logoEl = document.querySelector('.hero-anim-logo');
      const items = document.querySelectorAll('.hero-anim-item');
      if (logoEl) {
        animate(logoEl, {
          scale: [0.4, 1],
          opacity: [0, 1],
          duration: 900,
          ease: 'outExpo'
        });
      }
      if (items.length > 0) {
        animate(items, {
          translateY: [24, 0],
          opacity: [0, 1],
          delay: stagger(110),
          duration: 800,
          ease: 'outExpo'
        });
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmds[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPress = () => {
    setIsDownloading(true);
    onDownloadClick();
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <section
      style={{
        paddingTop: '130px',
        paddingBottom: '70px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden'
      }}
    >
      <div className="container">

        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          {/* 3D Holographic AI Core & Emblem Logo */}
          <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <CyberCore3D
              height={260}
              accentColor={selectedModel.accent}
              modelId={selectedModel.id}
              vramText={selectedModel.vram}
              speedText={selectedModel.speed}
            />
          </div>

          {/* Author Byline */}
          <div
            className="hero-anim-item"
            style={{
              marginBottom: '16px',
              color: 'var(--text-muted)',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.04em'
            }}
          >
            Sovereign Offline AI Agent created by <strong style={{ color: '#FFF' }}>Aryan</strong>
          </div>

          {/* Headline */}
          <h1
            className="hero-anim-item"
            style={{
              fontSize: 'clamp(2.3rem, 5vw, 4rem)',
              lineHeight: 1.1,
              marginBottom: '18px',
              fontWeight: 800
            }}
          >
            A Cognitive Layer for <br />
            <span className="gradient-text-cyan">Your Desktop OS.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-anim-item"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-muted)',
              marginBottom: '28px',
              maxWidth: '740px',
              margin: '0 auto 32px auto',
              lineHeight: 1.6
            }}
          >
            <strong style={{ color: '#FFF' }}>Local execution. Total privacy. Absolute autonomy.</strong><br />
            Run continuous ReAct agentic loops locally with 100% data privacy. Powered by local LLMs via Ollama, vector RAG memory, and sub-10ms system overlay.
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-anim-item"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '28px'
            }}
          >
            <button
              onClick={handleDownloadPress}
              className="btn-primary"
              disabled={isDownloading}
              style={{ padding: '16px 32px', fontSize: '1.05rem', opacity: isDownloading ? 0.8 : 1 }}
            >
              {isDownloading ? (
                <div className="spinner" style={{ width: 20, height: 20, border: '2px solid rgba(0,0,0,0.2)', borderTopColor: '#000', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
              ) : (
                <Download size={20} />
              )}
              <span>{isDownloading ? 'Preparing Build...' : 'Download Desktop App'}</span>
            </button>

            <a
              href="https://github.com/Aryan4132/Meridian-X"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ padding: '16px 28px', fontSize: '1.05rem' }}
            >
              <Github size={20} />
              <span>Star on GitHub</span>
            </a>
          </div>

          {/* Mobile visitors banner note */}
          {isMobile && (
            <div
              style={{
                background: 'rgba(245, 158, 11, 0.1)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '12px',
                padding: '12px 20px',
                marginBottom: '28px',
                fontSize: '0.9rem',
                color: 'var(--amber-accent)',
                display: 'inline-block'
              }}
            >
              💻 <strong>Desktop OS Required:</strong> Meridian-X runs exclusively on Windows, macOS, and Linux. Star on GitHub to setup on your computer!
            </div>
          )}

          {/* Quick Benchmark Highlights Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              marginTop: '36px',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-code)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span>0 KB Cloud Egress</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FAFAFA' }}></span>
              <span>&lt; 6.8ms HUD Latency</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FAFAFA' }}></span>
              <span>84 tok/sec GPU Inference</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }}></span>
              <span>AES-256 Keychain Vault</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
