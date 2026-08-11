import React, { useState, useEffect } from 'react';
import { Starfield } from './components/Starfield';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ReactSimulator } from './components/ReactSimulator';
import { FeaturePillars } from './components/FeaturePillars';
import { Architecture } from './components/Architecture';
import { McpMarketplace } from './components/McpMarketplace';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { FaqSection } from './components/FaqSection';
import { Footer, DownloadModal } from './components/Footer';

export const App: React.FC = () => {
  const [detectedOS, setDetectedOS] = useState<string>('Windows');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const ua = navigator.userAgent;
    let os = 'Windows';
    if (ua.includes('Macintosh') || ua.includes('Mac OS X')) {
      os = 'macOS';
    } else if (ua.includes('Linux')) {
      os = 'Linux';
    } else if (ua.includes('Android') || ua.includes('iPhone') || ua.includes('iPad')) {
      os = 'Desktop Required';
    }
    setDetectedOS(os);

    const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua) || window.innerWidth < 768;
    setIsMobile(mobileCheck);
  }, []);

  const handleDirectDownload = () => {
    let downloadUrl = 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64-setup.exe';

    if (detectedOS === 'macOS') {
      downloadUrl = 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_aarch64.dmg';
    } else if (detectedOS === 'Linux') {
      downloadUrl = 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_amd64.deb';
    }

    // Trigger direct file download for detected OS
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Open modal to let user choose alternative format (.msi, .AppImage, .dmg)
    setDownloadModalOpen(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-obsidian)' }}>
      {/* Background Starfield */}
      <Starfield />

      {/* Header Bar */}
      <Header
        onDownloadClick={handleDirectDownload}
        detectedOS={detectedOS}
      />

      {/* Hero Section */}
      <Hero
        detectedOS={detectedOS}
        isMobile={isMobile}
        onDownloadClick={handleDirectDownload}
      />

      {/* Interactive ReAct Terminal Simulator */}
      <ReactSimulator />

      {/* 6 Core Feature Pillars */}
      <FeaturePillars />

      {/* Architecture & Tech Stack */}
      <Architecture />

      {/* MCP Marketplace & Local AES Key Vault */}
      <McpMarketplace />

      {/* Sovereign vs Cloud Comparison Matrix */}
      <ComparisonMatrix />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Footer & OS Download Modal */}
      <Footer
        onDownloadClick={() => setDownloadModalOpen(true)}
        detectedOS={detectedOS}
      />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        detectedOS={detectedOS}
      />
    </div>
  );
};

export default App;
