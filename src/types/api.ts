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

