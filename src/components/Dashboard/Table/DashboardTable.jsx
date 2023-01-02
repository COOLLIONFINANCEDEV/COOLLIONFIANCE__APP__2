import React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import Action from "./Actions/Action";
import CreateHead from "../../Table/CreateHead";
import CreateBody from "../../Table/CreateBody";
import CreateRowData from "../../../Helpers/CreateRowData";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import { BORROWERKEY } from "../../../Context/Table/TableKeys";

const DashboardTable = ({ setProjectDetails, datak }) => {
  const CreateData = new CreateRowData(BORROWERKEY().body);

  const { palette } = useTheme();
  const InvestmentContent = {
    width: "100%",
    marginTop: "12vh",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "20px 10px",
    display: "flex",
    justifyContent: "center",
    alignitems: "center",
    flexDirection: "column",
    rowGap: "20px",
    borderRadius: "10px",
  };

  const rows = [
    CreateData.create([
      "Frozen yoghurt",
      "15000$",
      "1000$",
      "agriculture",
      "2020-05-22",
      "2020-05-22",
      "active",
      <Action />,
    ]),
    CreateData.create([
      "Frozen yoghurst",
      "15000$",
      "1000$",
      "agriculture",
      "2020-05-22",
      "2020-05-22",
      "active",
      <Action />,
    ]),
  ];

  return (
    <Box sx={InvestmentContent}>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <CreateHead head={BORROWERKEY().head} />
            </TableHead>

            {rows.map((row) => (
              <CreateBody key={row.name} row={row} mode={true} />
            ))}
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default DashboardTable;
