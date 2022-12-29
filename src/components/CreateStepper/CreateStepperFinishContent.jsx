import { Box, Button, Chip, CircularProgress, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";
import { Stack } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { setPoppu } from "../../features/Poppu/PoppuSlice";

const CreateStepperFinishContent = ({ handleClose }) => {
  const allInformation = JSON.parse(localStorage.getItem("createProject"));
  const [close, setClose] = React.useState(true);
  const [closeSubmit, setCloseSubmit] = React.useState(false);
  const title = [
    "download different information...",
    "download the various documents...",
  ];

  const [state, setState] = React.useState("idle");
  const [state2, setState2] = React.useState("idle");

  const companies = useSelector(selectLogin).user.companies;
  const company = [...companies][[...companies].length - 1];

  const handleError = () => {
    setState("error");
  };

  const handleSuccess = (data) => {
    setState("success");
    const offerId = data.data.id;
    console.log(data);
    const body = {
      images: JSON.stringify(allInformation.images),
    };
    setState2("load");
    SessionService.CreateOfferDocs(offerId, body)
      .then((datas) => {
        if (datas.data.error === true) {
          setState2("error");
        } else {
          setState2("success");
          setClose(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setState2("error");
      });
  };

  const handleSubmit = () => {
    setState("load");
    setCloseSubmit(true);
    SessionService.CreateOffer(company.id, allInformation.information)
      .then((datas) => {
        console.log(datas);
        if (datas.data.error === true) {
          handleError();
        } else if (datas.data.error === false) {
          handleSuccess(datas.data);
        }
      })
      .catch((error) => {
        console.log(error);
        handleError();
      });
  };
  return (
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
        All steps are complete, wait for project creation
      </Typography>
      <Stack spacing={2}>
        <Chip
          icon={
            state === "idle" ? (
              ""
            ) : state === "load" ? (
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
            state === "idle"
              ? "secondary"
              : state === "load"
              ? "primary"
              : state === "error"
              ? "error"
              : "success"
          }
        />
        <Chip
          icon={
            state2 === "idle" ? (
              ""
            ) : state2 === "load" ? (
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
            state2 === "idle"
              ? "secondary"
              : state2 === "load"
              ? "primary"
              : state2 === "error"
              ? "error"
              : "success"
          }
        />
      </Stack>
      <Button
        variant="contained"
        sx={{ width: "100%", marginTop: "40px" }}
        onClick={handleSubmit}
        disabled={closeSubmit}
      >
        Send Information
      </Button>
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
