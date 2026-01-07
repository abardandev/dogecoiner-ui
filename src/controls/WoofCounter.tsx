'use client';

import { useWoof } from '@/src/context/WoofContext';

export default function WoofCounter() {
  const { woofCount } = useWoof();

  return (
    <div className="text-center p-2">
      <p className="text-sm text-primary-100">
        Total Woofs: <span className="font-bold">{woofCount}</span>
      </p>
    </div>
  );
}
