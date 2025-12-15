'use client'

import DChart from './controls/DChart';
import DPortfolioChart from './controls/DPortfolioChart';
import { useEffect } from 'react';
import { ChartState } from './types/ChartState';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { 
  lineData as btcLineData, 
  transactions as btcTransactions 
} from './data/btc-w-data';

import { 
  lineData as ethLineData, 
  transactions as ethTransactions 
} from './data/eth-w-data';

import { lineData as solLineData } from './data/sol-w-data';
import { lineData as xrpLineData } from './data/xrp-w-data';
import { lineData as adaLineData } from './data/ada-w-data';
import { lineData as dogeLineData } from './data/doge-w-data';
import { lineData as shibLineData } from './data/shib-w-data';

import { PortfolioData } from './types/PortfolioData';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Card } from 'primereact/card';
import { dogecoinerApi } from './api/dogecoiner-api';
import { 
  chartCommonOptions, 
  priceFormatter_usd, 
  priceFormatter_usd_1k, 
  priceFormatter_usd_sm, 
  priceFormatter_usd_xsm,
} from './types/ChartDisplay';
import { dogecoinerSsrApi } from './api/ssr-api';

export default function Home() {
  
  const btcPriceState = new ChartState();
  const ethPriceState = new ChartState();
  const solPriceState = new ChartState();
  const xrpPriceState = new ChartState();
  const adaPriceState = new ChartState();
  const dogePriceState = new ChartState();
  const shibPriceState = new ChartState();

  const btcPortfolioState = new ChartState();
  const ethPortfolioState = new ChartState();
  
  const compState = new ChartState();

  const priceChartOptions = {
    ...chartCommonOptions, 
    localization: {
      priceFormatter: priceFormatter_usd
    } 
  }

  const priceChartSmOptions = {
    ...chartCommonOptions, 
    localization: {
      priceFormatter: priceFormatter_usd_sm
    } 
  }

  const priceChartXsmOptions = {
    ...chartCommonOptions, 
    localization: {
      priceFormatter: priceFormatter_usd_xsm
    } 
  }

  const priceChart1kOptions = {
    ...chartCommonOptions,
    localization: {
      priceFormatter: priceFormatter_usd_1k
    } 
  }
  
  useEffect(() => {
      // btcPriceState.setData(btcLineData);
      // btcPriceState.setLoading(false);

      // ethPriceState.setData(ethLineData);
      // ethPriceState.setLoading(false);

      // solPriceState.setData(solLineData);
      // solPriceState.setLoading(false);

      // xrpPriceState.setData(xrpLineData);
      // xrpPriceState.setLoading(false);

      // adaPriceState.setData(adaLineData);
      // adaPriceState.setLoading(false);

      // dogePriceState.setData(dogeLineData);
      // dogePriceState.setLoading(false);

      // shibPriceState.setData(shibLineData);
      // shibPriceState.setLoading(false);

      const fetchPriceData = async (symbol, interval, state) => {
        return await dogecoinerApi.getKlineHistoryLineData(symbol, interval, state);
      };
      
      fetchPriceData('BTCUSDT', 'W', btcPriceState);
      fetchPriceData('ETHUSDT', 'W', ethPriceState);
      fetchPriceData('SOLUSDT', 'W', solPriceState);
      fetchPriceData('XRPUSDT', 'W', xrpPriceState);
      fetchPriceData('ADAUSDT', 'W', adaPriceState);
      fetchPriceData('DOGEUSDT', 'W', dogePriceState);
      fetchPriceData('SHIBUSDT', 'W', shibPriceState);

      const btcData = new PortfolioData(btcTransactions, btcLineData).data;
      btcPortfolioState.setData([ btcData ]);
      btcPortfolioState.setLoading(false);

      const ethData = new PortfolioData(ethTransactions, ethLineData).data;
      ethPortfolioState.setData([ ethData ]);
      ethPortfolioState.setLoading(false);

      compState.setData([ btcData, ethData ]);
      compState.setLoading(false);


      // const getMajors = async () => {
      //   await dogecoinerSsrApi.getMajors()
      //   .then(o => 
      //     console.log(o.data))
      //   .catch(e => 
      //     console.log(e.message));
      //   }
      // getMajors();

    }, []);

  const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const priceBodyTemplate = (item) => {
    return formatCurrency(item.price);
  };

  const paidBodyTemplate = (item) => {
    return formatCurrency(item.amount * item.price);
  };

  const paidTotalGroup = (transactions) => {
    let total = transactions.reduce((sum, item) => 
      sum + (item.amount * item.price), 0);
    return formatCurrency(total);
  };

  const btcFooterGroup = (
    <ColumnGroup>
        <Row>
            <Column footer="Totals:" colSpan={4} footerStyle={{ textAlign: 'left' }} />
            <Column footer={paidTotalGroup(btcTransactions)} align='right' />
        </Row>
    </ColumnGroup>);

  const ethFooterGroup = (
    <ColumnGroup>
        <Row>
            <Column footer="Totals:" colSpan={4} footerStyle={{ textAlign: 'left' }} />
            <Column footer={paidTotalGroup(ethTransactions)} align='right' />
        </Row>
    </ColumnGroup>);
    
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-3 px-3 bg-white dark:bg-transparent sm:items-start">
        <div className="flex flex-col min-w-full items-center gap-6 text-center sm:items-start sm:text-left" style={{width: '100px'}}>
          <Card title='BTC Portfolio' className="bg-stone-800 text-left" style={{ width: "100%" }}>
            
            <h1 className='h-borders mb-1'>Price Chart</h1>
            <DChart state={btcPriceState} chartOptions={priceChartOptions}></DChart>
            
            <h1 className='h-borders mb-1'>Portfolio Value</h1>
            <DPortfolioChart state={btcPortfolioState} chartOptions={priceChart1kOptions} multiScale={false}></DPortfolioChart>
            
            <h1 className='h-borders mb-1'>Transactions</h1>
            <DataTable 
              value={btcTransactions} 
              footerColumnGroup={btcFooterGroup} 
              scrollable 
              style={{ width: "100%" }} 
              tableStyle={{ minWidth: '33rem' }}>
              <Column field="date" header="Date"></Column>
              <Column field="transaction" header="Type"></Column>
              <Column field="amount" header="Amount" align='right' bodyStyle={{textAlign: 'right'}}></Column>
              <Column body={priceBodyTemplate} header="Price" align='right' bodyStyle={{textAlign: 'right'}}></Column>
              <Column body={paidBodyTemplate} header="Paid" align='right' bodyStyle={{textAlign: 'right'}}></Column>
            </DataTable>
            
          </Card>
          
          <Card title='ETH Portfolio' className="bg-stone-800 text-left" style={{ width: "100%" }}>

            <h1 className='h-borders mb-1 font-semibold'>Price Chart</h1>
            <DChart state={ethPriceState} chartOptions={priceChartOptions}></DChart>
            
            <h1 className='h-borders mb-1 font-semibold'>Portfolio Value</h1>
            <DPortfolioChart state={ethPortfolioState} chartOptions={priceChart1kOptions} multiScale={false}></DPortfolioChart>
            
            <h1 className='h-borders mb-1 font-semibold'>Transactions</h1>
            <DataTable 
              value={ethTransactions} 
              footerColumnGroup={ethFooterGroup} 
              scrollable 
              style={{width: "100%"}} 
              tableStyle={{ minWidth: '33rem' }}>
              <Column field="date" header="Date"></Column>
              <Column field="transaction" header="Type"></Column>
              <Column field="amount" header="Amount" align='right' bodyStyle={{textAlign: 'right'}}></Column>
              <Column body={priceBodyTemplate} header="Price" align='right' bodyStyle={{textAlign: 'right'}}></Column>
              <Column body={paidBodyTemplate} header="Paid" align='right' bodyStyle={{textAlign: 'right'}}></Column>
            </DataTable>
          </Card>
          
          <Card title='Compare Portfolio' className="bg-stone-800 text-left" style={{ width: "100%" }}>
            <h1 className='h-borders mb-1 font-semibold'>ETH vs BTC</h1>
            <DPortfolioChart state={compState} chartOptions={priceChart1kOptions} multiScale={false}></DPortfolioChart>
          </Card>

          <Card title='SOL' className="bg-stone-800 text-left" style={{ width: "100%" }}>
            <h1 className='h-borders mb-1 font-semibold'>Price Chart</h1>
            <DChart state={solPriceState} chartOptions={priceChartOptions}></DChart>
          </Card>

          <Card title='XRP' className="bg-stone-800 text-left" style={{ width: "100%" }}>
            <h1 className='h-borders mb-1 font-semibold'>Price Chart</h1>
            <DChart state={xrpPriceState} chartOptions={priceChartSmOptions}></DChart>
          </Card>
          
          <Card title='ADA' className="bg-stone-800 text-left" style={{ width: "100%" }}>
            <h1 className='h-borders mb-1 font-semibold'>Price Chart</h1>
            <DChart state={adaPriceState} chartOptions={priceChartSmOptions}></DChart>
          </Card>

          <Card title='DOGE' className="bg-stone-800 text-left" style={{ width: "100%" }}>
            <h1 className='h-borders mb-1 font-semibold'>Price Chart</h1>
            <DChart state={dogePriceState} chartOptions={priceChartSmOptions}></DChart>
          </Card>

          <Card title='1,000xSHIB' className="bg-stone-800 text-left" style={{ width: "100%" }}>
            <h1 className='h-borders mb-1 font-semibold'>Price Chart</h1>
            <DChart state={shibPriceState} chartOptions={priceChartXsmOptions}></DChart>
          </Card>
        </div>
      </main>
    </div>
  );
}
