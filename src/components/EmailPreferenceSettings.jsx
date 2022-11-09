import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const EmailPreferenceSettings = () => {
  const [onOrOff, setOnOrOff] = React.useState(10);
  const EmailPreferenceSettingsStyle = {
    width: "90%",
    margin: "5vh  auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    rowGap: "5vh",
  };
  return (
    <Box style={EmailPreferenceSettingsStyle}>
      <Box>
        <Typography variant="h4">Email Settings</Typography>
      </Box>
      <Box>
        <Typography sx={{marginBottom:'2vh'}}>
          To customize the communications you receive select specific emails
          from the list below. You can also disable most email communication but
          Cool lion Fiance is still legally required to send a few emails about
          your account status and activity.
        </Typography>

        <Box>
          <Typography>Do you want to receive emails from Kiva?</Typography>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={onOrOff}
              label="Age"
              onChange={(e) => setOnOrOff(e.target.value)}
            >
              <MenuItem value={10}>Yes ,send me emails</MenuItem>
              <MenuItem value={30}>Send only legally required emails</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default EmailPreferenceSettings;
