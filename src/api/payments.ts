import axios from "axios";
import { BASE_URL, CONNECTW_URL } from "./config";
import { InitializeDepositInput } from "../types/api";
import { KYCParams } from "../types/params";

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
      { name: "paymenttype", value: currency === "USD" ? "card" : "card" },
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

const setupKYC = async ({
  firstName,
  middleName,
  lastName,
  bvn,
  currency,
  phoneNumber,
  dob,
  address,
  admin,
  adminpwd,
}: KYCParams) => {
  try {
    const url = `${BASE_URL}/api/payment/toro/`;

    const config = {
      headers: {
        admin: admin,
        adminpwd: adminpwd,
      },
    };

    const data = {
      op: "check_kyc",
      params: [
        { name: "currency", value: currency },
        { name: "bvn", value: bvn },
        { name: "firstName", value: firstName },
        { name: "lastName", value: lastName },
        { name: "middleName", value: middleName },
        { name: "phoneNumber", value: phoneNumber },
        { name: "dob", value: dob },
        { name: "address", value: address },
      ],
    };

    const response = await axios.post(url, data, config);
    console.log("Response:", response.data);

    if (response.data.result == false) {
      throw new Error(response.data.error);
    }
    return response.data;
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.response ? error.response.data : error.message);
  }
};

const checkAddressVerified = async (address: string) => {
  try {
    const url = `${CONNECTW_URL}/api/verified/check-kyc`;
    const data = {
      address: address,
    };
    const response = await axios.post(url, data);
    console.log("Response:", response.data);
    return {
      verified: response.data.verified,
      provider: response.data.provider,
    };
  } catch (error: any) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
    throw new Error(error.response ? error.response.data : error.message);
  }
};

export { initializeDeposit, verifyDeposit, setupKYC, checkAddressVerified };
