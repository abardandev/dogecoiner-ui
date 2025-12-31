import { useQuery, useQueries } from '@tanstack/react-query';
import { apiClient } from '@/src/api/client/dogecoiner-ui-api-client';

/**
 * Hook to fetch real-time price data for a single asset
 * Automatically refetches every 60 seconds and deduplicates requests
 */
export function useAssetPrice(symbol: string, interval: string = '1h') {
  return useQuery({
    queryKey: ['asset-price', symbol, interval],
    queryFn: async () => {
      const response = await apiClient.getKlineHistory(symbol, interval);
      return response.data;
    },
    enabled: !!symbol, // Only fetch if symbol is provided
    staleTime: 30 * 1000, // 30 seconds
    refetchInterval: 60 * 1000, // Refetch every 60 seconds
  });
}

/**
 * Hook to fetch line chart data for a single asset
 * Optimized for chart rendering with automatic updates
 */
export function useAssetLineData(symbol: string, interval: string = '1h') {
  return useQuery({
    queryKey: ['asset-line-data', symbol, interval],
    queryFn: async () => {
      const response = await apiClient.getKlineHistory(symbol, interval);
      return response.data;
    },
    enabled: !!symbol,
    staleTime: 30 * 1000,
    refetchInterval: 60 * 1000,
  });
}

/**
 * Hook to fetch multiple assets simultaneously
 * Efficiently batches requests and deduplicates across components
 *
 * @example
 * const assets = useMultipleAssets([
 *   { symbol: 'BTCUSDT', interval: '1h' },
 *   { symbol: 'ETHUSDT', interval: '1h' },
 * ]);
 */
export function useMultipleAssets(
  assetConfigs: Array<{ symbol: string; interval?: string }>
) {
  return useQueries({
    queries: assetConfigs.map((config) => ({
      queryKey: ['asset-price', config.symbol, config.interval || '1h'],
      queryFn: async () => {
        const response = await apiClient.getKlineHistory(
          config.symbol,
          config.interval || '1h'
        );
        return { symbol: config.symbol, data: response.data };
      },
      staleTime: 30 * 1000,
      refetchInterval: 60 * 1000,
    })),
  });
}

/**
 * Hook for real-time price updates with custom refetch interval
 * Use this for components that need more/less frequent updates
 */
export function useRealtimeAssetPrice(
  symbol: string,
  interval: string = '1h',
  refetchIntervalMs: number = 60000
) {
  return useQuery({
    queryKey: ['realtime-asset', symbol, interval, refetchIntervalMs],
    queryFn: async () => {
      const response = await apiClient.getKlineHistory(symbol, interval);
      return response.data;
    },
    enabled: !!symbol,
    staleTime: Math.min(refetchIntervalMs / 2, 30000),
    refetchInterval: refetchIntervalMs,
  });
}