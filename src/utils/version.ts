import { useState, useEffect } from 'react';

export interface VersionInfo {
  version: string;
  tagName: string;
  downloadUrlExe: string;
  downloadUrlMsi: string;
  downloadUrlDmg: string;
  downloadUrlDeb: string;
  downloadUrlAppImage: string;
  releaseNotesUrl: string;
  publishedAt: string;
  isLive: boolean;
  isLoading: boolean;
  checksums: Record<string, string>;
}

const DEFAULT_CHECKSUMS: Record<string, string> = {
  Windows: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  macOS: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  Linux: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
  default: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
};

const DEFAULT_VERSION: VersionInfo = {
  version: '0.4.0',
  tagName: 'v0.4.0',
  downloadUrlExe: 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64-setup.exe',
  downloadUrlMsi: 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_x64_en-US.msi',
  downloadUrlDmg: 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_aarch64.dmg',
  downloadUrlDeb: 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_amd64.deb',
  downloadUrlAppImage: 'https://github.com/Aryan4132/Meridian-X/releases/download/v0.4.0/meridian-x_0.4.0_amd64.AppImage',
  releaseNotesUrl: 'https://github.com/Aryan4132/Meridian-X/releases/latest',
  publishedAt: new Date().toISOString(),
  isLive: false,
  isLoading: true,
  checksums: DEFAULT_CHECKSUMS
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
          let dmgUrl = DEFAULT_VERSION.downloadUrlDmg;
          let debUrl = DEFAULT_VERSION.downloadUrlDeb;
          let appImageUrl = DEFAULT_VERSION.downloadUrlAppImage;
          const fetchedChecksums: Record<string, string> = { ...DEFAULT_CHECKSUMS };

          if (Array.isArray(data.assets)) {
            const exeAsset = data.assets.find((a: any) => a.name?.endsWith('.exe'));
            const msiAsset = data.assets.find((a: any) => a.name?.endsWith('.msi'));
            const dmgAsset = data.assets.find((a: any) => a.name?.endsWith('.dmg'));
            const debAsset = data.assets.find((a: any) => a.name?.endsWith('.deb'));
            const appImageAsset = data.assets.find((a: any) => a.name?.endsWith('.AppImage'));

            if (exeAsset?.browser_download_url) exeUrl = exeAsset.browser_download_url;
            if (msiAsset?.browser_download_url) msiUrl = msiAsset.browser_download_url;
            if (dmgAsset?.browser_download_url) dmgUrl = dmgAsset.browser_download_url;
            if (debAsset?.browser_download_url) debUrl = debAsset.browser_download_url;
            if (appImageAsset?.browser_download_url) appImageUrl = appImageAsset.browser_download_url;
          }

          // Parse release body for SHA256 hashes if listed
          if (typeof data.body === 'string') {
            const lines = data.body.split('\n');
            lines.forEach((line: string) => {
              const hashMatch = line.match(/([a-fA-F0-9]{64})/);
              if (hashMatch) {
                const hash = hashMatch[1].toLowerCase();
                if (line.toLowerCase().includes('.exe') || line.toLowerCase().includes('windows')) {
                  fetchedChecksums['Windows'] = hash;
                } else if (line.toLowerCase().includes('.dmg') || line.toLowerCase().includes('mac')) {
                  fetchedChecksums['macOS'] = hash;
                } else if (line.toLowerCase().includes('.deb') || line.toLowerCase().includes('linux')) {
                  fetchedChecksums['Linux'] = hash;
                } else {
                  fetchedChecksums['default'] = hash;
                }
              }
            });
          }

          const liveInfo: VersionInfo = {
            version: cleanVersion,
            tagName: tag,
            downloadUrlExe: exeUrl,
            downloadUrlMsi: msiUrl,
            downloadUrlDmg: dmgUrl,
            downloadUrlDeb: debUrl,
            downloadUrlAppImage: appImageUrl,
            releaseNotesUrl: data.html_url || DEFAULT_VERSION.releaseNotesUrl,
            publishedAt: data.published_at || DEFAULT_VERSION.publishedAt,
            isLive: true,
            isLoading: false,
            checksums: fetchedChecksums
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
