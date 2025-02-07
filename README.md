
```markdown
# Toronet SDK

## Overview

The Toronet SDK is a powerful TypeScript library for developers to interact with the Toronet blockchain. It provides tools for wallet management, token balance queries, and fiat deposit integration, simplifying blockchain development while ensuring type safety and reliability.

---

## Features

- **Wallet Management**
  - Create wallets and set Toronet Naming System (TNS) names.
- **Token Balance Queries**
  - Retrieve balances for NGN, USD, and ToroG tokens.
- **Fiat Deposits**
  - Initialize and verify fiat deposits using whitelisted project credentials.

---

## Installation

```bash
npm install torosdk
```

---

## Usage

### 1. Create a Wallet

```typescript
import { createWallet } from "torosdk";

(async () => {
  const walletAddress = await createWallet({ password: "securePassword123" });
  console.log("Wallet Address:", walletAddress);
})();
```

### 2. Get Token Balances

```typescript
import { getBalance } from "torosdk";

(async () => {
  const address = "0x46bbe1dab243c3c889e491b92fe0337b57deba97";

  const balances = await getBalance({ address: address });
  console.log("Balances:", balances);
})();
```

### 3. Deposit Fiat (NGN/USD)

**🔹 Before using the deposit feature,** you must **register as a project** at [https://payments.connectw.com/](https://payments.connectw.com/) to get **admin credentials**.

```typescript
import { depositFunds, confirmDeposit, Currency } from "torosdk";

(async () => {
  const userAddress = "0x123456789abcdef";
  const username = "torouser";
  const amount = "5000";
  const currency = Currency.Dollar;

  // Admin credentials from https://payments.connectw.com/
  const admin = "your-whitelisted-address";
  const adminpwd = "your-password";

  // Step 1: Initialize Deposit
  const depositDetails = await depositFunds(
    userAddress,
    username,
    amount,
    currency,
    admin,
    adminpwd
  );

  console.log("Transfer details:", depositDetails);

  // Step 2: (After transfer) Verify Deposit
  //depositDetails.accountnumber is your transactionId if currency is NGN
  const transactionId = "1234567890abcd"; // TXID from the bank transfer
  const isDepositConfirmed = await confirmDeposit(currency, transactionId);

  console.log("Deposit Success:", isDepositConfirmed);
})();
```

---

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
│   └── utils.ts        # Utility functions
│
├── index.ts            # Main SDK entry point
```

---

## Contribution

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Support

For questions or support, please join our [Discord community](https://discord.gg/45SMNdGx5d).

