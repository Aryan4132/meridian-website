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
import { NotFound } from './components/NotFound';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { ThankYou } from './components/ThankYou';
import { CookieBanner } from './components/CookieBanner';
import { StickyMobileCTA } from './components/StickyMobileCTA';
import { updatePageSeo } from './utils/seo';
import { analytics } from './utils/analytics';

export const App: React.FC = () => {
  const [detectedOS, setDetectedOS] = useState<string>('Windows');
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      updatePageSeo(path);
    };

    window.addEventListener('popstate', handlePopState);
    updatePageSeo(window.location.pathname);

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

    analytics.track('page_view', { path: window.location.pathname });

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    updatePageSeo(path);
    analytics.track('navigation', { path });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDirectDownload = () => {
    analytics.track('download_modal_opened', { os: detectedOS });
    setDownloadModalOpen(true);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return (
          <>
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
          </>
        );

      case '/privacy':
        return <PrivacyPolicy onNavigateHome={() => navigateTo('/')} />;

      case '/terms':
        return <TermsOfService onNavigateHome={() => navigateTo('/')} />;

      case '/thank-you':
        return <ThankYou onNavigateHome={() => navigateTo('/')} detectedOS={detectedOS} />;

      default:
        return <NotFound onNavigateHome={() => navigateTo('/')} />;
    }
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

      {/* Main Page Routing */}
      {renderContent()}

      {/* Footer & OS Download Modal */}
      <Footer
        onDownloadClick={handleDirectDownload}
        detectedOS={detectedOS}
      />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
        detectedOS={detectedOS}
      />

      {/* Cookie Consent Banner */}
      <CookieBanner />

      {/* Mobile Sticky CTA Bar */}
      <StickyMobileCTA
        onDownloadClick={handleDirectDownload}
        detectedOS={detectedOS}
      />
    </div>
  );
};

export default App;
