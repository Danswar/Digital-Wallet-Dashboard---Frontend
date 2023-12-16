import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddressesTable from "./components/AddressesTable";

enum Currency {
  USD = "usd",
  EUR = "eur",
}

type WalletSummary = {
  address: string;
  balance: number;
  firstSeen: number;
  isFavorite: boolean;
};

type WalletWithValuation = WalletSummary & {
  currency: Currency;
  quote?: number;
};

const wallet: WalletWithValuation = {
  address: "0x123",
  balance: 100,
  currency: Currency.USD,
  quote: 1,
  firstSeen: Date.now(),
  isFavorite: true,
};

const wallets: WalletSummary[] = [
  {
    address: "0x1234567890123456789012345678901234567890",
    balance: 100,
    firstSeen: Date.now(),
    isFavorite: true,
  },
  {
    address: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    balance: 200,
    firstSeen: Date.now(),
    isFavorite: false,
  },
  {
    address: "0x9876543210987654321098765432109876543210",
    balance: 300,
    firstSeen: Date.now(),
    isFavorite: true,
  },
];

const App = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Digital Wallets</Typography>
        </Toolbar>
      </AppBar>
      <AddressesTable addresses={wallets} />
    </>
  );
};

export default App;
