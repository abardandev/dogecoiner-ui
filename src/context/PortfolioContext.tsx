'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Transaction } from '@/src/types/Transaction';

export interface Portfolio {
  portfolioId: number;
  portfolioName: string;
  portfolioValue: number;
  transactions: Transaction[];
}

interface PortfolioContextType {
  portfolios: Portfolio[];
  addPortfolio: (name: string) => void;
  removePortfolio: (portfolioId: number) => void;
  updatePortfolioValue: (portfolioId: number, value: number) => void;
  getPortfolio: (portfolioId: number) => Portfolio | undefined;
  addTransaction: (portfolioId: number, transaction: Transaction) => void;
  removeTransaction: (portfolioId: number, transactionIndex: number) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [nextId, setNextId] = useState(1);

  const addPortfolio = (name: string) => {
    const newPortfolio: Portfolio = {
      portfolioId: nextId,
      portfolioName: name,
      portfolioValue: 0,
      transactions: []
    };
    setPortfolios(prev => [...prev, newPortfolio]);
    setNextId(prev => prev + 1);
  };

  const removePortfolio = (portfolioId: number) => {
    setPortfolios(prev => prev.filter(p => p.portfolioId !== portfolioId));
  };

  const updatePortfolioValue = (portfolioId: number, value: number) => {
    setPortfolios(prev =>
      prev.map(p => p.portfolioId === portfolioId
        ? { ...p, portfolioValue: value }
        : p
      )
    );
  };

  const getPortfolio = (portfolioId: number) => {
    return portfolios.find(p => p.portfolioId === portfolioId);
  };

  const addTransaction = (portfolioId: number, transaction: Transaction) => {
    setPortfolios(prev =>
      prev.map(p => p.portfolioId === portfolioId
        ? { ...p, transactions: [...p.transactions, transaction] }
        : p
      )
    );
  };

  const removeTransaction = (portfolioId: number, transactionIndex: number) => {
    setPortfolios(prev =>
      prev.map(p => p.portfolioId === portfolioId
        ? { ...p, transactions: p.transactions.filter((_, i) => i !== transactionIndex) }
        : p
      )
    );
  };

  return (
    <PortfolioContext.Provider value={{
      portfolios,
      addPortfolio,
      removePortfolio,
      updatePortfolioValue,
      getPortfolio,
      addTransaction,
      removeTransaction
    }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
