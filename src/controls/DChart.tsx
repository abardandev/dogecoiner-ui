'use client'

import { Chart, AreaSeries } 
  from "lightweight-charts-react-components";

import { Skeleton } from 'primereact/skeleton';
import { Message } from 'primereact/message';
import { ChartState } from "../types/ChartState";
import { seriesCommonOptions } from "../types/ChartDisplay";
import { useEffect } from "react";
import { Ripple } from 'primereact/ripple';

interface DChartProps {
  state: ChartState,
  chartOptions
}

export default function DChart({ state, chartOptions }: DChartProps) {

  return (
    <div className="mb-6">
      { state.loading && 
        <div className="p-ripple">
          <Skeleton width="100%" height={`${chartOptions.height}px`} />
          <Ripple />
        </div>
      }
      { !state.loading && !state.error && <Chart options={chartOptions}><AreaSeries data={state.data} options={seriesCommonOptions} /></Chart> }
      { state.error && 
        <div className="border rounded-lg grid place-content-center bg-linear-135 from-transparent to-blue-400/25 p-ripple" 
          style={{ width: "100%", height: chartOptions.height.toString() + 'px'}}>
          <div id="nodata" className="flex items-center gap-2">
            <i className="pi pi-exclamation-circle" />
            <span>No Data</span>
          </div>
          <Ripple />
        </div>
      }
    </div>
  );
}
