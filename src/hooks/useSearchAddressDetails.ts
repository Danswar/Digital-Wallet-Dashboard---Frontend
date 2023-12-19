import { useQuery } from "@tanstack/react-query";

const fetchAddressDetails = async (address: string) => {
  const response = await fetch(`http://localhost:3000/addresses/${address}`);
  const data = await response.json();
  return data;
};

const useSearchAddressDetails = (address: string) => {
  const { data, ...rest } = useQuery({
    queryKey: [`searchAddress-${address}`],
    queryFn: () => fetchAddressDetails(address),
  });

  return { addressOnChainDetails: data, ...rest };
};

export default useSearchAddressDetails;
