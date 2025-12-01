import { Network, SDKConfig, SDKConfigOptions } from '../types/config';

const DEFAULT_NETWORKS: Record<Network, { baseURL: string; connectWURL: string }> = {
  mainnet: {
    baseURL: 'https://www.toronet.org',
    connectWURL: 'https://payments.connectw.com'
  },
  testnet: {
    baseURL: 'http://testnet.toronet.org',
    connectWURL: 'https://payments.connectw.com' // ConnectW may not differ by network
  }
};

class SDKConfiguration {
  private config: SDKConfig;

  constructor(options: SDKConfigOptions = {}) {
    const network = options.network || 'mainnet';
    const networkDefaults = DEFAULT_NETWORKS[network];
    
    this.config = {
      network,
      baseURL: options.baseURL || networkDefaults.baseURL,
      connectWURL: options.connectWURL || networkDefaults.connectWURL
    };
  }

  getConfig(): SDKConfig {
    return { ...this.config };
  }

  getBaseURL(): string {
    return this.config.baseURL;
  }

  getConnectWURL(): string {
    return this.config.connectWURL;
  }

  getNetwork(): Network {
    return this.config.network;
  }

  updateConfig(options: SDKConfigOptions): void {
    if (options.network) {
      const networkDefaults = DEFAULT_NETWORKS[options.network];
      this.config.network = options.network;
      if (!options.baseURL) {
        this.config.baseURL = networkDefaults.baseURL;
      }
      if (!options.connectWURL) {
        this.config.connectWURL = networkDefaults.connectWURL;
      }
    }
    
    if (options.baseURL) {
      this.config.baseURL = options.baseURL;
    }
    
    if (options.connectWURL) {
      this.config.connectWURL = options.connectWURL;
    }
  }
}

// Singleton instance
let sdkConfigInstance: SDKConfiguration | null = null;

export function initializeSDK(options: SDKConfigOptions = {}): SDKConfiguration {
  if (!sdkConfigInstance) {
    sdkConfigInstance = new SDKConfiguration(options);
  } else {
    sdkConfigInstance.updateConfig(options);
  }
  return sdkConfigInstance;
}

export function getSDKConfig(): SDKConfiguration {
  if (!sdkConfigInstance) {
    sdkConfigInstance = new SDKConfiguration();
  }
  return sdkConfigInstance;
}

export function resetSDKConfig(): void {
  sdkConfigInstance = null;
}

