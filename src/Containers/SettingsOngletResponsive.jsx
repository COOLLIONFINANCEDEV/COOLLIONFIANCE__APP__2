import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

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

export default SettingsOngletResponsive;
