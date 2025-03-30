import { importKey, verifyKey, getKey } from "../api";
import { validateEvmAddress } from "../utils/address_validator";

const importWalletFromPrivateKeyAndPassword = async ({
  pvKey,
  password,
}: {
  pvKey: string;
  password: string;
}) => {
  const address = await importKey({ privateKey: pvKey, password });
  return address;
};

const verifyWalletPassword = async ({
  address,
  password,
}: {
  address: string;
  password: string;
}) => {
  //returns true if the password is correct
  const isVerified = await verifyKey({ address, password });
  return isVerified;
};

const getWalletKey = async ({ address }: { address: string }) => {
  if (validateEvmAddress(address) === false) {
    throw new Error("Invalid Toronet address");
  }
  const keyData = await getKey({ address });
  return keyData;
};


export { importWalletFromPrivateKeyAndPassword, verifyWalletPassword, getWalletKey };