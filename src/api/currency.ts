import axios from "axios";
import { getBaseURL } from "./config";

// Currency mapping for URL paths
const CURRENCY_PATH_MAP: Record<string, string> = {
  NGN: "naira",
  USD: "dollar",
  EUR: "EUR",
  GBP: "GBP",
  KES: "KES",
  KSH: "KES",
  ZAR: "ZAR",
  EGP: "EGP",
};

/**
 * Get currency path from currency code
 */
function getCurrencyPath(currency: string): string {
  return CURRENCY_PATH_MAP[currency.toUpperCase()] || currency.toLowerCase();
}

// ============ CLIENT OPERATIONS (/api/currency/{currency}/cl) ============

/**
 * Transfer currency (client operation)
 * Operation: transfer
 * Note: This is already implemented in payments.ts as makeInterWalletTransfer
 * Keeping here for currency module completeness
 */
export const transferCurrency = async ({
  currency,
  senderAddr,
  senderPwd,
  receiverAddr,
  amount,
}: {
  currency: string;
  senderAddr: string;
  senderPwd: string;
  receiverAddr: string;
  amount: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/cl`;
  const data = {
    op: "transfer",
    params: [
      { name: "client", value: senderAddr },
      { name: "clientpwd", value: senderPwd },
      { name: "to", value: receiverAddr },
      { name: "val", value: amount.toString() },
    ],
  };
  try {
    const response = await axios.post(url, data);
    if (response.data.result == false) {
      throw new Error(response.data.error);
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// ============ QUERY OPERATIONS (common across currencies) ============
// Note: Many currency query operations follow similar patterns
// These can be extended with currency-specific operations as needed

/**
 * Get balance for a specific currency
 * Operation: getbalance
 */
export const getCurrencyBalance = async ({
  currency,
  address,
}: {
  currency: string;
  address: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}`;
  const data = {
    op: "getbalance",
    params: [{ name: "addr", value: address }],
  };
  const config = {
    method: "get",
    url: url,
    headers: { "Content-Type": "application/json" },
    data: data,
  };
  try {
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// ============ OWNER OPERATIONS (/api/currency/{currency}/ow) ============
// These operations require ownership of the currency contract

/**
 * Enable transfer for currency (owner operation)
 * Operation: allowtransfer
 */
export const allowTransfer = async ({
  currency,
  address,
  password,
}: {
  currency: string;
  address: string;
  password: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ow`;
  const data = {
    op: "allowtransfer",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
    ],
  };
  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Disable transfer for currency (owner operation)
 * Operation: disallowtransfer
 */
export const disallowTransfer = async ({
  currency,
  address,
  password,
}: {
  currency: string;
  address: string;
  password: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ow`;
  const data = {
    op: "disallowtransfer",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
    ],
  };
  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Enable minting for currency (owner operation)
 * Operation: allowmint
 */
export const allowMint = async ({
  currency,
  address,
  password,
}: {
  currency: string;
  address: string;
  password: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ow`;
  const data = {
    op: "allowmint",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
    ],
  };
  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Disable minting for currency (owner operation)
 * Operation: disallowmint
 */
export const disallowMint = async ({
  currency,
  address,
  password,
}: {
  currency: string;
  address: string;
  password: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ow`;
  const data = {
    op: "disallowmint",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
    ],
  };
  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Enable burning for currency (owner operation)
 * Operation: allowburn
 */
export const allowBurn = async ({
  currency,
  address,
  password,
}: {
  currency: string;
  address: string;
  password: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ow`;
  const data = {
    op: "allowburn",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
    ],
  };
  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Disable burning for currency (owner operation)
 * Operation: disallowburn
 */
export const disallowBurn = async ({
  currency,
  address,
  password,
}: {
  currency: string;
  address: string;
  password: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ow`;
  const data = {
    op: "disallowburn",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
    ],
  };
  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// ============ ADMIN OPERATIONS (/api/currency/{currency}/ad) ============
// These operations require admin privileges

/**
 * Freeze address for currency (admin operation)
 * Operation: freeze
 */
export const freezeAddress = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "freeze",
    params: [{ name: "addr", value: targetAddress }],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Unfreeze address for currency (admin operation)
 * Operation: unfreeze
 */
export const unfreezeAddress = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "unfreeze",
    params: [{ name: "addr", value: targetAddress }],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Enroll address for currency (admin operation)
 * Operation: enroll
 */
export const enrollAddress = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "enroll",
    params: [{ name: "addr", value: targetAddress }],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Mint currency tokens (admin operation)
 * Operation: mint
 */
export const mintCurrency = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
  amount,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
  amount: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "mint",
    params: [
      { name: "to", value: targetAddress },
      { name: "val", value: amount.toString() },
    ],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Burn currency tokens (admin operation)
 * Operation: burn
 */
export const burnCurrency = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
  amount,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
  amount: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "burn",
    params: [
      { name: "from", value: targetAddress },
      { name: "val", value: amount.toString() },
    ],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Set allowance for address (admin operation)
 * Operation: setallowance
 */
export const setAllowance = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
  min,
  max,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
  min: string | number;
  max: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "setallowance",
    params: [
      { name: "addr", value: targetAddress },
      { name: "min", value: min.toString() },
      { name: "max", value: max.toString() },
    ],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Set minimum allowance (admin operation)
 * Operation: setminimumallowance
 */
export const setMinimumAllowance = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
  value,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
  value: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "setminimumallowance",
    params: [
      { name: "addr", value: targetAddress },
      { name: "val", value: value.toString() },
    ],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Set maximum allowance (admin operation)
 * Operation: setmaximumallowance
 */
export const setMaximumAllowance = async ({
  currency,
  address,
  admin,
  adminpwd,
  targetAddress,
  value,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  targetAddress: string;
  value: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "setmaximumallowance",
    params: [
      { name: "addr", value: targetAddress },
      { name: "val", value: value.toString() },
    ],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Set transaction fee fixed (admin operation)
 * Operation: settransactionfeefixed
 */
export const setTransactionFeeFixed = async ({
  currency,
  address,
  admin,
  adminpwd,
  value,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  value: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "settransactionfeefixed",
    params: [{ name: "val", value: value.toString() }],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Set transaction fee percentage (admin operation)
 * Operation: settransactionfeepercentage
 */
export const setTransactionFeePercentage = async ({
  currency,
  address,
  admin,
  adminpwd,
  value,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  value: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "settransactionfeepercentage",
    params: [{ name: "val", value: value.toString() }],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Set transaction fee (admin operation)
 * Operation: settransactionfee
 */
export const setTransactionFee = async ({
  currency,
  address,
  admin,
  adminpwd,
  fixed,
  percentage,
}: {
  currency: string;
  address: string;
  admin: string;
  adminpwd: string;
  fixed: string | number;
  percentage: string | number;
}) => {
  const currencyPath = getCurrencyPath(currency);
  const url = `${getBaseURL()}/api/currency/${currencyPath}/ad`;
  const data = {
    op: "settransactionfee",
    params: [
      { name: "fixed", value: fixed.toString() },
      { name: "percentage", value: percentage.toString() },
    ],
  };
  const config = {
    headers: {
      admin,
      adminpwd,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// Note: Additional currency operations (self operations, super admin operations, etc.)
// can be added following the same pattern. The Postman collection shows many more
// operations for each currency and permission level.

