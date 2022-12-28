import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";

const CreateStepperFinishContent = ({ handleClose }) => {
  const allInformation = JSON.parse(localStorage.getItem("createProject"));
  const [close, setClose] = React.useState(true);

  const companies = useSelector(selectLogin).user.companies;
  const company = [...companies][[...companies].length - 1];

    SessionService.CreateOffer(company.id, allInformation.information)
      .then(console.log)
      .catch(console.log);

  return (
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }}>
        All steps completed - you&apos;re finished
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          onClick={handleClose}
          endIcon={<CloseIcon />}
          variant={"contained"}
          disabled={close}
        >
          Close
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateStepperFinishContent;
