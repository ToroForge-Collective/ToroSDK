import axios from "axios";
import { BASE_URL,  } from "./config";

export const getStatus = async () => {
  try {
    const url = `${BASE_URL}/api/blockchain/`;
  

    const config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    console.dir(response.data, { depth: null });
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
    const url = `${BASE_URL}/api/blockchain/`;
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
    console.dir(response.data, { depth: null });
    return response.data;
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.response ? error.response.data : error.message);
  }
}