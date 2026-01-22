'use client';

import { useState } from 'react';
import { Button } from 'primereact/button';
import { usePortfolio } from '@/src/context/PortfolioContext';
import AddPortfolioForm from './AddPortfolioForm';

interface AddPortfolioProps {
  className?: string;
}

export default function AddPortfolio({
  className = ''
}: AddPortfolioProps) {
  const [isCreating, setIsCreating] = useState(false);
  const { portfolios } = usePortfolio();

  if (!isCreating) {
    return portfolios.length == 0 ? (
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
    <AddPortfolioForm className={className} setIsCreating={setIsCreating} />
  );
}