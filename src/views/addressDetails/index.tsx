import { useParams } from "react-router-dom";

const AddressDetails: React.FC = () => {
  const { walletAddress } = useParams();

  return <div>{walletAddress}</div>;
};

export default AddressDetails;
