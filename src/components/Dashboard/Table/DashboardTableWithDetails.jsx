import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";

import ProjectCard from "../../ProjectCard";
import CreateRowData from "../../../Helpers/CreateRowData";
import CreateBody from "../../Table/CreateBody";
import { useTheme } from "@emotion/react";
import CreateHead from "../../Table/CreateHead";
import { LENDERKEY } from "../../../Context/Table/TableKeys";

const ItemsContent = ({ setProjectDetails, offer }) => {
  const SeeMoreButton = () => {
    setProjectDetails(true);
  };

  return (
    <Box sx={{ margin: "10px 0" }} onClick={SeeMoreButton}>
      <ProjectCard
        setProjectDetails={setProjectDetails}
        shadows={false}
        ActionState={false}
        offer={offer}
      />
    </Box>
  );
};
// const Action = ({ setProjectDetails }) => {
//   return (
//     <Button variant="outlined" onClick={() => setProjectDetails(true)}>
//       Lend Again
//     </Button>
//   );
// };

function DashboardTableWithDetails({ setProjectDetails, wallet, offers }) {
  const Create = new CreateRowData(LENDERKEY().body);
  const [rows, setRows] = React.useState([]);

  // const rows = [
  // Create.create([
  //   "Sylla Ibrahim",
  //   "Active",
  //   "1000$",
  //   "150$",
  //   "50$",
  //   "100$",
  //   "20 days",
  //   "1000$",
  //   <Action setProjectDetails={setProjectDetails} />,
  //   <ItemsContent setProjectDetails={setProjectDetails} />,
  // ]),
  // ];

  React.useEffect(() => {
    if (wallet !== null && offers !== null) {
      const rows = [];
      wallet.investments.forEach((item) => {
        let offer = offers.find((offer) => offer?.id === item?.offer_id);
        console.log(offer, item, "sylla ibrahim");
        rows.push(
          Create.create([
            offer?.name,
            `${item.amount} XOF`,
            `${offer?.interest_rate} %`,
            `${(10 * parseFloat(item.amount)).toFixed() / 100 +
              parseFloat(item?.amount)} XOF`,
            new Date(offer.disbursed_date).getMonth() + 1 >= 10 ||
            new Date(offer.disbursed_date).getDate() >= 10
              ? `${new Date(offer.disbursed_date).getFullYear()}-${new Date(
                  offer.disbursed_date
                ).getMonth() + 1}-${new Date(offer.disbursed_date).getDate()}`
              : `${new Date(offer.disbursed_date).getFullYear()}-0${new Date(
                  offer.disbursed_date
                ).getMonth() + 1}-0${new Date(offer.disbursed_date).getDate()}`,
            new Date(item.created_at).getMonth() + 1 >= 10 ||
            new Date(item.created_at).getDate() >= 10
              ? `${new Date(item.created_at).getFullYear()}-${new Date(
                  item.created_at
                ).getMonth() + 1}-${new Date(item.created_at).getDate()}`
              : `${new Date(item.created_at).getFullYear()}-0${new Date(
                  item.created_at
                ).getMonth() + 1}-0${new Date(item.created_at).getDate()}`,
            new Date(offer.loan_length).getMonth() + 1 >= 10 ||
            new Date(offer.loan_length).getDate() >= 10
              ? `${new Date(offer.loan_length).getFullYear()}-${new Date(
                  offer.loan_length
                ).getMonth() + 1}-${new Date(offer.loan_length).getDate()}`
              : `${new Date(offer.loan_length).getFullYear()}-0${new Date(
                  offer.loan_length
                ).getMonth() + 1}-0${new Date(offer.loan_length).getDate()}`,

            <ItemsContent
              setProjectDetails={setProjectDetails}
              offer={offer}
              key={offer.id}
            />,
          ])
        );
      });

      setRows(rows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet, offers]);
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

  return (
    <Box sx={InvestmentContent}>
      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <CreateHead head={LENDERKEY().head} />
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
      </Box>
    </Box>
  );
}

export default DashboardTableWithDetails;
