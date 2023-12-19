import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import MainAppBar from "../../components/MainAppBar";
import AddressSummary from "../../components/AddressSummary";
import GoBackButton from "../../components/GoBackButton";
import FavoriteButton from "../../components/FavoriteButton";
import useSearchAddressDetails from "../../hooks/useSearchAddressDetails";

const AddressDetails: React.FC = () => {
  const { walletAddress } = useParams();
  const { isLoading, addressOnChainDetails } = useSearchAddressDetails(
    walletAddress!
  );

  return (
    <>
      <MainAppBar />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <GoBackButton />
        <FavoriteButton address={walletAddress!} iconFontSize="large" />
      </Box>
      {!isLoading && (
        <AddressSummary
          walletAddress={walletAddress!}
          addressDetails={addressOnChainDetails}
        />
      )}
    </>
  );
};

export default AddressDetails;
