import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Poppu from "../../Login/Poppu";
import CreateModal from "../../Modal/CreateModal";
import CompanyInfo from "./CompanyInfo";
import UserInfo from "./UserInfo";

const AccountSettings = ({ hanbleChange }) => {
  const [popupStatus, setPopupStatus] = React.useState({
    status: false,
  });

  return (
    <Box sx={{ width: "90%", margin: "5vh auto" }}>
      {popupStatus.status !== false && (
        <CreateModal
          ModalContent={Poppu}
          MakeOpen={true}
          ContentProps={{
            content: popupStatus.content,
            status: popupStatus.status,
            changeTab: hanbleChange,
          }}
        />
      )}
      <Typography variant="h4">Account Settings</Typography>
      <Typography variant="h6">
        Personal Info{" "}
        <Typography
          variant="span"
          sx={{ fontSize: "0.8em", fontWeight: "bold" }}
        >
          * denotes a required field
        </Typography>
      </Typography>
      <Divider sx={{ marginBottom: "5vh" }} />
      <UserInfo SetPopupStatus={setPopupStatus} />
      <CompanyInfo SetPopupStatus={setPopupStatus}/>
    </Box>
  );
};

export default AccountSettings;
