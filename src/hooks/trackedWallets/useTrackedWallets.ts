import { useQuery } from "@tanstack/react-query";
import { fetchTrackedWallets } from "./apis";

const QUERY_KEY = "tracked-wallets";
const useTrackedWallets = () => {
  const { data: trackedWallets, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchTrackedWallets,
  });

  return { trackedWallets, isLoading };
};

export default useTrackedWallets;
