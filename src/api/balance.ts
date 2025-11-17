import axios from "axios";
import { GetAddressBalanceInput } from "../types/api";
import { getBaseURL } from "./config";

const getAddressBalance = async ({ address }: GetAddressBalanceInput) => {
  const url = `${getBaseURL()}/api/query`;
  const data = {
    op: "getaddrbalance",
    params: [{ name: "addr", value: address }],
  };

  const config = {
    method: 'get',
    url: url,
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};
  const response = await axios(config);
  return {
    ngnBalance: response.data.bal_naira,
    usdBalance: response.data.bal_dollar,
    toroGBalance: response.data.bal_auth,
  };
};

export { getAddressBalance };
