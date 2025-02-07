import {
  createWallet,
  getBalance,
  configureTNS,
  depositFunds,
  confirmDeposit,
  Currency,
  
} from "../src/index";

///note to run: `npm install -g ts-node typescript` then  ts-node services.ts

async function main() {
  /// Create a new wallet
  // const address = await createWallet({
  //   username: "testUsername",
  //   password: "newToroneggtWallet",
  // });

  // console.log("Toronet address: ", address);

  /// Get the balances of the wallet
  // const balances = await getBalance({address: address});
  // console.log(balances);
  const address = "0x8d05f2be776279b231a3607464fa72589ba99337";
  const username = "testUsername";
  const amount = "1000";
  const currency = Currency.Dollar;

  // Step 1: Initialize Deposit

  const depositDetails = await depositFunds({
    userAddress: address,
    username,
    amount,
    currency,
    admin: "your-whitelisted-address",
    adminpwd: "your-password",
  });
  //depositDetails.accountnumber is your transactionId if currency is NGN

  // Step 2: (After transfer) Verify Deposit

  // const transactionId = "1234567890abcd"; // TXID from the bank transfer
  // const isDepositConfirmed = await confirmDeposit({
  //   currency: "NGN",
  //   transactionId,
  // });
  // console.log("Deposit Success:", isDepositConfirmed);
}

main();
