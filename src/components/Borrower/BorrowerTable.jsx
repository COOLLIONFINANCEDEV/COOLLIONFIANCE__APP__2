import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StyledTableCell from "../Table/StyledTableCell";
import StyledTableRow from "../Table/StyledTableRow";
import { Typography } from "@mui/material";
import Action from "./Action";

function createData(
  name,
  amount,
  received,
  categories,
  creation,
  modification,
  status,
  actions
) {
  return {
    name,
    amount,
    received,
    categories,
    creation,
    modification,
    status,
    actions,
  };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "15000$",
    "1000$",
    "agriculture",
    "2020-05-22",
    "2020-05-22",
    "active",
     Action
  )
];

const head = [
  "name",
  " total amount",
  " received amount",
  "categories",
  " creation date",
  " modification date",
  " status",
  "  actions",
];

export default function BorrowerTable({setProjectDetails}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <TableRow>
            {head.map((item, key) => (
              <StyledTableCell key={key}>
                <Typography sx={{ textTransform: "capitalize" }}>
                  {item}
                </Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.amount}</StyledTableCell>
              <StyledTableCell>{row.received}</StyledTableCell>
              <StyledTableCell>{row.categories}</StyledTableCell>
              <StyledTableCell>{row.creation}</StyledTableCell>
              <StyledTableCell>{row.modification}</StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{<row.actions setProjectDetails={setProjectDetails}/>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
