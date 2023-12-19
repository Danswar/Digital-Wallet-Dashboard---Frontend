import { Container } from "@mui/material";
import AppLayout from "../../components/AppLayout";
import WalletsTable from "../../components/WalletsTable";
import useTrackedWallets from "../../hooks/useTrackedWallets";
import GoBackButton from "../../components/GoBackButton";

const TrackedWallets = () => {
  const { trackedWallets, isLoading } = useTrackedWallets();

  return (
    <AppLayout>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <GoBackButton />
      </Container>
      {!isLoading && <WalletsTable addresses={trackedWallets} />}
    </AppLayout>
  );
  return;
};

export default TrackedWallets;
