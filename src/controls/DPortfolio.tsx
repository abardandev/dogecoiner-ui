'use client'

import { useState } from 'react';
import { Button } from 'primereact/button';
import { Transaction } from '../types/Transaction';
import { Portfolio } from '../types/Portfolio';
import { InputText } from 'primereact/inputtext';

interface DTransactionProps {
  initial?: Portfolio;
  onSave?: (tx: Portfolio) => void;
  onCancel?: () => void;
}

export default function DPortfolio({
  initial,
  onSave,
  onCancel,
}: DTransactionProps) {
  const [name, setName] = useState(initial?.name);

  const handleSave = () => {
    if (!name || name === initial.name) {
      return;
    }

    const pt = new Portfolio(null, name, null);
    onSave?.(pt);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-color-secondary">Name</label>
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button label="Cancel" severity="secondary" onClick={handleCancel} />
        <Button label="Save" onClick={handleSave} />
      </div>
    </div>
  );
}
