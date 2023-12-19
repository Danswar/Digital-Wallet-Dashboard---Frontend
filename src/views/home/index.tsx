import React, { useState } from "react";
import {
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import AppLayout from "../../components/AppLayout";

const HomePage: React.FC = () => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  useUser();

  const handleSearch = () => {
    if (address === "") return;
    navigate(`/${address}`);
  };

  return (
    <AppLayout showInputSearchBar={false}>
      <Container sx={{ textAlign: "center", margin: "5rem auto" }}>
        <AccountBalanceWalletIcon sx={{ fontSize: 100 }} />
        <Typography variant="h2">Digital Wallet Dashboard</Typography>
        <div>
          <TextField
            type="text"
            placeholder="Insert an ethereum address to start"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            sx={{ margin: "2rem auto" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleSearch}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
        </div>
      </Container>
    </AppLayout>
  );
};

export default HomePage;
