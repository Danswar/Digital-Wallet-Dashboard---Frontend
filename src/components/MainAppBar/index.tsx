import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchInputBar from "../SearchInputBar";
import { WalletOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function MainAppBar({
  showSearchInput = true,
}: {
  showSearchInput?: boolean;
}) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Digital Wallet
          </Typography>
          {showSearchInput && <SearchInputBar />}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => navigate("/my-wallets")}
          >
            <WalletOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
