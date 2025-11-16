import {
  createWallet,
  configureTNS,
  isTNSAvailable,
  getBalance,
  depositFunds,
  confirmDeposit,
  performKYCForCustomer,
  isAddressKYCVerified,
  getWalletKey,
  importWalletFromPrivateKeyAndPassword,
  verifyWalletPassword,
  makeInterWalletTransferTxn,
  getSupportedAssetsExchangeRates
} from "../src/index";
// import {
//   getBlockchainStatus,
//   getLatestBlockData,
//   getTransaction,
//   getReceipt,
//   getRevertReason,
// } from "../src/blockchain";
// import {
//   getSupportedAssetsExchangeRates,
//   getBlocksData,
//   getBlockchainTransactions,
//   getAddressRole,
//   getAddressBalance,
//   getBlockById,
//   getTransactionById,
//   getTransactionReceiptById,
//   getEventById,
//   getAddressTransactions,
//   getTransactionsToroWrapper,
//   getAddressTransactionsToro,
//   getTransactionsDollarWrapper,
//   getAddressTransactionsDollar,
//   getTransactionsNairaWrapper,
//   getAddressTransactionsNaira,
//   getTransactionsEuroWrapper,
//   getAddressTransactionsEuro,
//   getTransactionsPoundWrapper,
//   getAddressTransactionsPound,
//   getTransactionsEGPWrapper,
//   getAddressTransactionsEGP,
//   getTransactionsKSHWrapper,
//   getAddressTransactionsKSH,
//   getTransactionsZARWrapper,
//   getAddressTransactionsZAR,
//   getTransactionsETHWrapper,
//   getAddressTransactionsETH,
//   getTransactionsRangeWrapper,
//   getAddressTransactionsAuth,
//   isAddressUtil,
// } from "../src/query";
// import {
//   createVirtualWallet,
//   fetchVirtualWallet,
//   fetchVirtualWalletByAddress,
//   updateVirtualWalletTxs,
// } from "../src/virtualwallet";
import { Currency } from "../src/types/currency";

///note to run: `npm install -g ts-node typescript` then  ts-node services.ts

