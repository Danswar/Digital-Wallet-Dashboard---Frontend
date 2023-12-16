import { useNavigate, useParams } from "react-router-dom";
import SearchAppBar from "../../components/SearchAppBar";
import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import { ArrowBack, Star, StarBorder } from "@mui/icons-material";
import { useState } from "react";

const AddressDetails: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { walletAddress } = useParams();
  const navigate = useNavigate();

  const handleOnFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <SearchAppBar />
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="text" onClick={handleGoBack}>
            <ArrowBack /> Go Back
          </Button>
          <IconButton onClick={handleOnFavorite}>
            {isFavorite ? (
              <Star fontSize="large" />
            ) : (
              <StarBorder fontSize="large" />
            )}
          </IconButton>
        </Box>
        <Typography variant="h1">200 ETH</Typography>
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
    </>
  );
};

export default AddressDetails;
