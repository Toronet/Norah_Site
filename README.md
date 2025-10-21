# NORAH Token Platform

A comprehensive multi-chain Real World Asset (RWA) tokenization platform for NORAH mining revenue streams, supporting Ethereum, Tron, and Solana blockchains.

## Overview

The NORAH Token Platform implements a legal framework for tokenizing Norah Mining's lithium concentrate revenues into blockchain-based contractual rights. Each NORAH token represents a contractual right to participate in a fixed portion of Norah's verified revenue stream.

### Token Economics

- **Maximum Supply**: 21,000,000 NORAH tokens
- **Decimals**: 18 (standard ERC20 precision)
- **Revenue Share**: 2.8% initial with halving mechanism
- **Distribution**: Quarterly USDT distributions to token holders
- **Commodity-Based Minting**: Additional tokens minted based on lithium price and mining yield performance

## Features

### Core Features

- **Multi-Chain Support**: Ethereum, Tron, and Solana networks
- **Revenue Distribution**: Automated quarterly USDT distributions
- **Bridge System**: Cross-chain token transfers
- **Legal Framework**: SPV fiduciary structure with contract law compliance
- **Commodity-Based Minting**: Automatic token creation based on asset performance

### Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui with Tailwind CSS
- **State Management**: React Query for server state
- **Authentication**: Supabase Auth
- **Styling**: Tailwind CSS with custom gradients and animations

## Installation

### Prerequisites

- Node.js 16+
- Yarn package manager

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd norah-token-platform
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Development

### Starting the Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:8080`

### Building for Production

```bash
yarn build
```

### Linting

```bash
yarn lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── admin/         # Admin-specific components
│   └── ...            # Feature components
├── pages/             # Page components
├── contexts/          # React contexts
├── hooks/             # Custom hooks
├── lib/               # Utility functions
└── integrations/      # External service integrations
```

## Features

### Dark/Light Mode
The application supports both dark and light themes with automatic system preference detection.

### Multi-Chain Bridge
- Cross-chain token transfers between Ethereum, Tron, and Solana
- Automated fee calculation and reserve management
- Transaction tracking and validation

### Revenue Distribution
- Quarterly USDT distributions to token holders
- Automated calculation based on token holdings
- Legal compliance through SPV structure

## License

MIT License - See LICENSE file for details.

## Disclaimer

This software is provided for educational and development purposes. Users should conduct their own legal and technical due diligence before deploying in production environments.