export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, string | number | boolean>;
  timestamp?: number;
}

class SovereignAnalytics {
  private enabled: boolean = false;

  constructor() {
    this.checkConsent();
  }

  public checkConsent() {
    const consent = localStorage.getItem('meridian_cookie_consent');
    // Enable analytics strictly when user consents
    this.enabled = consent === 'accepted';
  }

  public track(eventName: string, properties?: Record<string, string | number | boolean>) {
    this.checkConsent();
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now()
    };

    if (typeof window !== 'undefined' && (window as unknown as { DEV?: boolean }).DEV) {
      console.log('[Sovereign Analytics Event]:', event);
    }

    if (!this.enabled) {
      return;
    }

    // Dispatch sovereign anonymous telemetry event
    try {
      window.dispatchEvent(new CustomEvent('meridian-analytics-event', { detail: event }));
    } catch {
      // Ignore silent failures in isolated webview environments
    }
  }
}

export const analytics = new SovereignAnalytics();
