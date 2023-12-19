import { useQuery } from "@tanstack/react-query";
import { getUserId, setUserId } from "../utils/userId";

const fetchUser = async () => {
  const response = await fetch(`http://localhost:3000/user`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(getUserId() && { "X-User-Id": getUserId() }),
    },
  });

  const data = await response.json();
  if (data.id) {
    setUserId(data.id);
  }

  return data;
};

export const useUser = () => {
  return useQuery({
    queryKey: [`user-preferences`],
    queryFn: () => fetchUser(),
  });
};
