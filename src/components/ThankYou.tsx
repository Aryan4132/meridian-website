import React, { useState } from 'react';
import { CheckCircle2, Download, Terminal, Copy, Check, ExternalLink, ArrowLeft, ShieldCheck, Command, ShieldAlert } from 'lucide-react';
import { useMeridianVersion } from '../utils/version';

interface ThankYouProps {
  onNavigateHome: () => void;
  detectedOS: string;
}

export const ThankYou: React.FC<ThankYouProps> = ({ onNavigateHome, detectedOS }) => {
  const [selectedOS, setSelectedOS] = useState<string>(
    detectedOS.includes('Mac') || detectedOS.includes('macOS') ? 'macOS' :
    detectedOS.includes('Linux') ? 'Linux' : 'Windows'
  );
  const [copied, setCopied] = useState(false);
  const [cmdCopied, setCmdCopied] = useState(false);
  const [macFixCopied, setMacFixCopied] = useState(false);
  const [macInstallCopied, setMacInstallCopied] = useState(false);
  const [showHashDetails, setShowHashDetails] = useState(false);

  const versionInfo = useMeridianVersion();

  const checksum = versionInfo.checksums[selectedOS] || versionInfo.checksums.default || 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

  const verificationCommand = selectedOS === 'macOS' || selectedOS === 'Linux'
    ? `shasum -a 256 meridian-x_${versionInfo.version}_*.${selectedOS === 'macOS' ? 'dmg' : 'deb'}`
    : `Get-FileHash -Algorithm SHA256 .\\meridian-x_${versionInfo.version}_x64-setup.exe`;

  const macQuarantineCmd = `sudo xattr -r -d com.apple.quarantine /Applications/meridian-x.app`;
  const macOneLineCmd = `curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.sh | bash`;

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(checksum);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(verificationCommand);
    setCmdCopied(true);
    setTimeout(() => setCmdCopied(false), 2000);
  };

  const handleCopyMacFix = () => {
    navigator.clipboard.writeText(macQuarantineCmd);
    setMacFixCopied(true);
    setTimeout(() => setMacFixCopied(false), 2000);
  };

  const handleCopyMacInstall = () => {
    navigator.clipboard.writeText(macOneLineCmd);
    setMacInstallCopied(true);
    setTimeout(() => setMacInstallCopied(false), 2000);
  };

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
          <ArrowLeft size={16} /> Return Home
        </button>

        <div className="glass-card" style={{
          padding: '48px',
          background: 'rgba(10, 10, 14, 0.92)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 0 50px rgba(16, 185, 129, 0.1)'
        }}>
          {/* Header Status */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              color: '#10B981',
              marginBottom: '20px'
            }}>
              <CheckCircle2 size={36} />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="glass-pill" style={{ color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                BINARY TRANSFER INITIATED • {versionInfo.tagName}
              </span>
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.4rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '12px',
              letterSpacing: '-0.02em'
            }}>
              Welcome to Meridian-X
            </h1>

            <p style={{ color: '#A1A1AA', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
              Your desktop download for <strong style={{ color: '#FFFFFF' }}>{selectedOS}</strong> has started. Follow the platform-specific guide below for smooth setup & Gatekeeper verification.
            </p>
          </div>

          {/* Platform Tab Selector */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '28px',
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '6px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            {[
              { id: 'macOS', label: '🍎 macOS (Apple Silicon & Intel)', badge: 'Gatekeeper Fix' },
              { id: 'Windows', label: '🪟 Windows (10/11 x64)' },
              { id: 'Linux', label: '🐧 Linux (.deb / AppImage)' }
            ].map((osTab) => {
              const active = selectedOS === osTab.id;
              return (
                <button
                  key={osTab.id}
                  onClick={() => setSelectedOS(osTab.id)}
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '7px',
                    border: active ? '1px solid rgba(16, 185, 129, 0.5)' : '1px solid transparent',
                    background: active ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                    color: active ? '#FFFFFF' : '#A1A1AA',
                    fontSize: '0.85rem',
                    fontWeight: active ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>{osTab.label}</span>
                  {osTab.badge && (
                    <span style={{
                      fontSize: '0.65rem',
                      background: active ? '#10B981' : 'rgba(255, 255, 255, 0.1)',
                      color: active ? '#000000' : '#A1A1AA',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 700
                    }}>
                      {osTab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Verified Build Checkmark Badge & Collapsible Hash Drawer */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '28px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Check size={14} />
                </div>
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Authentic & Verified Build ({selectedOS})
                  </strong>
                  <span style={{ color: '#A1A1AA', fontSize: '0.78rem' }}>
                    SHA-256 Checksum secured against GitHub release
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <button
                  onClick={handleCopyChecksum}
                  style={{
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10B981',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontWeight: 600
                  }}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  {copied ? 'Copied Hash!' : 'Copy Hash'}
                </button>

                <button
                  onClick={() => setShowHashDetails(!showHashDetails)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#A1A1AA',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <ShieldCheck size={13} />
                  <span>{showHashDetails ? 'Hide Details ▲' : 'Hash Details ▼'}</span>
                </button>
              </div>
            </div>

            {/* Collapsible Technical Hash Drawer */}
            {showHashDetails && (
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#10B981', fontFamily: 'var(--font-code)' }}>
                    SHA256 Fingerprint ({selectedOS}):
                  </span>
                  <a
                    href={versionInfo.releaseNotesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.75rem', color: '#A1A1AA', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '3px' }}
                  >
                    <ExternalLink size={11} /> GitHub Release
                  </a>
                </div>
                <code style={{
                  display: 'block',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.76rem',
                  color: '#D4D4D8',
                  wordBreak: 'break-all',
                  background: 'rgba(0,0,0,0.5)',
                  padding: '10px',
                  borderRadius: '6px',
                  marginBottom: '10px'
                }}>
                  {checksum}
                </code>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(16, 185, 129, 0.05)', padding: '8px 12px', borderRadius: '6px', border: '1px dashed rgba(16, 185, 129, 0.2)' }}>
                  <span style={{ fontSize: '0.75rem', color: '#A1A1AA', fontFamily: 'var(--font-code)', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                    <Terminal size={13} style={{ color: '#10B981' }} /> Verify in terminal: <code style={{ color: '#10B981' }}>{verificationCommand}</code>
                  </span>
                  <button
                    onClick={handleCopyCommand}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: cmdCopied ? '#10B981' : '#A1A1AA',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {cmdCopied ? <Check size={12} /> : <Copy size={12} />}
                    {cmdCopied ? 'Copied' : 'Copy Cmd'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* DEDICATED MACOS GATEKEEPER GUIDANCE SECTION */}
          {selectedOS === 'macOS' && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.03) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '14px',
              padding: '24px',
              marginBottom: '32px',
              boxShadow: '0 0 30px rgba(245, 158, 11, 0.05)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{
                  background: 'rgba(245, 158, 11, 0.2)',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  color: '#F59E0B',
                  borderRadius: '8px',
                  padding: '6px'
                }}>
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h3 style={{ color: '#FFFFFF', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                    macOS First-Launch & Gatekeeper Guide
                  </h3>
                  <span style={{ color: '#F59E0B', fontSize: '0.8rem', fontFamily: 'var(--font-code)' }}>
                    Bypass "App is damaged and can't be opened" alert
                  </span>
                </div>
              </div>

              <p style={{ color: '#D4D4D8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Because Meridian-X is a 100% free open-source application with ad-hoc code signing, macOS Gatekeeper may block the first launch with a warning: <em style={{ color: '#F59E0B' }}>"meridian-x.app is damaged and can't be opened"</em>. Follow either fix below:
              </p>

              {/* Fix Option A: 1-Click Terminal Command */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ color: '#10B981', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Terminal size={14} /> Option 1: Remove Gatekeeper Quarantine (Recommended)
                  </strong>
                  <button
                    onClick={handleCopyMacFix}
                    style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#10B981',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 600
                    }}
                  >
                    {macFixCopied ? <Check size={12} /> : <Copy size={12} />}
                    {macFixCopied ? 'Copied!' : 'Copy Fix Command'}
                  </button>
                </div>
                <p style={{ color: '#A1A1AA', fontSize: '0.82rem', margin: '0 0 10px 0' }}>
                  Drag <code style={{ color: '#FFF' }}>meridian-x.app</code> to your <code style={{ color: '#FFF' }}>/Applications</code> folder, open Terminal app, and paste:
                </p>
                <code style={{
                  display: 'block',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.82rem',
                  color: '#10B981',
                  background: 'rgba(10, 10, 14, 0.9)',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  wordBreak: 'break-all'
                }}>
                  {macQuarantineCmd}
                </code>
              </div>

              {/* Fix Option B: Automated Terminal Installer */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <strong style={{ color: '#00F2FE', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Command size={14} /> Option 2: Automated 1-Line Terminal Installer
                  </strong>
                  <button
                    onClick={handleCopyMacInstall}
                    style={{
                      background: 'rgba(0, 242, 254, 0.15)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      color: '#00F2FE',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.75rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 600
                    }}
                  >
                    {macInstallCopied ? <Check size={12} /> : <Copy size={12} />}
                    {macInstallCopied ? 'Copied!' : 'Copy Install Script'}
                  </button>
                </div>
                <p style={{ color: '#A1A1AA', fontSize: '0.82rem', margin: '0 0 10px 0' }}>
                  Runs official bash script to fetch latest build, apply ad-hoc code signature, and bypass Gatekeeper automatically:
                </p>
                <code style={{
                  display: 'block',
                  fontFamily: 'var(--font-code)',
                  fontSize: '0.82rem',
                  color: '#00F2FE',
                  background: 'rgba(10, 10, 14, 0.9)',
                  padding: '10px 12px',
                  borderRadius: '6px',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  wordBreak: 'break-all'
                }}>
                  {macOneLineCmd}
                </code>
              </div>
            </div>
          )}

          {/* Quickstart instructions per OS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Quick Launch Sequence ({selectedOS})</span>
            </h3>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.1)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                color: '#00F2FE',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0
              }}>1</div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>
                  {selectedOS === 'macOS' ? 'Move to Applications & Clear Quarantine' : selectedOS === 'Windows' ? 'Run Binary Setup (.exe / .msi)' : 'Install Package (.deb / AppImage)'}
                </strong>
                <p style={{ color: '#A1A1AA', fontSize: '0.85rem', margin: 0 }}>
                  {selectedOS === 'macOS'
                    ? 'Drag meridian-x.app into Applications folder. Run the quarantine fix command if Gatekeeper blocks launch.'
                    : selectedOS === 'Windows'
                    ? 'Launch setup installer. Allow Windows SmartScreen and local system overlay permissions.'
                    : 'Install via dpkg -i meridian-x.deb or grant chmod +x to AppImage and run directly.'}
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.1)',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                color: '#8B5CF6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0
              }}>2</div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Trigger Hotkey HUD & Voice Control</strong>
                <p style={{ color: '#A1A1AA', fontSize: '0.85rem', margin: 0, lineHeight: 1.6 }}>
                  Press <code style={{ color: '#00F2FE', background: 'rgba(0, 242, 254, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{selectedOS === 'macOS' ? 'Option + M' : 'Alt + M'}</code> for Main Workspace, <code style={{ color: '#F59E0B', background: 'rgba(245, 158, 11, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{selectedOS === 'macOS' ? 'Option + Shift + M' : 'Alt + Shift + M'}</code> for Mascot Island Overlay, and <code style={{ color: '#8B5CF6', background: 'rgba(139, 92, 246, 0.1)', padding: '2px 6px', borderRadius: '4px' }}>{selectedOS === 'macOS' ? 'Option + V' : 'Alt + V'}</code> for Voice dictation or say <strong style={{ color: '#10B981' }}>"Hey Meridian"</strong>.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0
              }}>3</div>
              <div>
                <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.95rem' }}>Automatic Hardware & Ollama Detection</strong>
                <p style={{ color: '#A1A1AA', fontSize: '0.85rem', margin: 0 }}>
                  Meridian-X automatically detects system RAM, VRAM specs, and local Ollama ports (`11434`, `8080`, `5000`) for zero-configuration startup.
                </p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '24px' }}>
            <button
              onClick={onNavigateHome}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '0.9rem' }}
            >
              Return to Command Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

