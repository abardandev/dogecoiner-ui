
import {
  chartCommonOptions,
  priceFormatter_usd,
  priceFormatter_usd_1k,
  priceFormatter_usd_sm,
  priceFormatter_usd_xsm,
} from '@/src/types/ChartDisplay';

export const priceChartOptions = {
  ...chartCommonOptions,
  localization: {
    priceFormatter: priceFormatter_usd,
  },
};

export const priceChartSmOptions = {
  ...chartCommonOptions,
  localization: {
    priceFormatter: priceFormatter_usd_sm,
  },
};

export const priceChartXsmOptions = {
  ...chartCommonOptions,
  localization: {
    priceFormatter: priceFormatter_usd_xsm,
  },
};

export const priceChart1kOptions = {
  ...chartCommonOptions,
  localization: {
    priceFormatter: priceFormatter_usd_1k,
  },
};
