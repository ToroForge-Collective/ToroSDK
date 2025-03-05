import {
  createWallet,
  getBalance,
  configureTNS,
  depositFunds,
  confirmDeposit,
  Currency,
  KYCParams,
  performKYCForCustomer,
  isAddressKYCVerified,
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
  const currency = Currency.Kenyan_Shilling;

  // Step 1: Initialize Deposit

  const depositDetails = await depositFunds({
    userAddress: address,
    username,
    amount,
    currency,
    admin: "adminAddr",
    adminpwd: "@adminPassword",
  });
  console.log("Deposit Details:", depositDetails);

  //depositDetails.accountnumber is your transactionId if currency is NGN

  // Step 2: (After transfer) Verify Deposit

  // const transactionId = "1234567890abcd"; // TXID from the bank transfer
  // const isDepositConfirmed = await confirmDeposit({
  //   currency: "NGN",
  //   transactionId,
  // });
  // console.log("Deposit Success:", isDepositConfirmed);

  const kycparams: KYCParams = {
    firstName: "John",
    middleName: "Doe",
    lastName: "Doe",
    bvn: "123456789",
    currency: "NGN",
    phoneNumber: "08012345678",
    dob: "1990-01-01",
    address: "0x8d05f2be776279b231a3607464fa72589ba99337", // user's wallet address
    admin: "adminAddr",
    adminpwd: "@adminPassword",
  };

  const isKYCSuccessful = await performKYCForCustomer(kycparams);
  console.log("KYC Response:", isKYCSuccessful);

 const isAddressVerified = await isAddressKYCVerified({
    address: "0x8d05f2be776279b231a3607464fa72589ba99337",
  });
  console.log("Address Verification:", isAddressVerified);
}

main();
