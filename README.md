# Qryptum Site

Marketing site for the Qryptum protocol. Built with React, Vite, TypeScript, and Tailwind CSS v4.

## Overview

Qryptum is a non-custodial protocol on Ethereum L1 that shields ERC-20 tokens inside personal cryptographic vaults called QRYPTANKs. Vault access requires both a private key and a 6-character vault proof verified on-chain using keccak256.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env`:

```
VITE_SHIELD_FACTORY_SEPOLIA=0x9a66500886344cbcce882137f263CB0c61aa99b1
VITE_SHIELD_FACTORY_MAINNET=
VITE_SHIELD_FACTORY_LOCAL=0x5FbDB2315678afecb367f032d93F642f64180aa3
```

## Tech Stack

- React 19
- Vite 7
- TypeScript 5
- Tailwind CSS v4
- wouter
- wagmi v3 + viem
- Framer Motion

## Related Repositories

- [Qryptumorg/contracts](https://github.com/Qryptumorg/contracts): Solidity smart contracts
- [Qryptumorg/api](https://github.com/Qryptumorg/api): REST API backend
- [Qryptumorg/app](https://github.com/Qryptumorg/app): dApp frontend
- [Qryptumorg/docs](https://github.com/Qryptumorg/docs): Protocol documentation

## License

MIT
