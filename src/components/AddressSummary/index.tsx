import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";
import { formatNumber } from "../../utils/formatNumber";

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
  return (
    <Container>
      <Typography variant="h1">
        {formatNumber(addressDetails?.balance || "")} ETH
      </Typography>
      <Typography variant="h5">{walletAddress}</Typography>
      <Card>
        <Typography variant="h5">Valuation</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">Currency:</Typography>
          <Typography variant="h5">USD</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">Price:</Typography>
          <Typography variant="h5">2200 USD/ETH</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">Total:</Typography>
          <Typography variant="h5">440000 USD</Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default AddressSummary;
