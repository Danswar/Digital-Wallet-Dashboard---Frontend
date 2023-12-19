import React from "react";
import { useSingleTrackedWallet } from "../../hooks/trackedWallets/useSingleTrackedWallet";
import { Box, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

type ActionButtonsProps = {
  address: string;
};

const CenteredContainer = styled(Box)(() => ({
  textAlign: "center",
}));

const ActionButtons: React.FC<ActionButtonsProps> = ({ address }) => {
  const { walletData, isLoading, toogleFavorite } =
    useSingleTrackedWallet(address);

  if (isLoading)
    return (
      <CenteredContainer>
        <CircularProgress color="inherit" />
      </CenteredContainer>
    );

  return (
    <CenteredContainer>
      {!walletData ? (
        <Button size="large" onClick={toogleFavorite} variant="contained">
          Track this wallet
        </Button>
      ) : (
        <Button
          size="large"
          onClick={toogleFavorite}
          variant="outlined"
          color="error"
        >
          Untrack this wallet
        </Button>
      )}
    </CenteredContainer>
  );
};

export default ActionButtons;
