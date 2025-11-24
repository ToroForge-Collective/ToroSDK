import {
  // Solana
  getSolBalance,
  getSolTokenBalance,
  getSolTransactions,
  getSolTokenTransactions,
  transferSolana,
  transferSolToken,
  bridgeTokenSol,
  getBridgeTokenFeeSol,
  createSolanaAddress,
  isValidSolanaAddress,
  createToronetSolanaAddress,
  getSolLatestBlock,
  // Base
  getBalanceBase,
  getTokenBalanceBase,
  getTransactionsBase,
  getTokenTransactionsBase,
  bridgeTokenBase,
  getBridgeTokenFeeBase,
  // Polygon
  getBalancePolygon,
  getTokenBalancePolygon,
  getTransactionsPolygon,
  getTokenTransactionsPolygon,
  bridgeTokenPolygon,
  getBridgeTokenFeePolygon,
  // BSC
  getBalanceBSC,
  getTokenBalanceBSC,
  getTransactionsBSC,
  getTokenTransactionsBSC,
  bridgeTokenBSC,
  getBridgeTokenFeeBSC,
  // Arbitrum
  getBalanceArbitrum,
  getTokenBalanceArbitrum,
  getTransactionsArbitrum,
  getTokenTransactionsArbitrum,
  bridgeTokenArbitrum,
  getBridgeTokenFeeArbitrum,
  // Payments
  paymentInitializeCrypto,
  recordCryptoPayment
} from "../api/bridge";
import {
  GetBalanceParams,
  GetTokenBalanceParams,
  GetTransactionsParams,
  GetTokenTransactionsParams,
  BridgeTokenParams,
  GetBridgeTokenFeeParams,
  PaymentInitializeCryptoParams,
  RecordPaymentParams,
  BridgeNetwork
} from "../types/bridge";

/**
 * Get balance on a specific external chain (Solana, Base, Polygon, BSC, Arbitrum)
 */
