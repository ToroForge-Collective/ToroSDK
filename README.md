# Toronet SDK

## Overview

The Toronet SDK is a powerful TypeScript library for developers to interact with the Toronet blockchain. It provides tools for wallet management and token balance queries, simplifying blockchain development while ensuring type safety and reliability.

---

## Features

- **Wallet Management**
  - Create wallets and set Toronet Naming System (TNS) names.
- **Token Balance Queries**
  - Retrieve balances for NGN, USD, and ToroG tokens.

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

---

### 3. Configure TNS

```typescript
import { configureTNS } from "torosdk";

(async () => {
  await configureTNS({
    address: address,
    password: "password",
    username: "username",
  });
})();
```

---

## Folder Structure

```plaintext
src/
├── api/                # API abstraction layer
│   ├── account.ts      # Wallet and TNS APIs
│   ├── balance.ts      # Balance query APIs
│   └── config.ts       # API configuration
│
├── services/           # Business logic layer
│   ├── walletService.ts
│   ├── balanceService.ts
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

For questions or support, please join our [Discord community](#).
