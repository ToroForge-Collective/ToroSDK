import { getSDKConfig } from '../config/sdk_config';

// Default URLs for backward compatibility
const DEFAULT_BASE_URL = "https://www.toronet.org";
const DEFAULT_CONNECTW_URL = "https://payments.connectw.com";

/**
 * Get the base URL for Toronet API
 * Uses SDK configuration if set, otherwise returns default mainnet URL
 */
export function getBaseURL(): string {
  try {
    return getSDKConfig().getBaseURL();
  } catch {
    return DEFAULT_BASE_URL;
  }
}

/**
 * Get the ConnectW URL for payment operations
 * Uses SDK configuration if set, otherwise returns default URL
 */
export function getConnectWURL(): string {
  try {
    return getSDKConfig().getConnectWURL();
  } catch {
    return DEFAULT_CONNECTW_URL;
  }
}

// Export constants for backward compatibility
// These will use the configured values via getters
export const BASE_URL = getBaseURL();
export const CONNECTW_URL = getConnectWURL();
