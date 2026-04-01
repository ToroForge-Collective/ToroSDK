import { deployContract } from "../api/deployer";
import { getSDKConfig } from "../config/sdk_config";
import { DeployContractInput, DeployContractOutput } from "../types/deployer";

const deploySmartContract = async (input: DeployContractInput): Promise<DeployContractOutput> => {
  if (!input.abi || !Array.isArray(input.abi) || input.abi.length === 0) {
    throw new Error("abi is required and must be a non-empty array");
  }

  if (!input.bytecode) {
    throw new Error("bytecode is required");
  }

  if (!Array.isArray(input.constructorArgs)) {
    throw new Error("constructorArgs must be an array");
  }

  const network = input.network || getSDKConfig().getNetwork();

  if (network === 'mainnet' && !input.token) {
    throw new Error("token is required for mainnet deployments");
  }

  return await deployContract({ ...input, network });
};

export { deploySmartContract };
