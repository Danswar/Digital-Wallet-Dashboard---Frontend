import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Button variant="text" onClick={handleGoBack}>
      <ArrowBack /> Go Back
    </Button>
  );
};

export default GoBackButton;
