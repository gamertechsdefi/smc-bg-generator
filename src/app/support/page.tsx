// app/support/page.tsx
'use client';

import { useState } from 'react';
import { FaCopy } from 'react-icons/fa';

interface Wallet {
  id: number; // Added unique ID
  name: string;
  address: string;
  network: string;
}

const wallets: Wallet[] = [
  {
    id: 1,
    name: 'Binance Smart Chain',
    address: '0x29A4782aEE3dF09fD2d6d5bA63246f5e4FfDBD41',
    network: 'BNB',
  },
  {
    id: 2,
    name: 'Ethereum',
    address: '0x29A4782aEE3dF09fD2d6d5bA63246f5e4FfDBD41',
    network: 'ETH',
  },
  {
    id: 3,
    name: 'Solana',
    address: '9eTdRH7J11ZHGCBCFwZdygh1qJKwVHRwByHLot7ovY8W',
    network: 'SOL',
  },
  {
    id: 4,
    name: 'USDT',
    address: '0x29A4782aEE3dF09fD2d6d5bA63246f5e4FfDBD41',
    network: 'EVMs',
  },
  {
    id: 5,
    name: 'USDC',
    address: '9eTdRH7J11ZHGCBCFwZdygh1qJKwVHRwByHLot7ovY8W',
    network: 'SOL',
  },
];

export default function SupportPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (address: string) => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        setCopied(address);
        setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-200 flex items-center justify-center py-12">
      <div className="max-w-2xl w-full rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Support Me</h1>
        <p className="text-center mb-8 text-neutral-400">
          If you enjoy my work, consider supporting me by tipping to one of the wallet addresses below. Thank you!
        </p>
        <div className="space-y-6">
          {wallets.map((wallet) => (
            <div
              key={wallet.id} // Use unique numeric ID as key
              className="border border-gray-200rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50"
            >
              <div>
                <h2 className="text-lg text-black font-semibold">
                  {wallet.name} ({wallet.network})
                </h2>
                <p className="text-sm text-neutral-700 break-all">{wallet.address}</p>
              </div>
              <button
                onClick={() => copyToClipboard(wallet.address)}
                className="mt-2 sm:mt-0 bg-neutral-700 hover:bg-neutral-900 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2 transition duration-200"
                aria-label={`Copy ${wallet.name} address`}
              >
                <FaCopy />
                <span>{copied === wallet.address ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}