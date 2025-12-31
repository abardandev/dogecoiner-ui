import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/src/api/client/dogecoiner-ui-api-client';

/**
 * Hook to fetch major crypto assets
 * Cached for 5 minutes since this data changes less frequently
 */
export function useMajorAssets() {
  return useQuery({
    queryKey: ['major-assets'],
    queryFn: async () => {
      const response = await apiClient.getMajors();
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchInterval: 5 * 60 * 1000,
  });
}

/**
 * Hook to fetch portfolio data
 * You can add your portfolio API endpoint here
 */
export function usePortfolio(portfolioId?: string) {
  return useQuery({
    queryKey: ['portfolio', portfolioId],
    queryFn: async () => {
      // TODO: Replace with actual portfolio API call
      // const response = await dogecoinerClientApi.getPortfolio(portfolioId);
      // return response.data;
      return null;
    },
    enabled: !!portfolioId,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
}

/**
 * Hook to create or update a portfolio
 * Automatically invalidates and refetches portfolio data
 */
export function useSavePortfolio() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (portfolio: any) => {
      // TODO: Replace with actual save API call
      // const response = await dogecoinerClientApi.savePortfolio(portfolio);
      // return response.data;
      return portfolio;
    },
    onSuccess: (data, variables) => {
      // Invalidate portfolio queries to trigger refetch
      queryClient.invalidateQueries({ queryKey: ['portfolio'] });
    },
  });
}