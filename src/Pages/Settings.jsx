import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import SettingOnglet from "../Containers/SettingOnglet";
import SettingContent from "../Containers/SettingContent";

const Settings = ({role = false}) => {
  const { width } = useTheme();
  const [ongletItemState, setOngletItemState] = React.useState(0);

  const settingStyle = {
    margin: "10vh auto 0 auto",
    width: width,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  };

  return (
    <Box sx={settingStyle}>
      <SettingOnglet
        ongletActive={ongletItemState}
        handleOnglet={setOngletItemState}
        role={role}
      />
      <SettingContent ongletActive={ongletItemState} role={role} />
    </Box>
  );
};



export default Settings;
