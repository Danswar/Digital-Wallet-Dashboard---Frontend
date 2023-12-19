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

const HomePage: React.FC = () => {
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  useUser();

  const handleSearch = () => {
    if (address === "") return;
    navigate(`/${address}`);
  };

  return (
    <Container>
      <AccountBalanceWalletIcon sx={{ fontSize: 100 }} />
      <Typography variant="h1">Digital Wallet Dashboard</Typography>
      <div>
        <TextField
          type="text"
          placeholder="Insert an ethereum address to start"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          fullWidth
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
  );
};

export default HomePage;
