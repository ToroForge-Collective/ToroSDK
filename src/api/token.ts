import axios from "axios";
import { getBaseURL } from "./config";

// ============ TOKEN QUERY OPERATIONS (/api/token/toro) ============

/**
 * Get token balance
 * Operation: getbalance
 */
export const getTokenBalance = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
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
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get token name
 * Operation: getname
 */
export const getTokenName = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getname",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get token symbol
 * Operation: getsymbol
 */
export const getTokenSymbol = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getsymbol",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get token decimals
 * Operation: getdecimal
 */
export const getTokenDecimal = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getdecimal",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get minimum allowance
 * Operation: getminimumallowance
 */
export const getMinimumAllowance = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getminimumallowance",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get maximum allowance
 * Operation: getmaximumallowance
 */
export const getMaximumAllowance = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getmaximumallowance",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get allowance
 * Operation: getallowance
 */
export const getAllowance = async ({
  owner,
  spender,
}: {
  owner: string;
  spender: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getallowance",
      params: [
        { name: "owner", value: owner },
        { name: "spender", value: spender },
      ],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get transaction fee (fixed)
 * Operation: gettransactionfeefixed
 */
export const getTransactionFeeFixed = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "gettransactionfeefixed",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get transaction fee (percentage)
 * Operation: gettransactionfeepercentage
 */
export const getTransactionFeePercentage = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "gettransactionfeepercentage",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get transaction fee
 * Operation: gettransactionfee
 */
export const getTransactionFee = async ({
  amount,
}: {
  amount: string | number;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "gettransactionfee",
      params: [{ name: "amount", value: amount.toString() }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get commission address
 * Operation: getcommissionaddress
 */
export const getCommissionAddress = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getcommissionaddress",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get commission percentage
 * Operation: getcommissionpercentage
 */
export const getCommissionPercentage = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getcommissionpercentage",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get reserve
 * Operation: getreserve
 */
export const getReserve = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getreserve",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get toller
 * Operation: gettoller
 */
export const getToller = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "gettoller",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get total cap
 * Operation: gettotalcap
 */
export const getTotalCap = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "gettotalcap",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get total reserving
 * Operation: gettotalreserving
 */
export const getTotalReserving = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "gettotalreserving",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get total circulating
 * Operation: gettotalcirculating
 */
export const getTotalCirculating = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "gettotalcirculating",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Check if address is enrolled
 * Operation: isenrolled
 */
export const isEnrolled = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "isenrolled",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Check if address is frozen
 * Operation: isfrozen
 */
export const isFrozen = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "isfrozen",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get allow self enroll
 * Operation: getallowselfenroll
 */
export const getAllowSelfEnroll = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getallowselfenroll",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get allow self transaction fee
 * Operation: getallowselftransactionfee
 */
export const getAllowSelfTransactionFee = async ({
  address,
}: {
  address: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getallowselftransactionfee",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get self transaction fee fixed
 * Operation: getselftransactionfeefixed
 */
export const getSelfTransactionFeeFixed = async ({
  address,
}: {
  address: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getselftransactionfeefixed",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get self transaction fee percentage
 * Operation: getselftransactionfeepercentage
 */
export const getSelfTransactionFeePercentage = async ({
  address,
}: {
  address: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getselftransactionfeepercentage",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get self transaction fee
 * Operation: getselftransactionfee
 */
export const getSelfTransactionFee = async ({
  address,
  amount,
}: {
  address: string;
  amount: string | number;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getselftransactionfee",
      params: [
        { name: "addr", value: address },
        { name: "amount", value: amount.toString() },
      ],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get allow self allowance
 * Operation: getallowselfallowance
 */
export const getAllowSelfAllowance = async ({
  address,
}: {
  address: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getallowselfallowance",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get self minimum allowance
 * Operation: getselfminimumallowance
 */
export const getSelfMinimumAllowance = async ({
  address,
}: {
  address: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getselfminimumallowance",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get self maximum allowance
 * Operation: getselfmaximumallowance
 */
export const getSelfMaximumAllowance = async ({
  address,
}: {
  address: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getselfmaximumallowance",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Get self allowance
 * Operation: getselfallowance
 */
export const getSelfAllowance = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "getselfallowance",
      params: [{ name: "addr", value: address }],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Check if transfer is enabled
 * Operation: istransferon
 */
export const isTransferOn = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "istransferon",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Check if minting is enabled
 * Operation: isminton
 */
export const isMintOn = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "isminton",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Check if burning is enabled
 * Operation: isburnon
 */
export const isBurnOn = async () => {
  try {
    const url = `${getBaseURL()}/api/token/toro`;
    const data = {
      op: "isburnon",
      params: [],
    };
    const config = {
      method: "get",
      url: url,
      headers: { "Content-Type": "application/json" },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

