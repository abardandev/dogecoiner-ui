'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { usePortfolio } from '@/src/context/PortfolioContext';

interface AddPortfolioFormProps {
  className?: string;
  setIsCreating: Dispatch<SetStateAction<boolean>>
}

export default function AddPortfolioForm({
  className = '',
  setIsCreating = null
}: AddPortfolioFormProps) {
  const [portfolioName, setPortfolioName] = useState('');
  const { addPortfolio } = usePortfolio();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (portfolioName.trim()) {
      addPortfolio(portfolioName.trim());
      setPortfolioName('');
      if(setIsCreating) setIsCreating(false);
    }
  };

  const handleCancel = () => {
    setPortfolioName('');
    if(setIsCreating) setIsCreating(false);
  };

  return (
    <div className={`flex items-center justify-center mb-4 ${className}`}>
      <div className="relative border-2 border-primary-400/50 rounded-lg p-3 w-full bg-surface-card"
        style={{ minHeight: "150px" }}>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
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