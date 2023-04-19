import { Box, Button, Chip, CircularProgress, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";
import { Stack } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import { setAlert } from "../../features/Alert/AlertSlice";

const CreateStepperFinishContent = ({ handleClose, allInformation }) => {
  const [close, setClose] = React.useState(true);
  const [closeSubmit, setCloseSubmit] = React.useState(false);
  const title = [
    "download different information...",
    "download the various documents...",
  ];
  const [state, setState] = React.useState("idle");
  const dispatch = useDispatch();
  const userInfo = useSelector(selectLogin);

  const handleSubmit = async () => {
    setState("load");
    setCloseSubmit(true);
    const data = await SessionService.CreateProject(
      userInfo.tenant.id,
      allInformation
    );
    if (data.error === true) {
      setState("error");
      setClose(false);
      setTimeout(() => {
        handleClose();
        dispatch(setAlert({ state: "error", message: data.message }));
      }, 2000);
    } else {
      setState("success");
      dispatch(setAlert({ state: "success", message: data.message }));
      handleClose();
    }
  };
  return (
    <React.Fragment>
      <Typography sx={{ mt: 2, mb: 1 }} variant="h5">
        All steps are complete, wait for project creation
      </Typography>
      <Stack spacing={2}>
        {title.map((item) => (
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
            label={item.toUpperCase()}
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
        ))}
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
