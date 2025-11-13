'use client'

import { Chart, AreaSeries } 
  from "lightweight-charts-react-components";

import { Skeleton } from 'primereact/skeleton';
import { Message } from 'primereact/message';
import { ChartState } from '../types/ChartState';
import { seriesCommonOptions } from "../types/ChartDisplay";

interface DPortfolioChartProps {
  state: ChartState,
  chartOptions
}

export default function DPortfolioChart({ state, chartOptions }: DPortfolioChartProps) {

  return (
    <div className="mb-6">
      { state.loading && <Skeleton width="100%" height={chartOptions.height.toString() + 'px'}></Skeleton> }
        { 
          !state.loading && !state.error && 
          <Chart options={chartOptions}>
            {state.data.map((data, index) => (
              <AreaSeries 
                key={index}
                data={data}
                options={seriesCommonOptions} />
            ))}
          </Chart> 
        }
        { state.error && <Message severity="info" text="No Data" style={{ width: "100%", height: chartOptions.height.toString() + 'px'}} /> }
    </div>
  );
}
