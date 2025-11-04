'use client'

import { Button } from 'primereact/button'; 

import { lineData as btcData } from './data/btc-w-data';
import { lineData as ethData } from './data/eth-w-data';
import { lineData as solData } from './data/sol-w-data';
import { lineData as xrpData } from './data/xrp-w-data';
import { lineData as adaData } from './data/ada-w-data';
import { lineData as dogeData } from './data/doge-w-data';
import { lineData as shibData } from './data/shib-w-data';
import { Chart, AreaSeries, TimeScale, TimeScaleFitContentTrigger } 
  from "lightweight-charts-react-components";

  const colors = {
  white: "#f0f0f0",
  black: "#080F25",
  red: "#ff6b6b",
  blue100: "#0E43FB",
  blue200: "#101935",
  blue: "#AEB9E1",
  gray: "#7E89AC",
  gray100: "#343B4F",
  cyan: "#57C3FF",
  violet: "#8951FF",
  pink: "#cb3cff",
  green: "#28a49c",
  orange: "#FFB74D",
  orange100: "#CC5500",
};

  const chartCommonOptions = {
    
    height: 300,
  autoSize: true,
  layout: {
    attributionLogo: false,
    fontFamily: "Roboto",
    background: {
      color: "transparent",
    },
    textColor: colors.blue,
  },
  grid: {
    vertLines: {
      visible: true,
      color: colors.gray
    },
    horzLines: {
      visible: true,
      color: colors.gray
    },
  },
  crosshair: {
    vertLine: {
      style: 3,
      color: colors.gray,
    },
    horzLine: {
      style: 3,
      color: colors.gray,
    },
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-3 px-3 bg-white dark:bg-stone-800 sm:items-start">
        <div className="flex flex-col min-w-full items-center gap-6 text-center sm:items-start sm:text-left">
          <h1>BTC</h1>
          <Chart options={chartCommonOptions} containerProps={{ style: { width: "100%" } }}><AreaSeries data={btcData} /></Chart>
          
          <br />
          <h1>ETH</h1>
          <Chart options={chartCommonOptions} containerProps={{ style: { width: "100%" } }}><AreaSeries data={ethData} /></Chart>
          
          <br />
          <h1>SOL</h1>
          <Chart options={chartCommonOptions} containerProps={{ style: { width: "100%" } }}><AreaSeries data={solData} /></Chart>
          
          <br />
          <h1>XRP</h1>
          <Chart options={chartCommonOptions} containerProps={{ style: { width: "100%" } }}><AreaSeries data={xrpData} /></Chart>
          
          <br />
          <h1>ADA</h1>
          <Chart options={chartCommonOptions} containerProps={{ style: { width: "100%" } }}><AreaSeries data={adaData} /></Chart>
          
          <br />
          <h1>DOGE</h1>
          <Chart options={chartCommonOptions} containerProps={{ style: { width: "100%" } }}><AreaSeries data={dogeData} /></Chart>
          
          <br />
          <h1>10,000xSHIB</h1>
          <Chart options={chartCommonOptions} containerProps={{ style: { width: "100%" } }}><AreaSeries data={shibData} /></Chart>
        </div>
        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button label="Button!" />
        </div> */}
      </main>
    </div>
  );
}
