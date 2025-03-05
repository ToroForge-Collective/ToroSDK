import { checkAddressVerified, initializeDeposit, setupKYC, verifyDeposit } from "../api/payments";
import { InitializeDepositInput } from "../types/api";
import { Currency } from "../types/currency";
import { KYCParams } from "../types/params";
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

const performKYCForCustomer = async (
  kycParams: KYCParams
): Promise<boolean> => {
  console.log("🔍 Performing KYC for customer:", kycParams);
  const kycResponse = await setupKYC(kycParams);

  if (kycResponse.data.passed == true) {
    console.log("✅ KYC verification passed.");
    return true;
  } else {
    console.log("❌ KYC verification failed. Please check your details.");
    return false;
  }
};

const isAddressKYCVerified = async ({address}: {address: string}) => {
  console.log(`🔍 Checking KYC status for address: ${address}`);
  const response = await checkAddressVerified(address);
  return response;
};

export { depositFunds, confirmDeposit, performKYCForCustomer, isAddressKYCVerified };
