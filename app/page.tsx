'use client'

import { useEffect } from 'react';
import DChart from '../src/controls/DChart';
import DPortfolioChart from '../src/controls/DPortfolioChart';
import { ChartState } from '../src/types/ChartState';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import {
  lineData as btcLineData,
  transactions as btcTransactions,
} from '../src/data/btc-w-data';
import {
  lineData as ethLineData,
  transactions as ethTransactions,
} from '@data/eth-w-data';
import { lineData as solLineData } from '@data/sol-w-data';
import { lineData as xrpLineData } from '@data/xrp-w-data';
import { lineData as adaLineData } from '@data/ada-w-data';
import { lineData as dogeLineData } from '@data/doge-w-data';
import { lineData as shibLineData } from '@data/shib-w-data';
import { PortfolioData } from '../src/types/PortfolioData';
import { dogecoinerApiClient } from '../src/api/server/dogecoiner-api-client';
import {
  chartCommonOptions,
  priceFormatter_usd_1k,
} from '../src/types/ChartDisplay';
import { Transaction } from '../src/types/Transaction';
import { Portfolio } from '@/src/types/Portfolio';

export default function Dashboard() {
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
  const compareAssets = new ChartState();

  const priceChart1kOptions = {
    ...chartCommonOptions,
    localization: {
      priceFormatter: priceFormatter_usd_1k,
    },
  };

  useEffect(() => {
    const btcData = new PortfolioData(btcTransactions, btcLineData).data;
    btcPortfolioState.setData([btcData]);
    btcPortfolioState.setLoading(false);

    const ethData = new PortfolioData(ethTransactions, ethLineData).data;
    ethPortfolioState.setData([ethData]);
    ethPortfolioState.setLoading(false);

    compState.setData([btcData, ethData]);
    compState.setLoading(false);

    // build portfolio pnl data
    let btcLastPrice = getLast(btcLineData)?.value ?? 0;
    let btcHolding = getLast(btcData);
    let btcPnl = btcHolding.value - btcHolding.paid;

    let ethLastPrice = getLast(ethLineData)?.value ?? 0;
    let ethHolding = getLast(ethData);
    let ethPnl = ethHolding.value - ethHolding.paid;

    const pnl = [
      {
        asset: 'BTC',
        price: btcLastPrice,
        holding: btcHolding.value,
        pnl: btcPnl
      },
      {
        asset: 'ETH',
        price: ethLastPrice,
        holding: ethHolding.value,
        pnl: ethPnl
      },
    ];
    compareAssets.setData(pnl);
    compareAssets.setLoading(false);

    // const getMajors = async () => {
    //   await dogecoinerClientApi.getMajors()
    //   .then(o =>
    //     console.log(o.data))
    //   .catch(e =>
    //     console.log(e.message));
    //   }
    // getMajors();
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  const priceBodyTemplate = (item) => {
    return formatCurrency(item.price);
  };

  const getLast = (items: any[] | undefined) => {
    return items && items.length ? items[items.length - 1] : undefined;
  };

  const compareTotalHolding = formatCurrency(
    compareAssets.data.reduce((sum, item) => sum + item.holding, 0),
  );

  const compareTotalPnl = () => {
    const value = compareAssets.data.reduce((sum, item) => sum + item.pnl, 0);
    const isProfit = value >= 0;

    return (
      <span className={isProfit ? 'text-green-400' : 'text-red-400'}>
        {formatCurrency(value)}
      </span>
    );
  }

  const compareFooterGroup = (
    <ColumnGroup>
      <Row>
        <Column footer="Totals" colSpan={2} footerStyle={{ textAlign: 'left' }} />
        <Column footer={compareTotalPnl} align="right" />
        <Column footer={compareTotalHolding} align="right" />
      </Row>
    </ColumnGroup>
  );

  const holdingBodyTemplate = (item) => {
    return formatCurrency(item.holding);
  };

  const pnlBodyTemplate = (item) => {
    const isProfit = item.pnl >= 0;
    return (
      <span className={isProfit ? 'text-green-400' : 'text-red-400'}>
        {formatCurrency(item.pnl)}
      </span>
    );
  };

  const paidTotalGroup = (transactions) => {
    const total = transactions.reduce(
      (sum, item) => sum + item.amount * item.price,
      0,
    );
    return formatCurrency(total);
  };

  const btcFooterGroup = (
    <ColumnGroup>
      <Row>
        <Column footer="Totals" colSpan={4} footerStyle={{ textAlign: 'left' }} />
        <Column footer={paidTotalGroup(btcTransactions)} align="right" />
      </Row>
    </ColumnGroup>
  );

  const ethFooterGroup = (
    <ColumnGroup>
      <Row>
        <Column footer="Totals" colSpan={4} footerStyle={{ textAlign: 'left' }} />
        <Column footer={paidTotalGroup(ethTransactions)} align="right" />
      </Row>
    </ColumnGroup>
  );

  return (
    <section id="compare" className="mb-4">
      <Card title="Compare Portfolio" className="bg-surface-card">
        <h2 className="h-borders mb-1 font-semibold">ETH vs BTC</h2>
        <DPortfolioChart
          state={compState}
          chartOptions={priceChart1kOptions}
          multiScale={false}
        />
        <div className="mt-4">
          <h2 className="h-borders mb-1 font-semibold">Holdings</h2>
          <DataTable
            value={compareAssets.data}
            footerColumnGroup={compareFooterGroup}
            scrollable
            responsiveLayout="scroll"
            style={{ width: '100%' }}
            tableStyle={{ minWidth: '0' }}
          >
            <Column field="asset" header="Asset" />
            <Column
              field="price"
              header="Price"
              align="right"
              bodyStyle={{ textAlign: 'right' }}
              body={priceBodyTemplate}
            />
            <Column
              field="pnl"
              header="PnL"
              align="right"
              bodyStyle={{ textAlign: 'right' }}
              body={pnlBodyTemplate}
            />
            <Column
              field="holding"
              header="Holdings"
              align="right"
              bodyStyle={{ textAlign: 'right' }}
              body={holdingBodyTemplate}
            />
          </DataTable>
        </div>
      </Card>
    </section>
  );
}
