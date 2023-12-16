import { ContentCopy } from "@mui/icons-material";
import { Popover, Typography } from "@mui/material";
import React, { useState } from "react";

interface AddressFormatterProps {
  address: string;
}

const AddressFormatter: React.FC<AddressFormatterProps> = ({ address }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const formattedAddress = `${address.slice(0, 6)}...${address.slice(-8)}`;

  return (
    <>
      <span
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {formattedAddress}
      </span>
      <ContentCopy
        fontSize="small"
        onClick={() => {
          navigator.clipboard.writeText(address);
        }}
      />
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1, fontSize: "small" }}>{address}</Typography>
      </Popover>
    </>
  );
};

export default AddressFormatter;
