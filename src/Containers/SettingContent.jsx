import { useTheme } from "@emotion/react";
import { Box, Stack } from "@mui/material";
import React from "react";
import ProjectSettingsContent from "../components/Admin/ProjectSettingsContent";
import AccountSettings from "../components/Settings/AccountSettings";
import DataSettings from "../components/Settings/DataSettings";
import EmailPreferenceSettings from "../components/Settings/EmailPreferenceSettings";
import PaymentSettings from "../components/Settings/PaymentSettings";
import SecuritySettings from "../components/Settings/SecuritySettings";

const SettingContent = ({ ongletActive, role }) => {
  const { palette } = useTheme();
  const contentStyle = {
    width: { xs: "90%", sm: "65%" },
    margin: "0 0 0 2%",
    backgroundColor: palette.secondary.light,
    border: "1px solid ",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
    padding: "10px 2.5%",
  };
  return (
    <Stack sx={contentStyle}>
      {ongletActive === 0 && role === false && <AccountSettings />}
      {ongletActive === 1 && role === false && <SecuritySettings />}
      {ongletActive === 2 && role === false && <PaymentSettings />}
      {ongletActive === 3 && role === false && <EmailPreferenceSettings />}
      {ongletActive === 4 && role === false && <DataSettings />}
      {ongletActive === 0 && role === true && <ProjectSettingsContent />}
    </Stack>
  );
};

export default SettingContent;
