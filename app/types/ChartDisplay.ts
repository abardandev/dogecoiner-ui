import { AreaSeriesOptions, DeepPartial } from "lightweight-charts";

export const colors = {
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

export const priceFormatter_usd = (price) => {
  return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
  }).format(price);
};

export const priceFormatter_usd_sm = (price) => {
  return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(price);
};

export const priceFormatter_usd_xsm = (price) => {
  return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 5
  }).format(price);
};

export const priceFormatter_usd_1k = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 1
  }).format(price);
};

export const chartCommonOptions = {
  height: 300,
  autoSize: true,
  layout: {
    attributionLogo: true,
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
  }
};

export const seriesCommonOptions = {
    lineWidth: 1,
    lineColor: colors.orange,
    topColor: colors.orange100,
    bottomColor: colors.orange200
} satisfies DeepPartial<AreaSeriesOptions>;
