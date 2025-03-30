
import {getExchangeRates, getBlocks, getTransactions}  from "../api";

const getSupportedAssetsExchangeRates = async () => {
  try {
    const response = await getExchangeRates();
    return response;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
}

const getBlocksData = async (count: number) => {
  try {
    const response = await getBlocks({ count });
    return response;
  } catch (error) {
    console.error("Error fetching blocks:", error);
    throw error;
  }
}
const getBlockchainTransactions = async (count: number) => {
  try {
    const response = await getTransactions({ count });
    return response;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
}

export { getSupportedAssetsExchangeRates, getBlocksData, getBlockchainTransactions };