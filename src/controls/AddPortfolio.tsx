'use client';

import { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { usePortfolio } from '@/src/context/PortfolioContext';

interface AddPortfolioProps {
  className?: string;
}

export default function AddPortfolios({
  className = ''
}: AddPortfolioProps) {
  const [portfolioName, setPortfolioName] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const { portfolios, addPortfolio } = usePortfolio();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (portfolioName.trim()) {
      addPortfolio(portfolioName.trim());
      setPortfolioName('');
      setIsCreating(false);
    }
  };

  const handleCancel = () => {
    setPortfolioName('');
    setIsCreating(false);
  };

  if (!isCreating) {
    return portfolios.length == 0 ? 
    (
      <div className={`flex items-center justify-center mb-4 ${className}`}>
        <div className="relative border-2 border-dashed border-primary-400/30 rounded-lg p-8 w-full hover:border-primary-400/50 transition-colors"
          style={{ minHeight: "150px" }}>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="text-center">
              <p className="text-lg font-semibold text-primary-100 mb-2">
                <i className="pi pi-plus-circle text-4xl text-primary-400/50" /> Add a Portfolio</p>
              <p className="text-sm text-primary-200/70 mb-4">Start tracking your cryptos</p>
              <Button
                label="new list"
                icon="pi pi-plus"
                onClick={() => setIsCreating(true)}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className={` ${className}`}>
        <Button
          className="w-full"
          label="new list"
          icon="pi pi-plus"
          onClick={() => setIsCreating(true)}
        />
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center mb-4 ${className}`}>
      <div className="relative border-2 border-primary-400/50 rounded-lg p-3 w-full bg-surface-card"
        style={{ minHeight: "150px" }}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full justify-center">
          <div className="flex flex-col gap-2">
            <label htmlFor="portfolio-name" className="text-sm font-semibold text-primary-100">
              Portfolio Name
            </label>
            <InputText
              id="portfolio-name"
              value={portfolioName}
              onChange={(e) => setPortfolioName(e.target.value)}
              placeholder="e.g. My Portfolio"
              autoFocus
              className="w-full"
              autoComplete="off"
            />
          </div>
          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              label="Cancel"
              icon="pi pi-times"
              onClick={handleCancel}
              className="p-button-text p-button-secondary"
              size="small"
            />
            <Button
              type="submit"
              label="Create"
              icon="pi pi-check"
              disabled={!portfolioName.trim()}
              size="small"
            />
          </div>
        </form>
      </div>
    </div>
  );
}