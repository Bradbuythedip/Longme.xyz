import { FC } from 'react';

export const MarketStats: FC = () => {
  const stats = [
    {
      label: '24h Volume',
      value: '$1.2M',
      change: '+12.5%',
      isPositive: true
    },
    {
      label: 'TVL',
      value: '$890K',
      change: '+5.2%',
      isPositive: true
    },
    {
      label: 'Open Interest',
      value: '$450K',
      change: '-2.1%',
      isPositive: false
    },
    {
      label: 'Funding Rate',
      value: '0.01%',
      change: '+0.002%',
      isPositive: true
    }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-4 rounded-xl bg-background-tertiary hover:bg-background-tertiary/80 transition-colors"
        >
          <div className="text-sm text-text-secondary">{stat.label}</div>
          <div className="text-lg font-bold mt-1">{stat.value}</div>
          <div
            className={`text-sm mt-1 ${
              stat.isPositive ? 'text-success' : 'text-error'
            }`}
          >
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
};