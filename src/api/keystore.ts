import axios from "axios";
import { getBaseURL } from "./config";

export const importKey = async ({
  privateKey,
  password,
}: {
  privateKey: string;
  password: string;
}) => {
  const url = `${getBaseURL()}/api/keystore/`;
  const data = {
    op: "importkey",
    params: [
      { name: "prvkey", value: privateKey },
      { name: "pwd", value: password },
    ],
  };

  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data.address;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

export const verifyKey = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}): Promise<Boolean> => {
  const url = `${getBaseURL()}/api/keystore/`;
  const data = {
    op: "verifykey",
    params: [
      { name: "addr", value: address },
      { name: "pwd", value: password },
    ],
  };

  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data.result;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

export const getKey = async ({ address }: { address: string }) => {
  const url = `${getBaseURL()}/api/keystore/`;
  const data = {
    op: "getkey",
    params: [{ name: "addr", value: address }],
  };
  const config = {
    method: "get",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const response = await axios(config);
    if (!response.data.keystoredata) throw new Error(response.data.error);
    return response.data.keystoredata;
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.response ? error.response.data : error.message);
  }
};

/**
 * Update keystore password
 * Operation: updatekeypwd
 */
export const updateKeyPassword = async ({
  address,
  oldPassword,
  newPassword,
}: {
  address: string;
  oldPassword: string;
  newPassword: string;
}) => {
  const url = `${getBaseURL()}/api/keystore`;
  const data = {
    op: "updatekeypwd",
    params: [
      { name: "addr", value: address },
      { name: "oldpwd", value: oldPassword },
      { name: "newpwd", value: newPassword },
    ],
  };

  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error || "Failed to update password");
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Delete keystore from server
 * Operation: deletekey
 */
export const deleteKey = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  const url = `${getBaseURL()}/api/keystore`;
  const data = {
    op: "deletekey",
    params: [
      { name: "addr", value: address },
      { name: "pwd", value: password },
    ],
  };

  try {
    const response = await axios.post(url, data);
    if (!response.data.result) throw new Error(response.data.error || "Failed to delete keystore");
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};
