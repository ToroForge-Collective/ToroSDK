import { createKeystore, setName } from "../api/index";
import { CreateKeystoreInput, SetNameInput } from "../types/api";
import { CreateWalletInput } from "../types/service";

const createWallet = async ({ password }: CreateWalletInput) => {
  if (!password) {
    throw new Error("Password is required");
  }
  const keystoreInput: CreateKeystoreInput = {
    password: password,
  };
  const address = await createKeystore(keystoreInput);

  return address;
};

const configureTNS = async ({ address, password, username }: SetNameInput) => {
  if (!address || !password || !username) {
    throw new Error("Address, password, and username are required");
  }

  const setNameInput: SetNameInput = {
    address: address,
    password: password,
    username: `${username}Toro`,
  };
  await setName(setNameInput);
};

export { createWallet, configureTNS };
