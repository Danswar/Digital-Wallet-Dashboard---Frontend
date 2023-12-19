import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";
import { formatNumber } from "../../utils/formatNumber";
import CurrencySelector from "../CurrencySelector";
import PriceInput from "../PriceInput";
import useCurrencyPreferences from "../../hooks/useCurrencyPreferences";
import useMarketPrice from "../../hooks/useMarketPrice";

type AddressSummaryProps = {
  walletAddress: string;
  addressDetails?: {
    balance: string;
    isFavorite: boolean;
  };
};

const AddressSummary: React.FC<AddressSummaryProps> = ({
  walletAddress,
  addressDetails,
}) => {
  const { currency, price, setPrice, setCurrency } = useCurrencyPreferences();
  const { marketPrice, isLoading } = useMarketPrice();

  const refreshFromMarket = () => {
    if (isLoading) return;
    const currentPrice = marketPrice[currency];
    setPrice(Number(currentPrice));
  };

  const getTotalValuation = () => {
    if (!addressDetails?.balance) return 0;
    const result = Number(price) * Number(addressDetails?.balance);
    return formatNumber(result);
  };

  return (
    <Container sx={{ textAlign: "center" }}>
      <Typography variant="h2">
        {formatNumber(addressDetails?.balance || "")} ETH
      </Typography>
      <Typography variant="subtitle1">{walletAddress}</Typography>
      <Container>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: "1rem",
          }}
        >
          <CurrencySelector
            currency={currency}
            onCurrencyChange={setCurrency}
          />
          <PriceInput
            price={price}
            setPrice={setPrice}
            onRefresh={refreshFromMarket}
          />
          <Box>
            <Typography variant="h5">Total:</Typography>
            <Typography variant="h5">
              {getTotalValuation()} {currency.toLocaleUpperCase()}
            </Typography>
          </Box>
        </Card>
      </Container>
    </Container>
  );
};

export default AddressSummary;
