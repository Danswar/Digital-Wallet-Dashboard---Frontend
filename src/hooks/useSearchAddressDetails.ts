import { useQuery } from "@tanstack/react-query";

const fetchAddressDetails = async (address: string) => {
  const response = await fetch(`http://localhost:3000/addresses/${address}`);
  const data = await response.json();
  return data;
};

const useSearchAddressDetails = (address: string) => {
  return useQuery({
    queryKey: [`searchAddress-${address}`],
    queryFn: () => fetchAddressDetails(address),
  });
};

export default useSearchAddressDetails;