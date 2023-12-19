import { useState, useEffect } from "react";

export enum Currency {
  USD = "usd",
  EUR = "eur",
}

const useCurrencyPreferences = () => {
  const [currency, setCurrency] = useState<Currency>(() => {
    const storedCurrency = localStorage.getItem("currency");
    return (storedCurrency as Currency) || Currency.USD;
  });

  const [price, setPrice] = useState<number>(() => {
    const storedPrice = localStorage.getItem("price");
    return storedPrice ? parseFloat(storedPrice) : 0;
  });

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("price", price.toString());
  }, [price]);

  return { currency, setCurrency, price, setPrice };
};

export default useCurrencyPreferences;
