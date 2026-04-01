import axios from "axios";
import { getBaseURL } from "./config";
import { CreateKeystoreInput, SetNameInput } from "../types/api";

const createKeystore = async ({
  password,
}: CreateKeystoreInput): Promise<string> => {
  const url = `${getBaseURL()}/keystore`;
  const data = {
    op: "createkey",
    params: [{ name: "pwd", value: password }],
  };
  const response = await axios.post(url, data);
  return response.data.address;
};



const isNameUsed = async (name: string): Promise<boolean> => {
  const url = `${getBaseURL()}/tns`;
  const data = {
    op: "isnameused",
    params: [{ name: "name", value: name }],
  };

  const config = {
    method: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await axios(config);
  return response.data.isused;
};

const setName = async ({ address, password, username }: SetNameInput) => {
  const url = `${getBaseURL()}/tns/cl`;
  const data = {
    op: "setname",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
      { name: "name", value: username },
    ],
  };
  const response = await axios.post(url, data);
};

export { createKeystore, setName, isNameUsed };
