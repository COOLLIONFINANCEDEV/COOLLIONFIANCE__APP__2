import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TimeOut from "../../Context/TimeOut/TimeOut";
import {
  hanbleError,
  ResetError,
  selectError,
} from "../../features/Error/ErrorSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import { CheckUser, selectLogin } from "../../features/Login/LoginSlice";
import FormikDecoration from "../../Helpers/FormikDecoration";
import randomkey from "../../Helpers/randomKey";
import TokenDecode from "../../Helpers/Token/TokenDecode";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import { RedirectRouteLink } from "../../Router/Routes";
import SessionService from "../../Services/SessionService";
import Poppu from "../Login/Poppu";
import CreateModal from "../Modal/CreateModal";

const ChangeUser = ({ hanbleChange, content, type = "text" }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const twoFactorLoaderKey = randomkey();
  const user = useSelector(selectLogin).user;

  const [popupStatus, setPopupStatus] = React.useState({
    status: false,
  });

  function handleSubmitError() {
    dispatch(
      hanbleError({
        name: "oauth",
        section: type.toLowerCase(),
        child: "twoFactor",
        update: { state: true, message: "Two Factor code is invalid" },
      })
    );

    setTimeout(() => {
      dispatch(
        ResetError({
          name: "oauth",
          section: "twoFactor",
        })
      );
    }, TimeOut.error);
  }

  const initialValues = {
    [type]: "",
  };

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: twoFactorLoaderKey }));
    const id = user.id;

    SessionService.UpdateUser(id, values)
      .then((datas) => {
        dispatch(setLoader({ state: true, key: twoFactorLoaderKey }));
        setPopupStatus({
          status: "success",
          content:
            "Congratulations, your account has been successfully created",
        });
      })
      .catch((error) => {
        dispatch(deleteLoader({ key: twoFactorLoaderKey }));
        handleSubmitError();
      });
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([{ key: type, type: type }]),
    handleSubmit
  );

  return (
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "40vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
      spacing={5}
    >
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
      <Typography variant="h5">{content.title}</Typography>
      <Typography>{content.description}</Typography>

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ width: "100%" }}
      >
        <TextField
          label="Two Factor Code"
          type={type}
          name={type}
          id={type}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values[type]}
          onChange={formik.handleChange}
          error={
            (formik.touched[type] && Boolean(formik.errors[type])) ||
            GlobalError.oauth.registration[type.toLowerCase()].state
          }
          helperText={
            (formik.touched[type] && formik.errors[type]) ||
            GlobalError.oauth.registration[type.toLowerCase()].message
          }
        />

        <Button
          variant="contained"
          sx={{ width: "95%", marginTop: "30px" }}
          type="submit"
        >
          Change
        </Button>
      </Box>
    </Stack>
  );
};

export default ChangeUser;
