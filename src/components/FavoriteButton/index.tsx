import { IconButton } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { useSingleTrackedWallet } from "../../hooks/useSingleTrackedWallet";

type FavoriteButtonProps = {
  address: string;
  iconFontSize: "small" | "medium" | "large";
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  address,
  iconFontSize,
}) => {
  const { walletData, isLoading, toogleFavorite } =
    useSingleTrackedWallet(address);

  if (isLoading) return null;

  return (
    <IconButton onClick={toogleFavorite}>
      {walletData?.isFavorite ? (
        <Star fontSize={iconFontSize} />
      ) : (
        <StarBorder fontSize={iconFontSize} />
      )}
    </IconButton>
  );
};

export default FavoriteButton;
