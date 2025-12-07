/**
 * Toronet SDK - Comprehensive Examples
 * 
 * This file demonstrates all features of the Toronet SDK.
 * 
 * To run: `npm install -g ts-node typescript` then `ts-node examples.ts`
 * 
 * IMPORTANT NOTES:
 * - Replace placeholder values (addresses, passwords, admin credentials) with real values
 * - Some operations require admin/owner privileges
 * - Network configuration is optional (defaults to mainnet)
 * - Wrap operations in try-catch blocks for production code
 */

// ============================================================================
// IMPORTS
// ============================================================================

// Core SDK imports
import {
  createWallet,
  configureTNS,
  isTNSAvailable,
  updatePassword,
  deleteWallet,
  getBalance,
  getAddressBalance,
  depositFunds,
  confirmDeposit,
  performKYCForCustomer,
  isAddressKYCVerified,
  makeInterWalletTransferTxn,
  getSupportedAssetsExchangeRates,
  Currency,
} from "../src/index";

// Keystore operations
import {
  getWalletKey,
  importWalletFromPrivateKeyAndPassword,
  verifyWalletPassword,
} from "../src/index";

// Blockchain operations
import {
  getBlockchainStatus,
  getLatestBlockData,
  getTransaction,
  getReceipt,
  getRevertReason,
} from "../src/blockchain";

// Query operations
import {
  getBlocksData,
  getBlockchainTransactions,
  getAddressRole,
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
  isAddressUtil,
} from "../src/query";
import { getAddrTransactionsRange } from "../src/api/query";

// Virtual wallet operations
import {
  createVirtualWallet,
  fetchVirtualWallet,
  fetchVirtualWalletByAddress,
  updateVirtualWalletTxs,
} from "../src/virtualwallet";

// Network configuration
import { initializeSDK } from "../src/config/sdk_config";

// Advanced TNS operations
import {
  getName,
  getAddr,
  isAddrAssigned,
  isSetOn,
  isUpdateOn,
  isDeleteOn,
  initTNS,
  setSetNameOn,
  setSetNameOff,
  setUpdateNameOn,
  setUpdateNameOff,
  setDeleteNameOn,
  setDeleteNameOff,
  updateName,
  deleteName,
  adminSetName,
  adminUpdateName,
  adminDeleteName,
} from "../src/api/tns";

// Role management operations
import {
  isAdmin,
  getAdminIndex,
  getNumberOfAdmin,
  getAdminByIndex,
  initAdmin,
  addAdmin,
  removeAdmin,
  removeAllAdmins,
  isSuperAdmin,
  getSuperAdminIndex,
  getNumberOfSuperAdmin,
  getSuperAdminByIndex,
  initSuperAdmin,
  addSuperAdmin,
  removeSuperAdmin,
  removeAllSuperAdmins,
  isDebugger,
  getDebuggerIndex,
  getNumberOfDebugger,
  getDebuggerByIndex,
  initDebugger,
  addDebugger,
  removeDebugger,
  removeAllDebuggers,
} from "../src/api/roles";

// Token operations
import {
  getTokenBalance,
  getTokenName,
  getTokenSymbol,
  getTokenDecimal,
  getMinimumAllowance,
  getMaximumAllowance,
  getAllowance,
  getTransactionFeeFixed,
  getTransactionFeePercentage,
  getTransactionFee,
  getCommissionAddress,
  getCommissionPercentage,
  getReserve,
  getToller,
  getTotalCap,
  getTotalReserving,
  getTotalCirculating,
  isEnrolled,
  isFrozen,
  isTransferOn,
  isMintOn,
  isBurnOn,
} from "../src/api/token";

// Currency operations
import {
  getCurrencyBalance,
  transferCurrency,
  allowTransfer,
  disallowTransfer,
  allowMint,
  disallowMint,
  allowBurn,
  disallowBurn,
  freezeAddress,
  unfreezeAddress,
  enrollAddress,
  mintCurrency,
  burnCurrency,
  setAllowance,
  setMinimumAllowance,
  setMaximumAllowance,
  setTransactionFeeFixed,
  setTransactionFeePercentage,
  setTransactionFee,
} from "../src/api/currency";

// Product management
import {
  getProject,
  getProduct,
  recordProduct,
  updateProduct,
} from "../src/api/products";

