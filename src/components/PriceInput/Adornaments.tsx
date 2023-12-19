import { IconButton, InputAdornment } from "@mui/material";
import { Check, Close, Edit, Update } from "@mui/icons-material";

export const IdleAdornment: React.FC<{
  onClickEdit: () => void;
  onClickrefresh: () => void;
}> = ({ onClickEdit, onClickrefresh }) => (
  <InputAdornment position="end">
    <IconButton onClick={onClickEdit}>
      <Edit />
    </IconButton>
    <IconButton onClick={onClickrefresh}>
      <Update />
    </IconButton>
  </InputAdornment>
);

export const OnEditAdornment: React.FC<{
  onClickConfirm: () => void;
  onClickCancel: () => void;
}> = ({ onClickConfirm, onClickCancel }) => (
  <InputAdornment position="end">
    <IconButton onClick={onClickConfirm}>
      <Check color="success" />
    </IconButton>
    <IconButton onClick={onClickCancel}>
      <Close color="error" />
    </IconButton>
  </InputAdornment>
);
