import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchSingleTrackedWallet, upsertTrackedWallet } from "./apis";

const getQueryKey = (address: string) => `tracked-wallets/${address}`;

export const useSingleTrackedWallet = (address: string) => {
  const walletQuery = useQuery({
    queryKey: [getQueryKey(address)],
    queryFn: () => fetchSingleTrackedWallet({ address }),
  });

  const queryClient = useQueryClient();

  const favoriteMutation = useMutation({
    mutationFn: upsertTrackedWallet,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [getQueryKey(address)] }),
  });

  const toogleFavorite = () => {
    if (walletQuery.isLoading) return;
    favoriteMutation.mutate({
      address,
      isFavorite: !walletQuery.data?.isFavorite,
    });
  };

  const isLoading = walletQuery.isLoading && favoriteMutation.isPending;
  const isTracked = !!walletQuery.data;

  return {
    isLoading,
    isTracked,
    walletData: walletQuery.data,
    toogleFavorite,
  };
};
