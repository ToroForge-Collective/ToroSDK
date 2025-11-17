import axios from "axios";
import { getBaseURL } from "./config";

export const getStatus = async () => {
  try {
    const url = `${getBaseURL()}/api/blockchain/`;
  

    const config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.response ? error.response.data : error.message);
  }
}

export const getLatestBlock = async () => {
  try {
    const url = `${getBaseURL()}/api/blockchain/`;
    const data = {
      op: "getblock",
      params: [{ name: "id", value: "latest" }],
    };
    const config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.response ? error.response.data : error.message);
  }
}

export const getTransaction = async (txHash: string) => {
  try {
    const url = `${getBaseURL()}/api/blockchain/`;
    const data = {
      op: "gettransaction",
      params: [{ name: "id", value: txHash }],
    };
    const config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const getReceipt = async (txHash: string) => {
  try {
    const url = `${getBaseURL()}/api/blockchain/`;
    const data = {
      op: "getreceipt",
      params: [{ name: "id", value: txHash }],
    };
    const config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export const getRevertReason = async (txHash: string) => {
  try {
    const url = `${getBaseURL()}/api/blockchain/`;
    const data = {
      op: "getrevertreason",
      params: [{ name: "id", value: txHash }],
    };
    const config = {
      method: "post",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios(config);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};