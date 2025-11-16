# Toronet SDK

## Overview

The Toronet SDK is a TypeScript-based toolkit for interacting with the Toronet blockchain. It empowers developers to manage wallets, query blockchain data, handle fiat transactions, verify user identity, manage virtual wallets, and more — all from a developer-friendly interface.

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
  - Query transaction, receipt, revert reason, and events.

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

- **Comprehensive Query Endpoints**
  - Query address roles, balances, blocks, transactions, events, and more.
  - Filter transactions by currency, address, or range.

- **Virtual Wallet System**
  - Generate, retrieve, update, and query virtual wallets by address or ID.

- **Address Validation Utility**
  - Validate if a string is a valid Toronet address.

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
  username: "myuser123",
  password: "securePassword123"
});
console.log("Wallet Address:", walletAddress);
```

---

### 🔑 Import Wallet from Private Key

```typescript
import { importWalletFromPrivateKeyAndPassword } from "torosdk";

const address = await importWalletFromPrivateKeyAndPassword({
  pvKey: "yourPrivateKeyHere",
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
}, {
  payeraddress: "123 Main St",
  payercity: "Lagos",
  payerstate: "Lagos",
  payercountry: "Nigeria",
  payerzipcode: "100001",
  payerphone: "+2348012345678",
  description: "Initial deposit",
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
  paymenttype: "deposit",
  feetype: "1",
  exchange: "72",
  reusewallet: "0",
});
console.log("Deposit Info:", depositDetails);
```

---

### 🔁 Blockchain & Query Endpoints

```typescript
import {
  getSupportedAssetsExchangeRates,
  getBlocksData,
  getBlockchainTransactions,
  getAddressRole,
  getAddressBalance,
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
} from "torosdk";

const rates = await getSupportedAssetsExchangeRates();
console.log("Exchange Rates:", rates);
const blocks = await getBlocksData(5); // last 5 blocks
console.log("Blocks:", blocks);
const txs = await getBlockchainTransactions(10);
console.log("Transactions:", txs);
const addrRole = await getAddressRole("0xYourWalletAddress");
console.log("Address Role:", addrRole);
const addrBalance = await getAddressBalance("0xYourWalletAddress");
console.log("Address Balance:", addrBalance);
const blockById = await getBlockById("latest");
console.log("Block By ID:", blockById);
const txById = await getTransactionById("0xYourTxHash");
console.log("Transaction By ID:", txById);
const txReceiptById = await getTransactionReceiptById("0xYourTxHash");
console.log("Transaction Receipt By ID:", txReceiptById);
const eventById = await getEventById("event123");
console.log("Event By ID:", eventById);
const addrTxs = await getAddressTransactions("0xYourWalletAddress", 5);
console.log("Address Transactions:", addrTxs);
const txsToro = await getTransactionsToroWrapper(5);
console.log("Transactions Toro:", txsToro);
const addrTxsToro = await getAddressTransactionsToro("0xYourWalletAddress", 5);
console.log("Address Transactions Toro:", addrTxsToro);
const txsDollar = await getTransactionsDollarWrapper(5);
console.log("Transactions Dollar:", txsDollar);
const addrTxsDollar = await getAddressTransactionsDollar("0xYourWalletAddress", 5);
console.log("Address Transactions Dollar:", addrTxsDollar);
const txsNaira = await getTransactionsNairaWrapper(5);
console.log("Transactions Naira:", txsNaira);
const addrTxsNaira = await getAddressTransactionsNaira("0xYourWalletAddress", 5);
console.log("Address Transactions Naira:", addrTxsNaira);
const txsEuro = await getTransactionsEuroWrapper(5);
console.log("Transactions Euro:", txsEuro);
const addrTxsEuro = await getAddressTransactionsEuro("0xYourWalletAddress", 5);
console.log("Address Transactions Euro:", addrTxsEuro);
const txsPound = await getTransactionsPoundWrapper(5);
console.log("Transactions Pound:", txsPound);
const addrTxsPound = await getAddressTransactionsPound("0xYourWalletAddress", 5);
console.log("Address Transactions Pound:", addrTxsPound);
const txsEGP = await getTransactionsEGPWrapper(5);
console.log("Transactions EGP:", txsEGP);
const addrTxsEGP = await getAddressTransactionsEGP("0xYourWalletAddress", 5);
console.log("Address Transactions EGP:", addrTxsEGP);
const txsKSH = await getTransactionsKSHWrapper(5);
console.log("Transactions KSH:", txsKSH);
const addrTxsKSH = await getAddressTransactionsKSH("0xYourWalletAddress", 5);
console.log("Address Transactions KSH:", addrTxsKSH);
const txsZAR = await getTransactionsZARWrapper(5);
console.log("Transactions ZAR:", txsZAR);
const addrTxsZAR = await getAddressTransactionsZAR("0xYourWalletAddress", 5);
console.log("Address Transactions ZAR:", addrTxsZAR);
const txsETH = await getTransactionsETHWrapper(5);
console.log("Transactions ETH:", txsETH);
const addrTxsETH = await getAddressTransactionsETH("0xYourWalletAddress", 5);
console.log("Address Transactions ETH:", addrTxsETH);
const txsRange = await getTransactionsRangeWrapper(0, 10);
console.log("Transactions Range:", txsRange);
const addrTxsAuth = await getAddressTransactionsAuth("0xYourWalletAddress", 5);
console.log("Address Transactions Auth:", addrTxsAuth);

// Address validation
const isAddrValid = await isAddressUtil("0xYourWalletAddress");
console.log("Is Address Valid:", isAddrValid);
```

---

### 🏦 Virtual Wallets

```typescript
import {
  createVirtualWallet,
  fetchVirtualWallet,
  fetchVirtualWalletByAddress,
  updateVirtualWalletTxs
} from "torosdk";

const virtualWallet = await createVirtualWallet({
  address: "0xYourWalletAddress",
  payername: "Demo User",
  currency: Currency.Naira,
  admin: "0xadminaddress",
  adminpwd: "adminpassword",
});
console.log("Created Virtual Wallet:", virtualWallet);

const fetchedVirtualWallet = await fetchVirtualWallet({
  virtualwallet: "8900610225",
  admin: "0xadminaddress",
  adminpwd: "adminpassword",
});
console.log("Fetched Virtual Wallet:", fetchedVirtualWallet);

const fetchedVirtualWalletByAddress = await fetchVirtualWalletByAddress({
  address: "0xYourWalletAddress",
  admin: "0xadminaddress",
  adminpwd: "adminpassword",
});
console.log("Fetched Virtual Wallet By Address:", fetchedVirtualWalletByAddress);

const updatedVirtualWalletTxs = await updateVirtualWalletTxs({
  walletaddress: "8900610225",
  admin: "0xadminaddress",
  adminpwd: "adminpassword",
});
console.log("Updated Virtual Wallet Transactions:", updatedVirtualWalletTxs);
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
├── virtualwallet/          # Virtual wallet business logic
│   └── virtualwallet.ts    
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

