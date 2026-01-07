'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useWoof } from '@/src/context/WoofContext';

interface DogeClickerProps {
  className?: string;
}

export default function DogeClicker({ className = '' }: DogeClickerProps) {
  const [isBarking, setIsBarking] = useState(false);
  const { woofCount, incrementWoof } = useWoof();

  const handleClick = () => {
    setIsBarking(true);
    incrementWoof();
    setTimeout(() => setIsBarking(false), 250);
  };

  return (
    <div onClick={handleClick}
      className={`flex flex-col items-center gap-4 cursor-pointer rounded-lg bg-linear-135 from-transparent to-blue-400/25 h-full ${className}`}>
      <div className="flex flex-row md:flex-col items-center justify-center gap-4 w-full h-full p-4">
        <div className="flex-shrink min-h-0 flex items-center justify-center">
          <Image
            alt="big wow"
            src={isBarking ? "/game/doge-bark-opt-512.png" : "/game/doge-opt-512.png"}
            width="200"
            height="200"
            className="w-auto h-auto max-h-full object-contain"
            style={{ maxHeight: "100%" }}
          />
        </div>
        <div className="text-center flex-shrink-0 text-lg font-semibold text-primary-100">
          <p className="">woofs</p>
          <p>{woofCount}</p>
        </div>
      </div>
    </div>
  );
}
