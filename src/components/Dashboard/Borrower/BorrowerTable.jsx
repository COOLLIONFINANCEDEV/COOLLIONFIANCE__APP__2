import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Action from "./Action";
import CreateHead from "../../Table/CreateHead";
import CreateBody from "../../Table/CreateBody";
import CreateRowData from "../../../Helpers/CreateRowData";

export default function BorrowerTable({ setProjectDetails }) {
  const CreateData = new CreateRowData([
    "name",
    "amount",
    "received",
    "categories",
    "creation",
    "modification",
    "status",
    "actions",
  ]);

  const rows = [
    CreateData.create([
      "Frozen yoghurt",
      "15000$",
      "1000$",
      "agriculture",
      "2020-05-22",
      "2020-05-22",
      "active",
      <Action/>,
    ]),
    CreateData.create([
      "Frozen yoghurst",
      "15000$",
      "1000$",
      "agriculture",
      "2020-05-22",
      "2020-05-22",
      "active",
      <Action/>,
    ]),
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }}>
        <TableHead>
          <CreateHead head={head} />
        </TableHead>

        {rows.map((row) => (
          <CreateBody key={row.name} row={row} mode={true} />
        ))}
      </Table>
    </TableContainer>
  );
}
