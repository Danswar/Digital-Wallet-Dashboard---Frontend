import { useQuery } from "@tanstack/react-query";
import { fetchMarketPrice } from "../utils/apis";

const useMarketPrice = () => {
  const { data: marketPrice, ...rest } = useQuery({
    queryKey: [`market-price`],
    queryFn: () => fetchMarketPrice(),
  });

  return { marketPrice, ...rest };
};

export default useMarketPrice;
