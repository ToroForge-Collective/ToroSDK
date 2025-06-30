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
};
