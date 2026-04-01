import axios from "axios";
import { getBaseURL } from "./config";

/**
 * Check if storage is enabled
 * Operation: isstorageon
 */
export const isStorageOn = async () => {
  try {
    const url = `${getBaseURL()}/storage`;
    const data = {
      op: "isstorageon",
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
 * Check if contract is registered in storage
 * Operation: iscontractregistered
 */
export const isContractRegistered = async ({
  contract,
}: {
  contract: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage`;
    const data = {
      op: "iscontractregistered",
      params: [{ name: "contract", value: contract }],
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
 * Get storage version
 * Operation: getstorageversion
 */
export const getStorageVersion = async () => {
  try {
    const url = `${getBaseURL()}/storage`;
    const data = {
      op: "getstorageversion",
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
 * Check if address is storage owner
 * Operation: isowner
 */
export const isOwner = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/storage`;
    const data = {
      op: "isowner",
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
 * Get storage owner address
 * Operation: getowner
 */
export const getOwner = async () => {
  try {
    const url = `${getBaseURL()}/storage`;
    const data = {
      op: "getowner",
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
 * Enable storage (owner operation)
 * Operation: setstorageon
 */
export const setStorageOn = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "setstorageon",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Disable storage (owner operation)
 * Operation: setstorageoff
 */
export const setStorageOff = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "setstorageoff",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Register contract in storage (owner operation)
 * Operation: registercontract
 */
export const registerContract = async ({
  address,
  password,
  contract,
}: {
  address: string;
  password: string;
  contract: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "registercontract",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "contract", value: contract },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Unregister contract from storage (owner operation)
 * Operation: unregistercontract
 */
export const unregisterContract = async ({
  address,
  password,
  contract,
}: {
  address: string;
  password: string;
  contract: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "unregistercontract",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "contract", value: contract },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Increase storage version (owner operation)
 * Operation: increasestorageversion
 */
export const increaseStorageVersion = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "increasestorageversion",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Decrease storage version (owner operation)
 * Operation: decreasestorageversion
 */
export const decreaseStorageVersion = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "decreasestorageversion",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Set specific storage version (owner operation)
 * Operation: setstorageversion
 */
export const setStorageVersion = async ({
  address,
  password,
  version,
}: {
  address: string;
  password: string;
  version: string | number;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "setstorageversion",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "version", value: version.toString() },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Transfer storage ownership (owner operation)
 * Operation: transferownership
 */
export const transferOwnership = async ({
  address,
  password,
  newOwner,
}: {
  address: string;
  password: string;
  newOwner: string;
}) => {
  try {
    const url = `${getBaseURL()}/storage/ow`;
    const data = {
      op: "transferownership",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "newowner", value: newOwner },
      ],
    };
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

