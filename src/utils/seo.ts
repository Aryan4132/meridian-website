export interface PageSeoConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
}

const SEO_MAP: Record<string, PageSeoConfig> = {
  '/': {
    title: 'Meridian-X — Sovereign Desktop AI Workspace',
    description: 'Local execution. Total privacy. Absolute autonomy. Run autonomous agentic ReAct loops locally on Windows, macOS, and Linux with sub-10ms overlay.',
    canonicalUrl: 'https://meridian-x.ai/',
    ogType: 'website'
  },
  '/privacy': {
    title: 'Privacy Policy — Meridian-X Sovereign Local AI',
    description: '100% local compute. Zero telemetry tracking. Local AES key vault security model and zero cloud leakage guarantee.',
    canonicalUrl: 'https://meridian-x.ai/privacy',
    ogType: 'article'
  },
  '/terms': {
    title: 'Terms of Service — Meridian-X Open-Source Sovereign AI',
    description: 'Terms of Service and End-User License Agreement for Meridian-X sovereign desktop application and local tool execution framework.',
    canonicalUrl: 'https://meridian-x.ai/terms',
    ogType: 'article'
  },
  '/thank-you': {
    title: 'Thank You for Downloading — Meridian-X Sovereign AI',
    description: 'Installation instructions, SHA256 checksum verification, and initial desktop onboarding guide for Meridian-X.',
    canonicalUrl: 'https://meridian-x.ai/thank-you',
    ogType: 'website'
  },
  '/404': {
    title: '404 — Signal Disrupted | Meridian-X Sovereign AI',
    description: 'The requested quantum coordinate or local endpoint was not found on this node.',
    canonicalUrl: 'https://meridian-x.ai/404',
    ogType: 'website'
  }
};

export const updatePageSeo = (pathname: string) => {
  const config = SEO_MAP[pathname] || SEO_MAP['/404'];

  // Update Title
  document.title = config.title;

  // Update Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', config.description);

  // Update Open Graph Tags
  const setOgTag = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setOgTag('og:title', config.title);
  setOgTag('og:description', config.description);
  setOgTag('og:url', config.canonicalUrl || 'https://meridian-x.ai' + pathname);
  setOgTag('og:type', config.ogType || 'website');
  setOgTag('og:image', 'https://meridian-x.ai/og-image.png');

  // Twitter Cards
  const setTwitterTag = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', name);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setTwitterTag('twitter:card', 'summary_large_image');
  setTwitterTag('twitter:title', config.title);
  setTwitterTag('twitter:description', config.description);
  setTwitterTag('twitter:image', 'https://meridian-x.ai/og-image.png');
};
