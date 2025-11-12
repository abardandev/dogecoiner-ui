'use client'

import DChart from './controls/DChart';
import DPortfolioChart from './controls/DPortfolioChart';
import { useEffect } from 'react';
import { ChartState } from './types/ChartState';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { lineData as btcLineData } from './data/btc-w-data';
import { lineData as ethLineData } from './data/eth-w-data';

import { PortfolioData } from './types/PortfolioData';
import { Transaction } from './types/Transaction';

export default function Home() {
  const btcState = new ChartState();
  const btcTransactions: Transaction[] = [
    {
      symbol: "BTCUSDT",
      transaction: "buy",
      amount: 0.05,
      price: 58331.2,
      date: "2024-05-01"
    },
    {
      symbol: "BTCUSDT",
      transaction: "buy",
      amount: 0.05,
      price: 94560.2,
      date: "2025-01-01"
    },
    {
      symbol: "BTCUSDT",
      transaction: "buy",
      amount: 0.2,
      price: 82371.6,
      date: "2025-03-30"
    }];

  const ethState = new ChartState();
  const ethTransactions: Transaction[] = [
    {
      symbol: "ETHUSDT",
      transaction: "buy",
      amount: 0.9857,
      price: 2970.86,
      date: "2024-05-01"
    },
    {
      symbol: "ETHUSDT",
      transaction: "buy",
      amount: 1.4182,
      price: 3333.81,
      date: "2025-01-01"
    },
    {
      symbol: "ETHUSDT",
      transaction: "buy",
      amount: 9.1524,
      price: 1800,
      date: "2025-03-30"
    }];

  const compState = new ChartState();

  useEffect(() => {
      const btcData = new PortfolioData(btcTransactions, btcLineData).data;

      btcState.setData([ btcData ]);
      btcState.setLoading(false);

      const ethData = new PortfolioData(ethTransactions, ethLineData).data;
      ethState.setData([ ethData ]);
      ethState.setLoading(false);

      compState.setData([ btcData, ethData ]);
      compState.setLoading(false);
    }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const priceBodyTemplate = (item) => {
    return formatCurrency(item.price);
  };

  const totalBodyTemplate = (item) => {
    return formatCurrency(item.amount * item.price);
  };
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-3 px-3 bg-white dark:bg-transparent sm:items-start">
        <div className="flex flex-col min-w-full items-center gap-6 text-center sm:items-start sm:text-left">
          <DPortfolioChart title='BTC Portfolio' state={btcState}></DPortfolioChart>
          <DataTable value={btcTransactions} tableStyle={{ minWidth: '50rem' }}>
            <Column field="date" header="Date"></Column>
            <Column field="transaction" header="Type"></Column>
            <Column field="amount" header="Amount" align='right' bodyStyle={{textAlign: 'right'}}></Column>
            <Column body={priceBodyTemplate} header="Price" align='right' bodyStyle={{textAlign: 'right'}}></Column>
            <Column body={totalBodyTemplate} header="Total" align='right' bodyStyle={{textAlign: 'right'}}></Column>
          </DataTable>
          
          <DPortfolioChart title='ETH Portfolio' state={ethState}></DPortfolioChart>
          <DataTable value={ethTransactions} tableStyle={{ minWidth: '50rem' }}>
            <Column field="date" header="Date"></Column>
            <Column field="transaction" header="Type"></Column>
            <Column field="amount" header="Amount" align='right' bodyStyle={{textAlign: 'right'}}></Column>
            <Column body={priceBodyTemplate} header="Price" align='right' bodyStyle={{textAlign: 'right'}}></Column>
            <Column body={totalBodyTemplate} header="Total" align='right' bodyStyle={{textAlign: 'right'}}></Column>
          </DataTable>

          <DPortfolioChart title='Comp Portfolio' state={compState}></DPortfolioChart>
          
          {/* <DChart title='BTC' symbol='BTCUSDT' interval='W'></DChart>
          <DChart title='ETH' symbol='ETHUSDT' interval='W'></DChart>
          <DChart title='SOL' symbol='SOLUSDT' interval='W'></DChart>
          <DChart title='XRP' symbol='XRPUSDT' interval='W'></DChart>
          <DChart title='ADA' symbol='ADAUSDT' interval='W'></DChart>
          <DChart title='DOGE' symbol='DOGEUSDT' interval='W'></DChart>
          <DChart title='SHIB' symbol='SHIBUSDT' interval='W'></DChart> */}
        </div>
      </main>
    </div>
  );
}
