import { useQuery } from "@tanstack/react-query";
import { fetchAddressDetails } from "../utils/apis";

const useSearchAddressDetails = (address: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [`searchAddress-${address}`],
    queryFn: () => fetchAddressDetails(address),
  });

  return { addressOnChainDetails: data, ...rest };
};

export default useSearchAddressDetails;
