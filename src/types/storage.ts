export type StorageQueryInput = {
  address?: string;
  contract?: string;
};

export type StorageOwnerInput = {
  address: string;
  password: string;
  contract?: string;
  version?: string | number;
  newOwner?: string;
};

