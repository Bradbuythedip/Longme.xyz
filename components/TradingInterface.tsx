import { FC, useState } from 'react';
import { PriceChart } from './PriceChart';
import { TradingForm } from './TradingForm';
import { PositionsList } from './PositionsList';
import { MarketStats } from './MarketStats';

export const TradingInterface: FC = () => {
  const [activeTab, setActiveTab] = useState('chart');

  return (
    <div className="grid grid-cols-12 gap-6 p-4 mt-16">
      {/* Left Column - Chart and Trading Form */}
      <div className="col-span-12 lg:col-span-8 space-y-6">
        <div className="card p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/mef-token.png"
                alt="MEF Token"
                width={24}
                height={24}
                className="rounded-full"
              />
              <h2 className="text-xl font-bold">MEF/USDC</h2>
              <span className="px-2 py-1 bg-success/20 text-success rounded-full text-sm">
                +5.23%
              </span>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('chart')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'chart'
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                Chart
              </button>
              <button
                onClick={() => setActiveTab('depth')}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === 'depth'
                    ? 'bg-primary text-white'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                Depth
              </button>
            </div>
          </div>
          
          <div className="h-[500px]">
            {activeTab === 'chart' ? <PriceChart /> : <MarketDepth />}
          </div>
        </div>

        <div className="card p-4">
          <TradingForm />
        </div>
      </div>

      {/* Right Column - Positions and Market Stats */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <div className="card p-4">
          <h2 className="text-lg font-bold mb-4">Your Positions</h2>
          <PositionsList />
        </div>

        <div className="card p-4">
          <h2 className="text-lg font-bold mb-4">Market Stats</h2>
          <MarketStats />
        </div>

        <div className="card p-4">
          <h2 className="text-lg font-bold mb-4">Recent Trades</h2>
          <div className="space-y-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-2 border-b border-white/10 last:border-0"
              >
                <div className="flex items-center space-x-2">
                  <span className={i % 2 === 0 ? 'text-success' : 'text-error'}>
                    {i % 2 === 0 ? 'Long' : 'Close'}
                  </span>
                  <span>100 MEF</span>
                </div>
                <span className="text-text-secondary">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};