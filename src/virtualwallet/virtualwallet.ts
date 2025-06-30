import {
  generateVirtualWallet,
  retrieveVirtualWallet,
  getVirtualWalletByAddress,
  updateVirtualWalletTransactions
} from '../api/virtual';

function assertString(val: any, name: string) {
  if (typeof val !== 'string' || !val.trim()) {
    throw new Error(`${name} is required and must be a non-empty string.`);
  }
}

const createVirtualWallet = async (input: {
  address: string;
  payername: string;
  currency: string;
  admin: string;
  adminpwd: string;
}) => {
  assertString(input.address, 'address');
  assertString(input.payername, 'payername');
  assertString(input.currency, 'currency');
  assertString(input.admin, 'admin');
  assertString(input.adminpwd, 'adminpwd');
  return generateVirtualWallet(input);
};

const fetchVirtualWallet = async (input: {
  virtualwallet: string;
  admin: string;
  adminpwd: string;
}) => {
  assertString(input.virtualwallet, 'virtualwallet');
  assertString(input.admin, 'admin');
  assertString(input.adminpwd, 'adminpwd');
  return retrieveVirtualWallet(input);
};

const fetchVirtualWalletByAddress = async (input: {
  address: string;
  admin: string;
  adminpwd: string;
}) => {
  assertString(input.address, 'address');
  assertString(input.admin, 'admin');
  assertString(input.adminpwd, 'adminpwd');
  return getVirtualWalletByAddress(input);
};

const updateVirtualWalletTxs = async (input: {
  walletaddress: string;
  admin: string;
  adminpwd: string;
}) => {
  assertString(input.walletaddress, 'walletaddress');
  assertString(input.admin, 'admin');
  assertString(input.adminpwd, 'adminpwd');
  return updateVirtualWalletTransactions(input);
};

export {
  createVirtualWallet,
  fetchVirtualWallet,
  fetchVirtualWalletByAddress,
  updateVirtualWalletTxs
};
