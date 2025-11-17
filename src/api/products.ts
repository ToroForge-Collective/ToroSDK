import axios from "axios";
import { getConnectWURL } from "./config";

/**
 * Get project information
 * Operation: getproject
 * Endpoint: https://restapi.connectw.com/api/payment/toro/
 */
export const getProject = async ({
  admin,
  getbalances = "true",
}: {
  admin: string;
  getbalances?: string;
}) => {
  try {
    const url = `${getConnectWURL()}/api/payment/toro/`;
    const data = {
      op: "getproject",
      params: [{ name: "getbalances", value: getbalances }],
    };
    const config = {
      headers: {
        admin,
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
 * Get product by ID
 * Operation: getproduct
 * Endpoint: https://restapi.connectw.com/api/payment/
 */
export const getProduct = async ({
  productId,
  admin,
  adminpwd,
}: {
  productId: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getConnectWURL()}/api/payment/`;
    const data = {
      op: "getproduct",
      params: [{ name: "productid", value: productId }],
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
 * Create/Record product
 * Operation: recordproduct
 * Endpoint: https://restapi.connectw.com/api/payment/
 */
export const recordProduct = async ({
  productId,
  productName,
  description,
  productImage,
  admin,
  adminpwd,
}: {
  productId: string;
  productName: string;
  description: string;
  productImage: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getConnectWURL()}/api/payment/`;
    const data = {
      op: "recordproduct",
      params: [
        { name: "productid", value: productId },
        { name: "productname", value: productName },
        { name: "description", value: description },
        { name: "productimage", value: productImage },
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
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

/**
 * Update product
 * Operation: updateproduct
 * Endpoint: https://restapi.connectw.com/api/payment/
 */
export const updateProduct = async ({
  productId,
  productName,
  description,
  productImage,
  admin,
  adminpwd,
}: {
  productId: string;
  productName: string;
  description: string;
  productImage: string;
  admin: string;
  adminpwd: string;
}) => {
  try {
    const url = `${getConnectWURL()}/api/payment/`;
    const data = {
      op: "updateproduct",
      params: [
        { name: "productid", value: productId },
        { name: "productname", value: productName },
        { name: "description", value: description },
        { name: "productimage", value: productImage },
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
    if (!response.data.result) throw new Error(response.data.error);
    return response.data;
  } catch (error: any) {
    console.error("Error:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

