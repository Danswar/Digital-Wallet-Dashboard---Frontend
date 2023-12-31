import { getUserId, setUserId } from "./userId";

const API_HOST = "http://ec2-52-91-25-151.compute-1.amazonaws.com:3000";

export const fetchUser = async () => {
  const response = await fetch(`${API_HOST}/user`, {
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

export const fetchAddressDetails = async (address: string) => {
  const response = await fetch(`${API_HOST}/addresses/${address}`);
  const data = await response.json();
  return data;
};

export const fetchTrackedWallets = async () => {
  const response = await fetch(`${API_HOST}/tracked-wallets/`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(getUserId() && { "X-User-Id": getUserId() }),
    },
  });
  const data = await response.json();
  return data;
};

export const fetchSingleTrackedWallet = async ({
  address,
}: {
  address: string;
}) => {
  const response = await fetch(`${API_HOST}/tracked-wallets/${address}`, {
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(getUserId() && { "X-User-Id": getUserId() }),
    },
  });
  const data = await response.json();
  return data;
};

export const upsertTrackedWallet = async ({
  address,
  isFavorite,
}: {
  address: string;
  isFavorite: boolean;
}) => {
  const response = await fetch(`${API_HOST}/tracked-wallets/`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(getUserId() && { "X-User-Id": getUserId() }),
    },
    body: JSON.stringify({ address, isFavorite }),
  });

  const data = await response.json();
  return data;
};

export const deleteTrackedWallet = async ({ address }: { address: string }) => {
  const response = await fetch(`${API_HOST}/tracked-wallets/${address}`, {
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      ...(getUserId() && { "X-User-Id": getUserId() }),
    },
  });

  const data = await response.json();
  return data;
};

export const fetchMarketPrice = async () => {
  const response = await fetch(`${API_HOST}/price/ethereum`);
  const data = await response.json();
  return data;
};
