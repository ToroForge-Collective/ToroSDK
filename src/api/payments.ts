import axios from "axios";
import { getBaseURL, getConnectWURL } from "./config";
import { InitializeDepositInput, PaymentExtrasInput } from "../types/api";
import { KYCParams } from "../types/params";
import { Currency } from "../types/currency";

const initializeDeposit = async (
  {
    usrAddr,
    username,
    amount,
    currency,
    admin,
    adminpwd,
  }: InitializeDepositInput,
  extraData?: PaymentExtrasInput
) => {
  const url = `${getBaseURL()}/api/payment/toro/`;
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
      { name: "feetype", value: extraData?.feetype ?? "1" },
      { name: "exchange", value: extraData?.exchange ?? "72" },
      { name: "reusewallet", value: extraData?.reusewallet ?? "0" },
      { name: "payername", value: username },
      {
        name: "payeraddress",
        value: extraData?.payeraddress ?? "11 Olaoye Close",
      },
      { name: "payercity", value: extraData?.payercity ?? "Lagos" },
      { name: "payerstate", value: extraData?.payerstate ?? "" },
      { name: "payercountry", value: extraData?.payercountry ?? "" },
      { name: "payerzipcode", value: extraData?.payerzipcode ?? "" },
      { name: "payerphone", value: extraData?.payerphone ?? "" },
      { name: "description", value: extraData?.description ?? "Deposit" },
      { name: "commissionrate", value: extraData?.commissionrate ?? "0" },
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
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

// Verify Deposit - Confirms user has completed the transfer
const verifyDeposit = async (currency: string, txid: string) => {
  const url = `${getBaseURL()}/api/payment/toro/`;
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
    const url = `${getBaseURL()}/api/payment/toro/`;

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
    const url = `${getConnectWURL()}/api/verified/check-kyc`;
    const data = {
      address: address,
    };
    const response = await axios.post(url, data);
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

const makeInterWalletTransfer = async (
  senderAddr: string,
  senderPwd: string,
  receiverAddr: string,
  amount: string,
  currencyName: string
) => {
  const currencyConfig: Record<string, string> = {
    "NGN": "naira",
    "USD": "dollar",
    "EUR": "EUR",
    "GBP": "GBP",
    "KES": "KES",
    "ZAR": "ZAR",
  };
  const currencyValue = currencyConfig[currencyName];
  const url = `${getBaseURL()}/api/currency/${currencyValue}/cl`;
  const data = {
    op: "transfer",
    params: [
      { name: "client", value: senderAddr },
      { name: "clientpwd", value: senderPwd },
      { name: "to", value: receiverAddr },
      { name: "val", value: amount.toString() },
    ],
  };
  const response = await axios.post(url, data);
  //console.log("Response:", response.data);
  if (response.data.result == false)
   {
    throw new Error(response.data.error);
   }
  return response.data;
};

/**
 * Get USD bank list
 * Operation: getbanklist_usd
 */
export const getBankListUSD = async ({
  admin,
  adminpwd,
}: {
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const data = {
      op: "getbanklist_usd",
      params: [],
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get NGN bank list
 * Operation: getbanklist_ngn
 */
export const getBankListNGN = async ({
  admin,
  adminpwd,
}: {
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const data = {
      op: "getbanklist_ngn",
      params: [],
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get fiat transaction by TXID
 * Operation: getfiattransactions_txid
 */
export const getFiatTransactionByTxid = async ({
  txid,
  admin,
  adminpwd,
}: {
  txid: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/`;
    const data = {
      op: "getfiattransactions_txid",
      params: [{ name: "txid", value: txid }],
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get fiat withdrawal by TXID
 * Operation: getfiatwithdrawals_txid
 */
export const getFiatWithdrawalByTxid = async ({
  txid,
  admin,
  adminpwd,
}: {
  txid: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const data = {
      op: "getfiatwithdrawals_txid",
      params: [{ name: "txid", value: txid }],
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Record fiat withdrawal
 * Operation: recordfiatwithdrawal
 */
export const recordFiatWithdrawal = async ({
  address,
  password,
  currency,
  token,
  payername,
  payeremail,
  payeraddress,
  payercity,
  payerstate,
  payercountry,
  payerzipcode,
  payerphone,
  description,
  amount,
  accounttype,
  bankname,
  routingno,
  accountno,
  expirydate,
  accountname,
  recipientstate,
  recipientzip,
  recipientphone,
  admin,
  adminpwd,
}: {
  address: string;
  password: string;
  currency: string;
  token: string;
  payername: string;
  payeremail: string;
  payeraddress?: string;
  payercity?: string;
  payerstate?: string;
  payercountry?: string;
  payerzipcode?: string;
  payerphone?: string;
  description: string;
  amount: string;
  accounttype: string;
  bankname: string;
  routingno: string;
  accountno: string;
  expirydate?: string;
  accountname: string;
  recipientstate?: string;
  recipientzip?: string;
  recipientphone?: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const params: Array<{ name: string; value: string }> = [
      { name: "addr", value: address },
      { name: "pwd", value: password },
      { name: "currency", value: currency },
      { name: "token", value: token },
      { name: "payername", value: payername },
      { name: "payeremail", value: payeremail },
      { name: "description", value: description },
      { name: "amount", value: amount },
      { name: "accounttype", value: accounttype },
      { name: "bankname", value: bankname },
      { name: "routingno", value: routingno },
      { name: "accountno", value: accountno },
      { name: "accountname", value: accountname },
    ];

    if (payeraddress) params.push({ name: "payeraddress", value: payeraddress });
    if (payercity) params.push({ name: "payercity", value: payercity });
    if (payerstate) params.push({ name: "payerstate", value: payerstate });
    if (payercountry) params.push({ name: "payercountry", value: payercountry });
    if (payerzipcode) params.push({ name: "payerzipcode", value: payerzipcode });
    if (payerphone) params.push({ name: "payerphone", value: payerphone });
    if (expirydate) params.push({ name: "expirydate", value: expirydate });
    if (recipientstate) params.push({ name: "recipientstate", value: recipientstate });
    if (recipientzip) params.push({ name: "recipientzip", value: recipientzip });
    if (recipientphone) params.push({ name: "recipientphone", value: recipientphone });

    const data = {
      op: "recordfiatwithdrawal",
      params,
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Verify NGN bank account name
 * Operation: verifybankaccountname_ngn
 */
export const verifyBankAccountNameNGN = async ({
  destinationInstitutionCode,
  accountNumber,
  admin,
  adminpwd,
}: {
  destinationInstitutionCode: string;
  accountNumber: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const data = {
      op: "verifybankaccountname_ngn",
      params: [
        { name: "destinationInstitutionCode", value: destinationInstitutionCode },
        { name: "accountNumber", value: accountNumber },
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get pending transaction status
 * Operation: getpendingtransaction
 */
export const getPendingTransaction = async ({
  txid,
  admin,
  adminpwd,
}: {
  txid: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    // Note: This endpoint uses toronet.connectw.com according to Postman collection
    const url = `https://toronet.connectw.com/api/payment/toro/`;
    const data = {
      op: "getpendingtransaction",
      params: [{ name: "txid", value: txid }],
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get fiat transactions by address and date range
 * Operation: getfiattransactions_address_range
 */
export const getFiatTransactionsAddressRange = async ({
  address,
  startDate,
  endDate,
  currency,
  token,
  admin,
  adminpwd,
}: {
  address: string;
  startDate: string; // Format: YYYY-MM-DD
  endDate: string; // Format: YYYY-MM-DD
  currency?: string;
  token?: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const params: Array<{ name: string; value: string }> = [
      { name: "addr", value: address },
      { name: "startdate", value: startDate },
      { name: "enddate", value: endDate },
    ];
    if (currency) params.push({ name: "currency", value: currency });
    if (token) params.push({ name: "token", value: token });

    const data = {
      op: "getfiattransactions_address_range",
      params,
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get fiat withdrawals by address and date range
 * Operation: getfiatwithdrawals_address_range
 */
export const getFiatWithdrawalsAddressRange = async ({
  address,
  startDate,
  endDate,
  currency,
  token,
  admin,
  adminpwd,
}: {
  address: string;
  startDate: string; // Format: YYYY-MM-DD
  endDate: string; // Format: YYYY-MM-DD
  currency?: string;
  token?: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const params: Array<{ name: string; value: string }> = [
      { name: "addr", value: address },
      { name: "startdate", value: startDate },
      { name: "enddate", value: endDate },
    ];
    if (currency) params.push({ name: "currency", value: currency });
    if (token) params.push({ name: "token", value: token });

    const data = {
      op: "getfiatwithdrawals_address_range",
      params,
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get fiat transactions by recorder and date range
 * Operation: getfiattransactions_recorder_range
 */
export const getFiatTransactionsRecorderRange = async ({
  address,
  startDate,
  endDate,
  currency,
  admin,
  adminpwd,
}: {
  address: string;
  startDate: string; // Format: YYYY-MM-DD
  endDate: string; // Format: YYYY-MM-DD
  currency?: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const params: Array<{ name: string; value: string }> = [
      { name: "addr", value: address },
      { name: "startdate", value: startDate },
      { name: "enddate", value: endDate },
    ];
    if (currency) params.push({ name: "currency", value: currency });

    const data = {
      op: "getfiattransactions_recorder_range",
      params,
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Get fiat withdrawals by recorder and date range
 * Operation: getfiatwithdrawals_recorder_range
 */
export const getFiatWithdrawalsRecorderRange = async ({
  address,
  startDate,
  endDate,
  currency,
  token,
  admin,
  adminpwd,
}: {
  address: string;
  startDate: string; // Format: YYYY-MM-DD
  endDate: string; // Format: YYYY-MM-DD
  currency?: string;
  token?: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getBaseURL()}/api/payment/toro/`;
    const params: Array<{ name: string; value: string }> = [
      { name: "addr", value: address },
      { name: "startdate", value: startDate },
      { name: "enddate", value: endDate },
    ];
    if (currency) params.push({ name: "currency", value: currency });
    if (token) params.push({ name: "token", value: token });

    const data = {
      op: "getfiatwithdrawals_recorder_range",
      params,
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
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

export {
  initializeDeposit,
  verifyDeposit,
  setupKYC,
  checkAddressVerified,
  makeInterWalletTransfer,
};
