export type CreateKeystoreInput = {
  password: string;
};

export type SetNameInput = {
  address: string;
  password: string;
  username: string;
};

export type GetAddressBalanceOutput = {
  ngnBalance: number;
  usdBalance: number;
  toroGBalance: number;
};

export type GetAddressBalanceInput = {
  address: string;
};

export type InitializeDepositInput = {
  usrAddr: string;
  username: string;
  amount: string;
  currency: string;
  admin: string;
  adminpwd: string;
};

export type PaymentExtrasInput = {
  payeraddress?: string;
  payercity?: string;
  payerstate?: string;
  payercountry?: string;
  payerzipcode?: string;
  payerphone?: string;
  description?: string;
  success_url?: string;
  cancel_url?: string;
  paymenttype?: string;
  feetype?: string;
  exchange?: string;
  reusewallet?: string;
  commissionrate?: string;
};

export type UpdateKeyPasswordInput = {
  address: string;
  oldPassword: string;
  newPassword: string;
};

export type DeleteKeyInput = {
  address: string;
  password: string;
};

export type WithdrawalInput = {
  address: string;
  password: string;
  currency: string;
  token: string;
  payername: string;
  payeremail: string;
  payeraddress?: string;
  payercity?: string;
  payerstate?: string;
  payercountry?: string;
  payerzipcode?: string;
  payerphone?: string;
  description: string;
  amount: string;
  accounttype: string;
  bankname: string;
  routingno: string;
  accountno: string;
  expirydate?: string;
  accountname: string;
  recipientstate?: string;
  recipientzip?: string;
  recipientphone?: string;
  admin: string;
  adminpwd: string;
};

export type DateRangeQueryInput = {
  address: string;
  startDate: string; // Format: YYYY-MM-DD
  endDate: string; // Format: YYYY-MM-DD
  currency?: string;
  token?: string;
  admin: string;
  adminpwd: string;
};
