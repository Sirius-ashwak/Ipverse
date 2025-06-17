// Environment configuration with validation and defaults
export interface EnvironmentConfig {
  // Partner APIs
  tomo: {
    clientId: string;
    apiUrl: string;
    environment: 'development' | 'staging' | 'production';
  };
  storyProtocol: {
    apiKey: string;
    network: string;
    contractAddress: string;
  };
  crossmint: {
    projectId: string;
    apiKey: string;
    environment: 'staging' | 'production';
  };
  alchemy: {
    apiKey: string;
    network: string;
    rpcUrl: string;
  };
  thirdweb: {
    clientId: string;
    secretKey: string;
  };
  openai: {
    apiKey: string;
    model: string;
    maxTokens: number;
  };
  gelato: {
    apiKey: string;
    relayApiKey: string;
  };
  fleek: {
    apiKey: string;
    projectId: string;
  };
  yakoa: {
    apiKey: string;
    apiUrl: string;
  };
  zapper: {
    apiKey: string;
    apiUrl: string;
  };
  debridge: {
    apiKey: string;
    apiUrl: string;
  };
  
  // App configuration
  app: {
    env: 'development' | 'staging' | 'production';
    name: string;
    version: string;
    url: string;
  };
  
  // Blockchain
  blockchain: {
    supportedChains: number[];
    defaultChainId: number;
    contracts: {
      ipRegistry: string;
      license: string;
      royalty: string;
    };
  };
  
  // Features
  features: {
    aiAgents: boolean;
    crossChain: boolean;
    analytics: boolean;
    notifications: boolean;
  };
  
  // Monitoring
  monitoring: {
    sentry?: {
      dsn: string;
      environment: string;
    };
    googleAnalytics?: {
      trackingId: string;
    };
    hotjar?: {
      id: string;
    };
  };
  
  // Development
  development: {
    debugMode: boolean;
    logLevel: 'error' | 'warn' | 'info' | 'debug';
    mockApis: boolean;
  };
}

// Validation helper
const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key] || defaultValue;
  if (!value && !defaultValue) {
    console.warn(`Environment variable ${key} is not set`);
  }
  return value || '';
};

const getBooleanEnvVar = (key: string, defaultValue: boolean = false): boolean => {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  return value === 'true' || value === '1';
};

const getNumberEnvVar = (key: string, defaultValue: number): number => {
  const value = import.meta.env[key];
  if (value === undefined) return defaultValue;
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? defaultValue : parsed;
};

