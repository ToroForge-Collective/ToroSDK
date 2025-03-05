
```markdown
# Toronet SDK

## Overview

The Toronet SDK is a powerful TypeScript library for developers to interact with the Toronet blockchain. It provides tools for wallet management, token balance queries, KYC verification, and fiat deposit integration, simplifying blockchain development while ensuring type safety and reliability.

---

## Features

- **Wallet Management**
  - Create wallets and set Toronet Naming System (TNS) names.
- **Token Balance Queries**
  - Retrieve balances for NGN, USD, KSH, and ToroG tokens.
- **Fiat Deposits (Multi-Currency)**
  - Initialize and verify fiat deposits using whitelisted project credentials.
  - Supported currencies: NGN, EUR, USD, GBP, KSH, ZAR.
- **KYC Verification**
  - Perform identity verification for users.
  - Check if a wallet address is KYC verified.

---

## Installation

```bash
npm install torosdk

```

----------

## Usage

### **1️⃣ Create a Wallet**

```typescript
import { createWallet } from "torosdk";

(async () => {
  const walletAddress = await createWallet({ password: "securePassword123" });
  console.log("Wallet Address:", walletAddress);
})();

```

----------

### **2️⃣ Get Token Balances**

```typescript
import { getBalance } from "torosdk";

(async () => {
  const address = "0x46bbe1dab243c3c889e491b92fe0337b57deba97";

  const balances = await getBalance({ address: address });
  console.log("Balances:", balances);
})();

```

----------

### **3️⃣ Perform KYC Verification**

**🔹 Before using this feature,** ensure that you have the correct admin credentials.  
KYC is required for transactions.

```typescript
import { performKYCForCustomer, isAddressKYCVerified, KYCParams } from "torosdk";

const kycparams: KYCParams = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Doe",
  bvn: "123456789",
  currency: "NGN",
  phoneNumber: "08012345678",
  dob: "1990-01-01",
  address: "0x8d05f2be776279b231a3607464fa72589ba99337", // user's wallet address
  admin: "adminAddr",  // Whitelisted project credentials
  adminpwd: "@adminPassword",
};

const isKYCSuccessful = await performKYCForCustomer(kycparams);
console.log("KYC Response:", isKYCSuccessful);

// Check if the wallet address is KYC verified
const isAddressVerified = await isAddressKYCVerified({
  address: "0x8d05f2be776279b231a3607464fa72589ba99337",
});
console.log("Address Verification:", isAddressVerified);

```

----------

### **4️⃣ Deposit Fiat (Multi-Currency)**

**🔹 Before using this feature,** you must **register as a project** at [https://payments.connectw.com/](https://payments.connectw.com/) to get **admin credentials**.

```typescript
import { depositFunds, Currency } from "torosdk";

const address = "0x8d05f2be776279b231a3607464fa72589ba99337";
const username = "testUsername";
const amount = "1000";
const currency = Currency.Kenyan_Shilling; // KSH

// Step 1: Initialize Deposit
const depositDetails = await depositFunds({
  userAddress: address,
  username,
  amount,
  currency,
  admin: "adminAddr",  // Whitelisted project credentials
  adminpwd: "@adminPassword",
});

console.log("Deposit Details:", depositDetails);

```

----------

### **Supported Currencies for Deposits**

The SDK now supports multiple fiat currencies:

```typescript
export enum Currency {
    Naira = "NGN",
    Euro = "EUR",
    Dollar = "USD",
    Pound = "GBP",
    Kenyan_Shilling = "KSH",
    South_African_Rand = "ZAR",
}

```

----------

## Folder Structure

```plaintext
src/
├── api/                # API abstraction layer
│   ├── account.ts      # Wallet and TNS APIs
│   ├── balance.ts      # Balance query APIs
│   ├── payments.ts     # Deposit and verification APIs
│   └── config.ts       # API configuration
│
├── services/           # Business logic layer
│   ├── walletService.ts
│   ├── balanceService.ts
│   ├── paymentService.ts
│   ├── kycService.ts
│   └── utils.ts        # Utility functions
│
├── index.ts            # Main SDK entry point

```

----------

## Contribution

We welcome contributions from the community! To contribute:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Submit a pull request with a detailed explanation.

----------

## License

This project is licensed under the MIT License. See the LICENSE file for details.

----------

## Support

For questions or support, please join our [Discord community](https://discord.gg/45SMNdGx5d).

```

---

### **🔹 What’s New?**
✅ **Added KYC Verification Instructions**  
✅ **Included Multi-Currency Deposits with `Currency` Enum**  
✅ **Provided Clear Example Usage for Both Features**  

This is now fully formatted for **GitHub markdown**. Let me know if you'd like any further refinements or additional documentation sections! 🚀😊

```