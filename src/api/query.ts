import axios from "axios";
import { getBaseURL } from "./config";

export const getExchangeRates = async () => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getexchangerates",
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
    //console.dir(response.data, { depth: null });
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
    const url = `${getBaseURL()}/query/`;
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
        const url = `${getBaseURL()}/query/`;
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
        return response.data;
    } catch (error: any) {
        console.error(
        "Error:",
        error.response ? error.response.data : error.message
        );
        throw new Error(error.response ? error.response.data : error.message);
    }
}

export const getAddrRole = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrrole",
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

export const getAddrBalance = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrbalance",
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

export const getBlock = async ({ id }: { id: string }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getblock",
      params: [{ name: "id", value: id }],
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

export const getTransactionById = async ({ id }: { id: string }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransaction",
      params: [{ name: "id", value: id }],
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

export const getTransactionReceipt = async ({ id }: { id: string }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactionreceipt",
      params: [{ name: "id", value: id }],
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

export const getEvent = async ({ id }: { id: string }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getevent",
      params: [{ name: "id", value: id }],
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

export const getAddrTransactions = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsToro = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_toro",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsToro = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_toro",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsDollar = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_dollar",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsDollar = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_dollar",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsNaira = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_naira",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsNaira = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_naira",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsEuro = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_euro",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsEuro = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_euro",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsPound = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_pound",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsPound = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_pound",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsEGP = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_egp",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsEGP = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_egp",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsKSH = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_ksh",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsKSH = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_ksh",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsZAR = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_zar",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsZAR = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_zar",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsETH = async ({ count }: { count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_eth",
      params: [{ name: "count", value: count }],
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

export const getAddrTransactionsETH = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_eth",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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

export const getTransactionsRange = async ({ start, end }: { start: number, end: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "gettransactions_range",
      params: [
        { name: "start", value: start },
        { name: "end", value: end },
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

export const getAddrTransactionsAuth = async ({ address, count }: { address: string, count: number }) => {
  try {
    const url = `${getBaseURL()}/query/`;
    const data = {
      op: "getaddrtransactions_auth",
      params: [
        { name: "addr", value: address },
        { name: "count", value: count },
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
 * Get address transactions with date range and token filter
 * Operation: getaddrtransactions_range
 */
export const getAddrTransactionsRange = async ({
  address,
  count,
  start,
  startDate,
  endDate,
  token,
}: {
  address: string;
  count?: number;
  start?: number;
  startDate?: string; // Format: YYYY-MM-DD
  endDate?: string; // Format: YYYY-MM-DD
  token?: string; // Optional token filter (e.g., "NGN", "USD")
}) => {
  try {
    const url = `${getBaseURL()}/query`;
    const params: Array<{ name: string; value: string | number }> = [
      { name: "addr", value: address },
    ];
    if (count !== undefined) params.push({ name: "count", value: count });
    if (start !== undefined) params.push({ name: "start", value: start });
    if (startDate) params.push({ name: "startdate", value: startDate });
    if (endDate) params.push({ name: "enddate", value: endDate });
    if (token) params.push({ name: "token", value: token });

    const data = {
      op: "getaddrtransactions_range",
      params,
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

// isaddress utility endpoint
export const isAddress = async ({ address }: { address: string }) => {
  try {
    const url = `${getBaseURL()}/util/`;
    const data = {
      op: "isaddress",
      params: [{ name: "address", value: address }],
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
