import 'server-only';

import { Elysia, t } from 'elysia';
import { dogecoinerApiClient } from '@/src/api/server/dogecoiner-api-client';
import { gApiClient } from '@/src/api/server/google-sheets-api-client';

/**
 * Elysia API server for DogeCoiner
 * Provides type-safe API endpoints with automatic TypeScript inference
 */
export const dogeCoinerUiApi = new Elysia({ prefix: '/api' })
  // GET /api/majors - Fetch major crypto assets
  .get('/majors', async () => {
    try {
      const obj = await gApiClient.listMajors();
      return obj.data;
    } catch (error: any) {
      throw new Error(error.message || 'Failed to fetch majors');
    }
  })

  // GET /api/klinehistory - Fetch kline history for a symbol
  .get(
    '/klinehistory',
    async ({ query }) => {
      try {
        const result = await dogecoinerApiClient.getKlineHistory(
          query.symbol,
          query.interval
        );
        return result.data;
      } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch kline history');
      }
    },
    {
      query: t.Object({
        symbol: t.String({
          description: 'Trading pair symbol (e.g., BTCUSDT)',
          examples: ['BTCUSDT', 'ETHUSDT', 'DOGEUSDT']
        }),
        interval: t.String({
          description: 'Time interval for candlesticks',
          examples: ['1h', '4h', '1d']
        }),
      }),
    }
  )

  // GET /api/klinehistory/linedata - Fetch formatted line data for charts
  .get(
    '/klinehistory/linedata',
    async ({ query }) => {
      try {
        const result = await dogecoinerApiClient.getKlineHistoryLineData(
          query.symbol,
          query.interval
        );
        return result.data;
      } catch (error: any) {
        throw new Error(error.message || 'Failed to fetch kline history line data');
      }
    },
    {
      query: t.Object({
        symbol: t.String({
          description: 'Trading pair symbol (e.g., BTCUSDT)',
          examples: ['BTCUSDT', 'ETHUSDT', 'DOGEUSDT']
        }),
        interval: t.String({
          description: 'Time interval for candlesticks',
          examples: ['1h', '4h', '1d']
        }),
      }),
    }
  );

// Export the type for use with Eden Treaty
export type DogeCoinerUiApi = typeof dogeCoinerUiApi;