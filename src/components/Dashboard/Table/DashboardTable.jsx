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
import { Box, Chip } from "@mui/material";
import { BORROWERKEY } from "../../../Context/Table/TableKeys";
import CreateModal from "../../Modal/CreateModal";
import GenerateModalButton from "../../Modal/GenerateModalButton";
import ActiveProject from "../../EditProject/ActiveProject";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const DashboardTable = ({ setProjectDetails, offers }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const CreateData = new CreateRowData(BORROWERKEY().body);
  const [rows, setRows] = React.useState([]);
  const [edit, setEdit] = React.useState({ state: false, offer: {} });

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
      console.log(offers);
      offers.forEach((offer, key) => {
        rows.push(
          CreateData.create([
            ++key,
            offer.projectTitle.length >= 30
              ? offer.projectTitle.slice(1, 30) + "...."
              : offer.projectTitle,
            <Chip
              label={offer.treat === true ? "Comfimed" : "pending"}
              variant="outlined"
              color={offer.treat === true ? "primary" : "error"}
            />,
            <Chip
              icon={<MonetizationOnIcon />}
              size="small"
              label={offer.amountRequested}
              color="primary"
            />,
            offer.tenant.name,
            <Chip
              icon={<LocationOnIcon />}
              size="small"
              label={offer.projectCountry}
              variant="outlined"
              color="primary"
            />,
            <Action
              key={offer.id}
              offer={offer}
              setProjectDetails={setProjectDetails}
              setEdit={setEdit}
            />,
          ])
        );
      });
      setRows(rows);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offers, setProjectDetails]);

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
      {edit.state && (
        <CreateModal
          OpenButton={GenerateModalButton}
          ModalContent={ActiveProject}
          ContentProps={{ offer: edit.offer }}
          closeButtonFunc={() => setEdit({ state: false, edit: {} })}
          MakeOpen
        ></CreateModal>
      )}
    </Box>
  );
};

export default DashboardTable;
