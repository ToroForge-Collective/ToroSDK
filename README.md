# Toronet SDK

## Overview

The Toronet SDK is a TypeScript-based toolkit for interacting with the Toronet blockchain. It empowers developers to manage wallets, query blockchain data, handle fiat transactions, verify user identity, manage virtual wallets, bridge tokens from multiple chains (Solana, Base, Polygon, BSC, Arbitrum), and more — all from a developer-friendly interface.

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

- **Advanced Keystore Operations**
  - Update wallet password.
  - Delete keystore from server.

- **Advanced TNS Operations**
  - Query name by address, address by name.
  - Update and delete TNS names.
  - Permission management (set, update, delete permissions).
  - Admin TNS operations.

- **Role Management**
  - Admin, Super Admin, and Debugger role operations.
  - Query roles, add/remove role members.
  - Initialize role systems.

- **Token Operations**
  - Token metadata (name, symbol, decimals).
  - Allowance queries (minimum, maximum, current).
  - Transaction fee queries.
  - Supply queries (reserve, total cap, circulating).
  - Status checks (enrollment, frozen, feature flags).

- **Advanced Currency Operations**
  - Owner operations: enable/disable transfer, mint, burn.
  - Admin operations: freeze/unfreeze, enroll, mint, burn, set allowances.
  - Fee configuration.

- **Product Management**
  - Get project information.
  - Create, read, update products.

- **Advanced Payment Operations**
  - Bank list queries (USD, NGN).
  - Fiat withdrawal operations.
  - Bank account verification (NGN).
  - Date range queries for transactions and withdrawals.

- **Advanced Query Operations**
  - Address transactions with date range and token filtering.
  - Pagination support.

- **Multi-Chain Bridge Support**
  - Bridge tokens from Solana, Base, Polygon, BSC, and Arbitrum to Toronet.
  - Query balances and transactions on external chains.
  - Transfer tokens on supported chains.
  - Initialize crypto deposits from external blockchains.
  - Get bridge fee estimates.
  - Solana-specific operations (address creation, validation, SPL token transfers).

---

## Installation

```bash
npm install torosdk
```

---

## Configuration

### Network Selection (Testnet/Mainnet)

The SDK supports both mainnet and testnet. You can configure the network when initializing:

```typescript
import { initializeSDK } from "torosdk";

// Use testnet
initializeSDK({ network: 'testnet' });

// Use mainnet (default)
initializeSDK({ network: 'mainnet' });

// Or use custom URLs
initializeSDK({
  network: 'mainnet',
  baseURL: 'https://custom-toronet.org',
  connectWURL: 'https://custom-connectw.com'
});
```

**Note:** If you don't configure the SDK, it defaults to mainnet. All API calls will automatically use the configured network.

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

### 🔄 Update Wallet Password

```typescript
import { updatePassword } from "torosdk";

const result = await updatePassword({
  address: "0xYourWalletAddress",
  oldPassword: "oldPassword123",
  newPassword: "newPassword456"
});
console.log("Password updated:", result);
```

---

### 🗑️ Delete Wallet

```typescript
import { deleteWallet } from "torosdk";

const result = await deleteWallet({
  address: "0xYourWalletAddress",
  password: "yourPassword"
});
console.log("Wallet deleted:", result);
```

---

### 📝 Advanced TNS Operations

```typescript
import {
  getName,
  getAddr,
  updateName,
  deleteName,
  isAddrAssigned,
  adminSetName
} from "torosdk";

// Query operations
const name = await getName({ address: "0xAddress" });
const address = await getAddr({ name: "username" });
const isAssigned = await isAddrAssigned({ address: "0xAddress" });

// Client operations
await updateName({
  address: "0xAddress",
  password: "password",
  username: "newusername"
});

await deleteName({
  address: "0xAddress",
  password: "password"
});

// Admin operations
await adminSetName({
  address: "0xAddress",
  username: "newusername",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
```

---

### 👥 Role Management

```typescript
import {
  isAdmin,
  addAdmin,
  removeAdmin,
  isSuperAdmin,
  addSuperAdmin,
  isDebugger
} from "torosdk";

// Check roles
const isAddrAdmin = await isAdmin({ address: "0xAddress" });
const isAddrSuperAdmin = await isSuperAdmin({ address: "0xAddress" });
const isAddrDebugger = await isDebugger({ address: "0xAddress" });

// Manage admins (requires super admin)
await addAdmin({
  address: "0xSuperAdminAddress",
  password: "superAdminPassword",
  adminAddress: "0xNewAdminAddress"
});

await removeAdmin({
  address: "0xSuperAdminAddress",
  password: "superAdminPassword",
  adminAddress: "0xAdminToRemove"
});
```

