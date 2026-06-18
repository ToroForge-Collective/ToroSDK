# Toronet SDK - Developer Usage Guide

This guide provides comprehensive code samples showing how to use the Toronet SDK in your applications. Each section includes practical examples with imports, function calls, and intuitive explanations suitable for both technical and non-technical audiences.

---

## Table of Contents

1. [SDK Configuration](#sdk-configuration)
2. [Wallet Management](#wallet-management)
3. [Keystore Operations](#keystore-operations)
4. [TNS (Toronet Naming System)](#tns-toronet-naming-system)
5. [Balance & Token Queries](#balance--token-queries)
6. [Blockchain Queries](#blockchain-queries)
7. [Query Operations](#query-operations)
8. [Payment Operations](#payment-operations)
9. [Virtual Wallets](#virtual-wallets)
10. [Token Operations](#token-operations)
11. [Currency Operations](#currency-operations)
12. [Role Management](#role-management)
13. [Product Management](#product-management)
14. [Multi-Chain Bridge Operations](#multi-chain-bridge-operations)

---

## SDK Configuration

**What it does:** Configure the SDK to connect to either the mainnet (production) or testnet (testing) blockchain network. This is typically the first step when using the SDK.

**When to use it:** Call this before making any other SDK calls to ensure you're connecting to the correct network environment.

```typescript
import { initializeSDK } from "torosdk";

// Configure SDK for testnet (for development and testing)
initializeSDK({ network: 'testnet' });
console.log("✓ SDK configured for testnet");

// Or configure for mainnet explicitly (production)
initializeSDK({ network: 'mainnet' });

// Or use custom URLs for specialized deployments
initializeSDK({
  network: 'mainnet',
  baseURL: 'https://custom-toronet.org',
  connectWURL: 'https://custom-connectw.com'
});
```

**Explanation:** The SDK defaults to mainnet if not configured. For development, use testnet to avoid spending real funds. The configuration is global and affects all subsequent SDK calls.

---

## Wallet Management

**What it does:** Create new blockchain wallets and manage the Toronet Naming System (TNS) - a human-readable name system that lets you use names like `alice.toro` instead of long addresses.

**When to use it:** Use these functions when you need to create new user accounts, check if usernames are available, or set up wallet names.

```typescript
import {
  createWallet,
  configureTNS,
  isTNSAvailable,
  updatePassword,
  deleteWallet
} from "torosdk";

// Check if a username is available before creating a wallet
const username = "alice";
const isAvailable = await isTNSAvailable({ username });
console.log(`Username "${username}" is available:`, isAvailable);

if (isAvailable) {
  // Create a new wallet with a username and password
  const password = "SuperSecretPassword123!";
  const address = await createWallet({ username, password });
  console.log("✓ Wallet created:", address);
  // Output: "0x1234567890abcdef1234567890abcdef12345678"
  
  // TNS is automatically configured during wallet creation
  // But you can also configure it separately if needed
  await configureTNS({ address, password, username });
  console.log(`✓ TNS configured: ${username} -> ${address}`);
}

// Update wallet password (requires old and new password)
try {
  await updatePassword({
    address: "0xYourWalletAddress",
    oldPassword: "OldPassword123!",
    newPassword: "NewSecurePassword456!"
  });
  console.log("✓ Password updated successfully");
} catch (error) {
  console.error("Password update failed:", error);
}

// Delete wallet (WARNING: This permanently deletes the keystore)
// await deleteWallet({
//   address: "0xYourWalletAddress",
//   password: "YourPassword"
// });
```

**Explanation:** `createWallet` generates a new blockchain address and automatically registers your username to it via TNS. `isTNSAvailable` checks if a username is taken before attempting to create a wallet. Always check availability first to avoid errors.

---

## Keystore Operations

**What it does:** Import existing wallets, verify passwords, and retrieve wallet key data. Useful when migrating wallets or verifying credentials.

**When to use it:** Use these when you need to import a wallet from a private key, verify a user's password, or retrieve encrypted wallet data.

```typescript
import {
  importWalletFromPrivateKeyAndPassword,
  verifyWalletPassword,
  getWalletKey
} from "torosdk";

// Import an existing wallet using a private key
const importedAddress = await importWalletFromPrivateKeyAndPassword({
  pvKey: "0xYourPrivateKeyHere",
  password: "YourPasswordHere"
});
console.log("✓ Wallet imported:", importedAddress);

// Verify that a password is correct for a wallet
const address = "0xYourWalletAddress";
const password = "YourPassword";
const isPasswordValid = await verifyWalletPassword({ address, password });
console.log("Password is correct:", isPasswordValid);
// Returns: true if password is correct, false otherwise

// Get wallet key (encrypted keystore data)
const walletKey = await getWalletKey({ address });
console.log("✓ Wallet key retrieved");
// Returns the encrypted keystore JSON data
```

**Explanation:** `importWalletFromPrivateKeyAndPassword` allows you to bring an existing wallet into the system by providing its private key. `verifyWalletPassword` checks if a password can decrypt the stored wallet (useful for login verification). `getWalletKey` retrieves the encrypted wallet data.

---

## TNS (Toronet Naming System)

**What it does:** Query and manage human-readable names for blockchain addresses. Instead of remembering `0x1234...5678`, you can use `alice.toro`.

**When to use it:** Use these functions to look up addresses by name, find names by address, check if names are assigned, or manage name permissions.

```typescript
import {
  getName,
  getAddr,
  isAddrAssigned,
  isSetOn,
  isUpdateOn,
  isDeleteOn,
  updateName,
  deleteName,
  adminSetName
} from "torosdk";

// Query operations - no authentication required

// Get the TNS name for an address
const address = "0x1234567890abcdef1234567890abcdef12345678";
const tnsName = await getName({ address });
console.log("TNS name for address:", tnsName);
// Returns: "alice" or null if no name is assigned

// Get the address for a TNS name
const name = "alice";
const tnsAddress = await getAddr({ name });
console.log("Address for TNS name:", tnsAddress);
// Returns: "0x1234567890abcdef1234567890abcdef12345678"

// Check if an address has a TNS name assigned
const isAssigned = await isAddrAssigned({ address });
console.log("Address has TNS assigned:", isAssigned);
// Returns: true or false

// Check TNS system permissions
const setNameEnabled = await isSetOn();
console.log("Set name enabled:", setNameEnabled);

const updateEnabled = await isUpdateOn();
console.log("Update name enabled:", updateEnabled);

const deleteEnabled = await isDeleteOn();
console.log("Delete name enabled:", deleteEnabled);

// Client operations - requires wallet password

// Update your TNS name
await updateName({
  address: "0xYourWalletAddress",
  password: "YourPassword",
  username: "newusername"
});
console.log("✓ TNS name updated");

// Delete your TNS name
await deleteName({
  address: "0xYourWalletAddress",
  password: "YourPassword"
});
console.log("✓ TNS name deleted");

// Admin operations - requires admin privileges
await adminSetName({
  address: "0xTargetAddress",
  username: "adminassignedname",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("✓ TNS name set by admin");
```

**Explanation:** TNS functions allow bidirectional lookup between addresses and names. Query functions don't require authentication, while update/delete operations need your wallet password. Admin functions let administrators assign names to addresses.

---

## Balance & Token Queries

**What it does:** Check how much of each supported currency (NGN, USD, ToroG, etc.) is stored in a wallet address.

**When to use it:** Use these functions to display user balances, verify sufficient funds before transactions, or show account summaries.

```typescript
import {
  getBalance,
  getAddressBalance
} from "torosdk";

// Get all token balances for a wallet (NGN, USD, ToroG, etc.)
const address = "0xYourWalletAddress";
const balance = await getBalance({ address });
console.log("Wallet balance:", balance);
// Returns: { NGN: "1000.00", USD: "50.00", ToroG: "500.00", ... }

// Get detailed balance information for an address
const addrBalance = await getAddressBalance({ address });
console.log("Address balance retrieved:", addrBalance);
// Returns detailed balance object with all supported currencies
```

**Explanation:** `getBalance` returns a simple object with all currency balances for an address. `getAddressBalance` provides more detailed information. Both functions validate the address format before querying.

---

## Blockchain Queries

**What it does:** Retrieve information about the blockchain itself - network status, latest blocks, and transaction details.

**When to use it:** Use these functions to monitor network health, get the latest block information, or inspect specific transactions.

```typescript
import {
  getBlockchainStatus,
  getLatestBlockData,
  getTransaction,
  getReceipt,
  getRevertReason
} from "torosdk";

// Get the current status of the blockchain network
const blockchainStatus = await getBlockchainStatus();
console.log("Blockchain status:", blockchainStatus);
// Returns: network health, sync status, etc.

// Get the most recently created block
const latestBlock = await getLatestBlockData();
console.log("Latest block:", latestBlock);
// Returns: block number, timestamp, transactions, hash, etc.

// Get detailed information about a specific transaction
const txHash = "0x1234567890abcdef1234567890abcdef12345678";
const transaction = await getTransaction(txHash);
console.log("Transaction details:", transaction);
// Returns: sender, receiver, amount, gas used, status, etc.

// Get the receipt confirming a transaction was processed
const receipt = await getReceipt(txHash);
console.log("Transaction receipt:", receipt);
// Returns: confirmation status, block number, gas used, logs, etc.

// Get the reason why a transaction failed (if it reverted)
const revertReason = await getRevertReason(txHash);
console.log("Revert reason:", revertReason);
// Returns: error message explaining why the transaction failed
```

**Explanation:** `getBlockchainStatus` checks if the network is operational. `getLatestBlockData` gets the most recent block (useful for monitoring). `getTransaction` retrieves transaction details, while `getReceipt` provides proof of inclusion in a block. `getRevertReason` helps debug failed transactions.

---

## Query Operations

**What it does:** Provides comprehensive querying capabilities for blockchain data - exchange rates, blocks, transactions filtered by various criteria.

**When to use it:** Use these functions to get exchange rates, browse recent blocks/transactions, filter transactions by currency or address, or validate addresses.

```typescript
import {
  getSupportedAssetsExchangeRates,
  getBlocksData,
  getBlockchainTransactions,
  getAddressRole,
  getAddressBalance,
  getBlockById,
  getTransactionByHash,
  getTransactionReceiptById,
  getEventById,
  getAddressTransactions,
  getTransactionsToroWrapper,
  getAddressTransactionsToro,
  getTransactionsDollarWrapper,
  getAddressTransactionsDollar,
  getTransactionsNairaWrapper,
  getAddressTransactionsNaira,
  getTransactionsRangeWrapper,
  getAddressTransactionsAuth,
  isAddressUtil
} from "torosdk";
import { getAddrTransactionsRange } from "torosdk";

// Get current exchange rates for all supported assets
const exchangeRates = await getSupportedAssetsExchangeRates();
console.log("Exchange rates:", exchangeRates);
// Returns: rates like NGN/USD, EUR/USD, etc.

// Get the last N blocks from the blockchain
const blocks = await getBlocksData(5);
console.log("Last 5 blocks:", blocks);
// Returns: array of block data

// Get the last N transactions from the blockchain
const transactions = await getBlockchainTransactions(10);
console.log("Last 10 transactions:", transactions);
// Returns: array of transaction data

// Get the role of an address (admin, super admin, etc.)
const address = "0xYourWalletAddress";
const addrRole = await getAddressRole(address);
console.log("Address role:", addrRole);

// Get a specific block by ID or "latest"
const blockById = await getBlockById("latest");
console.log("Latest block:", blockById);

// Get a specific transaction by its hash
const txHash = "0x1234567890abcdef1234567890abcdef12345678";
const txById = await getTransactionByHash(txHash);
console.log("Transaction by ID:", txById);

// Get transaction receipt by transaction hash
const txReceiptById = await getTransactionReceiptById({ id: txHash });
console.log("Transaction receipt:", txReceiptById);

// Get event by event ID
const eventById = await getEventById({ id: "event123" });
console.log("Event by ID:", eventById);

// Get transactions for a specific address
const addrTxs = await getAddressTransactions(address, 5);
console.log("Last 5 transactions for address:", addrTxs);
// Returns transactions where address was sender or receiver

// Get transactions filtered by currency
const txsToro = await getTransactionsToroWrapper(5);
console.log("Last 5 ToroG transactions:", txsToro);

const txsDollar = await getTransactionsDollarWrapper(5);
console.log("Last 5 USD transactions:", txsDollar);

const txsNaira = await getTransactionsNairaWrapper(5);
console.log("Last 5 NGN transactions:", txsNaira);

// Get address transactions filtered by currency
const addrTxsToro = await getAddressTransactionsToro(address, 5);
console.log("Address ToroG transactions:", addrTxsToro);

// Get transactions by block range
const txsRange = await getTransactionsRangeWrapper(0, 10);
console.log("Transactions in block range 0-10:", txsRange);

// Get address transactions with date range and token filter
const addrTxsRange = await getAddrTransactionsRange({
  address: address,
  startDate: "2024-01-01",
  endDate: "2024-12-31",
  token: "NGN", // Optional: filter by token
  count: 100,   // Optional: limit results
  start: 0      // Optional: pagination offset
});
console.log("Address transactions with filters:", addrTxsRange);

// Validate if a string is a valid Toronet address
const isAddrValid = await isAddressUtil(address);
console.log("Is address valid:", isAddrValid);
// Returns: true or false
```

**Explanation:** These query functions provide flexible ways to explore blockchain data. You can get exchange rates, browse recent activity, filter by currency or address, and query specific blocks or transactions. The date range queries are useful for generating reports or transaction history.

---

## Payment Operations

**What it does:** Handles fiat currency deposits, withdrawals, KYC verification, and inter-wallet transfers. This bridges traditional banking with blockchain.

**When to use it:** Use these functions when users need to deposit real money, withdraw funds, verify their identity (KYC), or transfer tokens between wallets.

```typescript
import {
  depositFunds,
  confirmDeposit,
  performKYCForCustomer,
  isAddressKYCVerified,
  makeInterWalletTransferTxn,
  Currency
} from "torosdk";

// Initialize a fiat deposit (requires admin credentials from payments.connectw.com)
const depositDetails = await depositFunds(
  {
    userAddress: "0xUserWalletAddress",
    username: "alice",
    amount: "1000",
    currency: Currency.Naira, // or Currency.Dollar, Currency.Euro, etc.
    admin: "0xAdminAddress",
    adminpwd: "adminPassword"
  },
  {
    payeraddress: "123 Main St",
    payercity: "Lagos",
    payerstate: "Lagos",
    payercountry: "Nigeria",
    payerzipcode: "100001",
    payerphone: "+2348012345678",
    description: "Initial deposit",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel"
  }
);
console.log("Deposit initialized:", depositDetails);
// Returns: payment link or instructions for user to complete payment

// Verify that a deposit was completed
const isDepositConfirmed = await confirmDeposit({
  currency: Currency.Naira,
  transactionId: "TX1234567890"
});
console.log("Deposit confirmed:", isDepositConfirmed);
// Returns: true if deposit was verified and credited

// Perform KYC (Know Your Customer) verification
const kycParams = {
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
  bvn: "12345678901",
  currency: Currency.Naira,
  phoneNumber: "+2348012345678",
  dob: "1990-01-01",
  address: "0xUserWalletAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
};
const kycResult = await performKYCForCustomer(kycParams);
console.log("KYC result:", kycResult);
// Returns: true if KYC verification passed

// Check if an address is KYC verified
const isVerified = await isAddressKYCVerified({
  address: "0xUserWalletAddress"
});
console.log("KYC verified:", isVerified);
// Returns: { verified: true/false, provider: "provider_name" }

// Transfer tokens directly between two wallets
const transferResult = await makeInterWalletTransferTxn(
  "0xSenderAddress",      // Sender wallet address
  "SenderPassword",        // Sender wallet password
  "0xReceiverAddress",     // Receiver wallet address
  "100",                   // Amount to transfer
  Currency.Naira          // Currency to transfer
);
console.log("Transfer completed:", transferResult);
// Returns: transaction hash and confirmation details
```

**Explanation:** `depositFunds` creates a payment link for users to transfer money from their bank. `confirmDeposit` verifies the bank transfer was completed. `performKYCForCustomer` verifies user identity (required by regulations). `makeInterWalletTransferTxn` moves tokens directly between blockchain wallets without traditional banking.

---

## Virtual Wallets

**What it does:** Creates and manages virtual wallet accounts that act as intermediaries between traditional banking and blockchain wallets. Users can receive payments to simple account numbers instead of blockchain addresses.

**When to use it:** Use these functions when you need to simplify payments for users who aren't familiar with blockchain addresses, or when building payment systems that need bank-like account numbers.

```typescript
import {
  createVirtualWallet,
  fetchVirtualWallet,
  fetchVirtualWalletByAddress,
  updateVirtualWalletTxs,
  Currency
} from "torosdk";

// Create a virtual wallet linked to a blockchain address
const virtualWallet = await createVirtualWallet({
  address: "0xUserWalletAddress",
  payername: "John Doe",
  currency: Currency.Naira,
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("Virtual wallet created:", virtualWallet);
// Returns: { virtualwallet: "8900610225", ... }
// The virtual wallet ID (like a bank account number) can be used for payments

// Fetch virtual wallet details by its ID
const fetchedVirtualWallet = await fetchVirtualWallet({
  virtualwallet: "8900610225",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("Virtual wallet details:", fetchedVirtualWallet);
// Returns: wallet details, balance, linked address, transaction history

// Find virtual wallet by blockchain address
const fetchedVirtualWalletByAddress = await fetchVirtualWalletByAddress({
  address: "0xUserWalletAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("Virtual wallet by address:", fetchedVirtualWalletByAddress);
// Returns: virtual wallet details if one exists for this address

// Update virtual wallet transaction records
const updatedVirtualWalletTxs = await updateVirtualWalletTxs({
  walletaddress: "8900610225",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("Virtual wallet transactions updated:", updatedVirtualWalletTxs);
// Syncs transaction history for the virtual wallet
```

**Explanation:** Virtual wallets provide a simpler payment experience. Instead of requiring users to understand blockchain addresses, they can receive payments to a simple account number (like `8900610225`). When money is deposited to the virtual wallet, it's automatically converted to blockchain tokens and credited to the linked address.

---

## Token Operations

**What it does:** Queries information about the ToroG token - its metadata, balances, allowances, fees, and supply information.

**When to use it:** Use these functions to display token information, check balances, calculate fees, or monitor token supply and status.

```typescript
import {
  getTokenName,
  getTokenSymbol,
  getTokenDecimal,
  getTokenBalance,
  getMinimumAllowance,
  getMaximumAllowance,
  getAllowance,
  getTransactionFeeFixed,
  getTransactionFeePercentage,
  getTransactionFee,
  getTotalCap,
  getTotalReserving,
  getTotalCirculating,
  isEnrolled,
  isFrozen,
  isTransferOn,
  isMintOn,
  isBurnOn
} from "torosdk";

// Get token metadata
const tokenName = await getTokenName();
console.log("Token name:", tokenName);
// Returns: "ToroG" or similar

const tokenSymbol = await getTokenSymbol();
console.log("Token symbol:", tokenSymbol);
// Returns: "TORO" or similar

const tokenDecimal = await getTokenDecimal();
console.log("Token decimals:", tokenDecimal);
// Returns: number of decimal places (e.g., 18)

// Get token balance for an address
const address = "0xYourWalletAddress";
const tokenBalance = await getTokenBalance({ address });
console.log("Token balance:", tokenBalance);
// Returns: balance in ToroG tokens

// Get allowance information
const minAllowance = await getMinimumAllowance({ address });
console.log("Minimum allowance:", minAllowance);

const maxAllowance = await getMaximumAllowance({ address });
console.log("Maximum allowance:", maxAllowance);

// Get current allowance for a spender
const allowance = await getAllowance({
  owner: "0xOwnerAddress",
  spender: "0xSpenderAddress"
});
console.log("Allowance:", allowance);
// Returns: amount the spender is authorized to spend

// Get transaction fee information
const feeFixed = await getTransactionFeeFixed();
console.log("Transaction fee (fixed):", feeFixed);

const feePercentage = await getTransactionFeePercentage();
console.log("Transaction fee (percentage):", feePercentage);

// Calculate fee for a specific amount
const fee = await getTransactionFee({ amount: "1000" });
console.log("Transaction fee for 1000 tokens:", fee);

// Get token supply information
const totalCap = await getTotalCap();
console.log("Total cap:", totalCap);
// Maximum possible supply

const totalReserving = await getTotalReserving();
console.log("Total reserving:", totalReserving);
// Amount currently reserved

const totalCirculating = await getTotalCirculating();
console.log("Total circulating:", totalCirculating);
// Amount currently in circulation

// Check token status for an address
const enrolled = await isEnrolled({ address });
console.log("Is enrolled:", enrolled);
// Returns: true if address is enrolled in token system

const frozen = await isFrozen({ address });
console.log("Is frozen:", frozen);
// Returns: true if address is frozen (cannot transfer)

// Check token system features
const transferOn = await isTransferOn();
console.log("Transfer enabled:", transferOn);

const mintOn = await isMintOn();
console.log("Mint enabled:", mintOn);

const burnOn = await isBurnOn();
console.log("Burn enabled:", burnOn);
```

**Explanation:** Token operations query the ToroG token smart contract. Metadata functions return the token's identity. Balance and allowance functions check user-specific data. Fee functions help calculate transaction costs. Supply functions monitor token economics. Status functions check if features are enabled or if addresses have restrictions.

---

## Currency Operations

**What it does:** Manages multi-currency operations on the blockchain. Supports various fiat currencies (NGN, USD, EUR, GBP, KSH, ZAR, EGP) as blockchain tokens.

**When to use it:** Use these functions to check currency balances, transfer currencies between wallets, or perform administrative operations (requires appropriate privileges).

```typescript
import {
  getCurrencyBalance,
  transferCurrency,
  allowTransfer,
  disallowTransfer,
  freezeAddress,
  unfreezeAddress,
  enrollAddress,
  mintCurrency,
  burnCurrency
} from "torosdk";

// Get balance for a specific currency
const currencyBalance = await getCurrencyBalance({
  currency: "NGN", // or "USD", "EUR", "GBP", etc.
  address: "0xYourWalletAddress"
});
console.log("Currency balance (NGN):", currencyBalance);
// Returns: balance in the specified currency

// Transfer currency between wallets (client operation)
await transferCurrency({
  currency: "NGN",
  senderAddr: "0xSenderAddress",
  senderPwd: "SenderPassword",
  receiverAddr: "0xReceiverAddress",
  amount: "100"
});
console.log("✓ Currency transferred");

// Owner operations (requires currency contract owner privileges)
await allowTransfer({
  currency: "NGN",
  address: "0xOwnerAddress",
  password: "ownerPassword"
});
console.log("✓ Transfer enabled for currency");

await disallowTransfer({
  currency: "NGN",
  address: "0xOwnerAddress",
  password: "ownerPassword"
});
console.log("✓ Transfer disabled for currency");

// Admin operations (requires admin privileges)
await freezeAddress({
  currency: "NGN",
  address: "0xAdminAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword",
  targetAddress: "0xTargetAddress"
});
console.log("✓ Address frozen");

await unfreezeAddress({
  currency: "NGN",
  address: "0xAdminAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword",
  targetAddress: "0xTargetAddress"
});
console.log("✓ Address unfrozen");

// Enroll an address in the currency system
await enrollAddress({
  currency: "NGN",
  address: "0xAdminAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword",
  targetAddress: "0xTargetAddress"
});
console.log("✓ Address enrolled");

// Mint new currency tokens (admin operation)
await mintCurrency({
  currency: "NGN",
  address: "0xAdminAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword",
  targetAddress: "0xRecipientAddress",
  amount: "1000"
});
console.log("✓ Currency minted");

// Burn currency tokens (admin operation)
await burnCurrency({
  currency: "NGN",
  address: "0xAdminAddress",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword",
  targetAddress: "0xTargetAddress",
  amount: "500"
});
console.log("✓ Currency burned");
```

**Explanation:** Currency operations work with fiat currencies represented as blockchain tokens. `getCurrencyBalance` and `transferCurrency` are available to all users. Owner operations control currency functionality (enable/disable transfers). Admin operations manage addresses (freeze/unfreeze) and token supply (mint/burn).

---

## Role Management

**What it does:** Manages administrative roles on the blockchain - Admin, Super Admin, and Debugger. These roles control who can perform privileged operations.

**When to use it:** Use these functions to check user permissions, manage administrative access, or implement role-based access control in your application.

```typescript
import {
  isAdmin,
  getNumberOfAdmin,
  getAdminByIndex,
  addAdmin,
  removeAdmin,
  isSuperAdmin,
  getNumberOfSuperAdmin,
  addSuperAdmin,
  removeSuperAdmin,
  isDebugger,
  getNumberOfDebugger
} from "torosdk";

// Check if an address has admin privileges
const address = "0xSomeAddress";
const isAddrAdmin = await isAdmin({ address });
console.log("Is address admin:", isAddrAdmin);
// Returns: true or false

// Get the total number of admins
const numAdmins = await getNumberOfAdmin();
console.log("Number of admins:", numAdmins);

// Get admin address by index
const adminByIndex = await getAdminByIndex({ index: 0 });
console.log("Admin at index 0:", adminByIndex);

// Super admin operations (requires super admin privileges)
const isAddrSuperAdmin = await isSuperAdmin({ address });
console.log("Is address super admin:", isAddrSuperAdmin);

const numSuperAdmins = await getNumberOfSuperAdmin();
console.log("Number of super admins:", numSuperAdmins);

// Add a new admin (super admin operation)
await addAdmin({
  address: "0xSuperAdminAddress",
  password: "superAdminPassword",
  adminAddress: "0xNewAdminAddress"
});
console.log("✓ Admin added");

// Remove an admin (super admin operation)
await removeAdmin({
  address: "0xSuperAdminAddress",
  password: "superAdminPassword",
  adminAddress: "0xAdminToRemove"
});
console.log("✓ Admin removed");

// Debugger role queries
const isAddrDebugger = await isDebugger({ address });
console.log("Is address debugger:", isAddrDebugger);

const numDebuggers = await getNumberOfDebugger();
console.log("Number of debuggers:", numDebuggers);
```

**Explanation:** Role management provides a hierarchical permission system. Query functions check if addresses have specific roles. Management functions (add/remove) require higher privileges - only super admins can manage regular admins. This system ensures only authorized addresses can perform sensitive operations.

---

## Product Management

**What it does:** Manages product information in the payment system. Products represent items or services that can be purchased using the payment gateway.

**When to use it:** Use these functions when building e-commerce features, managing catalog items, or displaying product information to customers.

```typescript
import {
  getProject,
  getProduct,
  recordProduct,
  updateProduct
} from "torosdk";

// Get project information (requires admin credentials)
const project = await getProject({
  admin: "0xAdminAddress",
  getbalances: "true"
});
console.log("Project information:", project);
// Returns: project details, balances, settings

// Get product by ID
const product = await getProduct({
  productId: "product123",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("Product details:", product);
// Returns: product name, description, image, etc.

// Create a new product
await recordProduct({
  productId: "product123",
  productName: "My Product",
  description: "Product description here",
  productImage: "https://example.com/image.jpg",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("✓ Product created");

// Update an existing product
await updateProduct({
  productId: "product123",
  productName: "Updated Product Name",
  description: "Updated description",
  productImage: "https://example.com/new-image.jpg",
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("✓ Product updated");
```

**Explanation:** Product management allows administrators to catalog items in the payment system. `getProduct` retrieves product details for display to customers. `recordProduct` creates new products, while `updateProduct` modifies existing ones. This enables e-commerce functionality where products can be purchased through the payment gateway.

---

## Multi-Chain Bridge Operations

**What it does:** Enables interaction with multiple blockchain networks (Solana, Base, Polygon, BSC, Arbitrum) and bridges tokens from these chains to Toronet. This allows users to deposit crypto assets from external chains and convert them to Toronet tokens.

**When to use it:** Use these functions when you need to support deposits from external blockchains, query balances on different chains, transfer tokens across chains, or bridge assets to Toronet.

### Solana Bridge Operations

```typescript
import {
  // Solana-specific functions
  getSolBalance,
  getSolTokenBalance,
  getSolTransactions,
  getSolTokenTransactions,
  transferSolana,
  transferSolToken,
  bridgeTokenSol,
  getBridgeTokenFeeSol,
  createSolanaAddress,
  isValidSolanaAddress,
  createToronetSolanaAddress,
  getSolLatestBlock,
  BridgeNetwork
} from "torosdk";

// Validate a Solana address
const isValid = await isValidSolanaAddress("3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w");
console.log("Is valid Solana address:", isValid);

// Create a new Solana address (prefer generatevirtualwallet for linking to Toronet)
const solAddress = await createSolanaAddress({
  admin: "0xAdminAddress",
  adminpwd: "adminPassword"
});
console.log("Created Solana address:", solAddress);

// Create a custodial Solana address linked to Toronet address
const toronetSolAddress = await createToronetSolanaAddress({
  addr: "0xYourToronetAddress",
  pwd: "YourPassword"
});
console.log("Created Toronet-linked Solana address:", toronetSolAddress);

// Get SOL balance
const solBalance = await getSolBalance({
  address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w"
});
console.log("SOL balance:", solBalance);

// Get SPL token balance (e.g., USDC on Solana)
const tokenBalance = await getSolTokenBalance({
  address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
  contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" // USDC contract
});
console.log("USDC balance on Solana:", tokenBalance);

// Get SOL transactions
const transactions = await getSolTransactions({
  address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w"
});
console.log("SOL transactions:", transactions);

// Transfer SOL
await transferSolana({
  from: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
  to: "2Ha5ETJGGahgeLpqhTiAYWhAtre1bAGaG47zTDPzJcP4",
  amount: "0.1",
  pwd: "YourPassword"
});
console.log("✓ SOL transferred");

// Transfer SPL token (e.g., USDC)
await transferSolToken({
  from: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
  to: "2Ha5ETJGGahgeLpqhTiAYWhAtre1bAGaG47zTDPzJcP4",
  amount: "10",
  pwd: "YourPassword",
  contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  tokenname: "USDC",
  usetokenasfees: "true" // Use token for fees if not enough SOL
});
console.log("✓ USDC transferred on Solana");

// Bridge USDC from Solana to Toronet
await bridgeTokenSol({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.Solana,
  contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  tokenname: "USDC",
  amount: "100"
});
console.log("✓ USDC bridged from Solana to Toronet");

// Get bridge fee estimate
const fee = await getBridgeTokenFeeSol({
  network: BridgeNetwork.Solana,
  contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  amount: "100"
});
console.log("Bridge fee:", fee);

// Get latest Solana block
const latestBlock = await getSolLatestBlock();
console.log("Latest Solana block:", latestBlock);
```

**Explanation:** Solana operations work with the Solana blockchain. You can create addresses, check balances, transfer SOL or SPL tokens, and bridge tokens to Toronet. The `bridgeTokenSol` function moves tokens from Solana to Toronet, converting them to Toronet tokens.

### EVM Chain Bridge Operations (Base, Polygon, BSC, Arbitrum)

```typescript
import {
  // Chain-specific functions
  getBalanceBase,
  getTokenBalanceBase,
  getTransactionsBase,
  getTokenTransactionsBase,
  bridgeTokenBase,
  getBridgeTokenFeeBase,
  // Or use generic bridge functions
  getBridgeBalance,
  getBridgeTokenBalance,
  getBridgeTransactions,
  getBridgeTokenTransactions,
  bridgeTokenFromChain,
  getBridgeTokenFeeEstimate,
  BridgeNetwork
} from "torosdk";

// ===== BASE CHAIN =====

// Get native token balance on Base
const baseBalance = await getBalanceBase({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});
console.log("Base balance:", baseBalance);

// Get USDC token balance on Base
const baseUSDCBalance = await getTokenBalanceBase({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada",
  contractaddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", // USDC on Base
  tokenname: "USDC"
});
console.log("USDC balance on Base:", baseUSDCBalance);

// Get transactions on Base
const baseTxs = await getTransactionsBase({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});
console.log("Base transactions:", baseTxs);

// Bridge USDC from Base to Toronet
await bridgeTokenBase({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.Base,
  contractaddress: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  tokenname: "USDC",
  amount: "50"
});
console.log("✓ USDC bridged from Base to Toronet");

// ===== POLYGON CHAIN =====

// Get balance on Polygon
const polyBalance = await getBalancePolygon({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});
console.log("Polygon balance:", polyBalance);

// Get USDC balance on Polygon
const polyUSDCBalance = await getTokenBalancePolygon({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada",
  contractaddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359", // USDC on Polygon
  tokenname: "USDC"
});
console.log("USDC balance on Polygon:", polyUSDCBalance);

// Bridge USDC from Polygon to Toronet
await bridgeTokenPolygon({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.Polygon,
  contractaddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  tokenname: "USDC",
  amount: "75"
});
console.log("✓ USDC bridged from Polygon to Toronet");

// ===== BSC CHAIN =====

// Get balance on BSC
const bscBalance = await getBalanceBSC({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});
console.log("BSC balance:", bscBalance);

// Get USDT balance on BSC
const bscUSDTBalance = await getTokenBalanceBSC({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada",
  contractaddress: "0x55d398326f99059ff775485246999027b3197955", // USDT on BSC
  tokenname: "USDT"
});
console.log("USDT balance on BSC:", bscUSDTBalance);

// Bridge USDT from BSC to Toronet
await bridgeTokenBSC({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.BSC,
  contractaddress: "0x55d398326f99059ff775485246999027b3197955",
  tokenname: "USDT",
  amount: "200"
});
console.log("✓ USDT bridged from BSC to Toronet");

// ===== ARBITRUM CHAIN =====

// Get balance on Arbitrum
const arbBalance = await getBalanceArbitrum({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});
console.log("Arbitrum balance:", arbBalance);

// Get USDC balance on Arbitrum
const arbUSDCBalance = await getTokenBalanceArbitrum({
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada",
  contractaddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831", // USDC on Arbitrum
  tokenname: "USDC"
});
console.log("USDC balance on Arbitrum:", arbUSDCBalance);

// Bridge USDC from Arbitrum to Toronet
await bridgeTokenArbitrum({
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.Arbitrum,
  contractaddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  tokenname: "USDC",
  amount: "150"
});
console.log("✓ USDC bridged from Arbitrum to Toronet");

// ===== USING GENERIC FUNCTIONS =====

// Use generic bridge functions with network parameter
const balance = await getBridgeBalance(BridgeNetwork.Base, {
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada"
});

const tokenBalance = await getBridgeTokenBalance(BridgeNetwork.Polygon, {
  address: "0xff9602fd3a10038ac2b6d9b03277dc5c7d154ada",
  contractaddress: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
  tokenname: "USDC"
});

const bridgeResult = await bridgeTokenFromChain(BridgeNetwork.BSC, {
  from: "0xYourToronetAddress",
  pwd: "YourPassword",
  network: BridgeNetwork.BSC,
  contractaddress: "0x55d398326f99059ff775485246999027b3197955",
  tokenname: "USDT",
  amount: "100"
});
```

**Explanation:** EVM chains (Base, Polygon, BSC, Arbitrum) all follow similar patterns. You can query balances, transactions, and bridge tokens. Each chain has its own token contract addresses. The generic bridge functions (`getBridgeBalance`, `bridgeTokenFromChain`, etc.) accept a network parameter, while chain-specific functions are also available for convenience.

### Crypto Payment Initialization

```typescript
import {
  paymentInitializeCrypto,
  recordCryptoPayment
} from "torosdk";

// Initialize crypto deposit from Solana (USDC)
const depositInit = await paymentInitializeCrypto({
  address: "0xYourToronetAddress",
  pwd: "YourPassword",
  currency: "USDCSOL", // Currency codes: USDCSOL, USDTBSC, USDCPOLY, USDCARB, USDCBASE
  token: "TORO", // Target token on Toronet
  amount: "100",
  paymenttype: "crypto",
  payername: "John Doe",
  payercity: "Lagos",
  payerstate: "Lagos",
  payercountry: "NG",
  payerphone: "+2348012345678",
  description: "Crypto deposit from Solana"
}, "0xAdminAddress", "adminPassword");
console.log("Deposit initialized:", depositInit);
// Returns payment instructions or deposit address

// Initialize crypto deposit from Polygon (USDC)
const polygonDeposit = await paymentInitializeCrypto({
  address: "0xYourToronetAddress",
  pwd: "YourPassword",
  currency: "USDCPOLY",
  token: "TORO",
  amount: "50",
  paymenttype: "crypto"
}, "0xAdminAddress", "adminPassword");

// Initialize crypto deposit from BSC (USDT)
const bscDeposit = await paymentInitializeCrypto({
  address: "0xYourToronetAddress",
  pwd: "YourPassword",
  currency: "USDTBSC",
  token: "TORO",
  amount: "75",
  paymenttype: "crypto"
}, "0xAdminAddress", "adminPassword");

// Record completed crypto payment
const paymentRecorded = await recordCryptoPayment({
  currency: "USDCSOL",
  txid: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w_8e21df8325dc5e88" // Transaction ID
}, "0xAdminAddress", "adminPassword");
console.log("Payment recorded:", paymentRecorded);
```

**Explanation:** Crypto payment initialization allows users to deposit crypto assets from external chains. The `paymentInitializeCrypto` function sets up a deposit, and `recordCryptoPayment` confirms the transaction was completed. Currency codes follow the pattern: `{TOKEN}{CHAIN}` (e.g., `USDCSOL`, `USDTBSC`, `USDCPOLY`).

---

## Summary

The Toronet SDK provides a comprehensive set of tools for building blockchain applications. This guide has shown you how to:

- **Configure** the SDK for different networks
- **Create and manage** wallets with human-readable names
- **Query** blockchain data, balances, and transactions
- **Handle** fiat deposits, withdrawals, and KYC verification
- **Manage** virtual wallets for simplified payments
- **Work with** tokens and multiple currencies
- **Control** access through role management
- **Catalog** products for e-commerce
- **Bridge** tokens from multiple chains (Solana, Base, Polygon, BSC, Arbitrum) to Toronet
- **Support** crypto deposits from external blockchains

Each function is designed to be simple to use while providing the flexibility needed for complex applications. For more examples, see the `examples/examples.ts` file in the repository.

---

## Getting Help

- **Documentation:** See the main [README.md](README.md) for installation and setup instructions
- **Examples:** Check `examples/examples.ts` for complete working examples
- **Support:** Join our [Discord community](https://discord.gg/45SMNdGx5d) for help and discussions
