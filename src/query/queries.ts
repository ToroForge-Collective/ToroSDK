import {getExchangeRates, getBlocks, getTransactions}  from "../api/query";
import {
  getAddrRole,
  getAddrBalance,
  getBlock,
  getTransactionById as apiGetTransactionById,
  getTransactionReceipt,
  getEvent,
  getAddrTransactions,
  getTransactionsToro,
  getAddrTransactionsToro,
  getTransactionsDollar,
  getAddrTransactionsDollar,
  getTransactionsNaira,
  getAddrTransactionsNaira,
  getTransactionsEuro,
  getAddrTransactionsEuro,
  getTransactionsPound,
  getAddrTransactionsPound,
  getTransactionsEGP,
  getAddrTransactionsEGP,
  getTransactionsKSH,
  getAddrTransactionsKSH,
  getTransactionsZAR,
  getAddrTransactionsZAR,
  getTransactionsETH,
  getAddrTransactionsETH,
  getTransactionsRange,
  getAddrTransactionsAuth,
  isAddress
} from "../api/query";

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

// Wrappers for each new endpoint
const getAddressRole = async (address: string) => getAddrRole({ address });
const getBlockById = async (id: string) => getBlock({ id });
const getTransactionById = async (id: string) => apiGetTransactionById({ id });
const getTransactionReceiptById = async (id: string) => getTransactionReceipt({ id });
const getEventById = async (id: string) => getEvent({ id });
const getAddressTransactions = async (address: string, count: number) => getAddrTransactions({ address, count });
const getTransactionsToroWrapper = async (count: number) => getTransactionsToro({ count });
const getAddressTransactionsToro = async (address: string, count: number) => getAddrTransactionsToro({ address, count });
const getTransactionsDollarWrapper = async (count: number) => getTransactionsDollar({ count });
const getAddressTransactionsDollar = async (address: string, count: number) => getAddrTransactionsDollar({ address, count });
const getTransactionsNairaWrapper = async (count: number) => getTransactionsNaira({ count });
const getAddressTransactionsNaira = async (address: string, count: number) => getAddrTransactionsNaira({ address, count });
const getTransactionsEuroWrapper = async (count: number) => getTransactionsEuro({ count });
const getAddressTransactionsEuro = async (address: string, count: number) => getAddrTransactionsEuro({ address, count });
const getTransactionsPoundWrapper = async (count: number) => getTransactionsPound({ count });
const getAddressTransactionsPound = async (address: string, count: number) => getAddrTransactionsPound({ address, count });
const getTransactionsEGPWrapper = async (count: number) => getTransactionsEGP({ count });
const getAddressTransactionsEGP = async (address: string, count: number) => getAddrTransactionsEGP({ address, count });
const getTransactionsKSHWrapper = async (count: number) => getTransactionsKSH({ count });
const getAddressTransactionsKSH = async (address: string, count: number) => getAddrTransactionsKSH({ address, count });
const getTransactionsZARWrapper = async (count: number) => getTransactionsZAR({ count });
const getAddressTransactionsZAR = async (address: string, count: number) => getAddrTransactionsZAR({ address, count });
const getTransactionsETHWrapper = async (count: number) => getTransactionsETH({ count });
const getAddressTransactionsETH = async (address: string, count: number) => getAddrTransactionsETH({ address, count });
const getTransactionsRangeWrapper = async (start: number, end: number) => getTransactionsRange({ start, end });
const getAddressTransactionsAuth = async (address: string, count: number) => getAddrTransactionsAuth({ address, count });
const isAddressUtil = async (address: string) => isAddress({ address });

export {
  getSupportedAssetsExchangeRates,
  getBlocksData,
  getBlockchainTransactions,
  getAddressRole,
  getBlockById,
  getTransactionById,
  getTransactionReceiptById,
  getEventById,
  getAddressTransactions,
  getTransactionsToroWrapper,
  getAddressTransactionsToro,
  getTransactionsDollarWrapper,
  getAddressTransactionsDollar,
  getTransactionsNairaWrapper,
  getAddressTransactionsNaira,
  getTransactionsEuroWrapper,
  getAddressTransactionsEuro,
  getTransactionsPoundWrapper,
  getAddressTransactionsPound,
  getTransactionsEGPWrapper,
  getAddressTransactionsEGP,
  getTransactionsKSHWrapper,
  getAddressTransactionsKSH,
  getTransactionsZARWrapper,
  getAddressTransactionsZAR,
  getTransactionsETHWrapper,
  getAddressTransactionsETH,
  getTransactionsRangeWrapper,
  getAddressTransactionsAuth,
  isAddressUtil
};