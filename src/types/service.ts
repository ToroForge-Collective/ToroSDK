import { Currency } from "./currency";

export type CreateWalletInput = {
  username: string;
  password: string;
};

export type GetBalanceInput = {
  address: string;
};

export type DepositFundsInput = {
  userAddress: string;
  username: string;
  amount: string;
  currency: Currency;
  admin: string;
  adminpwd: string;
};

// export type InitializeDepositResponse = {
//   instruction: string;
//   bankname: string;
// }
