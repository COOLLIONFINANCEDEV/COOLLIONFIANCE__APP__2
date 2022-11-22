import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import SettingOnglet from "../Containers/SettingOnglet";
import SettingContent from "../Containers/SettingContent";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const Settings = ({ role = false }) => {
  const { width } = useTheme();
  const [ongletItemState, setOngletItemState] = React.useState(0);

  const settingStyle = {
    margin: "0 auto 0 auto",
    marginTop: { xs: "4vh", md: "10vh" },
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <>
      <Box sx={settingStyle}>
        <SettingsOngletResponsive
          role={role}
          ongletActive={ongletItemState}
          handleOnglet={setOngletItemState}
        />
      </Box>
      <Box sx={settingStyle}>
        <SettingOnglet
          ongletActive={ongletItemState}
          handleOnglet={setOngletItemState}
          role={role}
        />
        <SettingContent ongletActive={ongletItemState} role={role} />
      </Box>
    </>
  );
};

const SettingsOngletResponsive = ({ role, ongletActive, handleOnglet }) => {
  const { palette } = useTheme();
  const handlehChangeOnglet = React.useCallback(
    (event) => {
      handleOnglet(event.target.value);
    },
    [handleOnglet]
  );

  const SettingsOngletResponsiveStyle = {
    width: { xs: "90%", sm: "65%" },
    margin: "10vh 0 0 2%",
    backgroundColor: palette.secondary.light,
    border: "1px solid ",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
    padding: "10px 2.5%",
    display: { xs: "block", sm: "none" },
  };

  const ongletItemsWithIcon =
    role === false
      ? ["Account", "Security", "Payment", "Email preferences", "Data settings"]
      : ["projects"];

  return (
    <Stack sx={SettingsOngletResponsiveStyle}>
      <Typography variant="h4">Settings</Typography>
      <FormControl sx={{ width: "100%" }}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ongletActive}
          label="Country"
          onChange={handlehChangeOnglet}
          sx={{ width: "100%" }}
        >
          {ongletItemsWithIcon.map((item, key) => {
            return (
              <MenuItem value={key} key={key}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Settings;
