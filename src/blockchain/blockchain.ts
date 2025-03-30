import { getLatestBlock, getStatus } from "../api";

const getBlockchainStatus = async () => {
  const status = await getStatus();
  return status;
};
const getLatestBlockData = async () => {
  const latestBlock = await getLatestBlock();
  return latestBlock;
}


export { getBlockchainStatus, getLatestBlockData };