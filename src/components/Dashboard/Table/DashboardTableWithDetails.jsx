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

function DashboardTableWithDetails({ setProjectDetails, offers }) {
  const Create = new CreateRowData(LENDERKEY().body);
  const [rows, setRows] = React.useState([]);

  console.log(offers);
  React.useEffect(() => {
    if (offers) {
      const rows = [];
      offers.forEach((offer) => {
        rows.push(
          Create.create([
            offer.id,
           offer.projectTitle,
            12,
            122222,
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
  }, [offers]);
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