async function main() {
  // Wallet creation and TNS
  // const username = "demoUser" + Math.floor(Math.random() * 10000);
  // const password = "SuperSecretPassword123!";
  // const isAvailable = await isTNSAvailable({ username });
  // console.log("Is TNS available:", isAvailable);
  // if (!isAvailable) return;
  // const address = await createWallet({ username, password });
  // console.log("New Wallet Address:", address);
  // await configureTNS({ address, password, username });

  // // Keystore operations
  // const importedAddress = await importWalletFromPrivateKeyAndPassword({
  //   pvKey: address,
  //   password,
  // });
  // console.log("Imported Address:", importedAddress);
  // const isPasswordValid = await verifyWalletPassword({ address, password });
  // console.log("Is Password Valid:", isPasswordValid);
  // const walletKey = await getWalletKey({ address });
  // console.log("Wallet Key:", walletKey);

  // // Balance
  //  const balance = await getBalance({ address: "0x1cbbf1b2066311e465a8a2c1670e6c25f1a903d0" });
  //  console.log("Wallet Balance:", balance);
  // const transferResult = await makeInterWalletTransferTxn(
  //   "kfkfkfkkf",
  //   "jkfmjfmf",
  //   "0xfa1e3a944f60519c0a6ec856ae5fe23a38e2ba50",
  //   "200",
  //   Currency.Naira
  // );
  // console.log("Transfer Result:", transferResult);
  // const balance = await getBalance({ address: "0xfa1e3a944f60519c0a6ec856ae5fe23a38e2ba50" });
  // console.log("Wallet Balance:", balance);
  // Payments & KYC
  // const depositDetails = await depositFunds(
  //   {
  //     userAddress: "0xfa1e3a944f60519c0a6ec856ae5fe23a38e2ba50",
  //     username: "toroaccessadmin",
  //     amount: "300",
  //     currency: Currency.Naira,
  //     admin: "lfllff",
  //     adminpwd: "mfmkfmf",
  //   }
  //   // {
  //   //   payeraddress: "123 Main St",
  //   //   payercity: "Lagos",
  //   //   payerstate: "Lagos",
  //   //   payercountry: "Nigeria",
  //   //   payerzipcode: "100001",
  //   //   payerphone: "+2348012345678",
  //   //   description: "Initial deposit",
  //   //   success_url: "https://example.com/success",
  //   //   cancel_url: "https://example.com/cancel",
  //   //   paymenttype: "deposit",
  //   //   feetype: "1",
  //   //   exchange: "72",
  //   //   reusewallet: "0",
  //   // }
  // );
 // console.log("Deposit Details:", depositDetails);
  // const structuredDepositDetails ={
  //   instrctions: depositDetails.instruction  as string,
  //   transactionId: depositDetails.accountnumber as string,
  //   bankName: depositDetails.bankname as string,
  //   accountNumber: depositDetails.accountnumber as string,
  //   accountName: depositDetails.accountname as string,
  //   amount: depositDetails.amount as number,
  // }

  // console.log("Structured Deposit Details:", structuredDepositDetails);
  // const isDepositConfirmed = await confirmDeposit({
  //   currency: Currency.Naira,
  //   transactionId: "TX1234567890",
  // });
  // console.log("Deposit Confirmed:", isDepositConfirmed);

  // const kycParams = {
  //   firstName: "John",
  //   middleName: "Doe",
  //   lastName: "Smith",
  //   bvn: "12345678901",
  //   currency: Currency.Naira,
  //   phoneNumber: "+2348012345678",
  //   dob: "1990-01-01",
  //   address,
  //   admin: "0xadminaddress",
  //   adminpwd: "adminpassword",
  // };
  // const kycResult = await performKYCForCustomer(kycParams);
  // console.log("KYC Result:", kycResult);
  // const kycVerified = await isAddressKYCVerified({ address });
  // console.log("KYC Verified:", kycVerified);

  // // Blockchain
  // const latestBlock = await getLatestBlockData();
  // console.log("Latest Block:", latestBlock);
  // const blockchainStatus = await getBlockchainStatus();
  // console.log("Blockchain Status:", blockchainStatus);
  // const txHash = "0x1234567890abcdef";
  // const transaction = await getTransaction(txHash);
  // console.log("Transaction:", transaction);
  // const receipt = await getReceipt(txHash);
  // console.log("Receipt:", receipt);
  // const revertReason = await getRevertReason(txHash);
  // console.log("Revert Reason:", revertReason);

  // // Query endpoints
   const exchangeRates = await getSupportedAssetsExchangeRates();
   console.log("Exchange Rates:", exchangeRates);
  // const blocks = await getBlocksData(5);
  // console.log("Blocks:", blocks);
  // const transactions = await getBlockchainTransactions(10);
  // console.log("Blockchain Transactions:", transactions);
  // const addrRole = await getAddressRole(address);
  // console.log("Address Role:", addrRole);
  // const addrBalance = await getAddressBalance(address);
  // console.log("Address Balance:", addrBalance);
  // const blockById = await getBlockById("latest");
  // console.log("Block By ID:", blockById);
  // const txById = await getTransactionById(txHash);
  // console.log("Transaction By ID:", txById);
  // const txReceiptById = await getTransactionReceiptById(txHash);
  // console.log("Transaction Receipt By ID:", txReceiptById);
  // const eventById = await getEventById("event123");
  // console.log("Event By ID:", eventById);
  // const addrTxs = await getAddressTransactions(address, 5);
  // console.log("Address Transactions:", addrTxs);
  // const txsToro = await getTransactionsToroWrapper(5);
  // console.log("Transactions Toro:", txsToro);
  // const addrTxsToro = await getAddressTransactionsToro(address, 5);
  // console.log("Address Transactions Toro:", addrTxsToro);
  // const txsDollar = await getTransactionsDollarWrapper(5);
  // console.log("Transactions Dollar:", txsDollar);
  // const addrTxsDollar = await getAddressTransactionsDollar(address, 5);
  // console.log("Address Transactions Dollar:", addrTxsDollar);
  // const txsNaira = await getTransactionsNairaWrapper(5);
  // console.log("Transactions Naira:", txsNaira);
  // const addrTxsNaira = await getAddressTransactionsNaira(address, 5);
  // console.log("Address Transactions Naira:", addrTxsNaira);
  // const txsEuro = await getTransactionsEuroWrapper(5);
  // console.log("Transactions Euro:", txsEuro);
  // const addrTxsEuro = await getAddressTransactionsEuro(address, 5);
  // console.log("Address Transactions Euro:", addrTxsEuro);
  // const txsPound = await getTransactionsPoundWrapper(5);
  // console.log("Transactions Pound:", txsPound);
  // const addrTxsPound = await getAddressTransactionsPound(address, 5);
  // console.log("Address Transactions Pound:", addrTxsPound);
  // const txsEGP = await getTransactionsEGPWrapper(5);
  // console.log("Transactions EGP:", txsEGP);
  // const addrTxsEGP = await getAddressTransactionsEGP(address, 5);
  // console.log("Address Transactions EGP:", addrTxsEGP);
  // const txsKSH = await getTransactionsKSHWrapper(5);
  // console.log("Transactions KSH:", txsKSH);
  // const addrTxsKSH = await getAddressTransactionsKSH(address, 5);
  // console.log("Address Transactions KSH:", addrTxsKSH);
  // const txsZAR = await getTransactionsZARWrapper(5);
  // console.log("Transactions ZAR:", txsZAR);
  // const addrTxsZAR = await getAddressTransactionsZAR(address, 5);
  // console.log("Address Transactions ZAR:", addrTxsZAR);
  // const txsETH = await getTransactionsETHWrapper(5);
  // console.log("Transactions ETH:", txsETH);
  // const addrTxsETH = await getAddressTransactionsETH(address, 5);
  // console.log("Address Transactions ETH:", addrTxsETH);
  // const txsRange = await getTransactionsRangeWrapper(0, 10);
  // console.log("Transactions Range:", txsRange);
  // const addrTxsAuth = await getAddressTransactionsAuth(address, 5);
  // console.log("Address Transactions Auth:", addrTxsAuth);
  // const isAddrValid = await isAddressUtil(address);
  // console.log("Is Address Valid:", isAddrValid);

  // // Virtual Wallet
  // const virtualWallet = await createVirtualWallet({
  //   address,
  //   payername: "Demo User",
  //   currency: Currency.Naira,
  //   admin: "0xadminaddress",
  //   adminpwd: "adminpassword",
  // });
  // console.log("Created Virtual Wallet:", virtualWallet);
  // const fetchedVirtualWallet = await fetchVirtualWallet({
  //   virtualwallet: "8900610225",
  //   admin: "0xadminaddress",
  //   adminpwd: "adminpassword",
  // });
  // console.log("Fetched Virtual Wallet:", fetchedVirtualWallet);
  // const fetchedVirtualWalletByAddress = await fetchVirtualWalletByAddress({
  //   address,
  //   admin: "0xadminaddress",
  //   adminpwd: "adminpassword",
  // });
  // console.log("Fetched Virtual Wallet By Address:", fetchedVirtualWalletByAddress);
  // const updatedVirtualWalletTxs = await updateVirtualWalletTxs({
  //   walletaddress: "8900610225",
  //   admin: "0xadminaddress",
  //   adminpwd: "adminpassword",
  // });
  // console.log("Updated Virtual Wallet Transactions:", updatedVirtualWalletTxs);
}

main();
