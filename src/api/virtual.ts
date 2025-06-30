import axios from "axios";
import { BASE_URL } from "./config";

// NOTE: If you see a linter error about Object.entries, update tsconfig.json lib to include "es2017" or later.

// 1. generatevirtualwallet
export const generateVirtualWallet = async ({
  address,
  payername,
  currency,
  admin,
  adminpwd
}: {
  address: string;
  payername: string;
  currency: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${BASE_URL}/api/payment/toro/`;
    const data = {
      op: "generatevirtualwallet",
      params: [
        { name: "address", value: address },
        { name: "payername", value: payername },
        { name: "currency", value: currency },
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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// 2. retrievevirtualwallet
export const retrieveVirtualWallet = async ({
  virtualwallet,
  admin,
  adminpwd
}: {
  virtualwallet: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${BASE_URL}/api/payment/`;
    const data = {
      op: "retrievevirtualwallet",
      params: [
        { name: "virtualwallet", value: virtualwallet },
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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// 3. getvirtualwalletbyaddress
export const getVirtualWalletByAddress = async ({
  address,
  admin,
  adminpwd
}: {
  address: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${BASE_URL}/api/payment/`;
    const data = {
      op: "getvirtualwalletbyaddress",
      params: [
        { name: "address", value: address },
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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};

// 4. updatevirtualwallettransactions
export const updateVirtualWalletTransactions = async ({
  walletaddress,
  admin,
  adminpwd
}: {
  walletaddress: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${BASE_URL}/api/payment/`;
    const data = {
      op: "updatevirtualwallettransactions",
      params: [
        { name: "walletaddress", value: walletaddress },
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
    return response.data;
  } catch (error: any) {
    throw new Error(error.response ? error.response.data : error.message);
  }
};
