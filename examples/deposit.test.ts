import {
  confirmDeposit,
  createWallet,
  depositFunds,
  getAddr,
  getFiatTransactionByTxid,
  getRevertReason,
  getSupportedAssetsExchangeRates,
  getTransactionByHash,
  initializeSDK,
  isAddressKYCVerified,
  isTNSAvailable,
  verifyWalletPassword,
} from "../src";
import { Currency } from "../src/types/currency";

async function deposit() {
  // const username = "demoUser" + Math.floor(Math.random() * 10000);
  // const password = "SuperSecretPassword123!";
  // let address: string;

initializeSDK({ network: 'mainnet' });

const txRevertReason = await getRevertReason("0xa37e81bfacbfdd10e2767c33521c7444a4de9f3e2ebabfffdca4e47b2d653eea");
console.log("✓ Transaction revert reason:", txRevertReason);
  // const isAvailable = await isTNSAvailable({ username });
  // console.log(`✓ TNS name "${username}" is available:`, isAvailable);

  // if (!isAvailable) {
  //   console.log(" TNS name not available, skipping wallet creation");
  //   return;
  // }
  // const address = "0x15cf4622bfcb990d179aa9536ffd3a6f83de0a8f";
  // const PASSWORD = "SecureipPass123!";

  // const isValid = await verifyWalletPassword({ address, password: PASSWORD });
  // console.log("✓ Wallet password valid:", isValid);
  // address = await createWallet({ username, password });
  // console.log("Wallet address:", address);
  // const tnsAddress = await getAddr({ name: "toroaccessadmin" });
  // console.log("✓ Address for TNS name:", tnsAddress);
  // const kycVerified = await isAddressKYCVerified({
  //   address: "0x0Ca0b83FD81D726f52C266bB617a14a4Ec80214A",
  // });
  // console.log("✓ KYC verified:", kycVerified);
  // // const exchangeRates = await getSupportedAssetsExchangeRates();
  // // console.log("✓ Exchange rates:", exchangeRates);
  // // const fiatTransactionDetails = await getFiatTransactionByTxid({
  // //   txid: "0101768404",
  // //   admin: "",
  // //   adminpwd: "",
  // // });
  // // console.log("✓ Fiat transaction details:", fiatTransactionDetails);
  // // if (
  // //   fiatTransactionDetails?.data &&
  // //   Array.isArray(fiatTransactionDetails.data) &&
  // //   fiatTransactionDetails.data.length > 0
  // // ) {
  // //   const txHash = fiatTransactionDetails.data[0].TX_ChainTXID;
  // //   console.log("✓ TX hash:", txHash);
  // // } else {
  // //   console.error("No transaction data found or invalid response structure");
  // // }

  // const depositDetails = await depositFunds(
  //   {
  //     userAddress: "0x8d043e12a02f2d2cc38ed1ad3f50de4aba064c6c",
  //     username: "test21764116127388",
  //     amount: "100",
  //     currency: Currency.Naira,
  //     admin: "0xfa1e3a944f60519c0a6ec856ae5fe23a38e2ba50",
  //     adminpwd: "@ToroAccess$1",
  //   },
  //   {
  //     commissionrate: "0.05",
  //     exchange: "72",
  //   },
  // );
  // console.log("✓ Deposit initialized:", depositDetails);

  // Verify deposit
  // const isDepositConfirmed = await confirmDeposit({
  //   currency: Currency.Naira,
  //   transactionId: "0101764699",
  // });
  // console.log("✓ Deposit confirmed:", isDepositConfirmed);

  // KYC operations
  // const kycParams = {
  //   firstName: "John",
  //   middleName: "Doe",
  //   lastName: "Smith",
  //   bvn: "12345678901",
  //   currency: Currency.Naira,
  //   phoneNumber: "+2348012345678",
  //   dob: "1990-01-01",
  //   address: address!,
  //   admin: "0xAdminAddress",
  //   adminpwd: "adminPassword",
  // };
}

deposit();
