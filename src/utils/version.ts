import { useState, useEffect } from 'react';

export interface VersionInfo {
  version: string;
  tagName: string;
  downloadUrlExe: string;
  downloadUrlMsi: string;
  releaseNotesUrl: string;
  publishedAt: string;
  isLive: boolean;
  isLoading: boolean;
}

const DEFAULT_VERSION: VersionInfo = {
  version: '0.4.0',
  tagName: 'v0.4.0',
  downloadUrlExe: 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64-setup.exe',
  downloadUrlMsi: 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64_en-US.msi',
  releaseNotesUrl: 'https://github.com/Aryan4132/Meridian-X/releases/latest',
  publishedAt: new Date().toISOString(),
  isLive: false,
  isLoading: true
};

let cachedVersionInfo: VersionInfo | null = null;

export function useMeridianVersion(): VersionInfo {
  const [info, setInfo] = useState<VersionInfo>(cachedVersionInfo || DEFAULT_VERSION);

  useEffect(() => {
    if (cachedVersionInfo) {
      setInfo(cachedVersionInfo);
      return;
    }

    let isMounted = true;
    const fetchLatestVersion = async () => {
      try {
        const res = await fetch('https://api.github.com/repos/Aryan4132/Meridian-X/releases/latest', {
          headers: { Accept: 'application/vnd.github.v3+json' }
        });

        if (res.ok) {
          const data = await res.json();
          const tag = data.tag_name || 'v0.4.0';
          const cleanVersion = tag.replace(/^v/, '');

          let exeUrl = DEFAULT_VERSION.downloadUrlExe;
          let msiUrl = DEFAULT_VERSION.downloadUrlMsi;

          if (Array.isArray(data.assets)) {
            const exeAsset = data.assets.find((a: any) => a.name?.endsWith('.exe'));
            const msiAsset = data.assets.find((a: any) => a.name?.endsWith('.msi'));
            if (exeAsset?.browser_download_url) exeUrl = exeAsset.browser_download_url;
            if (msiAsset?.browser_download_url) msiUrl = msiAsset.browser_download_url;
          }

          const liveInfo: VersionInfo = {
            version: cleanVersion,
            tagName: tag,
            downloadUrlExe: exeUrl,
            downloadUrlMsi: msiUrl,
            releaseNotesUrl: data.html_url || DEFAULT_VERSION.releaseNotesUrl,
            publishedAt: data.published_at || DEFAULT_VERSION.publishedAt,
            isLive: true,
            isLoading: false
          };

          cachedVersionInfo = liveInfo;
          if (isMounted) setInfo(liveInfo);
          return;
        }
      } catch {
        // Fallback to default version tag on network error
      }

      if (isMounted) {
        setInfo({ ...DEFAULT_VERSION, isLoading: false });
      }
    };

    fetchLatestVersion();
    return () => {
      isMounted = false;
    };
  }, []);

  return info;
}
