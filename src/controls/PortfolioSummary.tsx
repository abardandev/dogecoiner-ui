'use client';

import { useRouter } from 'next/navigation';
import { Ripple } from 'primereact/ripple';

interface PortfolioSummaryProps {
  portfolioId?: number;
  portfolioName?: string;
  portfolioValue?: number;
  className?: string;
}

export default function PortfolioSummary({
  portfolioId,
  portfolioName = 'My Portfolio',
  portfolioValue = 0,
  className = ''
}: PortfolioSummaryProps) {
  const router = useRouter();

  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(portfolioValue);

  const handleClick = () => {
    if (portfolioId) {
      router.push(`/portfolio/${portfolioId}`);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative border rounded-lg mb-4 bg-linear-135 from-transparent to-blue-400/25 bg-[url(/portfolio/mountain-road-bg.jpg)] p-ripple cursor-pointer overflow-hidden ${className}`}
      style={{ width: "100%", minHeight: "150px" }}>
      <div className="relative flex flex-col items-center justify-center h-full p-6 gap-3">
        <div className="text-center">
          <p className="text-lg font-semibold text-primary-100">{portfolioName}</p>
          <p className="text-2xl font-bold text-primary-50 mt-1">{formattedValue}</p>
        </div>
      </div>
      <Ripple />
    </div>
  );
}