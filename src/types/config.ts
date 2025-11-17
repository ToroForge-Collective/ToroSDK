export type Network = 'mainnet' | 'testnet';

export interface SDKConfig {
  network: Network;
  baseURL: string;
  connectWURL: string;
}

export interface SDKConfigOptions {
  network?: Network;
  baseURL?: string;
  connectWURL?: string;
}

