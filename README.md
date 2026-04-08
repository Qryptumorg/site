# Qryptum Site

Marketing and feature showcase site for the Qryptum protocol. Built with React, Vite, TypeScript, and Tailwind CSS v4.

## What Is Qryptum

Qryptum is a non-custodial protocol on Ethereum L1 that shields ERC-20 tokens inside personal cryptographic vaults called QRYPTANKs. Vault access requires both a private key and a 6-character vault proof verified on-chain using keccak256.

## Site Structure

36 unique pages across 4 navigation menus:

- **Features** (9 pages): Personal QRYPTANK, Shield ERC-20, Transfer Engine, qToken System, 1:1 Backing, Burn on Unshield, Commit Phase, Reveal Phase, MEV Protection
- **How It Works** (9 pages): Connect Wallet, Create QRYPTANK, Shield Tokens, Enter Vault Proof, Commit Transfer, Reveal and Execute, Burn qTokens, Receive Tokens, Emergency Recovery
- **Security** (9 pages): Vault Proof Hashing, No Server Storage, Onchain Verification, Commit-Reveal Scheme, Nonce Protection, Time-Locked Reveals, 180-Day Inactivity Rule, No Admin Keys, Immutable Contracts
- **Docs** (9 pages): Quick Start Guide, Supported Tokens, Network Support, ShieldFactory, PersonalQRYPTANK, ShieldToken, REST API Reference, ABI and Addresses, FAQ

## Local Development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Build

```bash
npm run build
npm run preview
```

## Environment Variables

Copy `.env.example` to `.env` and fill in the contract addresses:

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
- wouter (client-side routing)
- wagmi v3 + viem (wallet connection)
- Framer Motion (animations)

## Related Repositories

- [Qryptumorg/contracts](https://github.com/Qryptumorg/contracts): Solidity smart contracts
- [Qryptumorg/api](https://github.com/Qryptumorg/api): REST API backend
- [Qryptumorg/app](https://github.com/Qryptumorg/app): dApp frontend
- [Qryptumorg/docs](https://github.com/Qryptumorg/docs): Protocol documentation

## License

MIT
