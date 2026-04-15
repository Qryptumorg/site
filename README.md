# Qryptum: landing page

Informational landing site for the Qryptum protocol. Built with React, Vite, TypeScript, and Tailwind CSS v4.

Live: https://qryptumorg.github.io/site/

## Overview

Qryptum is a non-custodial protocol on Ethereum L1 that shields ERC-20 tokens inside personal cryptographic vaults called QryptSafes. Vault access requires both a private key and a 6-character vault proof verified on-chain using keccak256.

This repository contains the public-facing landing site covering all three protocol layers: QryptSafe, QryptShield, and QryptAir.

## Local Development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
BASE_PATH=/ pnpm run build
pnpm run preview
```

## GitHub Pages Build

The CI workflow sets `BASE_PATH=/site/` and deploys to `gh-pages` via `actions/deploy-pages`.

## Tech Stack

- React 19
- Vite 7
- TypeScript 5
- Tailwind CSS v4
- wouter
- Framer Motion

## Related Repositories

- [Qryptumorg/contracts](https://github.com/Qryptumorg/contracts): Solidity smart contracts
- [Qryptumorg/api](https://github.com/Qryptumorg/api): REST API backend
- [Qryptumorg/app](https://github.com/Qryptumorg/app): dApp frontend
- [Qryptumorg/docs](https://github.com/Qryptumorg/docs): Protocol documentation

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](LICENSE)

Copyright (c) 2026 [wei-zuan](https://github.com/wei-zuan). See [LICENSE](LICENSE) for full terms.
