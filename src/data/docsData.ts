export interface DocSubSection {
  id: string;
  title: string;
  description?: string;
  codeSnippet?: {
    language: string;
    code: string;
    filename?: string;
  };
  steps?: {
    stepNumber: number;
    title: string;
    content: string;
    codeSnippet?: {
      language: string;
      code: string;
      filename?: string;
    };
  }[];
  notes?: string[];
}

export interface DocCategory {
  id: string;
  title: string;
  iconName: string;
  badge?: string;
  description: string;
  sections: DocSubSection[];
}

export const DOCS_DATA: DocCategory[] = [
  {
    id: 'quickstart',
    title: 'Quickstart & Installation',
    iconName: 'Zap',
    badge: 'Popular',
    description: 'Get Meridian-X running on Windows, macOS, or Linux in under 60 seconds with offline-first LLM support.',
    sections: [
      {
        id: 'one-line-install',
        title: '1-Command Desktop Installer',
        description: 'Run the sovereign installer directly from PowerShell (Windows) or Terminal (macOS/Linux). No admin privileges required for standard user installations.',
        codeSnippet: {
          language: 'powershell',
          filename: 'Windows PowerShell',
          code: 'irm https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.ps1 | iex'
        },
        notes: [
          'Automatically verifies CPU AVX2 instructions and local GPU VRAM available.',
          'Installs Meridian-X local daemon, desktop tray overlay, and default lightweight Ollama model tags.'
        ]
      },
      {
        id: 'macos-linux-install',
        title: 'macOS & Linux Setup',
        description: 'For Apple Silicon (M1/M2/M3/M4) or Linux x86_64 distributions, use the unified bash script:',
        codeSnippet: {
          language: 'bash',
          filename: 'Terminal (Bash / Zsh)',
          code: 'curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/install.sh | bash'
        }
      },
      {
        id: 'system-requirements',
        title: 'System Requirements',
        description: 'Meridian-X optimizes VRAM allocation based on detected system hardware specs:',
        steps: [
          {
            stepNumber: 1,
            title: 'Minimum Requirements',
            content: '2 CPU cores, 4 GB System RAM, 5 GB Storage space. Operates in low-memory Tier 0 CPU mode with 1.5B parameters.'
          },
          {
            stepNumber: 2,
            title: 'Recommended Specs',
            content: '8 CPU cores, 16+ GB RAM, NVIDIA RTX 3060+ or Apple Silicon M-Series. Enables instant sub-10ms overlay response and 7B/11B model acceleration.'
          }
        ]
      }
    ]
  },
  {
    id: 'host-on-server',
    title: 'Host on Server',
    iconName: 'Server',
    badge: 'VPS / Cloud',
    description: 'Host the Meridian-X backend daemon on a remote VPS, home server, or cloud instance (Ubuntu, Debian, macOS, or Windows Server) and connect desktop or web clients securely over HTTPS.',
    sections: [
      {
        id: 'server-prerequisites',
        title: 'Prerequisites',
        description: 'Before beginning server setup, ensure your remote machine satisfies:',
        notes: [
          'Machine: VPS or Cloud Instance (2+ CPU Cores, 4+ GB RAM, Docker installed)',
          'Software: Docker & Docker Compose plugin',
          'Optional: Custom domain name pointing to your server IP for HTTPS SSL certificates'
        ]
      },
      {
        id: 'server-step1-deployment',
        title: 'Step 1: Download Deployment Files',
        description: 'Clone the repository or download docker-compose.yml directly onto your remote server node:',
        codeSnippet: {
          language: 'bash',
          filename: 'Server Shell',
          code: `mkdir meridian-server && cd meridian-server
curl -fsSL https://raw.githubusercontent.com/Aryan4132/Meridian-X/main/docker-compose.yml -o docker-compose.yml`
        }
      },
      {
        id: 'server-step2-env-config',
        title: 'Step 2: Configure Environment Variables',
        description: 'Create a .env configuration file in the deployment directory to define host binding, port, and security token:',
        codeSnippet: {
          language: 'ini',
          filename: '.env',
          code: `# Server Configuration
HOST=0.0.0.0
PORT=4132

# Security & API Key
AUTH_ENABLED=true
MERIDIAN_API_KEY=my_super_secret_secure_key_12345

# Ollama Engine Connection
OLLAMA_HOST=http://ollama:11434
MERIDIAN_MODEL=llama3.2:3b
DOMAIN=api.your-domain.com`
        }
      },
      {
        id: 'server-step3-launch-stack',
        title: 'Step 3: Launch Docker Stack',
        description: 'Spin up backend daemon and local Ollama containers in detached background mode:',
        codeSnippet: {
          language: 'bash',
          filename: 'Server Shell',
          code: `docker compose up -d
docker compose ps`
        },
        notes: [
          'meridian-backend listening on port 4132',
          'meridian-ollama listening on port 11434'
        ]
      },
      {
        id: 'server-step4-pull-models',
        title: 'Step 4: Pull AI Models on Server',
        description: 'Pull preferred offline LLM model parameters into the server Ollama container:',
        codeSnippet: {
          language: 'bash',
          filename: 'Server Shell',
          code: `# Recommended for standard servers (8 GB RAM)
docker exec -it meridian-ollama ollama pull llama3.2:3b

# Optional: Pull lightweight model for budget VPS (2-4 GB RAM)
docker exec -it meridian-ollama ollama pull llama3.2:1b`
        }
      },
      {
        id: 'server-step5-ssl-proxy',
        title: 'Step 5: HTTPS SSL Setup via Reverse Proxy',
        description: 'Configure reverse proxies to enable encrypted HTTPS and WebSocket connections across public networks.',
        steps: [
          {
            stepNumber: 1,
            title: 'Option A: Automatic SSL via Caddy (Recommended)',
            content: 'Caddy automatically issues Let\'s Encrypt TLS certificates with automatic renewal.',
            codeSnippet: {
              language: 'caddyfile',
              filename: 'Caddyfile',
              code: `api.your-domain.com {
    reverse_proxy 127.0.0.1:4132
}`
            }
          },
          {
            stepNumber: 2,
            title: 'Option B: Nginx + Certbot (Let\'s Encrypt)',
            content: 'Configure Nginx site proxy with WebSocket header forwarding:',
            codeSnippet: {
              language: 'nginx',
              filename: '/etc/nginx/sites-available/meridian.conf',
              code: `server {
    server_name api.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:4132;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`
            }
          }
        ]
      },
      {
        id: 'server-step6-connect-client',
        title: 'Step 6: Connect Desktop / Web Client',
        description: 'Connect your desktop tray overlay or browser frontend to your hosted server instance:',
        steps: [
          {
            stepNumber: 1,
            title: 'Open Settings',
            content: 'In Meridian-X Desktop or Web App, open Settings -> Backend Server Settings.'
          },
          {
            stepNumber: 2,
            title: 'Enter Credentials',
            content: 'Set Server URL to https://api.your-domain.com (or http://YOUR_SERVER_IP:4132) and enter your configured MERIDIAN_API_KEY.'
          },
          {
            stepNumber: 3,
            title: 'Test Connection',
            content: 'Click "Test Connection" to confirm "✅ Connected successfully!", then save settings.'
          }
        ]
      },
      {
        id: 'server-health-check',
        title: 'Health Check & Troubleshooting',
        description: 'Commands to diagnose container status and connection health:',
        codeSnippet: {
          language: 'bash',
          filename: 'Terminal Commands',
          code: `# Test API Status
curl http://YOUR_SERVER_IP:4132/api/health

# Inspect Backend Daemon Logs
docker compose logs -f meridian-backend

# Inspect Ollama Container Logs
docker compose logs -f meridian-ollama`
        }
      }
    ]
  },
  {
    id: 'architecture',
    title: 'Core Architecture & Security',
    iconName: 'Shield',
    description: 'Deep dive into Meridian-X 6-layer agentic architecture, AES-GCM vault, and speculative execution engine.',
    sections: [
      {
        id: 'react-loop',
        title: 'ReAct Agentic Reasoning Loop',
        description: 'Meridian-X executes an autonomous Reason-Act-Observe cycle with instant self-healing capabilities.',
        notes: [
          'Layer 1 Trigger: Global hotkeys, desktop tray events, or automated schedule triggers.',
          'Layer 2 Security Gate: AES-GCM key vault decrypts keys in memory without writing secrets to disk.',
          'Layer 3 Context Assembly: Summarizes local SQLite history + relevant MCP tool context.',
          'Layer 4 ReAct Reasoning: Evaluates intent, schema validates parameters, and handles tool errors automatically.',
          'Layer 5 Tiered Execution: Routes non-mutating calls to Tier 0 parallel router and mutating state to Tier 1 sequential queue.',
          'Layer 6 Observe/Respond/Persist: Emits TTS audio telemetry, updates overlay HUD status, and logs metrics.'
        ]
      },
      {
        id: 'key-vault',
        title: 'Machine-Bound Secret Vault',
        description: 'API keys, database credentials, and session tokens are encrypted using AES-256-GCM with machine-specific hardware HMAC-SHA256 signatures.',
        codeSnippet: {
          language: 'typescript',
          filename: 'vault.ts',
          code: `// Sovereign local encryption
const encryptedKey = await MeridianVault.encryptSecret({
  secret: 'sk_live_abc123...',
  hardwareBind: true,
  algorithm: 'AES-256-GCM'
});`
        }
      }
    ]
  },
  {
    id: 'hotkeys-hud',
    title: 'Hotkeys & HUD Reference',
    iconName: 'Terminal',
    description: 'Master global desktop hotkey triggers and interactive mascot orbital state indicators.',
    sections: [
      {
        id: 'global-hotkeys',
        title: 'Global Desktop Shortcuts',
        description: 'Control Meridian-X overlay anywhere across Windows, macOS, and Linux:',
        steps: [
          {
            stepNumber: 1,
            title: 'Alt + M',
            content: 'Toggle Frameless Overlay HUD command palette for rapid prompt execution.'
          },
          {
            stepNumber: 2,
            title: 'Alt + Shift + M',
            content: 'Trigger Voice Dictation & Supertonic TTS speech output.'
          },
          {
            stepNumber: 3,
            title: 'Alt + V',
            content: 'Open 50-Slot Clipboard Surveillance Grid for instant prompt analysis.'
          }
        ]
      },
      {
        id: 'mascot-states',
        title: 'Orbital Mascot Ring States',
        description: 'The interactive 3D desktop mascot signals daemon activity using 4 glow states:',
        notes: [
          '🔵 Blue (Idle): Agent standby mode listening for hotkeys or background triggers.',
          '🟡 Amber (Thinking): ReAct reasoning, schema validation, or tool call processing in progress.',
          '🔴 Red (Error / Healing): Self-correction retry or invalid tool parameter repair.',
          '🟢 Green (Success): Execution complete, clipboard updated, or action executed successfully.'
        ]
      }
    ]
  },
  {
    id: 'mcp-integration',
    title: 'MCP Server Integration',
    iconName: 'Cpu',
    description: 'Connect Model Context Protocol (MCP) servers for PostgreSQL, GitHub, Slack, Linear, and filesystem integration.',
    sections: [
      {
        id: 'mcp-json-config',
        title: 'Registering MCP Servers',
        description: 'Add custom STDIO or HTTP MCP servers in settings or via mcp_config.json:',
        codeSnippet: {
          language: 'json',
          filename: 'mcp_config.json',
          code: `{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_TOKEN"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/prod_db"]
    }
  }
}`
        }
      }
    ]
  },
  {
    id: 'models-tuning',
    title: 'Model Presets & Tuning',
    iconName: 'Sparkles',
    description: 'Optimize local LLM inference speeds, context length, and GPU VRAM footprint.',
    sections: [
      {
        id: 'model-presets',
        title: 'Recommended Local Model Presets',
        description: 'Tested offline models for code generation, vision, and light agents:',
        notes: [
          'qwen2.5-coder:7b-instruct-q4_K_M — Best overall coding & tool calling performance (5.2 GB VRAM).',
          'qwen2.5-coder:1.5b-instruct — Ultra-fast sub-10ms response for budget laptops (1.2 GB RAM).',
          'llama3.2-vision:11b — Screenshot & visual UI element analysis (8.5 GB VRAM).',
          'moondream:1.8b — Compact fast vision model for desktop screen monitoring.',
          'nomic-embed-text — High-precision local vector embeddings for doc RAG.'
        ]
      }
    ]
  }
];
