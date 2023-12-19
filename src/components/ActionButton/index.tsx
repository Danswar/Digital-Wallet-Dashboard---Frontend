import React from "react";
import { useSingleTrackedWallet } from "../../hooks/useSingleTrackedWallet";
import { Box, Button, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

type ActionButtonsProps = {
  address: string;
};

const CenteredContainer = styled(Box)(() => ({
  textAlign: "center",
}));

const ActionButtons: React.FC<ActionButtonsProps> = ({ address }) => {
  const { isTracked, isLoading, trackWallet, untrackWallet } =
    useSingleTrackedWallet(address);

  if (isLoading)
    return (
      <CenteredContainer>
        <CircularProgress color="inherit" />
      </CenteredContainer>
    );

  if (!isTracked)
    return (
      <CenteredContainer>
        <Button size="large" onClick={trackWallet} variant="contained">
          Track this wallet
        </Button>
      </CenteredContainer>
    );

  return (
    <CenteredContainer>
      <Button
        size="large"
        onClick={untrackWallet}
        variant="outlined"
        color="error"
      >
        Untrack this wallet
      </Button>
    </CenteredContainer>
  );
};

export default ActionButtons;
