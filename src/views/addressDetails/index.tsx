import { useParams } from "react-router-dom";
import { CircularProgress, Container } from "@mui/material";
import AddressSummary from "../../components/AddressSummary";
import GoBackButton from "../../components/GoBackButton";
import FavoriteButton from "../../components/FavoriteButton";
import useSearchAddressDetails from "../../hooks/useSearchAddressDetails";
import AppLayout from "../../components/AppLayout";
import ActionButtons from "../../components/ActionButton";

const AddressDetails: React.FC = () => {
  const { walletAddress } = useParams();
  const { isLoading, addressOnChainDetails } = useSearchAddressDetails(
    walletAddress!
  );

  return (
    <AppLayout>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <GoBackButton />
        <FavoriteButton address={walletAddress!} iconFontSize="large" />
      </Container>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <AddressSummary
            walletAddress={walletAddress!}
            addressDetails={addressOnChainDetails}
          />
          <ActionButtons address={walletAddress!} />
        </>
      )}
    </AppLayout>
  );
};

export default AddressDetails;