// Environment configuration
export const env: EnvironmentConfig = {
  tomo: {
    clientId: getEnvVar('VITE_TOMO_CLIENT_ID', 'xDsx8PcJd6QrpkgejZRWi9WpyTQ2FvCZOOmG2Ry4brFQxlil77Y3Rfg5XGTEFl5MWOfc6VOzDHku84Cye7l7pwnr'),
    apiUrl: getEnvVar('VITE_TOMO_API_URL', 'https://api.tomo.inc'),
    environment: getEnvVar('VITE_TOMO_ENVIRONMENT', 'production') as any,
  },
  
  storyProtocol: {
    apiKey: getEnvVar('VITE_STORY_PROTOCOL_API_KEY', 'demo_key'),
    network: getEnvVar('VITE_STORY_PROTOCOL_NETWORK', 'sepolia'),
    contractAddress: getEnvVar('VITE_STORY_PROTOCOL_CONTRACT_ADDRESS', '0x1234567890123456789012345678901234567890'),
  },
  
  crossmint: {
    projectId: getEnvVar('VITE_CROSSMINT_PROJECT_ID', 'demo_project'),
    apiKey: getEnvVar('VITE_CROSSMINT_API_KEY', 'demo_key'),
    environment: getEnvVar('VITE_CROSSMINT_ENVIRONMENT', 'staging') as any,
  },
  
  alchemy: {
    apiKey: getEnvVar('VITE_ALCHEMY_API_KEY', 'demo_key'),
    network: getEnvVar('VITE_ALCHEMY_NETWORK', 'eth-sepolia'),
    rpcUrl: getEnvVar('VITE_ALCHEMY_RPC_URL', 'https://eth-sepolia.g.alchemy.com/v2/demo'),
  },
  
  thirdweb: {
    clientId: getEnvVar('VITE_THIRDWEB_CLIENT_ID', 'demo_client'),
    secretKey: getEnvVar('VITE_THIRDWEB_SECRET_KEY', 'demo_secret'),
  },
  
  openai: {
    apiKey: getEnvVar('VITE_OPENAI_API_KEY', 'demo_key'),
    model: getEnvVar('VITE_OPENAI_MODEL', 'gpt-4'),
    maxTokens: getNumberEnvVar('VITE_OPENAI_MAX_TOKENS', 2000),
  },
  
  gelato: {
    apiKey: getEnvVar('VITE_GELATO_API_KEY', 'demo_key'),
    relayApiKey: getEnvVar('VITE_GELATO_RELAY_API_KEY', 'demo_relay_key'),
  },
  
  fleek: {
    apiKey: getEnvVar('VITE_FLEEK_API_KEY', 'demo_key'),
    projectId: getEnvVar('VITE_FLEEK_PROJECT_ID', 'demo_project'),
  },
  
  yakoa: {
    apiKey: getEnvVar('VITE_YAKOA_API_KEY', 'demo_key'),
    apiUrl: getEnvVar('VITE_YAKOA_API_URL', 'https://api.yakoa.com'),
  },
  
  zapper: {
    apiKey: getEnvVar('VITE_ZAPPER_API_KEY', 'demo_key'),
    apiUrl: getEnvVar('VITE_ZAPPER_API_URL', 'https://api.zapper.fi'),
  },
  
  debridge: {
    apiKey: getEnvVar('VITE_DEBRIDGE_API_KEY', 'demo_key'),
    apiUrl: getEnvVar('VITE_DEBRIDGE_API_URL', 'https://api.debridge.finance'),
  },
  
  app: {
    env: getEnvVar('VITE_APP_ENV', 'development') as any,
    name: getEnvVar('VITE_APP_NAME', 'IPVerse'),
    version: getEnvVar('VITE_APP_VERSION', '1.0.0'),
    url: getEnvVar('VITE_APP_URL', 'http://localhost:5173'),
  },
  
  blockchain: {
    supportedChains: getEnvVar('VITE_SUPPORTED_CHAINS', '1,11155111,137,80001')
      .split(',')
      .map(id => parseInt(id.trim(), 10))
      .filter(id => !isNaN(id)),
    defaultChainId: getNumberEnvVar('VITE_DEFAULT_CHAIN_ID', 11155111),
    contracts: {
      ipRegistry: getEnvVar('VITE_IP_REGISTRY_CONTRACT', '0x1234567890123456789012345678901234567890'),
      license: getEnvVar('VITE_LICENSE_CONTRACT', '0x2345678901234567890123456789012345678901'),
      royalty: getEnvVar('VITE_ROYALTY_CONTRACT', '0x3456789012345678901234567890123456789012'),
    },
  },
  
  features: {
    aiAgents: getBooleanEnvVar('VITE_ENABLE_AI_AGENTS', true),
    crossChain: getBooleanEnvVar('VITE_ENABLE_CROSS_CHAIN', true),
    analytics: getBooleanEnvVar('VITE_ENABLE_ANALYTICS', true),
    notifications: getBooleanEnvVar('VITE_ENABLE_NOTIFICATIONS', true),
  },
  
  monitoring: {
    sentry: getEnvVar('VITE_SENTRY_DSN') ? {
      dsn: getEnvVar('VITE_SENTRY_DSN'),
      environment: getEnvVar('VITE_SENTRY_ENVIRONMENT', 'development'),
    } : undefined,
    googleAnalytics: getEnvVar('VITE_GA_TRACKING_ID') ? {
      trackingId: getEnvVar('VITE_GA_TRACKING_ID'),
    } : undefined,
    hotjar: getEnvVar('VITE_HOTJAR_ID') ? {
      id: getEnvVar('VITE_HOTJAR_ID'),
    } : undefined,
  },
  
  development: {
    debugMode: getBooleanEnvVar('VITE_DEBUG_MODE', true),
    logLevel: getEnvVar('VITE_LOG_LEVEL', 'debug') as any,
    mockApis: getBooleanEnvVar('VITE_MOCK_APIS', true),
  },
};

// Validation on startup
export const validateEnvironment = (): void => {
  const requiredVars = [
    'VITE_TOMO_CLIENT_ID',
  ];
  
  const missing = requiredVars.filter(key => !import.meta.env[key]);
  
  if (missing.length > 0) {
    console.warn('Missing required environment variables:', missing);
    console.warn('Please check your .env.local file');
  }
  
  // Log current environment
  if (env.development.debugMode) {
    console.log('🌍 Environment Configuration:', {
      env: env.app.env,
      features: env.features,
      mockApis: env.development.mockApis,
    });
  }
};

// Export individual configs for convenience
export const {
  tomo,
  storyProtocol,
  crossmint,
  alchemy,
  thirdweb,
  openai,
  gelato,
  fleek,
  yakoa,
  zapper,
  debridge,
  app,
  blockchain,
  features,
  monitoring,
  development,
} = env;