import { Network } from './config';

export type DeployContractInput = {
  owner: string;
  constructorArgs: any[];
  abi: any[];
  bytecode: string;
  token?: string;
  network?: Network;
};

export type DeployContractOutput = {
  abi: any[];
  address: string;
};
