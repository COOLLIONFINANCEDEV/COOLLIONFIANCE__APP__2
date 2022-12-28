import { Box, Button, Chip, CircularProgress, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";
import { Stack } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";

const CreateStepperFinishContent = ({ handleClose }) => {
  const allInformation = JSON.parse(localStorage.getItem("createProject"));
  const [close, setClose] = React.useState(true);
  const title = [
    "download different information...",
    "download the various documents...",
  ];

  const [state, setState] = React.useState("load");
  const [state2, setState2] = React.useState("load");

  const companies = useSelector(selectLogin).user.companies;
  const company = [...companies][[...companies].length - 1];

  const handleError = () => {
    setState("error");
    setState2("error");
  };

  React.useEffect(() => {
    SessionService.CreateOffer(company.id, allInformation.information)
      .then((datas) => {
        console.log(datas);
        if (datas.data.error === true) {
          handleError();
        } else if (datas.data.error === false) {
          
        }
      })
      .catch((error) => {
        console.log(error);
        handleError();
      });
  }, [allInformation.information, company.id]);
  return (
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
        All steps are complete, wait for project creation
      </Typography>
      <Stack spacing={2}>
        <Chip
          icon={
            state === "load" ? (
              <CircularProgress size={20} />
            ) : state === "error" ? (
              <ErrorIcon />
            ) : (
              <CheckIcon />
            )
          }
          label={title[0].toUpperCase()}
          clickable
          color={
            state === "load"
              ? "secondary"
              : state === "error"
              ? "error"
              : "primary"
          }
        />
        <Chip
          icon={
            state2 === "load" ? (
              <CircularProgress size={20} />
            ) : state2 === "error" ? (
              <ErrorIcon />
            ) : (
              <CheckIcon />
            )
          }
          label={title[1].toUpperCase()}
          clickable
          color={
            state2 === "load"
              ? "secondary"
              : state2 === "error"
              ? "error"
              : "primary"
          }
        />
      </Stack>

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
