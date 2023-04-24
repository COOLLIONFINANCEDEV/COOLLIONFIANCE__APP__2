import {
  Alert,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import randomkey from "../../Helpers/randomKey";
import AppContent from "../../Seeds/AppContent";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import SessionService from "../../Services/SessionService";
import { selectLogin } from "../../features/Login/LoginSlice";
import { setAlert } from "../../features/Alert/AlertSlice";
import { AddAllOffersDashboard } from "../../features/Offers/OffersSlice";

const ActiveProject = ({ offer, handleClose }) => {
  const ActiveProjectStyle = {
    width: "90%",
    margin: "5vh  auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "5vh",
  };
  const dispatch = useDispatch();
  const [onOrOff, setOnOrOff] = React.useState(offer.treat);
  const loaderKey = randomkey();
  const { tenant } = useSelector(selectLogin);

  const handleSubmit = async () => {
    const body = {
      treat: onOrOff,
    };
    dispatch(setLoader({ state: true, key: loaderKey }));
    const data = await SessionService.UpdateProject(tenant.id, offer.id, body);
    dispatch(deleteLoader({ key: loaderKey }));
    if (data.error === false) {
      handleClose();
      dispatch(setAlert({ state: "success", message: data.message }));
    //   for reload the pages
      dispatch(AddAllOffersDashboard({ offerDashboard: null }));
    }
  };

  return (
    <Box style={ActiveProjectStyle}>
      <Box>
        <Typography variant="h4">Enable/disable project.</Typography>
      </Box>
      <Box>
        <Alert severity="warning">{AppContent.alert.ActiveProject}</Alert>

        <Box>
          <Typography>Here to Activate or Deactivate the project</Typography>
          <FormControl fullWidth>
            <Select
              value={onOrOff}
              onChange={() => setOnOrOff((state) => !state)}
            >
              <MenuItem value={true} >Yes ,Activate the project</MenuItem>
              <MenuItem value={false}>Deactivate the project</MenuItem>
            </Select>
            <Button
              variant="contained"
              sx={{ marginTop: "15px" }}
              onClick={handleSubmit}
            >
              Change
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveProject;
