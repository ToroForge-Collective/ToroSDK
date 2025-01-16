import axios from "axios";
import { GetAddressBalanceInput } from "../types/api";
import { BASE_URL } from "./config";

const getAddressBalance = async ({ address }: GetAddressBalanceInput) => {
  const url = `${BASE_URL}/api/query`;
  const data = {
    op: "getaddrbalance",
    params: [{ name: "addr", value: address }],
  };
  const response = await axios.post(url, data);
  console.dir(response.data, { depth: null });
  return {
    ngnBalance: response.data.bal_naira,
    usdBalance: response.data.bal_dollar,
    toroGBalance: response.data.bal_auth,
  };
};

export { getAddressBalance };
