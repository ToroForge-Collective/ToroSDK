import axios from "axios";
import { getDeployerURL } from "./config";
import { DeployContractInput, DeployContractOutput } from "../types/deployer";

const DEPLOYER_BASE = "https://deployer.toronet.org/api";

const deployContract = async ({
  owner,
  constructorArgs,
  abi,
  bytecode,
  token,
  network,
}: DeployContractInput): Promise<DeployContractOutput> => {
  const baseURL = network
    ? `${DEPLOYER_BASE}/${network}`
    : getDeployerURL();

  const url = `${baseURL}/toroforge-deploy`;

  const data: Record<string, any> = { owner, constructorArgs, abi, bytecode };
  if (token) {
    data.token = token;
  }

  try {
    const response = await axios.post(url, data);
    return response.data;
  } catch (error: any) {
    console.error("Error deploying contract:", error.response?.data || error.message);
    throw new Error(error.response?.data || error.message);
  }
};

export { deployContract };
