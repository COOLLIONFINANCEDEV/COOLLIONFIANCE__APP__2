import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TimeOut from "../../Context/TimeOut/TimeOut";
import { setAlert } from "../../features/Alert/AlertSlice";
import {
  hanbleError,
  ResetError,
  selectError,
} from "../../features/Error/ErrorSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import FormikDecoration from "../../Helpers/FormikDecoration";
import randomkey from "../../Helpers/randomKey";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import SessionService from "../../Services/SessionService";

const TwoFactorInput = () => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const twoFactorLoaderKey = randomkey();


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
    const body = {
      code: values.twoFactor,
      authorization_code: localStorage.getItem("authorizationCode"),
      code_verifier: localStorage.getItem("codeVerifier"),
    };
    dispatch(setLoader({ state: true, key: twoFactorLoaderKey }));

    SessionService.CheckVerification(body)
      .then((values) => {
        dispatch(deleteLoader({ key: twoFactorLoaderKey }));
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
