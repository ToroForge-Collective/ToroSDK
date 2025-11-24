/**
 * Bridge network types for multi-chain support
 */
export enum BridgeNetwork {
  Solana = "sol",
  Base = "base",
  Polygon = "poly",
  BSC = "bsc",
  Arbitrum = "arb",
  Ethereum = "eth"
}

/**
 * Bridge operation parameters
 */
export interface BridgeTokenParams {
  from: string; // Toronet address
  pwd: string; // Toronet keyfile password
  network: BridgeNetwork | string; // Target network
  contractaddress: string; // Token contract address
  tokenname: string; // Token symbol (e.g., "USDC", "USDT")
  amount: string; // Amount in token units
}

export interface GetBridgeTokenFeeParams {
  network: BridgeNetwork | string;
  contractaddress: string;
  amount: string;
}

/**
 * Balance query parameters
 */
export interface GetBalanceParams {
  address: string; // Blockchain address (can be Toronet address for custodial)
  network?: BridgeNetwork | string; // Required for EVM chains
}

export interface GetTokenBalanceParams {
  address: string;
  network?: BridgeNetwork | string; // Required for EVM chains
  contractaddress: string; // Token contract address
  tokenname?: string; // Token symbol (optional)
}

/**
 * Transaction query parameters
 */
export interface GetTransactionsParams {
  address: string;
  network?: BridgeNetwork | string; // Required for EVM chains
}

export interface GetTokenTransactionsParams {
  address: string;
  network?: BridgeNetwork | string; // Required for EVM chains
  contractaddress: string;
  tokenname?: string;
}

/**
 * Solana-specific parameters
 */
export interface CreateSolanaAddressParams {
  admin?: string;
  adminpwd?: string;
}

export interface CreateToronetSolanaAddressParams {
  addr: string; // Toronet address
  pwd: string; // Toronet password
}

export interface TransferSolanaParams {
  from: string; // Solana address or Toronet address
  to: string; // Solana address
  amount: string; // Amount in SOL
  pwd: string; // Password (if using Toronet address)
}

export interface TransferSolTokenParams {
  from: string; // Solana address or Toronet address
  to: string; // Solana address
  amount: string; // Amount in token units
  pwd: string; // Password (if using Toronet address)
  contractaddress: string; // SPL token contract address
  tokenname: string; // Token symbol
  usetokenasfees?: string; // "true" or "false" - use token for fees if not enough SOL
}

/**
 * Payment initialization parameters for crypto deposits
 */
export interface PaymentInitializeCryptoParams {
  address: string; // Toronet address
  pwd: string; // Toronet password
  currency: string; // Currency code (e.g., "USDCSOL", "USDTBSC", "USDCPOLY", "USDCARB", "USDCBASE")
  token: string; // Target token on Toronet (e.g., "TORO")
  amount: string;
  success_url?: string;
  cancel_url?: string;
  paymenttype?: string; // "crypto" for crypto deposits
  passthrough?: string;
  commissionrate?: string;
  exchange?: string;
  payername?: string;
  payeraddress?: string;
  payercity?: string;
  payerstate?: string;
  payercountry?: string;
  payerzipcode?: string;
  payerphone?: string;
  reusewallet?: string;
  description?: string;
  reference?: string;
}

/**
 * Record payment parameters
 */
export interface RecordPaymentParams {
  currency: string; // Currency code (e.g., "USDCSOL", "USDTBSC")
  txid: string; // Transaction ID from the blockchain
}

