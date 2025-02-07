import { initializeDeposit, verifyDeposit } from "../api/payments";
import { InitializeDepositInput } from "../types/api";
import { Currency } from "../types/currency";
import { DepositFundsInput } from "../types/service";

const depositFunds = async ({
  userAddress,
  username,
  amount,
  currency,
  admin,
  adminpwd,
}: DepositFundsInput) => {
  console.log(`🚀 Initiating deposit: ${amount} ${currency} for ${username}`);
  if (!admin || !adminpwd) {
    throw new Error(
      "❌ Missing admin credentials. You must register at https://payments.connectw.com/"
    );
  }
  const depositInitializationInput: InitializeDepositInput = {
    usrAddr: userAddress,
    username: username,
    amount: amount,
    currency: currency.toString(),
    admin: admin,
    adminpwd: adminpwd,
  };
  const depositDetails = await initializeDeposit(depositInitializationInput);
  return depositDetails;
};

const confirmDeposit = async ({
  currency,
  transactionId,
}: {
  currency: string;
  transactionId: string;
}) => {
  console.log(`🔍 Verifying deposit with TXID: ${transactionId}`);
  const isVerified = await verifyDeposit(currency, transactionId);

  if (isVerified) {
    console.log("✅ Deposit verified! Funds credited to your wallet.");
  } else {
    console.log(
      "⚠️ Deposit verification failed. Please check your transaction."
    );
  }

  return isVerified;
};

export { depositFunds, confirmDeposit };
