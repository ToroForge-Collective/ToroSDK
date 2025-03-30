
---

```markdown
# Toronet SDK

## Overview

The Toronet SDK is a TypeScript-based toolkit for interacting with the Toronet blockchain. It empowers developers to manage wallets, query blockchain data, handle fiat transactions, verify user identity, and more — all from a developer-friendly interface.

---

## Features

- **Wallet Management**
  - Create wallets and set Toronet Naming System (TNS) names.
  - Import wallet using private key and password.
  - Verify wallet password integrity.

- **Blockchain Queries**
  - Get latest block data.
  - Retrieve blockchain status.
  - Fetch historical blocks and transactions.

- **Token Balance Queries**
  - Retrieve balances for NGN, USD, KSH, and ToroG tokens.

- **Fiat Deposits (Multi-Currency)**
  - Initialize and verify fiat deposits using whitelisted project credentials.
  - Supported currencies: NGN, EUR, USD, GBP, KSH, ZAR.

- **KYC Verification**
  - Perform identity verification.
  - Check if a wallet address is KYC verified.

- **Exchange Rate Queries**
  - Fetch exchange rates for supported fiat and crypto assets.

---

## Installation

```bash
npm install torosdk
```

---

## Usage

### 🔐 Create a Wallet

```typescript
import { createWallet } from "torosdk";

const walletAddress = await createWallet({
  password: "securePassword123"
});
console.log("Wallet Address:", walletAddress);
```

---

### 🔑 Import Wallet from Private Key

```typescript
import { importWalletFromPrivateKeyAndPassword } from "torosdk";

const address = await importWalletFromPrivateKeyAndPassword({
  pvkey: "yourPrivateKeyHere",
  password: "yourPasswordHere"
});
console.log("Imported Wallet Address:", address);
```

---

### 🔒 Verify Wallet Password

```typescript
import { verifyWalletPassword } from "torosdk";

const isValid = await verifyWalletPassword({
  address: "0xYourAddress",
  password: "yourPassword"
});
console.log("Password is correct:", isValid);
```

---

### 📦 Get Wallet Key

```typescript
import { getWalletKey } from "torosdk";

const key = await getWalletKey({
  address: "0xYourWalletAddress"
});
console.log("Wallet Key:", key);
```

---

### 📊 Blockchain Status & Latest Block

```typescript
import { getBlockchainStatus, getLatestBlockData } from "torosdk";

const status = await getBlockchainStatus();
console.log("Blockchain Status:", status);

const block = await getLatestBlockData();
console.log("Latest Block:", block);
```

---

### 💰 Get Token Balances

```typescript
import { getBalance } from "torosdk";

const balances = await getBalance({
  address: "0xYourWalletAddress"
});
console.log("Token Balances:", balances);
```

---

### 🧾 KYC Verification
**🔹 Before using this feature,** ensure that you have the correct admin credentials.  
KYC is required for transactions.
```typescript
import { performKYCForCustomer, isAddressKYCVerified } from "torosdk";

const kycparams = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Doe",
  bvn: "123456789",
  currency: "NGN",
  phoneNumber: "08012345678",
  dob: "1990-01-01",
  address: "0xYourWalletAddress",
  admin: "yourWhitelistedAdminAddress",
  adminpwd: "yourAdminPassword",
};

const isKYCSuccessful = await performKYCForCustomer(kycparams);
console.log("KYC Successful:", isKYCSuccessful);

const isVerified = await isAddressKYCVerified({
  address: "0xYourWalletAddress"
});
console.log("KYC Verified:", isVerified);
```

---

### 💸 Fiat Deposit (Multi-Currency)
**🔹 Before using this feature,** you must **register as a project** at [https://payments.connectw.com/](https://payments.connectw.com/) to get **admin credentials**.

```typescript
import { depositFunds } from "torosdk";
import { Currency } from "torosdk/types";

const depositDetails = await depositFunds({
  userAddress: "0xYourWalletAddress",
  username: "testUser",
  amount: "1000",
  currency: Currency.Kenyan_Shilling,
  admin: "adminAddr",
  adminpwd: "@adminPassword"
});
console.log("Deposit Info:", depositDetails);
```

---

### 🔁 Blockchain Queries

```typescript
import { getSupportedAssetsExchangeRates, getBlocksData, getBlockchainTransactions } from "torosdk";

// Exchange rates
const rates = await getSupportedAssetsExchangeRates();
console.log("Exchange Rates:", rates);

// Get blocks
const blocks = await getBlocksData(5); // last 5 blocks
console.log("Blocks:", blocks);

// Get transactions
const txs = await getBlockchainTransactions(10);
console.log("Transactions:", txs);
```

---

## Supported Currencies

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

---

## Folder Structure

```plaintext
src/
├── api/                
│   ├── account.ts           
│   ├── balance.ts           
│   ├── blockchain.ts        
│   ├── keystore.ts          
│   ├── payments.ts          
│   ├── kyc.ts               
│   └── config.ts            
│
├── query/                  # On-chain data queries
│   └── queries.ts          
│
├── services/               # Business logic
│   ├── walletService.ts    
│   ├── balanceService.ts   
│   ├── paymentService.ts   
│   ├── kycService.ts       
│   ├── blockchainService.ts
│   └── utils.ts            
│
├── types/                  # Global types and enums
├── utils/                 
├── index.ts                # SDK entry
```

---

## Contribution

We welcome contributions from the community!

1. Fork the repo
2. Create a feature branch
3. Submit a PR with detailed explanation

---

## License

MIT License – see LICENSE file.

---

## Support

Join our developer community on [Discord](https://discord.gg/45SMNdGx5d).
```

---

Let me know if you’d like to break this into multiple docs (like `Getting Started`, `API Reference`, etc.) or generate typed docs from the code itself!