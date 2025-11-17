import { createKeystore, setName, isNameUsed, updateKeyPassword, deleteKey } from "../api/index";
import { CreateKeystoreInput, SetNameInput, UpdateKeyPasswordInput, DeleteKeyInput } from "../types/api";
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

const updatePassword = async ({
  address,
  oldPassword,
  newPassword,
}: UpdateKeyPasswordInput) => {
  if (!address || !oldPassword || !newPassword) {
    throw new Error("Address, old password, and new password are required");
  }
  return await updateKeyPassword({ address, oldPassword, newPassword });
};

const deleteWallet = async ({ address, password }: DeleteKeyInput) => {
  if (!address || !password) {
    throw new Error("Address and password are required");
  }
  return await deleteKey({ address, password });
};

export { createWallet, configureTNS, isTNSAvailable, updatePassword, deleteWallet };
