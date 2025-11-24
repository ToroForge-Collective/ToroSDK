import axios from "axios";
import { getBaseURL } from "../config";
import {
  CreateSolanaAddressParams,
  CreateToronetSolanaAddressParams,
  TransferSolanaParams,
  TransferSolTokenParams,
  GetBalanceParams,
  GetTokenBalanceParams,
  GetTransactionsParams,
  GetTokenTransactionsParams,
  BridgeTokenParams,
  GetBridgeTokenFeeParams
} from "../../types/bridge";

/**
 * Create a new Solana address
 * Operation: createsolanaaddress
 * Note: It's preferable to use generatevirtualwallet to ensure the Solana address is linked to Toronet address
 */
export const createSolanaAddress = async (params?: CreateSolanaAddressParams) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "createsolanaaddress",
      params: []
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (params?.admin && params?.adminpwd) {
      config.headers.admin = params.admin;
      config.headers.adminpwd = params.adminpwd;
    }

    const response = await axios(config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Validate if a string is a valid Solana address
 * Operation: isValidSolanaAddress
 */
export const isValidSolanaAddress = async (address: string, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "isValidSolanaAddress",
      params: [
        { name: "address", value: address }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Create a custodial Solana address linked to a Toronet address
 * Operation: createtoronetsolanaaddress
 * Note: It's preferable to use generatevirtualwallet to ensure the Solana address is linked to Toronet address
 */
export const createToronetSolanaAddress = async (params: CreateToronetSolanaAddressParams) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "createtoronetsolanaaddress",
      params: [
        { name: "addr", value: params.addr },
        { name: "pwd", value: params.pwd }
      ]
    };

    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Verify Solana virtual address encryption
 * Operation: verify_solana_virtualaddress_enc
 */
export const verifySolanaVirtualAddressEnc = async (from: string, pwd: string, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "verify_solana_virtualaddress_enc",
      params: [
        { name: "from", value: from },
        { name: "pwd", value: pwd }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Verify Solana virtual address (Toronet address)
 * Operation: verify_solana_virtualaddress
 */
export const verifySolanaVirtualAddress = async (from: string, pwd: string, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "verify_solana_virtualaddress",
      params: [
        { name: "from", value: from },
        { name: "pwd", value: pwd }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Transfer SOL (native Solana token)
 * Operation: transfer_sol
 */
export const transferSolana = async (params: TransferSolanaParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "transfer_sol",
      params: [
        { name: "from", value: params.from },
        { name: "to", value: params.to },
        { name: "amount", value: params.amount },
        { name: "pwd", value: params.pwd }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Transfer SPL token on Solana
 * Operation: transfer_sol_token
 */
export const transferSolToken = async (params: TransferSolTokenParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const paramsArray: any[] = [
      { name: "from", value: params.from },
      { name: "to", value: params.to },
      { name: "amount", value: params.amount },
      { name: "pwd", value: params.pwd },
      { name: "contractaddress", value: params.contractaddress },
      { name: "tokenname", value: params.tokenname }
    ];

    if (params.usetokenasfees) {
      paramsArray.push({ name: "usetokenasfees", value: params.usetokenasfees });
    }

    const data = {
      op: "transfer_sol_token",
      params: paramsArray
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Get SOL balance for a Solana address
 * Operation: getsol_balance
 */
export const getSolBalance = async (params: GetBalanceParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "getsol_balance",
      params: [
        { name: "address", value: params.address }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Get SPL token balance for a Solana address
 * Operation: getsol_token_balance
 */
export const getSolTokenBalance = async (params: GetTokenBalanceParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "getsol_token_balance",
      params: [
        { name: "address", value: params.address },
        { name: "contractaddress", value: params.contractaddress }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Get latest Solana block
 * Operation: getsol_latest_block
 */
export const getSolLatestBlock = async (admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "getsol_latest_block"
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Get SOL transactions for a Solana address
 * Operation: getsol_transactions
 */
export const getSolTransactions = async (params: GetTransactionsParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "getsol_transactions",
      params: [
        { name: "address", value: params.address }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Get SPL token transactions for a Solana address
 * Operation: getsol_token_transactions
 */
export const getSolTokenTransactions = async (params: GetTokenTransactionsParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "getsol_token_transactions",
      params: [
        { name: "address", value: params.address },
        { name: "contractaddress", value: params.contractaddress }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Bridge token from Solana to Toronet
 * Operation: bridge_token
 */
export const bridgeTokenSol = async (params: BridgeTokenParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "bridge_token",
      params: [
        { name: "from", value: params.from },
        { name: "pwd", value: params.pwd },
        { name: "network", value: "sol" },
        { name: "contractaddress", value: params.contractaddress },
        { name: "tokenname", value: params.tokenname },
        { name: "amount", value: params.amount }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Get bridge token fee for Solana
 * Operation: get_bridge_token_fee
 */
export const getBridgeTokenFeeSol = async (params: GetBridgeTokenFeeParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "get_bridge_token_fee",
      params: [
        { name: "network", value: "sol" },
        { name: "contractaddress", value: params.contractaddress },
        { name: "amount", value: params.amount }
      ]
    };

    const config: any = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json"
      },
      data: data
    };

    if (admin && adminpwd) {
      config.headers.admin = admin;
      config.headers.adminpwd = adminpwd;
    }

    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