---

### 🪙 Token Operations

```typescript
import {
  getTokenName,
  getTokenSymbol,
  getTokenDecimal,
  getTokenBalance,
  getAllowance,
  getTransactionFee,
  isEnrolled,
  isFrozen
} from "torosdk";

// Token metadata
const name = await getTokenName();
const symbol = await getTokenSymbol();
const decimals = await getTokenDecimal();

// Balance and allowances
const balance = await getTokenBalance({ address: "0xAddress" });
const allowance = await getAllowance({
  owner: "0xOwnerAddress",
  spender: "0xSpenderAddress"
});

// Fees
const fee = await getTransactionFee({ amount: "1000" });

// Status checks
const enrolled = await isEnrolled({ address: "0xAddress" });
const frozen = await isFrozen({ address: "0xAddress" });
```

---

### 💱 Advanced Currency Operations

```typescript
import {
  getCurrencyBalance,
  transferCurrency,
  allowTransfer,
  freezeAddress,
  enrollAddress,
  mintCurrency,
  burnCurrency
} from "torosdk";

// Get balance
const balance = await getCurrencyBalance({
  currency: "NGN",
  address: "0xAddress"
});

// Transfer (client)
await transferCurrency({
  currency: "NGN",
  senderAddr: "0xSender",
  senderPwd: "password",
  receiverAddr: "0xReceiver",
  amount: "1000"
});

// Owner operations
await allowTransfer({
  currency: "NGN",
  address: "0xOwnerAddress",
  password: "ownerPassword"
});

// Admin operations
await freezeAddress({
  currency: "NGN",
  address: "0xAdminAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword",
  targetAddress: "0xTargetAddress"
});

await mintCurrency({
  currency: "NGN",
  address: "0xAdminAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword",
  targetAddress: "0xRecipientAddress",
  amount: "1000"
});
```

---

### 📦 Product Management

```typescript
import {
  getProject,
  getProduct,
  recordProduct,
  updateProduct
} from "torosdk";

// Get project info
const project = await getProject({
  admin: "0xAdminAddress",
  getbalances: "true"
});

// Product operations
const product = await getProduct({
  productId: "product123",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});

await recordProduct({
  productId: "product123",
  productName: "My Product",
  description: "Product description",
  productImage: "https://example.com/image.jpg",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
```

---

### 💳 Advanced Payment Operations

```typescript
import {
  getBankListUSD,
  getBankListNGN,
  recordFiatWithdrawal,
  verifyBankAccountNameNGN,
  getFiatTransactionsAddressRange,
  getFiatWithdrawalsAddressRange
} from "torosdk";

// Get bank lists
const usdBanks = await getBankListUSD({
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});

const ngnBanks = await getBankListNGN({
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});

// Record withdrawal
await recordFiatWithdrawal({
  address: "0xAddress",
  password: "password",
  currency: "NGN",
  token: "NGN",
  payername: "John Doe",
  payeremail: "john@example.com",
  description: "Withdrawal",
  amount: "1000",
  accounttype: "savings",
  bankname: "Bank Name",
  routingno: "123456",
  accountno: "1234567890",
  accountname: "John Doe",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});

// Verify bank account
const verification = await verifyBankAccountNameNGN({
  destinationInstitutionCode: "058",
  accountNumber: "1234567890",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});

// Date range queries
const transactions = await getFiatTransactionsAddressRange({
  address: "0xAddress",
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  currency: "NGN",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
```

---

### 🔍 Advanced Query Operations with Date Ranges

```typescript
import { getAddrTransactionsRange } from "torosdk";

const transactions = await getAddrTransactionsRange({
  address: "0xAddress",
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  token: "NGN", // Optional token filter
  count: 100, // Optional pagination
  start: 0 // Optional offset
});
```

---

### 🌉 Multi-Chain Bridge Operations

The SDK supports bridging tokens from multiple blockchain networks to Toronet. Supported chains include Solana, Base, Polygon, BSC, and Arbitrum.

#### Solana Bridge Operations

```typescript
import {
  getSolBalance,
  getSolTokenBalance,
  transferSolana,
  transferSolToken,
  bridgeTokenSol,
  getBridgeTokenFeeSol,
  isValidSolanaAddress,
  BridgeNetwork
} from "torosdk";

// Validate Solana address
const isValid = await isValidSolanaAddress("3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w");

// Get SOL balance
const solBalance = await getSolBalance({
  address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w"
});

// Get USDC balance on Solana
const usdcBalance = await getSolTokenBalance({
  address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
  contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
});

// Bridge USDC from Solana to Toronet
await bridgeTokenSol({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.Solana,
  contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  tokenname: "USDC",
  amount: "100"
});
```

