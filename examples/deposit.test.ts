import { confirmDeposit, depositFunds } from "../src";
import { Currency } from "../src/types/currency";

async function deposit() {
  // const depositDetails = await depositFunds(
  //   {
  //     userAddress: "0x8d043e12a02f2d2cc38ed1ad3f50de4aba064c6c",
  //     username: "test21764116127388",
  //     amount: "100",
  //     currency: Currency.Naira,
  //     admin: "",
  //     adminpwd: "",
  //   },
  //   {
  //     commissionrate: "0.05",
  //     exchange: "72",
  //   }
  // );
  // console.log("✓ Deposit initialized:", depositDetails);

  // Verify deposit
  const isDepositConfirmed = await confirmDeposit({
    currency: Currency.Naira,
    transactionId: "0101764699",
  });
  console.log("✓ Deposit confirmed:", isDepositConfirmed);

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
