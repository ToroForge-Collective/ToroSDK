import axios from "axios";
import { getBaseURL } from "./config";

/**
 * Get TNS name by address
 * Operation: getname
 */
export const getName = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/tns`;
    const data = {
      op: "getname",
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
 * Get address by TNS name
 * Operation: getaddr
 */
export const getAddr = async ({ name }: { name: string }) => {
  try {
    const url = `${getBaseURL()}/tns`;
    const data = {
      op: "getaddr",
      params: [{ name: "name", value: name }],
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
 * Check if address has TNS name assigned
 * Operation: isaddrassigned
 */
export const isAddrAssigned = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/tns`;
    const data = {
      op: "isaddrassigned",
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
 * Check if TNS set name is enabled
 * Operation: isseton
 */
export const isSetOn = async () => {
  try {
    const url = `${getBaseURL()}/tns`;
    const data = {
      op: "isseton",
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
 * Check if TNS update is enabled
 * Operation: isupdateon
 */
export const isUpdateOn = async () => {
  try {
    const url = `${getBaseURL()}/tns`;
    const data = {
      op: "isupdateon",
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
 * Check if TNS delete is enabled
 * Operation: isdeleteon
 */
export const isDeleteOn = async () => {
  try {
    const url = `${getBaseURL()}/tns`;
    const data = {
      op: "isdeleteon",
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
 * Initialize TNS system (owner operation)
 * Operation: inittns
 */
export const initTNS = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/ow`;
    const data = {
      op: "inittns",
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
 * Enable set name permission (super admin)
 * Operation: setsetnameon
 */
export const setSetNameOn = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/sa`;
    const data = {
      op: "setsetnameon",
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
 * Disable set name permission (super admin)
 * Operation: setsetnameoff
 */
export const setSetNameOff = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/sa`;
    const data = {
      op: "setsetnameoff",
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
 * Enable update name permission (super admin)
 * Operation: setupdatenameon
 */
export const setUpdateNameOn = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/sa`;
    const data = {
      op: "setupdatenameon",
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
 * Disable update name permission (super admin)
 * Operation: setupdatenameoff
 */
export const setUpdateNameOff = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/sa`;
    const data = {
      op: "setupdatenameoff",
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
 * Enable delete name permission (super admin)
 * Operation: setdeletenameon
 */
export const setDeleteNameOn = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/sa`;
    const data = {
      op: "setdeletenameon",
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
 * Disable delete name permission (super admin)
 * Operation: setdeletenameoff
 */
export const setDeleteNameOff = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/sa`;
    const data = {
      op: "setdeletenameoff",
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
 * Update existing TNS name (client operation)
 * Operation: updatename
 */
export const updateName = async ({
  address,
  password,
  username,
}: {
  address: string;
  password: string;
  username: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/cl`;
    const data = {
      op: "updatename",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "name", value: username },
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
 * Delete TNS name (client operation)
 * Operation: deletename
 */
export const deleteName = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/cl`;
    const data = {
      op: "deletename",
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
 * Admin set name (admin operation)
 * Operation: adminsetname
 */
export const adminSetName = async ({
  address,
  username,
  admin,
  adminpwd,
}: {
  address: string;
  username: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/ad`;
    const data = {
      op: "adminsetname",
      params: [
        { name: "client", value: address },
        { name: "name", value: username },
      ],
    };
    const config = {
      headers: {
        admin,
        adminpwd,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Admin update name (admin operation)
 * Operation: adminupdatename
 */
export const adminUpdateName = async ({
  address,
  username,
  admin,
  adminpwd,
}: {
  address: string;
  username: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/ad`;
    const data = {
      op: "adminupdatename",
      params: [
        { name: "client", value: address },
        { name: "name", value: username },
      ],
    };
    const config = {
      headers: {
        admin,
        adminpwd,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Admin delete name (admin operation)
 * Operation: admindeletename
 */
export const adminDeleteName = async ({
  address,
  admin,
  adminpwd,
}: {
  address: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/tns/ad`;
    const data = {
      op: "admindeletename",
      params: [{ name: "client", value: address }],
    };
    const config = {
      headers: {
        admin,
        adminpwd,
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

