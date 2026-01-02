import 'server-only';

import { Elysia, t } from 'elysia';
import { dogecoinerApiClient } from '@/src/api/server/dogecoiner-api-client';
import { gApiClient } from '@/src/api/server/google-sheets-api-client';
import { cookies } from 'next/headers';

// Helper to get encrypted session token (JWE) from cookies
async function getSessionToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(process.env.SESSION_COOKIE_NAME);
  return sessionToken?.value;
}

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
        const sessionToken = await getSessionToken();
        const result = await dogecoinerApiClient.getKlineHistory(
          query.symbol,
          query.interval,
          sessionToken
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
        const sessionToken = await getSessionToken();
        const result = await dogecoinerApiClient.getKlineHistoryLineData(
          query.symbol,
          query.interval,
          sessionToken
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
  )
  
  // GET /api/user-info - Fetch user info from sesion
  .get(
    '/user-info',
    async () => {
      try {
        const sessionToken = await getSessionToken();
        const result = await dogecoinerApiClient.getUserInfo(sessionToken);
        
        return result.data;
      }
      catch (error: any) {
        throw new Error(error.message || 'Failed to fetch user info');
      }
    }
  );

// Export the type for use with Eden Treaty
export type DogeCoinerUiApi = typeof dogeCoinerUiApi;