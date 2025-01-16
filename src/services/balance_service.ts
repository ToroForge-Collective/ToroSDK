import { getAddressBalance } from "../api";
import { GetAddressBalanceInput } from "../types/api";
import { GetBalanceInput } from "../types/service";
import { validateEvmAddress } from "../utils/address_validator";

const getBalance = async ({ address }: GetBalanceInput) => {
  if (!address) {
    throw new Error("Address is required");
  }
  if (validateEvmAddress(address) === false) {
    throw new Error("Invalid Toronet address");
  }

  const balanceInput: GetAddressBalanceInput = {
    address: address,
  };

  return await getAddressBalance(balanceInput);
};

export { getBalance };
