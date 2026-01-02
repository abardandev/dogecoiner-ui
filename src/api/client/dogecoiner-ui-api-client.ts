import 'client-only';

import { treaty } from '@elysiajs/eden';
import type { DogeCoinerUiApi } from '@/src/api/server/dogecoiner-ui-api';
import { ChartState } from '@/src/types/ChartState';

/**
 * DogeCoiner Client API
 * Provides typed methods for accessing the backend API
 */
class DogeCoinerUiApiClient {
  client: any;

  constructor() {
    // Type-safe API client using Eden Treaty
    // Automatically gets TypeScript types from the Elysia server
    const host = typeof window !== 'undefined' ? window.location.origin : '';
    this.client = treaty<DogeCoinerUiApi>(host);
  }

  async getMajors() {
    const { data, error } = await this.client.api.majors.get();

    if (error) {
      throw new Error(JSON.stringify(error.value));
    }

    return { data };
  }

  async getKlineHistory(symbol: string, interval: string) {
    const { data, error } = await this.client.api.klinehistory.get({
      query: { symbol, interval }
    });

    if (error) {
      throw new Error(JSON.stringify(error.value));
    }

    return { data };
  }

  async getKlineHistoryLineData(symbol: string, interval: string, state?: ChartState) {
    const { data, error } = await this.client.api.klinehistory.linedata.get({
      query: { symbol, interval }
    });

    if (error) {
      const errorMessage = JSON.stringify(error.value);
      if (state) {
        state.setData([]);
        state.setError(errorMessage);
        state.setLoading(false);
      }
      throw new Error(errorMessage);
    }

    // Transform data: convert Date objects to Unix timestamps (seconds)
    // lightweight-charts expects time as number (Unix timestamp in seconds)
    const transformedData = Array.isArray(data)
      ? data.map((item: any) => ({
          ...item,
          time: item.time instanceof Date
            ? Math.floor(item.time.getTime() / 1000)
            : typeof item.time === 'string'
            ? Math.floor(new Date(item.time).getTime() / 1000)
            : item.time
        }))
      : data;

    if (state) {
      state.setData(transformedData as any);
      state.setLoading(false);
    }

    return { data: transformedData };
  }

  async getUserInfo() {
    const {data, error} = await this.client.api['user-info'].get();

    console.log(data);
    console.log(error);
  }
}

export const apiClient = new DogeCoinerUiApiClient();