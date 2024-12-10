import { FC } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Image from 'next/image';
import Link from 'next/link';

export const NavBar: FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="LongMe.xyz"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                LongMe.xyz
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/trade" className="nav-link">
              Trade
            </Link>
            <Link href="/positions" className="nav-link">
              Positions
            </Link>
            <Link href="/analytics" className="nav-link">
              Analytics
            </Link>
            <a
              href="https://docs.longme.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Docs
            </a>
          </div>

          {/* Wallet and Network */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center px-3 py-1 rounded-full bg-background-tertiary">
              <div className="w-2 h-2 rounded-full bg-success mr-2"></div>
              <span className="text-sm text-text-secondary">Testnet</span>
            </div>
            <WalletMultiButton className="btn-primary" />
          </div>
        </div>
      </div>
    </nav>
  );
};