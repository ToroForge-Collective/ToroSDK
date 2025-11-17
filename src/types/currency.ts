/**
 * Supported currencies in the Toronet ecosystem
 */
export enum Currency {
  Naira = "NGN",
  Euro = "EUR",
  Dollar = "USD",
  Pound = "GBP",
  Kenyan_Shilling = "KSH",
  South_African_Rand = "ZAR",
}

export type CurrencyOperationInput = {
  currency: string;
  address: string;
  password?: string;
  admin?: string;
  adminpwd?: string;
  targetAddress?: string;
  amount?: string | number;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  fixed?: string | number;
  percentage?: string | number;
  receiverAddr?: string;
  senderAddr?: string;
  senderPwd?: string;
};