// Advanced payment operations
import {
  getBankListUSD,
  getBankListNGN,
  getFiatTransactionByTxid,
  getFiatWithdrawalByTxid,
  recordFiatWithdrawal,
  verifyBankAccountNameNGN,
  getPendingTransaction,
  getFiatTransactionsAddressRange,
  getFiatWithdrawalsAddressRange,
  getFiatTransactionsRecorderRange,
  getFiatWithdrawalsRecorderRange,
} from "../src/api/payments";

// Solana bridge operations
import {
  createSolanaAddress,
  isValidSolanaAddress,
  createToronetSolanaAddress,
  verifySolanaVirtualAddressEnc,
  verifySolanaVirtualAddress,
  getSolBalance,
  getSolTokenBalance,
  getSolLatestBlock,
  getSolTransactions,
  getSolTokenTransactions,
  transferSolana,
  transferSolToken,
  bridgeTokenSol,
  getBridgeTokenFeeSol
} from "../src/api/bridge/solana";
import { BridgeNetwork } from "../src/types/bridge";

// ============================================================================
// MAIN FUNCTION
// ============================================================================

async function main() {
  console.log("Toronet SDK Examples\n");

  // ============================================================================
  // SECTION 1: NETWORK CONFIGURATION
  // ============================================================================
  console.log("\n=== SECTION 1: NETWORK CONFIGURATION ===");
  
  // Configure SDK for testnet (optional - defaults to mainnet)
  try {
    initializeSDK({ network: 'testnet' });
    console.log("✓ SDK configured for testnet");
  } catch (error) {
    console.error("Error configuring SDK:", error);
  }

  // Or configure for mainnet explicitly
  // initializeSDK({ network: 'mainnet' });

  // Or use custom URLs
  // initializeSDK({
  //   network: 'mainnet',
  //   baseURL: 'https://custom-toronet.org',
  //   connectWURL: 'https://custom-connectw.com'
  // });

  // ============================================================================
  // SECTION 2: WALLET MANAGEMENT
  // ============================================================================
  console.log("\n=== SECTION 2: WALLET MANAGEMENT ===");

  // Generate unique username for testing
  const username = "demoUser" + Math.floor(Math.random() * 10000);
  const password = "SuperSecretPassword123!";
  let address: string;

  try {
    // Check if TNS name is available
  const isAvailable = await isTNSAvailable({ username });
    console.log(`✓ TNS name "${username}" is available:`, isAvailable);
    
    if (!isAvailable) {
      console.log(" TNS name not available, skipping wallet creation");
      return;
    }

    // Create a new wallet
    address = await createWallet({ username, password });
    console.log("✓ Wallet created:", address);

    // Configure TNS (Toronet Naming System)
  await configureTNS({ address, password, username });
    console.log(`✓ TNS configured: ${username} -> ${address}`);

    // Import wallet from private key
  const importedAddress = await importWalletFromPrivateKeyAndPassword({
      pvKey: "0xYourPrivateKeyHere",
      password: "YourPasswordHere",
  });
    console.log("✓ Wallet imported:", importedAddress);

    // Verify wallet password
  const isPasswordValid = await verifyWalletPassword({ address, password });
    console.log("✓ Password verification:", isPasswordValid);

    // Get wallet key (keystore data)
  const walletKey = await getWalletKey({ address });
    console.log("✓ Wallet key retrieved");

    // Update wallet password
    // await updatePassword({
    //   address,
    //   oldPassword: password,
    //   newPassword: "NewSecurePassword456!",
    // });
    // console.log("✓ Password updated");

    // Delete wallet (WARNING: This permanently deletes the keystore)
    // await deleteWallet({ address, password });
    // console.log("✓ Wallet deleted");

  } catch (error: any) {
    console.error(" Wallet management error:", error.message);
  }

  // ============================================================================
  // SECTION 3: TNS (TORONET NAMING SYSTEM) OPERATIONS
  // ============================================================================
  console.log("\n=== SECTION 3: TNS OPERATIONS ===");

  try {
    // Query operations
    const tnsName = await getName({ address: address! });
    console.log("✓ TNS name for address:", tnsName);

    const tnsAddress = await getAddr({ name: username });
    console.log("✓ Address for TNS name:", tnsAddress);

    const isAssigned = await isAddrAssigned({ address: address! });
    console.log("✓ Address has TNS assigned:", isAssigned);

    // Check TNS permissions
    const setNameEnabled = await isSetOn();
    console.log("✓ Set name enabled:", setNameEnabled);

    const updateEnabled = await isUpdateOn();
    console.log("✓ Update name enabled:", updateEnabled);

    const deleteEnabled = await isDeleteOn();
    console.log("✓ Delete name enabled:", deleteEnabled);

    // Client operations
    // await updateName({
    //   address: address!,
    //   password: password,
    //   username: "newusername",
    // });
    // console.log("✓ TNS name updated");

    // await deleteName({
    //   address: address!,
    //   password: password,
    // });
    // console.log("✓ TNS name deleted");

    // Owner operations (requires owner privileges)
    // await initTNS({
    //   address: "0xOwnerAddress",
    //   password: "ownerPassword",
    // });
    // console.log("✓ TNS system initialized");

    // Super admin operations (requires super admin privileges)
    // await setSetNameOn({
    //   address: "0xSuperAdminAddress",
    //   password: "superAdminPassword",
    // });
    // console.log("✓ Set name permission enabled");

    // Admin operations (requires admin privileges)
    // await adminSetName({
    //   address: address!,
    //   username: "adminassignedname",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ TNS name set by admin");

  } catch (error: any) {
    console.error("❌ TNS operations error:", error.message);
  }

  // ============================================================================
  // SECTION 4: BALANCE & TRANSFERS
  // ============================================================================
  console.log("\n=== SECTION 4: BALANCE & TRANSFERS ===");

  try {
    // Get wallet balance (NGN, USD, ToroG)
  const balance = await getBalance({
      address: address!,
    });
    console.log("✓ Wallet balance:", balance);

    // Make inter-wallet transfer
    // const transferResult = await makeInterWalletTransferTxn(
    //   address!,
    //   password,
    //   "0xRecipientAddress",
    //   "100",
    //   Currency.Naira
    // );
    // console.log("✓ Transfer completed:", transferResult);

  } catch (error: any) {
    console.error("❌ Balance/Transfer error:", error.message);
  }

  // ============================================================================
  // SECTION 5: BLOCKCHAIN QUERIES
  // ============================================================================
  console.log("\n=== SECTION 5: BLOCKCHAIN QUERIES ===");

  try {
    // Get blockchain status
    const blockchainStatus = await getBlockchainStatus();
    console.log("✓ Blockchain status retrieved");

    // Get latest block
  const latestBlock = await getLatestBlockData();
    console.log("✓ Latest block retrieved");

    // Get transaction by hash
    const txHash = "0x1234567890abcdef1234567890abcdef12345678";
    // const transaction = await getTransaction(txHash);
    // console.log("✓ Transaction retrieved");

    // Get transaction receipt
    // const receipt = await getReceipt(txHash);
    // console.log("✓ Transaction receipt retrieved");

    // Get revert reason (if transaction failed)
    // const revertReason = await getRevertReason(txHash);
    // console.log("✓ Revert reason:", revertReason);

  } catch (error: any) {
    console.error("❌ Blockchain query error:", error.message);
  }

  // ============================================================================
  // SECTION 6: QUERY OPERATIONS
  // ============================================================================
  console.log("\n=== SECTION 6: QUERY OPERATIONS ===");

  try {
    // Get exchange rates
  const exchangeRates = await getSupportedAssetsExchangeRates();
    console.log("✓ Exchange rates retrieved");

    // Get blocks data
    const blocks = await getBlocksData(5);
    console.log("✓ Blocks data retrieved (last 5 blocks)");

    // Get blockchain transactions
    const transactions = await getBlockchainTransactions(10);
    console.log("✓ Blockchain transactions retrieved (last 10)");

    // Get address role
    const addrRole = await getAddressRole(address!);
    console.log("✓ Address role:", addrRole);

    // Get address balance
    const addrBalance = await getAddressBalance({ address: address! });
    console.log("✓ Address balance retrieved");

    // Get block by ID
    const blockById = await getBlockById("latest");
    console.log("✓ Block by ID retrieved");

    // Get transaction by ID
    // const txById = await getTransactionById({ id: txHash });
    // console.log("✓ Transaction by ID retrieved");

    // Get transaction receipt by ID
    // const txReceiptById = await getTransactionReceiptById({ id: txHash });
    // console.log("✓ Transaction receipt by ID retrieved");

    // Get event by ID
    // const eventById = await getEventById({ id: "event123" });
    // console.log("✓ Event by ID retrieved");

    // Get address transactions
    const addrTxs = await getAddressTransactions(address!, 5);
    console.log("✓ Address transactions retrieved (last 5)");

    // Get transactions by currency
    const txsToro = await getTransactionsToroWrapper(5);
    console.log("✓ Toro transactions retrieved");

    const txsDollar = await getTransactionsDollarWrapper(5);
    console.log("✓ Dollar transactions retrieved");

    const txsNaira = await getTransactionsNairaWrapper(5);
    console.log("✓ Naira transactions retrieved");

    // Get address transactions by currency
    const addrTxsToro = await getAddressTransactionsToro(address!, 5);
    console.log("✓ Address Toro transactions retrieved");

    // Get transactions by range
    const txsRange = await getTransactionsRangeWrapper(0, 10);
    console.log("✓ Transactions by range retrieved");

    // Get address transactions with date range and token filter
    const addrTxsRange = await getAddrTransactionsRange({
      address: address!,
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      token: "NGN", // Optional token filter
      count: 100, // Optional pagination
      start: 0, // Optional offset
    });
    console.log("✓ Address transactions with date range retrieved");

    // Address validation utility
    const isAddrValid = await isAddressUtil(address!);
    console.log("✓ Address validation:", isAddrValid);

  } catch (error: any) {
    console.error("❌ Query operations error:", error.message);
  }

  // ============================================================================
  // SECTION 7: ROLE MANAGEMENT
  // ============================================================================
  console.log("\n=== SECTION 7: ROLE MANAGEMENT ===");
  console.log("⚠️ NOTE: Role operations require appropriate privileges");

  try {
    // Admin role queries
    const isAddrAdmin = await isAdmin({ address: address! });
    console.log("✓ Is address admin:", isAddrAdmin);

    const numAdmins = await getNumberOfAdmin();
    console.log("✓ Number of admins:", numAdmins);

    // Super admin role queries
    const isAddrSuperAdmin = await isSuperAdmin({ address: address! });
    console.log("✓ Is address super admin:", isAddrSuperAdmin);

    const numSuperAdmins = await getNumberOfSuperAdmin();
    console.log("✓ Number of super admins:", numSuperAdmins);

    // Debugger role queries
    const isAddrDebugger = await isDebugger({ address: address! });
    console.log("✓ Is address debugger:", isAddrDebugger);

    const numDebuggers = await getNumberOfDebugger();
    console.log("✓ Number of debuggers:", numDebuggers);

    // Owner operations (requires owner privileges)
    // await initAdmin({
    //   address: "0xOwnerAddress",
    //   password: "ownerPassword",
    // });
    // console.log("✓ Admin system initialized");

    // Super admin operations (requires super admin privileges)
    // await addAdmin({
    //   address: "0xSuperAdminAddress",
    //   password: "superAdminPassword",
    //   adminAddress: "0xNewAdminAddress",
    // });
    // console.log("✓ Admin added");

    // await removeAdmin({
    //   address: "0xSuperAdminAddress",
    //   password: "superAdminPassword",
    //   adminAddress: "0xAdminToRemove",
    // });
    // console.log("✓ Admin removed");

  } catch (error: any) {
    console.error("❌ Role management error:", error.message);
  }

  // ============================================================================
  // SECTION 8: TOKEN OPERATIONS
  // ============================================================================
  console.log("\n=== SECTION 8: TOKEN OPERATIONS ===");

  try {
    // Token metadata
    const tokenName = await getTokenName();
    console.log("✓ Token name:", tokenName);

    const tokenSymbol = await getTokenSymbol();
    console.log("✓ Token symbol:", tokenSymbol);

    const tokenDecimal = await getTokenDecimal();
    console.log("✓ Token decimals:", tokenDecimal);

    // Token balance
    const tokenBalance = await getTokenBalance({ address: address! });
    console.log("✓ Token balance:", tokenBalance);

    // Allowances
    const minAllowance = await getMinimumAllowance({ address: address! });
    console.log("✓ Minimum allowance:", minAllowance);

    const maxAllowance = await getMaximumAllowance({ address: address! });
    console.log("✓ Maximum allowance:", maxAllowance);

    const allowance = await getAllowance({
      owner: address!,
      spender: "0xSpenderAddress",
    });
    console.log("✓ Allowance:", allowance);

    // Transaction fees
    const feeFixed = await getTransactionFeeFixed();
    console.log("✓ Transaction fee (fixed):", feeFixed);

    const feePercentage = await getTransactionFeePercentage();
    console.log("✓ Transaction fee (percentage):", feePercentage);

    const fee = await getTransactionFee({ amount: "1000" });
    console.log("✓ Transaction fee:", fee);

    // Supply queries
    const totalCap = await getTotalCap();
    console.log("✓ Total cap:", totalCap);

    const totalReserving = await getTotalReserving();
    console.log("✓ Total reserving:", totalReserving);

    const totalCirculating = await getTotalCirculating();
    console.log("✓ Total circulating:", totalCirculating);

    // Status checks
    const enrolled = await isEnrolled({ address: address! });
    console.log("✓ Is enrolled:", enrolled);

    const frozen = await isFrozen({ address: address! });
    console.log("✓ Is frozen:", frozen);

    const transferOn = await isTransferOn();
    console.log("✓ Transfer enabled:", transferOn);

    const mintOn = await isMintOn();
    console.log("✓ Mint enabled:", mintOn);

    const burnOn = await isBurnOn();
    console.log("✓ Burn enabled:", burnOn);

  } catch (error: any) {
    console.error("❌ Token operations error:", error.message);
  }

  // ============================================================================
  // SECTION 9: CURRENCY OPERATIONS
  // ============================================================================
  console.log("\n=== SECTION 9: CURRENCY OPERATIONS ===");
  console.log("⚠️ NOTE: Some operations require owner/admin privileges");

  try {
    // Get currency balance
    const currencyBalance = await getCurrencyBalance({
      currency: "NGN",
      address: address!,
    });
    console.log("✓ Currency balance (NGN):", currencyBalance);

    // Client operations
    // await transferCurrency({
    //   currency: "NGN",
    //   senderAddr: address!,
    //   senderPwd: password,
    //   receiverAddr: "0xRecipientAddress",
    //   amount: "100",
    // });
    // console.log("✓ Currency transferred");

    // Owner operations (requires owner privileges)
    // await allowTransfer({
    //   currency: "NGN",
    //   address: "0xOwnerAddress",
    //   password: "ownerPassword",
    // });
    // console.log("✓ Transfer enabled for currency");

    // Admin operations (requires admin privileges)
    // await freezeAddress({
    //   currency: "NGN",
    //   address: "0xAdminAddress",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    //   targetAddress: "0xTargetAddress",
    // });
    // console.log("✓ Address frozen");

    // await mintCurrency({
    //   currency: "NGN",
    //   address: "0xAdminAddress",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    //   targetAddress: "0xRecipientAddress",
    //   amount: "1000",
    // });
    // console.log("✓ Currency minted");

  } catch (error: any) {
    console.error("❌ Currency operations error:", error.message);
  }

  // ============================================================================
  // SECTION 10: PAYMENT OPERATIONS
  // ============================================================================
  console.log("\n=== SECTION 10: PAYMENT OPERATIONS ===");
  console.log("⚠️ NOTE: Payment operations require admin credentials from https://payments.connectw.com/");

  try {
    // Initialize deposit
    // const depositDetails = await depositFunds(
    //   {
    //     userAddress: address!,
    //     username: username,
    //     amount: "1000",
    //     currency: Currency.Naira,
    //     admin: "0xAdminAddress",
    //     adminpwd: "adminPassword",
    //   },
    //   {
    //     payeraddress: "123 Main St",
    //     payercity: "Lagos",
    //     payerstate: "Lagos",
    //     payercountry: "Nigeria",
    //     payerzipcode: "100001",
    //     payerphone: "+2348012345678",
    //     description: "Initial deposit",
    //     success_url: "https://example.com/success",
    //     cancel_url: "https://example.com/cancel",
    //   }
    // );
    // console.log("✓ Deposit initialized:", depositDetails);

    // Verify deposit
    // const isDepositConfirmed = await confirmDeposit({
    //   currency: Currency.Naira,
    //   transactionId: "TX1234567890",
    // });
    // console.log("✓ Deposit confirmed:", isDepositConfirmed);

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
    // const kycResult = await performKYCForCustomer(kycParams);
    // console.log("✓ KYC result:", kycResult);

    // const kycVerified = await isAddressKYCVerified({ address: address! });
    // console.log("✓ KYC verified:", kycVerified);

    // Advanced payment operations (require admin credentials)
    // const usdBanks = await getBankListUSD({
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ USD bank list retrieved");

    // const ngnBanks = await getBankListNGN({
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ NGN bank list retrieved");

    // Record fiat withdrawal
    // await recordFiatWithdrawal({
    //   address: address!,
    //   password: password,
    //   currency: "NGN",
    //   token: "NGN",
    //   payername: "John Doe",
    //   payeremail: "john@example.com",
    //   description: "Withdrawal",
    //   amount: "1000",
    //   accounttype: "savings",
    //   bankname: "Bank Name",
    //   routingno: "123456",
    //   accountno: "1234567890",
    //   accountname: "John Doe",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ Fiat withdrawal recorded");

    // Verify bank account (NGN)
    // const verification = await verifyBankAccountNameNGN({
    //   destinationInstitutionCode: "058",
    //   accountNumber: "1234567890",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ Bank account verified:", verification);

    // Date range queries
    // const transactions = await getFiatTransactionsAddressRange({
    //   address: address!,
    //   startDate: "2024-01-01",
    //   endDate: "2024-12-31",
    //   currency: "NGN",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ Fiat transactions by date range retrieved");

  } catch (error: any) {
    console.error("❌ Payment operations error:", error.message);
  }

  // ============================================================================
  // SECTION 11: PRODUCT MANAGEMENT
  // ============================================================================
  console.log("\n=== SECTION 11: PRODUCT MANAGEMENT ===");
  console.log("⚠️ NOTE: Product operations require admin credentials");

  try {
    // Get project information
    // const project = await getProject({
    //   admin: "0xAdminAddress",
    //   getbalances: "true",
    // });
    // console.log("✓ Project information retrieved");

    // Get product
    // const product = await getProduct({
    //   productId: "product123",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ Product retrieved");

    // Record product
    // await recordProduct({
    //   productId: "product123",
    //   productName: "My Product",
    //   description: "Product description",
    //   productImage: "https://example.com/image.jpg",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ Product recorded");

    // Update product
    // await updateProduct({
    //   productId: "product123",
    //   productName: "Updated Product Name",
    //   description: "Updated description",
    //   productImage: "https://example.com/new-image.jpg",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
    // });
    // console.log("✓ Product updated");

  } catch (error: any) {
    console.error("❌ Product management error:", error.message);
  }

  // ============================================================================
  // SECTION 12: VIRTUAL WALLETS
  // ============================================================================
  console.log("\n=== SECTION 12: VIRTUAL WALLETS ===");
  console.log("⚠️ NOTE: Virtual wallet operations require admin credentials");

  try {
    // Create virtual wallet
  // const virtualWallet = await createVirtualWallet({
    //   address: address!,
  //   payername: "Demo User",
  //   currency: Currency.Naira,
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
  // });
    // console.log("✓ Virtual wallet created:", virtualWallet);

    // Fetch virtual wallet by ID
  // const fetchedVirtualWallet = await fetchVirtualWallet({
  //   virtualwallet: "8900610225",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
  // });
    // console.log("✓ Virtual wallet fetched:", fetchedVirtualWallet);

    // Fetch virtual wallet by address
  // const fetchedVirtualWalletByAddress = await fetchVirtualWalletByAddress({
    //   address: address!,
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
  // });
    // console.log("✓ Virtual wallet fetched by address:", fetchedVirtualWalletByAddress);

    // Update virtual wallet transactions
  // const updatedVirtualWalletTxs = await updateVirtualWalletTxs({
  //   walletaddress: "8900610225",
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword",
  // });
    // console.log("✓ Virtual wallet transactions updated:", updatedVirtualWalletTxs);

  } catch (error: any) {
    console.error("❌ Virtual wallet operations error:", error.message);
  }

  // ============================================================================
  // SECTION 13: SOLANA BRIDGE OPERATIONS
  // ============================================================================
  console.log("\n=== SECTION 13: SOLANA BRIDGE OPERATIONS ===");
  console.log("⚠️ NOTE: Some Solana operations require admin credentials");

  try {
    // Validate Solana address
    const isValid = await isValidSolanaAddress("3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w");
    console.log("✓ Is valid Solana address:", isValid);

    // Create a new Solana address (prefer generatevirtualwallet for linking to Toronet)
    // const solAddress = await createSolanaAddress({
    //   admin: "0xAdminAddress",
    //   adminpwd: "adminPassword"
    // });
    // console.log("✓ Solana address created:", solAddress);

    // Create a custodial Solana address linked to Toronet address
    // const toronetSolAddress = await createToronetSolanaAddress({
    //   addr: address!,
    //   pwd: password
    // });
    // console.log("✓ Toronet-linked Solana address created:", toronetSolAddress);

    // Verify Solana virtual address encryption
    // const encVerified = await verifySolanaVirtualAddressEnc(
    //   address!,
    //   password,
    //   "0xAdminAddress",
    //   "adminPassword"
    // );
    // console.log("✓ Solana virtual address encryption verified:", encVerified);

    // Verify Solana virtual address (Toronet address)
    // const addrVerified = await verifySolanaVirtualAddress(
    //   address!,
    //   password,
    //   "0xAdminAddress",
    //   "adminPassword"
    // );
    // console.log("✓ Solana virtual address verified:", addrVerified);

    // Get SOL balance
    const solBalance = await getSolBalance({
      address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w"
    });
    console.log("✓ SOL balance retrieved:", solBalance);

    // Get SPL token balance (e.g., USDC on Solana)
    const usdcBalance = await getSolTokenBalance({
      address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
      contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" // USDC contract
    });
    console.log("✓ USDC balance on Solana retrieved:", usdcBalance);

    // Get latest Solana block
    const latestBlock = await getSolLatestBlock();
    console.log("✓ Latest Solana block retrieved:", latestBlock);

    // Get SOL transactions for an address
    const solTransactions = await getSolTransactions({
      address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w"
    });
    console.log("✓ SOL transactions retrieved");

    // Get SPL token transactions for an address
    const tokenTransactions = await getSolTokenTransactions({
      address: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
      contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"
    });
    console.log("✓ USDC transactions on Solana retrieved");

    // Transfer SOL
    // await transferSolana({
    //   from: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
    //   to: "2Ha5ETJGGahgeLpqhTiAYWhAtre1bAGaG47zTDPzJcP4",
    //   amount: "0.1",
    //   pwd: password
    // });
    // console.log("✓ SOL transferred");

    // Transfer SPL token (e.g., USDC)
    // await transferSolToken({
    //   from: "3uwR7HMDuK6dXwZAfx8jHwPcyXsYmFuHWJv3zvJxRE9w",
    //   to: "2Ha5ETJGGahgeLpqhTiAYWhAtre1bAGaG47zTDPzJcP4",
    //   amount: "10",
    //   pwd: password,
    //   contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    //   tokenname: "USDC",
    //   usetokenasfees: "true" // Use token for fees if not enough SOL
    // });
    // console.log("✓ USDC transferred on Solana");

    // Get bridge fee estimate
    const fee = await getBridgeTokenFeeSol({
      network: BridgeNetwork.Solana,
      contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      amount: "100"
    });
    console.log("✓ Bridge fee estimate retrieved:", fee);

    // Bridge USDC from Solana to Toronet
    // await bridgeTokenSol({
    //   from: address!,
    //   pwd: password,
    //   network: BridgeNetwork.Solana,
    //   contractaddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    //   tokenname: "USDC",
    //   amount: "100"
    // });
    // console.log("✓ USDC bridged from Solana to Toronet");

  } catch (error: any) {
    console.error("❌ Solana bridge operations error:", error.message);
  }

  console.log("\n✅ All examples completed!");
}

// ============================================================================
// RUN EXAMPLES
// ============================================================================

main().catch((error) => {
  console.error("❌ Fatal error:", error);
});
