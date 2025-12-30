'use client'

import { useEffect } from 'react';
import DChart from '@/src/controls/DChart';
import DPortfolioChart from '@/src/controls/DPortfolioChart';
import { ChartState } from '@/src/types/ChartState';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import {
  lineData as btcLineData,
  transactions as btcTransactions,
} from '@/src/data/btc-w-data';
import {
  lineData as ethLineData,
  transactions as ethTransactions,
} from '@data/eth-w-data';
import { lineData as solLineData } from '@data/sol-w-data';
import { lineData as xrpLineData } from '@data/xrp-w-data';
import { lineData as adaLineData } from '@data/ada-w-data';
import { lineData as dogeLineData } from '@data/doge-w-data';
import { lineData as shibLineData } from '@data/shib-w-data';
import { PortfolioData } from '@/src/types/PortfolioData';
import { dogecoinerApi } from '@/src/api/dogecoiner-api';
import {
  chartCommonOptions,
  priceFormatter_usd,
  priceFormatter_usd_1k,
  priceFormatter_usd_sm,
  priceFormatter_usd_xsm,
} from '@/src/types/ChartDisplay';
import { Transaction } from '@/src/types/Transaction';
import { Portfolio } from '@/src/types/Portfolio';
import Welcome from '@/src/controls/Welcome';

export default function Portfolios() {
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

  const priceChartOptions = {
    ...chartCommonOptions,
    localization: {
      priceFormatter: priceFormatter_usd,
    },
  };

  const priceChartSmOptions = {
    ...chartCommonOptions,
    localization: {
      priceFormatter: priceFormatter_usd_sm,
    },
  };

  const priceChartXsmOptions = {
    ...chartCommonOptions,
    localization: {
      priceFormatter: priceFormatter_usd_xsm,
    },
  };

  const priceChart1kOptions = {
    ...chartCommonOptions,
    localization: {
      priceFormatter: priceFormatter_usd_1k,
    },
  };

  useEffect(() => {
    const fetchPriceData = async (symbol, interval, state) => {
      return await dogecoinerApi.getKlineHistoryLineData(
        symbol,
        interval,
        state,
      );
    };

    fetchPriceData('BTCUSDT', 'W', btcPriceState);
    fetchPriceData('ETHUSDT', 'W', ethPriceState);
    fetchPriceData('SOLUSDT', 'W', solPriceState);
    fetchPriceData('XRPUSDT', 'W', xrpPriceState);
    fetchPriceData('ADAUSDT', 'W', adaPriceState);
    fetchPriceData('DOGEUSDT', 'W', dogePriceState);
    fetchPriceData('SHIBUSDT', 'W', shibPriceState);

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

  const paidBodyTemplate = (item) => {
    return formatCurrency(item.amount * item.price);
  };

  const getLast = (items: any[] | undefined) => {
    return items && items.length ? items[items.length - 1] : undefined;
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

  const ptModel = new Portfolio(null, 'my portfolio', 5234.42);
  const txModel = new Transaction('BTC', 'buy', 0.05, 58331.20, '2024-05-01');

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold text-primary-100">Portfolios</h1>
      </div>
      <Welcome />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <section id="btc" className="col-span-1">
          <Card title="BTC Portfolio" className="bg-surface-card">
            <div className="space-y-4">
              <div>
                <h2 className="h-borders mb-1 font-semibold">Price Chart</h2>
                <DChart state={btcPriceState} chartOptions={priceChartOptions} />
              </div>
              <div>
                <h2 className="h-borders mb-1 font-semibold">Portfolio Value</h2>
                <DPortfolioChart
                  state={btcPortfolioState}
                  chartOptions={priceChart1kOptions}
                  multiScale={false}
                />
              </div>
              <div>
                <h2 className="h-borders mb-1 font-semibold">Transactions</h2>
                <DataTable
                  value={btcTransactions}
                  footerColumnGroup={btcFooterGroup}
                  scrollable
                  responsiveLayout="scroll"
                  style={{ width: '100%' }}
                  tableStyle={{ minWidth: '0' }}
                >
                  <Column field="date" header="Date" />
                  <Column field="transaction" header="Type" />
                  <Column
                    field="amount"
                    header="Amount"
                    align="right"
                    bodyStyle={{ textAlign: 'right' }}
                  />
                  <Column
                    body={priceBodyTemplate}
                    header="Price"
                    align="right"
                    bodyStyle={{ textAlign: 'right' }}
                  />
                  <Column
                    body={paidBodyTemplate}
                    header="Paid"
                    align="right"
                    bodyStyle={{ textAlign: 'right' }}
                  />
                </DataTable>
              </div>
            </div>
          </Card>
        </section>

        <section id="eth" className="col-span-1">
          <Card title="ETH Portfolio" className="bg-surface-card">
            <div className="space-y-4">
              <div>
                <h2 className="h-borders mb-1 font-semibold">Price Chart</h2>
                <DChart state={ethPriceState} chartOptions={priceChartOptions} />
              </div>
              <div>
                <h2 className="h-borders mb-1 font-semibold">Portfolio Value</h2>
                <DPortfolioChart
                  state={ethPortfolioState}
                  chartOptions={priceChart1kOptions}
                  multiScale={false}
                />
              </div>
              <div>
                <h2 className="h-borders mb-1 font-semibold">Transactions</h2>
                <DataTable
                  value={ethTransactions}
                  footerColumnGroup={ethFooterGroup}
                  scrollable
                  responsiveLayout="scroll"
                  style={{ width: '100%' }}
                  tableStyle={{ minWidth: '0' }}
                >
                  <Column field="date" header="Date" />
                  <Column field="transaction" header="Type" />
                  <Column
                    field="amount"
                    header="Amount"
                    align="right"
                    bodyStyle={{ textAlign: 'right' }}
                  />
                  <Column
                    body={priceBodyTemplate}
                    header="Price"
                    align="right"
                    bodyStyle={{ textAlign: 'right' }}
                  />
                  <Column
                    body={paidBodyTemplate}
                    header="Paid"
                    align="right"
                    bodyStyle={{ textAlign: 'right' }}
                  />
                </DataTable>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section id="sol">
          <Card title="SOL" className="bg-surface-card">
            <h2 className="h-borders mb-1 font-semibold">Price Chart</h2>
            <DChart state={solPriceState} chartOptions={priceChartOptions} />
          </Card>
        </section>

        <section id="xrp">
          <Card title="XRP" className="bg-surface-card">
            <h2 className="h-borders mb-1 font-semibold">Price Chart</h2>
            <DChart state={xrpPriceState} chartOptions={priceChartSmOptions} />
          </Card>
        </section>

        <section id="ada">
          <Card title="ADA" className="bg-surface-card">
            <h2 className="h-borders mb-1 font-semibold">Price Chart</h2>
            <DChart state={adaPriceState} chartOptions={priceChartSmOptions} />
          </Card>
        </section>

        <section id="doge">
          <Card title="DOGE" className="bg-surface-card">
            <h2 className="h-borders mb-1 font-semibold">Price Chart</h2>
            <DChart state={dogePriceState} chartOptions={priceChartSmOptions} />
          </Card>
        </section>

        <section id="shib" className="lg:col-span-2">
          <Card title="1,000xSHIB" className="bg-surface-card">
            <h2 className="h-borders mb-1 font-semibold">Price Chart</h2>
            <DChart state={shibPriceState} chartOptions={priceChartXsmOptions} />
          </Card>
        </section>
      </div>
    </div>
  );
}