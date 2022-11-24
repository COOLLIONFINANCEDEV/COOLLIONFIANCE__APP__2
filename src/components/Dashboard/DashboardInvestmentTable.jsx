import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Button } from "@mui/material";
import ProjectCard from "../ProjectCard";
import StyledTableCell from "../Table/StyledTableCell";
import CreateRowData from "../../Helpers/CreateRowData";
import CreateBody from "../Table/CreateBody";

const ItemsContent = ({ setProjectDetails }) => {
  const SeeMoreButton = () => {
    setProjectDetails(true);
  };

  return (
    <Box sx={{ margin: "10px 0" }} onClick={SeeMoreButton}>
      <ProjectCard shadows={false} ActionState={false} />
    </Box>
  );
};

const Action = ({ setProjectDetails }) => {
  return (
    <Button variant="outlined" onClick={() => setProjectDetails(true)}>
      Lend Again
    </Button>
  );
};

function DashboardInvestmentTable({ setProjectDetails }) {
  const Create = new CreateRowData([
    "name",
    "Location",
    "category",
    "status",
    "amout",
    "decr",
    "country",
    "Loan",
    "Action",
    "Content",
  ]);

  const rows = [
    Create.create([
      "Sylla Ibrahim",
      "Accra",
      "Agriculture",
      "Active",
      "$100",
      "I am a farmer",
      "Ghana",
      "3 months",
      <Action setProjectDetails={setProjectDetails} />,
      <ItemsContent setProjectDetails={setProjectDetails} />,
    ]),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
            <StyledTableCell align="right">Amount lent</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">Loan Len</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        {rows.map((row) => (
          <CreateBody
            key={row.name}
            row={row}
            ActionButton={setProjectDetails}
          />
        ))}
      </Table>
    </TableContainer>
  );
}

export default DashboardInvestmentTable;
