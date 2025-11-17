import { getLatestBlock, getStatus } from "../api/blockchain";
import { getTransaction as apiGetTransaction, getReceipt as apiGetReceipt, getRevertReason as apiGetRevertReason } from "../api/blockchain";

const getBlockchainStatus = async () => {
  const status = await getStatus();
  return status;
};
const getLatestBlockData = async () => {
  const latestBlock = await getLatestBlock();
  return latestBlock;
}

const getTransaction = async (txHash: string) => {
  return await apiGetTransaction(txHash);
};

const getReceipt = async (txHash: string) => {
  return await apiGetReceipt(txHash);
};

const getRevertReason = async (txHash: string) => {
  return await apiGetRevertReason(txHash);
};

export {
  getBlockchainStatus,
  getLatestBlockData,
  getTransaction,
  getReceipt,
  getRevertReason,
};