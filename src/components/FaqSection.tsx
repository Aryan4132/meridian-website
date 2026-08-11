import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Shield, Cpu, Terminal } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'What global hotkeys are supported in Meridian-X?',
    answer: 'Meridian-X provides sub-10ms global shortcuts: `Alt + M` toggles the main desktop workspace window, `Alt + Shift + M` toggles the compact 3D mascot floating island HUD, and `Alt + V` triggers instant push-to-talk voice dictation.'
  },
  {
    question: 'What hardware is required to run Meridian-X locally?',
    answer: 'Meridian-X runs on Windows 11, macOS 12+ (Apple Silicon & Intel), and Linux. Minimum requirements are 8 GB RAM with AVX2 CPU. Recommended is 16 GB+ RAM with an NVIDIA RTX 3060 or Apple M-series chip. For CPU-only hardware, enable Low RAM Mode in Settings or add a cloud API key.'
  },
  {
    question: 'How do the 11 Selectable Design Styles work?',
    answer: 'Navigate to Settings → Mascot & Style to switch between 11 curated design themes including Classic Cyber Slate, Art Deco Luxury, Neobrutalism, Cyberpunk Neon, Retro Synthwave, Ink & Slate, Nordic Frost, Maximalism, Paper & Ink, Sakura Blossom, and Solaris Light.'
  },
  {
    question: 'How does the Focus Distraction Blocker work?',
    answer: 'The Focus Shield monitors background desktop processes and web traffic during Pomodoro focus blocks. It automatically blocks distracting domains (YouTube, Reddit, Twitter/X, Twitch) and shuts down target background apps (discord.exe, steam.exe).'
  },
  {
    question: 'How does 100% offline privacy and AES-GCM Vault work?',
    answer: 'Meridian-X embeds local Ollama runtime and Turbovec vector storage. Credentials are encrypted in local OS Keyring via AES-256-GCM with machine-bound HMAC-SHA256 passphrase derivation. Zero code, API keys, or prompt telemetry ever leave your device.'
  },
  {
    question: 'Is Meridian-X free and open source?',
    answer: 'Yes! Meridian-X is created by Aryan and released under the open-source MIT License. You can inspect the codebase, contribute on GitHub, or install 1-click MCP servers for free.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section style={{ padding: '100px 0', position: 'relative', zIndex: 1 }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 60px auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '18px' }}>
            Frequently Asked <span className="gradient-text-cyan">Questions.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Everything you need to know about setting up local inference, hardware security, and ReAct loops.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="glass-card"
                onClick={() => toggleFaq(idx)}
                style={{
                  padding: '22px 28px',
                  cursor: 'pointer',
                  borderColor: isOpen ? 'var(--border-cyan)' : 'var(--border-glass)',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: isOpen ? 'var(--cyan-primary)' : 'var(--text-main)' }}>
                    {faq.question}
                  </h3>
                  <div
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? 'var(--cyan-primary)' : 'var(--text-muted)'
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </div>

                {isOpen && (
                  <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px dashed rgba(255,255,255,0.08)', color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
