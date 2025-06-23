import { createKeystore, setName, isNameUsed } from "../api/index";
import { CreateKeystoreInput, SetNameInput } from "../types/api";
import { CreateWalletInput } from "../types/service";

const createWallet = async ({ password, username }: CreateWalletInput) => {
  if (!password || !username) {
    throw new Error("Username and Password is required");
  }
  const keystoreInput: CreateKeystoreInput = {
    password: password,
  };
  const isTNSUsed = await isNameUsed(username);
  if (isTNSUsed) {
    throw new Error("Username is already taken");
  }
  const address = await createKeystore(keystoreInput);
  await configureTNS({ address, password, username });

  return address;
};

const configureTNS = async ({ address, password, username }: SetNameInput) => {
  if (!address || !password || !username) {
    throw new Error("Address, password, and username are required");
  }

  const setNameInput: SetNameInput = {
    address: address,
    password: password,
    username: username,
  };
  await setName(setNameInput);
};

const isTNSAvailable = async ({ username }: { username: string }) => {
  if (!username) {
    throw new Error("Username is required");
  }
  return !(await isNameUsed(username));
};

export { createWallet, configureTNS, isTNSAvailable };
