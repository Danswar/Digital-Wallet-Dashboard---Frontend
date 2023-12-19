import { getUserId } from "../../utils/userId";

const API_HOST = "http://localhost:3000";

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

export const fetchSingleTrackedWallet = async ({ address }) => {
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

export const upsertTrackedWallet = async ({ address, isFavorite }) => {
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

export const deleteTrackedWallet = async ({ address }) => {
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
