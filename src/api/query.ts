import axios from "axios";
import { BASE_URL,  } from "./config";

export const getExchangeRates = async () => {
  try {
    const url = `${BASE_URL}/api/query/`;
    const data = {
      op: "get_exchange_rates",
      params: [],
    };

    const config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
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
};

export const getBlocks = async ({ count }: { count: number }) => {
  try {
    const url = `${BASE_URL}/api/query/`;
    const data = {
      op: "getblocks",
      params: [{ name: "count", value: count }],
    };

    const config = {
      method: "get",
      url: url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
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
};

export const getTransactions = async ({count}: { count: number }) => {
    try {
        const url = `${BASE_URL}/api/query/`;
        const data = {
        op: "gettransactions",
        params: [{ name: "count", value: count }],
        };
    
        const config = {
        method: "get",
        url: url,
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
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
