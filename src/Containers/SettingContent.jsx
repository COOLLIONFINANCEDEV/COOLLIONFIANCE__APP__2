import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import AccountSettings from "../components/AccountSettings";
import EmailPreferenceSettings from "../components/EmailPreferenceSettings";
import PaymentSettings from "../components/PaymentSettings";
import SecuritySettings from "../components/SecuritySettings";

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
    <Box sx={contentStyle}>
      {ongletActive === 0 && <AccountSettings />}
      {ongletActive === 1 && <SecuritySettings />}
      {ongletActive === 2 && <PaymentSettings />}
      {ongletActive === 3 && <EmailPreferenceSettings />}
    </Box>
  );
};

export default SettingContent;
