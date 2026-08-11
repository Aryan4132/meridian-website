import React, { useState, useEffect } from 'react';
import { Cpu, CheckCircle2, AlertCircle } from 'lucide-react';

export interface OllamaTelemetryProps {
  onStatusChange?: (isLive: boolean, modelCount: number) => void;
}

export const OllamaTelemetry: React.FC<OllamaTelemetryProps> = ({ onStatusChange }) => {
  const [status, setStatus] = useState<'checking' | 'live' | 'simulated'>('checking');
  const [modelCount, setModelCount] = useState<number>(0);

  useEffect(() => {
    let isMounted = true;
    const checkDaemon = async () => {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const res = await fetch('http://localhost:11434/api/tags', { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const count = Array.isArray(data?.models) ? data.models.length : 0;
          if (isMounted) {
            setStatus('live');
            setModelCount(count);
            if (onStatusChange) onStatusChange(true, count);
          }
          return;
        }
      } catch {
        // Fallback to high-fidelity sovereign simulator
      }

      if (isMounted) {
        setStatus('simulated');
        setModelCount(5);
        if (onStatusChange) onStatusChange(false, 5);
      }
    };

    checkDaemon();
    return () => {
      isMounted = false;
    };
  }, [onStatusChange]);

  return (
    <div
      className="glass-pill"
      style={{
        fontSize: '0.72rem',
        color: status === 'live' ? '#10B981' : '#FAFAFA',
        borderColor: status === 'live' ? 'rgba(16, 185, 129, 0.4)' : 'rgba(255, 255, 255, 0.2)',
        padding: '4px 10px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-code)'
      }}
    >
      {status === 'checking' && (
        <>
          <Cpu size={13} className="animate-spin" color="#FAFAFA" />
          <span>Probing Ollama Local Hardware...</span>
        </>
      )}
      {status === 'live' && (
        <>
          <CheckCircle2 size={13} color="#10B981" />
          <span>● Connected to Local Ollama Daemon ({modelCount} Models Detected)</span>
        </>
      )}
      {status === 'simulated' && (
        <>
          <AlertCircle size={13} color="#FAFAFA" />
          <span>● Sovereign Sandbox Engine (Simulated GPU Telemetry)</span>
        </>
      )}
    </div>
  );
};
