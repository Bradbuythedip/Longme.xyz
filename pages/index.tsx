import type { NextPage } from 'next';
import Head from 'next/head';
import { useWallet } from '@solana/wallet-adapter-react';
import { NavBar } from '../components/NavBar';
import { TradingInterface } from '../components/TradingInterface';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Home: NextPage = () => {
  const { publicKey } = useWallet();

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>LongMe.xyz - Advanced MEF Token Trading Platform</title>
        <meta name="description" content="Trade MEF tokens with up to 10x leverage on Solana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="container mx-auto px-4 py-8">
        {publicKey ? (
          <TradingInterface />
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
            <div className="max-w-2xl mx-auto space-y-8">
              <h1 className="text-4xl sm:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Trade MEF with Confidence
                </span>
              </h1>
              
              <p className="text-xl text-text-secondary">
                Access advanced trading features, real-time charts, and up to 10x leverage
                on the most sophisticated MEF trading platform.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <WalletMultiButton className="btn-primary px-8 py-4 text-lg" />
                <a
                  href="https://docs.longme.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-white transition-colors"
                >
                  Learn More →
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$1.2M</div>
                  <div className="text-text-secondary">24h Trading Volume</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">2.5K</div>
                  <div className="text-text-secondary">Active Traders</div>
                </div>
                <div className="card p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10x</div>
                  <div className="text-text-secondary">Maximum Leverage</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-text-secondary">
              © 2024 LongMe.xyz. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a
                href="https://twitter.com/longmexyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://discord.gg/longme"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
              >
                Discord
              </a>
              <a
                href="https://docs.longme.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
              >
                Docs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;