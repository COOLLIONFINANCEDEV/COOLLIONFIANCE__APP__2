import React from "react";
import { useTheme } from "@emotion/react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SecurityIcon from "@mui/icons-material/Security";
// import PaymentIcon from "@mui/icons-material/Payment";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import CookieIcon from "@mui/icons-material/Cookie";
import { Stack } from "@mui/system";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

const SettingOnglet = ({ ongletActive, handleOnglet, role = false }) => {
  const { palette } = useTheme();

  const ongletStyle = {
    width: "28%",
    display: { xs: "none", sm: "flex" },
    paddng: "0",
    margin: "0",
    rowGap: "15px",
    backgroundColor: palette.secondary.light,
    overflow: "hidden",
    border: "1px solid ",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
  };

  const ongletItemsWithIcon =
    role === false
      ? [
          { name: "Account", icon: <PersonOutlineIcon /> },
          { name: "Security", icon: <SecurityIcon /> },
          // { name: "Payment", icon: <PaymentIcon /> },
          { name: "Email preferences", icon: <UnsubscribeIcon /> },
          { name: "Data settings", icon: <CookieIcon /> },
        ]
      : [{ name: "projects", icon: <AccountTreeIcon /> }];

  return (
    <Stack sx={ongletStyle}>
      <List sx={{ width: "100%" }}>
        {ongletItemsWithIcon.map((item, index) => {
          return (
            <ListItemButton
              key={index}
              selected={index === ongletActive ? true : false}
              onClick={() => handleOnglet(index)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </ListItemButton>
          );
        })}
      </List>
    </Stack>
  );
};

export default SettingOnglet;
