import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useDispatch, useSelector } from "react-redux";
import {
  hanbleError,
  ResetError,
  selectError,
} from "../../features/Error/ErrorSlice";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import FormikDecoration from "../../Helpers/FormikDecoration";
import { setAlert } from "../../features/Alert/AlertSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import randomkey from "../../Helpers/randomKey";

const Register = () => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const loaderkey = randomkey();
  let UserTentative = 0;
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  function resetPassword() {
    formik.values.confirmPassword = "";
  }

  function handleSubmitError(data) {
    if (data.error === true) {
      for (let key in initialValues) {
        if (data.message.includes(key)) {
          UserTentative++;
          dispatch(
            hanbleError({
              name: "oauth",
              section: "registration",
              child: key,
              update: { state: true, message: data.message },
            })
          );
          break;
        }
      }
      dispatch(setAlert({ state: "error", message: data.message }));
      resetPassword();
    }
  }

  const handleSubmit = (values) => {
    delete values["confirmPassword"];
    dispatch(setLoader({ state: true, message: "ll", key: loaderkey }));
    SessionService.Register(values).then((datas) => {
      dispatch(deleteLoader({ key: loaderkey }));
      const data = datas.data;
      handleSubmitError(data);
    });
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema,
    handleSubmit
  );

  // for reset the error field when the form in write again
  React.useEffect(() => {
    if (UserTentative >= 1) {
      dispatch(
        ResetError({
          name: "oauth",
          section: "registration",
        })
      );
    }
  }, [UserTentative, dispatch, formik.values]);

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Typography variant="h2">Sign UP</Typography>
      <Typography variant="p" sx={{ marginBottom: "5vh" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nulla?
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "20px",
        }}
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label="Email"
          type={"email"}
          name={"email"}
          id={"email"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={
            (formik.touched.email && Boolean(formik.errors.email)) ||
            GlobalError.oauth.registration.email.state
          }
          helperText={
            (formik.touched.email && formik.errors.email) ||
            GlobalError.oauth.registration.email.message
          }
        />
        <TextField
          label="Password"
          type={"password"}
          name={"password"}
          id={"password"}
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={
            (formik.touched.password && Boolean(formik.errors.password)) ||
            GlobalError.oauth.registration.password.state
          }
          helperText={
            (formik.touched.password && formik.errors.password) ||
            GlobalError.oauth.registration.password.message
          }
        />
        <TextField
          label="Confirm Password"
          type={"password"}
          name="confirmPassword"
          id="confirmPassword"
          variant="outlined"
          sx={{ width: "95%" }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />

        <Button variant="contained" sx={{ width: "95%" }} type="submit">
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
