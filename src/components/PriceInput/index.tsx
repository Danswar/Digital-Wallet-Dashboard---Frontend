import { FormControl, Input, InputLabel, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { IdleAdornment, OnEditAdornment } from "./Adornaments";

const StyledInput = styled(Input)(() => ({
  "& input[type=number]": {
    "-moz-appearance": "textfield",
    textAlign: "center",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },
}));

type PriceInputProps = {
  price: number;
  setPrice: (price: number) => void;
  onRefresh: () => void;
};

const PriceInput: React.FC<PriceInputProps> = ({
  price,
  setPrice,
  onRefresh,
}) => {
  const [editValue, setEditValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setEditValue(price), [price]);

  const toogleIsEditing = () => {
    setIsEditing((prev) => !prev);
    inputRef.current?.focus();
  };

  const handleOnConfirm = () => {
    setPrice(editValue);
    toogleIsEditing();
  };

  const handleOnCancel = () => {
    setEditValue(price);
    toogleIsEditing();
  };

  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
      <InputLabel shrink htmlFor="Ethereum-price-input">
        ETH Price
      </InputLabel>
      <StyledInput
        id="Ethereum-price-input"
        type="number"
        inputRef={inputRef}
        value={isEditing ? editValue : price}
        onChange={(e) => setEditValue(parseFloat(e.target.value))}
        readOnly={!isEditing}
        disableUnderline={!isEditing}
        endAdornment={
          isEditing ? (
            <OnEditAdornment
              onClickConfirm={handleOnConfirm}
              onClickCancel={handleOnCancel}
            />
          ) : (
            <IdleAdornment
              onClickEdit={toogleIsEditing}
              onClickrefresh={onRefresh}
            />
          )
        }
      />
    </FormControl>
  );
};

export default PriceInput;
