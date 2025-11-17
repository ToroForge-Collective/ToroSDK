export type RoleQueryInput = {
  address?: string;
  index?: number;
};

export type RoleOwnerInput = {
  address: string;
  password: string;
};

export type RoleSuperAdminInput = {
  address: string;
  password: string;
  targetAddress: string;
};

export type RoleDebuggerInput = {
  address: string;
  password: string;
  debuggerAddress?: string;
};