#### EVM Chain Bridge Operations (Base, Polygon, BSC, Arbitrum)

```typescript
import {
  getBalanceBase,
  getTokenBalanceBase,
  bridgeTokenBase,
  getBalancePolygon,
  getTokenBalancePolygon,
  bridgeTokenPolygon,
  getBalanceBSC,
  getTokenBalanceBSC,
  bridgeTokenBSC,
  getBalanceArbitrum,
  getTokenBalanceArbitrum,
  bridgeTokenArbitrum,
  BridgeNetwork
} from "torosdk";

// Get balance on Base
const baseBalance = await getBalanceBase({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});

// Get USDC balance on Polygon
const polyUSDC = await getTokenBalancePolygon({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada",
  contractaddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  tokenname: "USDC"
});

// Bridge USDC from Polygon to Toronet
await bridgeTokenPolygon({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.Polygon,
  contractaddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  tokenname: "USDC",
  amount: "50"
});

// Bridge USDT from BSC to Toronet
await bridgeTokenBSC({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.BSC,
  contractaddress: "0x55d398326f99059ff775485246999027b3197955",
  tokenname: "USDT",
  amount: "100"
});
```

#### Using Generic Bridge Functions

```typescript
import {
  getBridgeBalance,
  getBridgeTokenBalance,
  getBridgeTransactions,
  getBridgeTokenTransactions,
  bridgeTokenFromChain,
  getBridgeTokenFeeEstimate,
  BridgeNetwork
} from "torosdk";

// Get balance on any supported external chain
const balance = await getBridgeBalance(BridgeNetwork.Base, {
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});

// Get token balance on external chain
const tokenBalance = await getBridgeTokenBalance(BridgeNetwork.Polygon, {
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada",
  contractaddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  tokenname: "USDC"
});

// Get transactions on external chain
const transactions = await getBridgeTransactions(BridgeNetwork.BSC, {
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});

// Bridge token from any external chain to Toronet
await bridgeTokenFromChain(BridgeNetwork.Arbitrum, {
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.Arbitrum,
  contractaddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  tokenname: "USDC",
  amount: "75"
});

// Get bridge fee estimate
const fee = await getBridgeTokenFeeEstimate(BridgeNetwork.Base, {
  network: BridgeNetwork.Base,
  contractaddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  amount: "50"
});
```

#### Crypto Payment Initialization

```typescript
import {
  paymentInitializeCrypto,
  recordCryptoPayment
} from "torosdk";

// Initialize crypto deposit from Solana
const deposit = await paymentInitializeCrypto({
  address: "0xYourToronetAddress",
  pwd: "YourPassword",
  currency: "USDCSOL", // Currency codes: USDCSOL, USDTBSC, USDCPOLY, USDCARB, USDCBASE
  token: "TORO",
  amount: "100",
  paymenttype: "crypto"
}, "0xAdminAddress", "adminPassword");

// Record completed crypto payment
await recordCryptoPayment({
  currency: "USDCSOL",
  txid: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w_8e21df8325dc5e88"
}, "0xAdminAddress", "adminPassword");
```

For more detailed bridge examples, see [CODE_SAMPLES.md](CODE_SAMPLES.md#multi-chain-bridge-operations).

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
│   ├── bridge/              # Multi-chain bridge operations
│   │   ├── solana.ts        # Solana bridge operations
│   │   ├── base.ts          # Base chain operations
│   │   ├── polygon.ts       # Polygon chain operations
│   │   ├── bsc.ts           # BSC chain operations
│   │   ├── arbitrum.ts      # Arbitrum chain operations
│   │   ├── payments.ts      # Crypto payment operations
│   │   └── index.ts         
│   └── config.ts            
│
├── query/                  # On-chain data queries
│   └── queries.ts          
│
├── services/               # Business logic
│   ├── walletService.ts    
│   ├── balanceService.ts   
│   ├── paymentService.ts   
│   ├── bridge_service.ts   # Bridge service wrappers
│   └── utils.ts            
│
├── virtualwallet/          # Virtual wallet business logic
│   └── virtualwallet.ts    
│
├── types/                  # Global types and enums
│   └── bridge.ts           # Bridge type definitions
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

