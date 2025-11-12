'use client'

import { Chart, AreaSeries } 
  from "lightweight-charts-react-components";

import { Skeleton } from 'primereact/skeleton';
import { Card } from 'primereact/card';
import { Message } from 'primereact/message';
import { AreaSeriesOptions, DeepPartial } from "lightweight-charts";

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
  orange100: "#ffb84dcc",
  orange200: "#4d200040",
};

const chartCommonOptions = {
  height: 300,
  autoSize: true,
  layout: {
    attributionLogo: true,
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

const seriesCommonOptions = {
    lineWidth: 1,
    lineColor: colors.orange,
    topColor: colors.orange100,
    bottomColor: colors.orange200
} satisfies DeepPartial<AreaSeriesOptions>;

export default function DPortfolioChart({ title, state}) {

  return (
    <Card title={title} className="bg-stone-800" style={{ width: "100%" }}>
        { state.loading && <Skeleton width="100%" height={chartCommonOptions.height.toString() + 'px'}></Skeleton> }
        { 
          !state.loading && !state.error && 
          <Chart options={chartCommonOptions}>
            {state.data.map((data, index) => (
              <AreaSeries 
                key={index}
                data={data}
                options={seriesCommonOptions} />
            ))}
          </Chart> 
        }
        { state.error && <Message severity="info" text="No Data" style={{ width: "100%", height: chartCommonOptions.height.toString() + 'px'}} /> }
    </Card>
  );
}
