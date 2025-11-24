import axios from "axios";
import { getBaseURL } from "../config";
import { PaymentInitializeCryptoParams, RecordPaymentParams } from "../../types/bridge";

/**
 * Initialize crypto payment deposit
 * Operation: paymentinitialize
 * Used for crypto deposits from external chains (Solana, Base, Polygon, BSC, Arbitrum)
 */
export const paymentInitializeCrypto = async (
  params: PaymentInitializeCryptoParams,
  admin: string,
  adminpwd: string
) => {
  try {
    const url = `${getBaseURL()}/payment/`;
    const paramsArray: any[] = [
      { name: "address", value: params.address },
      { name: "pwd", value: params.pwd },
      { name: "currency", value: params.currency },
      { name: "token", value: params.token },
      { name: "amount", value: params.amount }
    ];

    // Add optional parameters
    if (params.success_url) paramsArray.push({ name: "success_url", value: params.success_url });
    if (params.cancel_url) paramsArray.push({ name: "cancel_url", value: params.cancel_url });
    if (params.paymenttype) paramsArray.push({ name: "paymenttype", value: params.paymenttype });
    if (params.passthrough) paramsArray.push({ name: "passthrough", value: params.passthrough });
    if (params.commissionrate) paramsArray.push({ name: "commissionrate", value: params.commissionrate });
    if (params.exchange) paramsArray.push({ name: "exchange", value: params.exchange });
    if (params.payername) paramsArray.push({ name: "payername", value: params.payername });
    if (params.payeraddress) paramsArray.push({ name: "payeraddress", value: params.payeraddress });
    if (params.payercity) paramsArray.push({ name: "payercity", value: params.payercity });
    if (params.payerstate) paramsArray.push({ name: "payerstate", value: params.payerstate });
    if (params.payercountry) paramsArray.push({ name: "payercountry", value: params.payercountry });
    if (params.payerzipcode) paramsArray.push({ name: "payerzipcode", value: params.payerzipcode });
    if (params.payerphone) paramsArray.push({ name: "payerphone", value: params.payerphone });
    if (params.reusewallet) paramsArray.push({ name: "reusewallet", value: params.reusewallet });
    if (params.description) paramsArray.push({ name: "description", value: params.description });
    if (params.reference) paramsArray.push({ name: "reference", value: params.reference });

    const data = {
      op: "paymentinitialize",
      params: paramsArray
    };

    const config = {
      headers: {
        admin: admin,
        adminpwd: adminpwd,
        "Content-Type": "application/json"
      }
    };

    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

/**
 * Record crypto payment transaction
 * Operation: recordpayment
 * Used to record completed crypto deposits from external chains
 */
export const recordCryptoPayment = async (
  params: RecordPaymentParams,
  admin: string,
  adminpwd: string
) => {
  try {
    const url = `${getBaseURL()}/payment/`;
    const data = {
      op: "recordpayment",
      params: [
        { name: "currency", value: params.currency },
        { name: "txid", value: params.txid }
      ]
    };

    const config = {
      headers: {
        admin: admin,
        adminpwd: adminpwd,
        "Content-Type": "application/json"
      }
    };

    const response = await axios.post(url, data, config);
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || error.message);
  }
};

