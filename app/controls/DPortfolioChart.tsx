'use client'

import { Chart, AreaSeries, LineSeries, PriceScale, Pane } 
  from "lightweight-charts-react-components";

import { Skeleton } from 'primereact/skeleton';
import { Message } from 'primereact/message';
import { ChartState } from '../types/ChartState';
import { seriesCommonOptions } from "../types/ChartDisplay";

interface DPortfolioChartProps {
  state: ChartState,
  chartOptions,
  multiScale: boolean
}

export default function DPortfolioChart({ state, chartOptions, multiScale = false }: DPortfolioChartProps) {
  const opts = !multiScale 
  ? chartOptions 
  : {
    ...chartOptions,
    leftPriceScale: true 
  };

  return (
    <div className="mb-6">
      { state.loading && <Skeleton width="100%" height={`${chartOptions.height}px`}></Skeleton> }
        { 
          !state.loading && !state.error && 
          <Chart options={chartOptions}>
            <Pane>
            { !multiScale ?
            state.data.map((data, index) => (
              <AreaSeries 
                key={index}
                data={data}
                options={seriesCommonOptions} />)) :

            state.data.flatMap((data, index) => [
              <AreaSeries 
                key={index}
                data={data}
                options={{
                  ...seriesCommonOptions, 
                  priceScaleId: (index % 2 === 0 ? `right` : `left`)
                }} />,
                <PriceScale key={'ps_'+index} id={(index % 2 === 0 ? `right` : `left`)} />]
            )}
            </Pane>
          </Chart> 
        }
        { state.error && <Message severity="info" text="No Data" style={{ width: "100%", height: chartOptions.height.toString() + 'px'}} /> }
    </div>
  );
}
