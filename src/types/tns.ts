export type TNSQueryInput = {
  address?: string;
  name?: string;
};

export type TNSClientInput = {
  address: string;
  password: string;
  username?: string;
};

export type TNSPermissionInput = {
  address: string;
  password: string;
};

export type TNSAdminInput = {
  address: string;
  username?: string;
  admin: string;
  adminpwd: string;
};

