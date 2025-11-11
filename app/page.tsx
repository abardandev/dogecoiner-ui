import { Button } from 'primereact/button'; 
import DChart from './controls/DChart';

export default function Home() {

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-zinc-900">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-3 px-3 bg-white dark:bg-stone-800 sm:items-start">
        <div className="flex flex-col min-w-full items-center gap-6 text-center sm:items-start sm:text-left">
          <DChart title='BTC' symbol='BTCUSDT' interval='W'></DChart>
          <DChart title='ETH' symbol='ETHUSDT' interval='W'></DChart>
          <DChart title='SOL' symbol='SOLUSDT' interval='W'></DChart>
          <DChart title='XRP' symbol='XRPUSDT' interval='W'></DChart>
          <DChart title='ADA' symbol='ADAUSDT' interval='W'></DChart>
          <DChart title='DOGE' symbol='DOGEUSDT' interval='W'></DChart>
          <DChart title='SHIB' symbol='SHIBUSDT' interval='W'></DChart>
        </div>
        {/* <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button label="Button!" />
        </div> */}
      </main>
    </div>
  );
}
