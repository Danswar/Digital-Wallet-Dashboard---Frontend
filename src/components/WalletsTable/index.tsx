import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FormControlLabel, IconButton, Switch } from "@mui/material";
import { QueryStats } from "@mui/icons-material";
import FavoriteButton from "../FavoriteButton";
import { useNavigate } from "react-router-dom";

interface Address {
  address: string;
  balance: number;
  isFavorite: boolean;
}

interface WalletsTableProps {
  addresses: Address[];
}

const byFavorite = ({ isFavorite }: { isFavorite: boolean }) =>
  isFavorite ? -1 : 1;
const byDefault = () => 1;

const WalletsTable: React.FC<WalletsTableProps> = ({ addresses }) => {
  const [sortByFavorite, setSortByFavorite] = React.useState(false);
  const navigate = useNavigate();

  const handleSortByFavorite = () => {
    setSortByFavorite(!sortByFavorite);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <FormControlLabel
                control={
                  <Switch
                    checked={sortByFavorite}
                    onChange={handleSortByFavorite}
                  />
                }
                label="Sort by favorite"
              />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!addresses.length &&
            [...addresses]
              .sort(sortByFavorite ? byFavorite : byDefault)
              .map(({ address }) => (
                <TableRow key={address}>
                  <TableCell>
                    <FavoriteButton address={address} iconFontSize="small" />
                  </TableCell>
                  <TableCell>{address}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => navigate(`/${address}`)}>
                      <QueryStats />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WalletsTable;
