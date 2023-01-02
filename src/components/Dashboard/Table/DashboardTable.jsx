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

const DashboardTable = ({ setProjectDetails, offers }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const CreateData = new CreateRowData(BORROWERKEY().body);
  const [rows, setRows] = React.useState([]);

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

  // const rows = [
  //   CreateData.create([
  //     "Frozen yoghurt",
  //     "15000$",
  //     "1000$",
  //     "agriculture",
  //     "2020-05-22",
  //     "2020-05-22",
  //     "active",
  //     <Action />,
  //   ]),
  // ];

  React.useEffect(() => {
    if (offers !== null) {
      const rows = [];
      offers.forEach((offer) => {
        rows.push(
          CreateData.create([
            offer.id,
            offer.name,
            offer.status === "true" ? "active" : "disable",
            `${offer.total_investment_to_raise} XOF`,
            offer.category,
            `${offer.expected_return} XOF`,
            new Date(offer.disbursed_date).getMonth() + 1 >= 10 ||
            new Date(offer.disbursed_date).getDate() >= 10
              ? `${new Date(offer.disbursed_date).getFullYear()}-${new Date(
                  offer.disbursed_date
                ).getMonth() + 1}-${new Date(offer.disbursed_date).getDate()}`
              : `${new Date(offer.disbursed_date).getFullYear()}-0${new Date(
                  offer.disbursed_date
                ).getMonth() + 1}-0${new Date(offer.disbursed_date).getDate()}`,
            new Date(offer.created_at).getMonth() + 1 >= 10 ||
            new Date(offer.created_at).getDate() >= 10
              ? `${new Date(offer.created_at).getFullYear()}-${new Date(
                  offer.created_at
                ).getMonth() + 1}-${new Date(offer.created_at).getDate()}`
              : `${new Date(offer.created_at).getFullYear()}-0${new Date(
                  offer.created_at
                ).getMonth() + 1}-0${new Date(offer.created_at).getDate()}`,
            new Date(offer.loan_length).getMonth() + 1 >= 10 ||
            new Date(offer.loan_length).getDate() >= 10
              ? `${new Date(offer.loan_length).getFullYear()}-${new Date(
                  offer.loan_length
                ).getMonth() + 1}-${new Date(offer.loan_length).getDate()}`
              : `${new Date(offer.loan_length).getFullYear()}-0${new Date(
                  offer.loan_length
                ).getMonth() + 1}-0${new Date(offer.loan_length).getDate()}`,
            <Action
              key={offer.id}
              offer={offer}
              setProjectDetails={setProjectDetails}
            />,
          ])
        );
      });
      setRows(rows);
    }
  }, [CreateData, offers, setProjectDetails]);

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
