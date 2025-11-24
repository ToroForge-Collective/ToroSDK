import axios from "axios";
import { getBaseURL } from "../config";
import {
  GetBalanceParams,
  GetTokenBalanceParams,
  GetTransactionsParams,
  GetTokenTransactionsParams,
  BridgeTokenParams,
  GetBridgeTokenFeeParams
} from "../../types/bridge";

/**
 * Get native token balance on Polygon
 * Operation: get_balance
 */
export const getBalancePolygon = async (params: GetBalanceParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "get_balance",
      params: [
        { name: "address", value: params.address },
        { name: "network", value: "poly" }
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
 * Get ERC20 token balance on Polygon
 * Operation: get_tokenbalance
 */
export const getTokenBalancePolygon = async (params: GetTokenBalanceParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const paramsArray: any[] = [
      { name: "address", value: params.address },
      { name: "network", value: "poly" },
      { name: "contractaddress", value: params.contractaddress }
    ];

    if (params.tokenname) {
      paramsArray.push({ name: "tokenname", value: params.tokenname });
    }

    const data = {
      op: "get_tokenbalance",
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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Get transaction history on Polygon
 * Operation: get_transactions
 */
export const getTransactionsPolygon = async (params: GetTransactionsParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "get_transactions",
      params: [
        { name: "address", value: params.address },
        { name: "network", value: "poly" }
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
 * Get token transaction history on Polygon
 * Operation: get_tokentransactions
 */
export const getTokenTransactionsPolygon = async (params: GetTokenTransactionsParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const paramsArray: any[] = [
      { name: "address", value: params.address },
      { name: "network", value: "poly" },
      { name: "contractaddress", value: params.contractaddress }
    ];

    if (params.tokenname) {
      paramsArray.push({ name: "tokenname", value: params.tokenname });
    }

    const data = {
      op: "get_tokentransactions",
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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Bridge token from Polygon to Toronet
 * Operation: bridge_token
 */
export const bridgeTokenPolygon = async (params: BridgeTokenParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "bridge_token",
      params: [
        { name: "from", value: params.from },
        { name: "pwd", value: params.pwd },
        { name: "network", value: "poly" },
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
 * Get bridge token fee for Polygon
 * Operation: get_bridge_token_fee
 */
export const getBridgeTokenFeePolygon = async (params: GetBridgeTokenFeeParams, admin?: string, adminpwd?: string) => {
  try {
    const url = `${getBaseURL()}/cryptoutils/`;
    const data = {
      op: "get_bridge_token_fee",
      params: [
        { name: "network", value: "poly" },
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

