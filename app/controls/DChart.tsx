'use client'

import { Chart, AreaSeries } 
  from "lightweight-charts-react-components";

import { dogecoinerApi } from '../api/dogecoiner-api';
import { use, useEffect, useState } from 'react';
import { Skeleton } from 'primereact/skeleton';
import { Card } from 'primereact/card';

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

export default function DChart({ title, symbol, interval }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await dogecoinerApi
        .getKlineHistoryLineData(symbol, interval)
        .then(r => {
          // console.log(r.data);
          setData(r.data);
          setLoading(false);
        })
        .catch(e => {
          // console.log(e.message);
          setData([]);
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <Card title={title} style={{ width: "100%" }}>
        { loading && <Skeleton width="100%" height={chartCommonOptions.height.toString() + 'px'}></Skeleton> }
        { !loading && <Chart options={chartCommonOptions}><AreaSeries data={data} /></Chart> }
    </Card>
  );
}
