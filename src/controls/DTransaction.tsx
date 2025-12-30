'use client'

import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';
import { Transaction } from '../types/Transaction';
import { Badge } from 'primereact/badge';

type TransactionTypeOption = 'Buy' | 'Sell' | 'Transfer In' | 'Transfer Out';

interface DTransactionProps {
  initial?: Transaction;
  onSave?: (tx: Transaction) => void;
  onCancel?: () => void;
}

export default function DTransaction({
  initial,
  onSave,
  onCancel,
}: DTransactionProps) {
  const [type, setType] = useState<TransactionTypeOption>(
    (initial?.transaction as TransactionTypeOption) ?? 'Buy',
  );
  const [quantity, setQuantity] = useState<number>(initial?.amount ?? 0);
  const [price, setPrice] = useState<number>(initial?.price ?? 0);
  const [date, setDate] = useState<Date | null>(
    initial?.date ? new Date(initial.date) : new Date(),
  );

  const typeOptions: { label: string; key: string }[] = [
    { label: 'Buy', key: 'buy' },
    { label: 'Sell', key: 'sell' },
    { label: 'In', key: 'tin' },
    { label: 'Out', key: 'tout' },
  ];

  const handleSave = () => {
    if (!date) {
      return;
    }

    const tx = new Transaction(
      initial.symbol,
      type,
      quantity ?? 0,
      price ?? 0,
      date.toISOString(),
    );

    onSave?.(tx);
  };

  const handleCancel = () => {
    onCancel?.();
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-color-secondary">Transaction</label>
          <div className="grid w-fit">
            <Badge className="w-31 !rounded-b-none justify-self-end" value="Transfer" severity="secondary" />
            <ButtonGroup>
                {typeOptions.map((opt, index) => (
                    <Button key={opt.key} className={ index > 0 ? "!rounded-t-none" : ""} label={opt.label} value={opt.key} onChange={(e) => setType(e.value)} />
                ))}
            </ButtonGroup>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-color-secondary">Quantity</label>
          <InputNumber
            value={quantity}
            onValueChange={(e) => setQuantity(e.value ?? 0)}
            className="w-full"
            minFractionDigits={0}
            maxFractionDigits={8}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-color-secondary">Price</label>
          <InputNumber
            value={price}
            onValueChange={(e) => setPrice(e.value ?? 0)}
            className="w-full"
            mode="currency"
            currency="USD"
            locale="en-US"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-color-secondary">Date</label>
          <Calendar
            value={date}
            onChange={(e) => setDate(e.value as Date | null)}
            showIcon
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
