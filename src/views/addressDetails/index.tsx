import { useNavigate, useParams } from "react-router-dom";
import SearchAppBar from "../../components/SearchAppBar";
import useSearchAddressDetails from "../../hooks/useSearchAddressDetails";
import AddressSummary from "../../components/AddressSummary";

type AddressDetailsDTO = {
  balance: string;
  firstTxSeen: {
    timestamp: string;
    hash: string;
  };
  isFavorite: boolean;
};

const AddressDetails: React.FC = () => {
  const { walletAddress } = useParams();
  const result = useSearchAddressDetails(walletAddress!);
  const {
    isLoading,
    data: addressDetails,
  }: { isLoading: boolean; data?: AddressDetailsDTO } = result;

  const navigate = useNavigate();

  const handleOnFavorite = () => {};

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <SearchAppBar />
      {!isLoading && (
        <AddressSummary
          walletAddress={walletAddress!}
          addressDetails={addressDetails}
          handleGoBack={handleGoBack}
          handleOnFavorite={handleOnFavorite}
        />
      )}
    </>
  );
};

export default AddressDetails;
