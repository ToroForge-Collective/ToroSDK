import axios from "axios";
import { BASE_URL } from "./config";
import { InitializeDepositInput } from "../types/api";

const initializeDeposit = async ({
  usrAddr,
  username,
  amount,
  currency,
  admin,
  adminpwd,
}: InitializeDepositInput) => {
  const url = `${BASE_URL}/api/payment/toro/`;
  const data = {
    op: "paymentinitialize",
    params: [
      { name: "currency", value: currency }, // USD or NGN
      { name: "token", value: currency },
      { name: "address", value: usrAddr },
      { name: "amount", value: amount },
      { name: "success_url", value: "https://yourweb.com/pmt/done?" },
      { name: "cancel_url", value: "https://toronet.org/cancel" },
      { name: "paymenttype", value: currency === "USD" ? "card" : "bank" },
      { name: "feetype", value: "1" },
      { name: "exchange", value: "72" },
      { name: "reusewallet", value: "0" },
      { name: "payername", value: username },
      { name: "payeraddress", value: "11 Olaoye Close" },
      { name: "payercity", value: "Lagos" },
      { name: "payerstate", value: "" },
      { name: "payercountry", value: "" },
      { name: "payerzipcode", value: "" },
      { name: "payerphone", value: "" },
      { name: "description", value: "Deposit" },
    ],
  };

  const config = {
    headers: {
      adminpwd: adminpwd,
      admin: admin,
    },
  };

  try {
    const response = await axios.post(url, data, config);
    console.dir(response.data, { depth: null });
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

// Verify Deposit - Confirms user has completed the transfer
const verifyDeposit = async (currency: string, txid: string) => {
  const url = `${BASE_URL}/api/payment/toro/`;
  const data = {
    op: "recordfiattransaction",
    params: [
      { name: "currency", value: currency },
      { name: "txid", value: txid },
      { name: "paymenttype", value: currency === "USD" ? "card" : "bank" },
    ],
  };

  try {
    const response = await axios.post(url, data);
    console.log("Verify Deposit Response:", response.data);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data.result;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

export { initializeDeposit, verifyDeposit };
