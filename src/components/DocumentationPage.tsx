import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Zap,
  Server,
  Shield,
  Terminal,
  Cpu,
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  HelpCircle,
  ExternalLink,
  Code2,
  Menu,
  X
} from 'lucide-react';
import { DOCS_DATA, DocCategory, DocSubSection } from '../data/docsData';

interface DocumentationPageProps {
  onNavigateHome: () => void;
}

export const DocumentationPage: React.FC<DocumentationPageProps> = ({ onNavigateHome }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('quickstart');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // Handle URL hash on mount & hash change (e.g. #host-on-server)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const foundCategory = DOCS_DATA.find(
          cat => cat.id === hash || cat.sections.some(sec => sec.id === hash)
        );
        if (foundCategory) {
          setActiveCategoryId(foundCategory.id);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const selectCategory = (id: string) => {
    setActiveCategoryId(id);
    window.history.pushState(null, '', `/docs#${id}`);
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetId(id);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  const activeCategory = useMemo(() => {
    return DOCS_DATA.find(c => c.id === activeCategoryId) || DOCS_DATA[0];
  }, [activeCategoryId]);

  // Filtered sections when searching
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const query = searchQuery.toLowerCase();
    const results: { category: DocCategory; section: DocSubSection }[] = [];

    DOCS_DATA.forEach(cat => {
      cat.sections.forEach(sec => {
        const matchTitle = sec.title.toLowerCase().includes(query);
        const matchDesc = sec.description?.toLowerCase().includes(query);
        const matchCode = sec.codeSnippet?.code.toLowerCase().includes(query);
        const matchNotes = sec.notes?.some(n => n.toLowerCase().includes(query));
        const matchSteps = sec.steps?.some(
          s => s.title.toLowerCase().includes(query) || s.content.toLowerCase().includes(query)
        );

        if (matchTitle || matchDesc || matchCode || matchNotes || matchSteps) {
          results.push({ category: cat, section: sec });
        }
      });
    });

    return results;
  }, [searchQuery]);

  const getIcon = (iconName: string, size = 18) => {
    switch (iconName) {
      case 'Zap':
        return <Zap size={size} />;
      case 'Server':
        return <Server size={size} />;
      case 'Shield':
        return <Shield size={size} />;
      case 'Terminal':
        return <Terminal size={size} />;
      case 'Cpu':
        return <Cpu size={size} />;
      case 'Sparkles':
        return <Sparkles size={size} />;
      default:
        return <BookOpen size={size} />;
    }
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh', color: '#FAFAFA' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Top Header / Breadcrumb Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={onNavigateHome}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#A1A1AA',
                padding: '8px 16px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.85rem',
                fontWeight: 500,
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#A1A1AA';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>
            <span style={{ color: '#52525B' }}>/</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: '#FAFAFA' }}>
              Documentation
            </span>
          </div>

          {/* Search Input Bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#A1A1AA'
              }}
            />
            <input
              type="text"
              placeholder="Search docs (e.g. Host on Server, Caddy, Hotkeys)..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(18, 18, 22, 0.9)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                padding: '10px 16px 10px 42px',
                color: '#FFFFFF',
                fontSize: '0.88rem',
                outline: 'none',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                transition: 'all 0.2s ease'
              }}
              onFocus={e => (e.target.style.borderColor = '#6366F1')}
              onBlur={e => (e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)')}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#A1A1AA',
                  cursor: 'pointer'
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div style={{ display: 'none', marginBottom: '20px' }} className="mobile-sidebar-toggle-row">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(24, 24, 28, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              padding: '12px 18px',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '0.95rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {getIcon(activeCategory.iconName, 18)}
              <span>{activeCategory.title}</span>
            </div>
            {mobileSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Main Grid: Sidebar + Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px', alignItems: 'start' }} className="docs-layout-grid">
          
          {/* Left Navigation Sidebar */}
          <aside
            style={{
              background: 'rgba(12, 12, 16, 0.75)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '16px',
              position: 'sticky',
              top: '100px',
              display: mobileSidebarOpen ? 'block' : undefined
            }}
            className={mobileSidebarOpen ? 'mobile-sidebar-open' : 'desktop-sidebar'}
          >
            <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#71717A', padding: '8px 12px 12px 12px' }}>
              Documentation Topics
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {DOCS_DATA.map(cat => {
                const isActive = cat.id === activeCategoryId && !searchQuery;
                return (
                  <button
                    key={cat.id}
                    onClick={() => selectCategory(cat.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(168, 85, 247, 0.15) 100%)'
                        : 'transparent',
                      border: isActive
                        ? '1px solid rgba(129, 140, 248, 0.4)'
                        : '1px solid transparent',
                      color: isActive ? '#FFFFFF' : '#A1A1AA',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 600 : 500,
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                        e.currentTarget.style.color = '#F4F4F5';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isActive) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#A1A1AA';
                      }
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: isActive ? '#818CF8' : '#71717A' }}>
                        {getIcon(cat.iconName, 17)}
                      </span>
                      <span>{cat.title}</span>
                    </div>

                    {cat.badge && (
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          padding: '2px 7px',
                          borderRadius: '9999px',
                          background: cat.badge === 'VPS / Cloud' ? 'rgba(59, 130, 246, 0.2)' : 'rgba(168, 85, 247, 0.2)',
                          color: cat.badge === 'VPS / Cloud' ? '#60A5FA' : '#C084FC',
                          border: cat.badge === 'VPS / Cloud' ? '1px solid rgba(96, 165, 250, 0.3)' : '1px solid rgba(192, 132, 252, 0.3)'
                        }}
                      >
                        {cat.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Quick Links Card */}
            <div
              style={{
                marginTop: '24px',
                padding: '16px',
                background: 'rgba(18, 18, 24, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px'
              }}
            >
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E4E4E7', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <HelpCircle size={14} style={{ color: '#818CF8' }} />
                <span>Need Support?</span>
              </div>
              <p style={{ fontSize: '0.78rem', color: '#9CA3AF', lineHeight: '1.4', marginBottom: '12px' }}>
                Join our GitHub community or inspect server deployment issue logs.
              </p>
              <a
                href="https://github.com/Aryan4132/Meridian-X"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  color: '#818CF8',
                  textDecoration: 'none',
                  fontWeight: 600
                }}
              >
                <span>GitHub Repository</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </aside>

          {/* Right Main Article / Search Results Area */}
          <main style={{ minWidth: 0 }}>
            {searchResults ? (
              /* Search Mode */
              <div>
                <div style={{ marginBottom: '24px' }}>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}>
                    Search Results
                  </h2>
                  <p style={{ color: '#A1A1AA', fontSize: '0.9rem', marginTop: '4px' }}>
                    Found {searchResults.length} matching section{searchResults.length === 1 ? '' : 's'} for "{searchQuery}"
                  </p>
                </div>

                {searchResults.length === 0 ? (
                  <div
                    style={{
                      padding: '48px 24px',
                      textAlign: 'center',
                      background: 'rgba(18, 18, 22, 0.6)',
                      border: '1px dashed rgba(255, 255, 255, 0.12)',
                      borderRadius: '16px'
                    }}
                  >
                    <Search size={36} style={{ color: '#52525B', marginBottom: '12px' }} />
                    <h3 style={{ fontSize: '1.1rem', color: '#E4E4E7', fontWeight: 600 }}>No documentation matches found</h3>
                    <p style={{ color: '#A1A1AA', fontSize: '0.85rem', marginTop: '6px' }}>
                      Try searching for "docker", "caddy", "ssl", "hotkeys", or "ollama".
                    </p>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {searchResults.map(({ category, section }) => (
                      <RenderSectionCard
                        key={section.id}
                        categoryTitle={category.title}
                        section={section}
                        copiedSnippetId={copiedSnippetId}
                        onCopyCode={handleCopyCode}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Category Overview & Full Content */
              <div>
                {/* Category Banner */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, rgba(24, 24, 32, 0.8) 0%, rgba(18, 18, 24, 0.6) 100%)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '32px',
                    marginBottom: '36px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-40px',
                      right: '-40px',
                      width: '200px',
                      height: '200px',
                      background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                      pointerEvents: 'none'
                    }}
                  />

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)',
                        border: '1px solid rgba(129, 140, 248, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#A5B4FC'
                      }}
                    >
                      {getIcon(activeCategory.iconName, 22)}
                    </div>
                    <div>
                      <h1
                        style={{
                          fontSize: '1.85rem',
                          fontWeight: 800,
                          fontFamily: 'var(--font-heading)',
                          color: '#FFFFFF',
                          letterSpacing: '-0.02em',
                          margin: 0
                        }}
                      >
                        {activeCategory.title}
                      </h1>
                    </div>
                  </div>

                  <p style={{ color: '#D4D4D8', fontSize: '0.98rem', lineHeight: '1.6', margin: 0, maxWidth: '800px' }}>
                    {activeCategory.description}
                  </p>
                </div>

                {/* Subsections */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {activeCategory.sections.map(section => (
                    <RenderSectionCard
                      key={section.id}
                      categoryTitle={activeCategory.title}
                      section={section}
                      copiedSnippetId={copiedSnippetId}
                      onCopyCode={handleCopyCode}
                    />
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .docs-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .desktop-sidebar {
            display: none !important;
          }
          .mobile-sidebar-toggle-row {
            display: block !important;
          }
          .mobile-sidebar-open {
            position: relative !important;
            top: 0 !important;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
};

interface RenderSectionCardProps {
  categoryTitle: string;
  section: DocSubSection;
  copiedSnippetId: string | null;
  onCopyCode: (code: string, id: string) => void;
}

const RenderSectionCard: React.FC<RenderSectionCardProps> = ({
  categoryTitle,
  section,
  copiedSnippetId,
  onCopyCode
}) => {
  return (
    <div
      id={section.id}
      style={{
        background: 'rgba(15, 15, 20, 0.7)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '28px',
        transition: 'all 0.25s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#818CF8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          {categoryTitle}
        </span>
        <ChevronRight size={12} style={{ color: '#52525B' }} />
        <span style={{ fontSize: '0.72rem', color: '#A1A1AA', fontFamily: 'var(--font-code)' }}>
          #{section.id}
        </span>
      </div>

      <h3
        style={{
          fontSize: '1.35rem',
          fontWeight: 700,
          fontFamily: 'var(--font-heading)',
          color: '#FFFFFF',
          margin: '0 0 10px 0'
        }}
      >
        {section.title}
      </h3>

      {section.description && (
        <p style={{ color: '#A1A1AA', fontSize: '0.92rem', lineHeight: '1.6', margin: '0 0 18px 0' }}>
          {section.description}
        </p>
      )}

      {/* Code Snippet Block */}
      {section.codeSnippet && (
        <div style={{ marginBottom: '20px' }}>
          <CodeBlock
            snippet={section.codeSnippet}
            snippetId={section.id}
            copiedId={copiedSnippetId}
            onCopy={onCopyCode}
          />
        </div>
      )}

      {/* Step by Step list if applicable */}
      {section.steps && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0' }}>
          {section.steps.map(step => (
            <div
              key={step.stepNumber}
              style={{
                background: 'rgba(22, 22, 28, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '18px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(99, 102, 241, 0.2)',
                    color: '#818CF8',
                    border: '1px solid rgba(129, 140, 248, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}
                >
                  {step.stepNumber}
                </span>
                <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#F4F4F5' }}>
                  {step.title}
                </span>
              </div>
              <p style={{ color: '#A1A1AA', fontSize: '0.88rem', lineHeight: '1.5', margin: '0 0 12px 0', paddingLeft: '34px' }}>
                {step.content}
              </p>
              {step.codeSnippet && (
                <div style={{ paddingLeft: '34px' }}>
                  <CodeBlock
                    snippet={step.codeSnippet}
                    snippetId={`${section.id}-step-${step.stepNumber}`}
                    copiedId={copiedSnippetId}
                    onCopy={onCopyCode}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Bullet Notes / Alerts */}
      {section.notes && section.notes.length > 0 && (
        <div
          style={{
            background: 'rgba(99, 102, 241, 0.06)',
            borderLeft: '3px solid #6366F1',
            borderRadius: '0 10px 10px 0',
            padding: '14px 18px',
            marginTop: '16px'
          }}
        >
          <ul style={{ margin: 0, paddingLeft: '18px', color: '#D4D4D8', fontSize: '0.86rem', lineHeight: '1.6' }}>
            {section.notes.map((note, idx) => (
              <li key={idx} style={{ marginBottom: idx === section.notes!.length - 1 ? 0 : '6px' }}>
                {note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

interface CodeBlockProps {
  snippet: {
    language: string;
    code: string;
    filename?: string;
  };
  snippetId: string;
  copiedId: string | null;
  onCopy: (code: string, id: string) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ snippet, snippetId, copiedId, onCopy }) => {
  const isCopied = copiedId === snippetId;

  return (
    <div
      style={{
        background: '#0B0B0E',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
      }}
    >
      {/* Code Header Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 16px',
          background: 'rgba(255, 255, 255, 0.03)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Code2 size={14} style={{ color: '#818CF8' }} />
          <span style={{ fontSize: '0.78rem', color: '#A1A1AA', fontFamily: 'var(--font-code)', fontWeight: 500 }}>
            {snippet.filename || snippet.language}
          </span>
        </div>

        <button
          onClick={() => onCopy(snippet.code, snippetId)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: isCopied ? 'rgba(34, 197, 94, 0.2)' : 'rgba(255, 255, 255, 0.06)',
            border: isCopied ? '1px solid rgba(34, 197, 94, 0.4)' : '1px solid rgba(255, 255, 255, 0.1)',
            color: isCopied ? '#4ADE80' : '#A1A1AA',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
        >
          {isCopied ? <Check size={13} /> : <Copy size={13} />}
          <span>{isCopied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Area */}
      <pre
        style={{
          margin: 0,
          padding: '16px',
          overflowX: 'auto',
          fontFamily: 'var(--font-code)',
          fontSize: '0.84rem',
          lineHeight: '1.6',
          color: '#E4E4E7',
          background: 'transparent'
        }}
      >
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};
