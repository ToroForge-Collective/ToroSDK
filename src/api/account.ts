import axios from "axios";
import { BASE_URL } from "./config";
import { CreateKeystoreInput, SetNameInput } from "../types/api";

const createKeystore = async ({ password }: CreateKeystoreInput): Promise<string> => {
  const url = `${BASE_URL}/api/keystore`;
  const data = {
    op: "createkey",
    params: [{ name: "pwd", value: password }],
  };
  const response = await axios.post(url, data);
  return response.data.address;
};

const setName = async ({ address, password, username }: SetNameInput) => {
  const url = `${BASE_URL}/api/tns/cl`;
  const data = {
    op: "setname",
    params: [
      { name: "client", value: address },
      { name: "clientpwd", value: password },
      { name: "name", value: username },
    ],
  };
  await axios.post(url, data);
};

export { createKeystore, setName };
