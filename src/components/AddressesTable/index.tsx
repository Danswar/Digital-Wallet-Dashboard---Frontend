import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton } from "@mui/material";
import { Delete, QueryStats } from "@mui/icons-material";
import AddressFormatter from "../AddressFormatter";

interface Address {
  address: string;
  balance: number;
  isFavorite: boolean;
}

interface AddressesTableProps {
  addresses: Address[];
}

const AddressesTable: React.FC<AddressesTableProps> = ({ addresses }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Balance</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {addresses.map(({ address, balance, isFavorite }) => (
            <TableRow key={address}>
              <TableCell>
                <IconButton onClick={() => {}}>
                  {isFavorite ? <StarIcon /> : <StarBorderIcon />}
                </IconButton>
              </TableCell>
              <TableCell>
                <AddressFormatter address={address} />
              </TableCell>
              <TableCell>{balance} ETH</TableCell>
              <TableCell>
                <IconButton onClick={() => {}}>
                  <QueryStats />
                </IconButton>
                <IconButton onClick={() => {}}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AddressesTable;
