import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Currency } from "../../hooks/useCurrencyPreferences";

type CurrencySelectorProps = {
  currency: Currency;
  onCurrencyChange: (currency: Currency) => void;
};

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currency,
  onCurrencyChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onCurrencyChange(event.target.value as Currency);
  };

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="currency-selector">Currency</InputLabel>
      <Select
        id="currency-selector"
        labelId="currency-selector"
        value={currency}
        onChange={handleChange}
        disableUnderline
      >
        <MenuItem value={Currency.USD}>USD</MenuItem>
        <MenuItem value={Currency.EUR}>EUR</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CurrencySelector;
