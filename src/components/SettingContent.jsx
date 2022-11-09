import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import AccountSettings from "./AccountSettings";

const SettingContent = ({ ongletActive }) => {
  const { palette } = useTheme();
  const contentStyle = {
    width: "65%",
    margin: "0 0 0 5%",
    backgroundColor: palette.secondary.light,
    border: "1px solid ",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
    padding: "10px 2.5%",
  };

  return (
    <Box sx={contentStyle}>{ongletActive === 0 && <AccountSettings />}</Box>
  );
};

export default SettingContent;
