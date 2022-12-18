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
import { CheckUser } from "../../features/Login/LoginSlice";
import FormikDecoration from "../../Helpers/FormikDecoration";
import randomkey from "../../Helpers/randomKey";
import TokenDecode from "../../Helpers/Token/TokenDecode";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import { RedirectRouteLink } from "../../Router/Routes";
import SessionService from "../../Services/SessionService";
import CreateModal from "../Modal/CreateModal";
import Poppu from "./Poppu";

const TwoFactorInput = ({ hanbleChange }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const twoFactorLoaderKey = randomkey();
  const GetUserLoaderKey = randomkey();
  const navigate = useNavigate();
  const [popupStatus, setPopupStatus] = React.useState({
    status: false,
  });

  function handleSubmitError() {
    dispatch(
      hanbleError({
        name: "oauth",
        section: "twoFactor",
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
    twoFactor: "",
  };

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: twoFactorLoaderKey }));
    const body = {
      code: values.twoFactor,
      authorization_code: localStorage.getItem("authorizationCode"),
      code_verifier: localStorage.getItem("codeVerifier"),
    };

    SessionService.CheckVerification(body)
      .then((datas) => {
        dispatch(deleteLoader({ key: twoFactorLoaderKey }));

        localStorage.setItem("accessToken", datas.data.data.access_token);
        localStorage.setItem("refreshToken", datas.data.data.refresh_token);
        localStorage.setItem(
          "exp",
          TokenDecode(datas.data.data.access_token).exp
        );
        dispatch(setLoader({ state: true, key: GetUserLoaderKey }));
        SessionService.GetUser(
          TokenDecode(datas.data.data.access_token).user_id
        ).then((datas) => {
          localStorage.setItem("user", JSON.stringify(datas.data.data));
          setPopupStatus({
            status: "success",
            content:
              "Congratulations, your account has been successfully created",
          });
          setTimeout(() => {
            dispatch(CheckUser());
            navigate(RedirectRouteLink());
            window.scrollTo(0, 0);
            dispatch(deleteLoader({ key: GetUserLoaderKey }));
          }, TimeOut.good);
        });
      })
      .catch((error) => {
        dispatch(deleteLoader({ key: twoFactorLoaderKey }));
        handleSubmitError();
      });
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema(["twoFactor"]),
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
      <Typography variant="h5">Two Step Verification</Typography>
      <Typography>
        Please confirm access to your account by entering one of your emergency
        recovery codes.
      </Typography>

      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ width: "100%" }}
      >
        <TextField
          label="Two Factor Code"
          type={"twoFactor"}
          name={"twoFactor"}
          id={"twoFactor"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.twoFactor}
          onChange={formik.handleChange}
          error={
            (formik.touched.twoFactor && Boolean(formik.errors.twoFactor)) ||
            GlobalError.oauth.twoFactor.twoFactor.state
          }
          helperText={
            (formik.touched.twoFactor && formik.errors.twoFactor) ||
            GlobalError.oauth.twoFactor.twoFactor.message
          }
        />

        <Button
          variant="contained"
          sx={{ width: "95%", marginTop: "30px" }}
          type="submit"
        >
          Sign in
        </Button>
      </Box>
    </Stack>
  );
};

export default TwoFactorInput;
