import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../utils/apis";

export const useUser = () => {
  return useQuery({
    queryKey: [`user-preferences`],
    queryFn: () => fetchUser(),
  });
};
