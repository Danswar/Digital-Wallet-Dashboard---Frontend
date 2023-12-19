import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteTrackedWallet,
  fetchSingleTrackedWallet,
  upsertTrackedWallet,
} from "../utils/apis";

const getQueryKey = (address: string) => `tracked-wallets/${address}`;

export const useSingleTrackedWallet = (address: string) => {
  const walletQuery = useQuery({
    queryKey: [getQueryKey(address)],
    queryFn: () => fetchSingleTrackedWallet({ address }),
  });

  const queryClient = useQueryClient();

  const upsertMutation = useMutation({
    mutationFn: upsertTrackedWallet,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [getQueryKey(address)] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTrackedWallet,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [getQueryKey(address)] }),
  });

  const untrackWallet = () => {
    if (walletQuery.isLoading) return;
    deleteMutation.mutate({ address });
  };

  const toogleFavorite = () => {
    if (walletQuery.isLoading) return;
    upsertMutation.mutate({
      address,
      isFavorite: !walletQuery.data?.isFavorite,
    });
  };

  const trackWallet = () => {
    if (walletQuery.isLoading) return;
    upsertMutation.mutate({
      address,
      isFavorite: false,
    });
  };

  const isLoading =
    walletQuery.isLoading &&
    upsertMutation.isPending &&
    deleteMutation.isPending;

  return {
    isLoading,
    isTracked: !!walletQuery.data?.isTracked,
    walletData: walletQuery.data,
    toogleFavorite,
    trackWallet,
    untrackWallet,
  };
};
