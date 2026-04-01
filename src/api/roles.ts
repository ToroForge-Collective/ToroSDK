import axios from "axios";
import { getBaseURL } from "./config";

// ============ ADMIN ROLE OPERATIONS ============

/**
 * Check if address is admin
 * Operation: isadmin
 */
export const isAdmin = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/role/admin`;
    const data = {
      op: "isadmin",
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
 * Get admin index
 * Operation: getadminindex
 */
export const getAdminIndex = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/role/admin`;
    const data = {
      op: "getadminindex",
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
 * Get number of admins
 * Operation: getnumberofadmin
 */
export const getNumberOfAdmin = async () => {
  try {
    const url = `${getBaseURL()}/role/admin`;
    const data = {
      op: "getnumberofadmin",
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
 * Get admin by index
 * Operation: getadminbyindex
 */
export const getAdminByIndex = async ({ index }: { index: number }) => {
  try {
    const url = `${getBaseURL()}/role/admin`;
    const data = {
      op: "getadminbyindex",
      params: [{ name: "index", value: index }],
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
 * Initialize admin system (owner operation)
 * Operation: initadmin
 */
export const initAdmin = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/admin/ow`;
    const data = {
      op: "initadmin",
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
 * Add admin (super admin operation)
 * Operation: addadmin
 */
export const addAdmin = async ({
  address,
  password,
  adminAddress,
}: {
  address: string;
  password: string;
  adminAddress: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/admin/sa`;
    const data = {
      op: "addadmin",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "addr", value: adminAddress },
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
 * Remove admin (super admin operation)
 * Operation: removeadmin
 */
export const removeAdmin = async ({
  address,
  password,
  adminAddress,
}: {
  address: string;
  password: string;
  adminAddress: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/admin/sa`;
    const data = {
      op: "removeadmin",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "addr", value: adminAddress },
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
 * Remove all admins (super admin operation)
 * Operation: removealladmins
 */
export const removeAllAdmins = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/admin/sa`;
    const data = {
      op: "removealladmins",
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

// ============ SUPER ADMIN ROLE OPERATIONS ============

/**
 * Check if address is super admin
 * Operation: issuperadmin
 */
export const isSuperAdmin = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/role/superadmin`;
    const data = {
      op: "issuperadmin",
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
 * Get super admin index
 * Operation: getsuperadminindex
 */
export const getSuperAdminIndex = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/role/superadmin`;
    const data = {
      op: "getsuperadminindex",
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
 * Get number of super admins
 * Operation: getnumberofsuperadmin
 */
export const getNumberOfSuperAdmin = async () => {
  try {
    const url = `${getBaseURL()}/role/superadmin`;
    const data = {
      op: "getnumberofsuperadmin",
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
 * Get super admin by index
 * Operation: getsuperadminbyindex
 */
export const getSuperAdminByIndex = async ({ index }: { index: number }) => {
  try {
    const url = `${getBaseURL()}/role/superadmin`;
    const data = {
      op: "getsuperadminbyindex",
      params: [{ name: "index", value: index }],
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
 * Initialize super admin system (owner operation)
 * Operation: initsuperadmin
 */
export const initSuperAdmin = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/superadmin/ow`;
    const data = {
      op: "initsuperadmin",
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
 * Add super admin (super admin operation)
 * Operation: addsuperadmin
 */
export const addSuperAdmin = async ({
  address,
  password,
  superAdminAddress,
}: {
  address: string;
  password: string;
  superAdminAddress: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/superadmin/sa`;
    const data = {
      op: "addsuperadmin",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "addr", value: superAdminAddress },
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
 * Remove super admin (super admin operation)
 * Operation: removesuperadmin
 */
export const removeSuperAdmin = async ({
  address,
  password,
  superAdminAddress,
}: {
  address: string;
  password: string;
  superAdminAddress: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/superadmin/sa`;
    const data = {
      op: "removesuperadmin",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "addr", value: superAdminAddress },
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
 * Remove all super admins (super admin operation)
 * Operation: removeallsuperadmins
 */
export const removeAllSuperAdmins = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/superadmin/db`;
    const data = {
      op: "removeallsuperadmins",
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

// ============ DEBUGGER ROLE OPERATIONS ============

/**
 * Check if address is debugger
 * Operation: isdebugger
 */
export const isDebugger = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/role/debugger`;
    const data = {
      op: "isdebugger",
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
 * Get debugger index
 * Operation: getdebuggerindex
 */
export const getDebuggerIndex = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/role/debugger`;
    const data = {
      op: "getdebuggerindex",
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
 * Get number of debuggers
 * Operation: getnumberofdebugger
 */
export const getNumberOfDebugger = async () => {
  try {
    const url = `${getBaseURL()}/role/debugger`;
    const data = {
      op: "getnumberofdebugger",
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
 * Get debugger by index
 * Operation: getdebuggerbyindex
 */
export const getDebuggerByIndex = async ({ index }: { index: number }) => {
  try {
    const url = `${getBaseURL()}/role/debugger`;
    const data = {
      op: "getdebuggerbyindex",
      params: [{ name: "index", value: index }],
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
 * Initialize debugger system (owner operation)
 * Operation: initdebugger
 */
export const initDebugger = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/debugger/ow`;
    const data = {
      op: "initdebugger",
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
 * Add debugger (debugger operation)
 * Operation: adddebugger
 */
export const addDebugger = async ({
  address,
  password,
  debuggerAddress,
}: {
  address: string;
  password: string;
  debuggerAddress: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/debugger/db`;
    const data = {
      op: "adddebugger",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "addr", value: debuggerAddress },
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
 * Remove debugger (debugger operation)
 * Operation: removedebugger
 */
export const removeDebugger = async ({
  address,
  password,
  debuggerAddress,
}: {
  address: string;
  password: string;
  debuggerAddress: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/debugger/db`;
    const data = {
      op: "removedebugger",
      params: [
        { name: "client", value: address },
        { name: "clientpwd", value: password },
        { name: "addr", value: debuggerAddress },
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
 * Remove all debuggers (owner operation)
 * Operation: removealldebuggers
 */
export const removeAllDebuggers = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  try {
    const url = `${getBaseURL()}/role/debugger/ow`;
    const data = {
      op: "removealldebuggers",
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

