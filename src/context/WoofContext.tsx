'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface WoofContextType {
  woofCount: number;
  incrementWoof: () => void;
  resetWoof: () => void;
}

const WoofContext = createContext<WoofContextType | undefined>(undefined);

export function WoofProvider({ children }: { children: ReactNode }) {
  const [woofCount, setWoofCount] = useState(0);

  const incrementWoof = () => {
    setWoofCount(prev => prev + 1);
  };

  const resetWoof = () => {
    setWoofCount(0);
  };

  return (
    <WoofContext.Provider value={{ woofCount, incrementWoof, resetWoof }}>
      {children}
    </WoofContext.Provider>
  );
}

export function useWoof() {
  const context = useContext(WoofContext);
  if (context === undefined) {
    throw new Error('useWoof must be used within a WoofProvider');
  }
  return context;
}
