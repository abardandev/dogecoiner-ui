'use client';

import { useParams, useRouter } from 'next/navigation';
import { usePortfolio } from '@/src/context/PortfolioContext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import DTransaction from '@/src/controls/DTransaction';
import { useState } from 'react';
import { Transaction } from '@/src/types/Transaction';
import Portfolios from '@/app/portfolios/page';

export default function PortfolioDetail() {
  const params = useParams();
  const router = useRouter();
  const portfolioId = parseInt(params.id as string);
  const { getPortfolio, addTransaction, removeTransaction } = usePortfolio();
  const [showTransactionForm, setShowTransactionForm] = useState(false);

  const portfolio = getPortfolio(portfolioId);

  if (!portfolio) {
    return (
      <main className="flex-1 min-w-0 px-4 pb-24 pt-6 lg:px-6 lg:py-6 lg:px-8">
        <div className="text-center py-8">
          <i className="pi pi-exclamation-circle text-4xl text-primary-400/50 mb-4" />
          <p className="text-lg text-primary-100">Portfolio not found</p>
          <Button
            label="Back to Dashboard"
            icon="pi pi-arrow-left"
            onClick={() => router.push('/')}
            className="mt-4"
          />
        </div>
      </main>
    );
  }

  const handleSaveTransaction = (tx: Transaction) => {
    addTransaction(portfolioId, tx);
    setShowTransactionForm(false);
  };

  const handleCancelTransaction = () => {
    setShowTransactionForm(false);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US');
  };

  const priceBodyTemplate = (tx: Transaction) => {
    return formatCurrency(tx.price);
  };

  const totalBodyTemplate = (tx: Transaction) => {
    return formatCurrency(tx.amount * tx.price);
  };

  const dateBodyTemplate = (tx: Transaction) => {
    return formatDate(tx.date);
  };

  const actionsBodyTemplate = (tx: Transaction, options: any) => {
    return (
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-text p-button-danger"
        onClick={() => removeTransaction(portfolioId, options.rowIndex)}
      />
    );
  };

  return (
    <main className="flex-1 min-w-0 pb-24 pt-6 lg:px-6 lg:py-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Button
            icon="pi pi-arrow-left"
            text
            onClick={() => router.push('/')}
            className="mb-2"
          />
          <h1 className="text-3xl font-bold text-primary-100">{portfolio.portfolioName}</h1>
          <p className="text-xl text-primary-200 mt-2">{formatCurrency(portfolio.portfolioValue)}</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-primary-100">Transactions</h2>
          {!showTransactionForm && (
            <Button
              label="Add"
              icon="pi pi-plus"
              onClick={() => setShowTransactionForm(true)}
            />
          )}
        </div>

        {showTransactionForm && (
          <div className="mb-4 p-4 border rounded-lg bg-surface-50">
            <h3 className="text-lg font-semibold mb-4 text-primary-100">New Transaction</h3>
            <DTransaction
              initial={new Transaction('BTC', 'buy', 0, 0, new Date().toISOString())}
              onSave={handleSaveTransaction}
              onCancel={handleCancelTransaction}
            />
          </div>
        )}

        {portfolio.transactions.length === 0 && !showTransactionForm ? (
          <div className="text-center py-8">
            <i className="pi pi-inbox text-4xl text-primary-400/50 mb-4" />
            <p className="text-primary-200">No transactions yet</p>
            <p className="text-sm text-primary-300 mt-2">Add your first transaction to start tracking</p>
          </div>
        ) : portfolio.transactions.length > 0 ? (
          <DataTable
            value={portfolio.transactions}
            scrollable
            responsiveLayout="scroll"
            style={{ width: '100%' }}
            tableStyle={{ minWidth: '0' }}
          >
            <Column field="symbol" header="Asset" />
            <Column field="type" header="Type" />
            <Column field="amount" header="Quantity" align="right" bodyStyle={{ textAlign: 'right' }} />
            <Column field="price" header="Price" align="right" bodyStyle={{ textAlign: 'right' }} body={priceBodyTemplate} />
            <Column header="Total" align="right" bodyStyle={{ textAlign: 'right' }} body={totalBodyTemplate} />
            <Column field="date" header="Date" body={dateBodyTemplate} />
            <Column header="Actions" body={actionsBodyTemplate} style={{ width: '4rem' }} />
          </DataTable>
        ) : null}
      </div>

      <Portfolios />
    </main>
  );
}
