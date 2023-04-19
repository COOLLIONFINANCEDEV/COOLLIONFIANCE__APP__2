import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { successContent } from "../../Context/Content/AppContent";
import { setAlert } from "../../features/Alert/AlertSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import { CheckUser, selectLogin } from "../../features/Login/LoginSlice";
import randomkey from "../../Helpers/randomKey";
import SessionService from "../../Services/SessionService";

const EmailPreferenceSettings = () => {
  const EmailPreferenceSettingsStyle = {
    width: "90%",
    margin: "5vh  auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "5vh",
  };
  const dispatch = useDispatch();
  const EmailPreferenceLoaderKey = randomkey();
  const user = useSelector(selectLogin).user;
  const [onOrOff, setOnOrOff] = React.useState(user.newsletter);

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = user.id;
    const body = {
      newsletter: onOrOff,
    };
  };
  return (
    <Box style={EmailPreferenceSettingsStyle}>
      <Box>
        <Typography variant="h4">Email Settings</Typography>
      </Box>
      <Box>
        <Typography sx={{ marginBottom: "2vh" }}>
          To customize the communications you receive select specific emails
          from the list below. You can also disable most email communication but
          Cool lion Fiance is still legally required to send a few emails about
          your account status and activity.
        </Typography>

        <Box>
          <Typography>
            Do you want to receive emails from coolionfinance?
          </Typography>
          <FormControl fullWidth component={"form"} onSubmit={handleSubmit}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={onOrOff}
              label="Age"
              onChange={() => setOnOrOff((state) => !state)}
            >
              <MenuItem value={true}>Yes ,send me emails</MenuItem>
              <MenuItem value={false}>
                Send only legally required emails
              </MenuItem>
            </Select>
            <Button
              type={"submit"}
              variant="contained"
              sx={{ marginTop: "15px" }}
            >
              Change
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailPreferenceSettings;