export const getBridgeBalance = async (
  network: BridgeNetwork | string,
  params: GetBalanceParams,
  admin?: string,
  adminpwd?: string
) => {
  switch (network) {
    case BridgeNetwork.Solana:
    case "sol":
      return await getSolBalance(params, admin, adminpwd);
    case BridgeNetwork.Base:
    case "base":
      return await getBalanceBase(params, admin, adminpwd);
    case BridgeNetwork.Polygon:
    case "poly":
      return await getBalancePolygon(params, admin, adminpwd);
    case BridgeNetwork.BSC:
    case "bsc":
      return await getBalanceBSC(params, admin, adminpwd);
    case BridgeNetwork.Arbitrum:
    case "arb":
      return await getBalanceArbitrum(params, admin, adminpwd);
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
};

/**
 * Get token balance on a specific external chain (Solana, Base, Polygon, BSC, Arbitrum)
 */
export const getBridgeTokenBalance = async (
  network: BridgeNetwork | string,
  params: GetTokenBalanceParams,
  admin?: string,
  adminpwd?: string
) => {
  switch (network) {
    case BridgeNetwork.Solana:
    case "sol":
      return await getSolTokenBalance(params, admin, adminpwd);
    case BridgeNetwork.Base:
    case "base":
      return await getTokenBalanceBase(params, admin, adminpwd);
    case BridgeNetwork.Polygon:
    case "poly":
      return await getTokenBalancePolygon(params, admin, adminpwd);
    case BridgeNetwork.BSC:
    case "bsc":
      return await getTokenBalanceBSC(params, admin, adminpwd);
    case BridgeNetwork.Arbitrum:
    case "arb":
      return await getTokenBalanceArbitrum(params, admin, adminpwd);
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
};

/**
 * Get transactions on a specific external chain (Solana, Base, Polygon, BSC, Arbitrum)
 */
export const getBridgeTransactions = async (
  network: BridgeNetwork | string,
  params: GetTransactionsParams,
  admin?: string,
  adminpwd?: string
) => {
  switch (network) {
    case BridgeNetwork.Solana:
    case "sol":
      return await getSolTransactions(params, admin, adminpwd);
    case BridgeNetwork.Base:
    case "base":
      return await getTransactionsBase(params, admin, adminpwd);
    case BridgeNetwork.Polygon:
    case "poly":
      return await getTransactionsPolygon(params, admin, adminpwd);
    case BridgeNetwork.BSC:
    case "bsc":
      return await getTransactionsBSC(params, admin, adminpwd);
    case BridgeNetwork.Arbitrum:
    case "arb":
      return await getTransactionsArbitrum(params, admin, adminpwd);
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
};

/**
 * Get token transactions on a specific external chain (Solana, Base, Polygon, BSC, Arbitrum)
 */
export const getBridgeTokenTransactions = async (
  network: BridgeNetwork | string,
  params: GetTokenTransactionsParams,
  admin?: string,
  adminpwd?: string
) => {
  switch (network) {
    case BridgeNetwork.Solana:
    case "sol":
      return await getSolTokenTransactions(params, admin, adminpwd);
    case BridgeNetwork.Base:
    case "base":
      return await getTokenTransactionsBase(params, admin, adminpwd);
    case BridgeNetwork.Polygon:
    case "poly":
      return await getTokenTransactionsPolygon(params, admin, adminpwd);
    case BridgeNetwork.BSC:
    case "bsc":
      return await getTokenTransactionsBSC(params, admin, adminpwd);
    case BridgeNetwork.Arbitrum:
    case "arb":
      return await getTokenTransactionsArbitrum(params, admin, adminpwd);
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
};

/**
 * Bridge token from a specific external chain to Toronet
 */
export const bridgeTokenFromChain = async (
  network: BridgeNetwork | string,
  params: BridgeTokenParams,
  admin?: string,
  adminpwd?: string
) => {
  switch (network) {
    case BridgeNetwork.Solana:
    case "sol":
      return await bridgeTokenSol(params, admin, adminpwd);
    case BridgeNetwork.Base:
    case "base":
      return await bridgeTokenBase(params, admin, adminpwd);
    case BridgeNetwork.Polygon:
    case "poly":
      return await bridgeTokenPolygon(params, admin, adminpwd);
    case BridgeNetwork.BSC:
    case "bsc":
      return await bridgeTokenBSC(params, admin, adminpwd);
    case BridgeNetwork.Arbitrum:
    case "arb":
      return await bridgeTokenArbitrum(params, admin, adminpwd);
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
};

/**
 * Get bridge token fee estimate for a specific external chain
 */
export const getBridgeTokenFeeEstimate = async (
  network: BridgeNetwork | string,
  params: GetBridgeTokenFeeParams,
  admin?: string,
  adminpwd?: string
) => {
  switch (network) {
    case BridgeNetwork.Solana:
    case "sol":
      return await getBridgeTokenFeeSol(params, admin, adminpwd);
    case BridgeNetwork.Base:
    case "base":
      return await getBridgeTokenFeeBase(params, admin, adminpwd);
    case BridgeNetwork.Polygon:
    case "poly":
      return await getBridgeTokenFeePolygon(params, admin, adminpwd);
    case BridgeNetwork.BSC:
    case "bsc":
      return await getBridgeTokenFeeBSC(params, admin, adminpwd);
    case BridgeNetwork.Arbitrum:
    case "arb":
      return await getBridgeTokenFeeArbitrum(params, admin, adminpwd);
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
};

// Re-export Solana-specific functions
export {
  // Solana-specific
  getSolBalance,
  getSolTokenBalance,
  getSolTransactions,
  getSolTokenTransactions,
  transferSolana,
  transferSolToken,
  bridgeTokenSol,
  getBridgeTokenFeeSol,
  createSolanaAddress,
  isValidSolanaAddress,
  createToronetSolanaAddress,
  getSolLatestBlock,
  // Base
  getBalanceBase,
  getTokenBalanceBase,
  getTransactionsBase,
  getTokenTransactionsBase,
  bridgeTokenBase,
  getBridgeTokenFeeBase,
  // Polygon
  getBalancePolygon,
  getTokenBalancePolygon,
  getTransactionsPolygon,
  getTokenTransactionsPolygon,
  bridgeTokenPolygon,
  getBridgeTokenFeePolygon,
  // BSC
  getBalanceBSC,
  getTokenBalanceBSC,
  getTransactionsBSC,
  getTokenTransactionsBSC,
  bridgeTokenBSC,
  getBridgeTokenFeeBSC,
  // Arbitrum
  getBalanceArbitrum,
  getTokenBalanceArbitrum,
  getTransactionsArbitrum,
  getTokenTransactionsArbitrum,
  bridgeTokenArbitrum,
  getBridgeTokenFeeArbitrum,
  // Payments
  paymentInitializeCrypto,
  recordCryptoPayment
};

