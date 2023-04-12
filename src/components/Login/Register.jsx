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
import TimeOut from "../../Context/TimeOut/TimeOut";
import { setPoppu } from "../../features/Poppu/PoppuSlice";
import { errorContent } from "../../Context/Content/AppContent";
import Connect from "./Connect";
import { useAccount } from "wagmi";

const Register = ({ hanbleChange }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const loaderkey = randomkey();
  const [AccountCreate, setAccountCreate] = React.useState(false);
  const { address, isConnected } = useAccount();
  console.log("l");
  React.useEffect(() => {
    if (isConnected) {
      setAccountCreate({ address });
    }
  }, [address, isConnected]);

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
          dispatch(
            hanbleError({
              name: "oauth",
              section: "registration",
              child: key,
              update: { state: true, message: data.message },
            })
          );

          setTimeout(() => {
            dispatch(
              ResetError({
                name: "oauth",
                section: "registration",
              })
            );
          }, TimeOut.error);
          break;
        }
      }
      dispatch(setAlert({ state: "error", message: data.message }));
      resetPassword();
    }
  }

  function handleSubmitGood(data, values) {
    if (data.error === false) {
      //   dispatch(
      //     setPoppu({
      //       state: "success",
      //       content: successContent(),
      //       changeTab: hanbleChange,
      //     })
      //   );
      setAccountCreate(values);
    }
  }

  const handleSubmit = (values) => {
    delete values["confirmPassword"];
    dispatch(setLoader({ state: true, key: loaderkey }));
    SessionService.Register(values)
      .then((datas) => {
        dispatch(deleteLoader({ key: loaderkey }));
        const data = datas.data;
        handleSubmitError(data);
        handleSubmitGood(data, values);
      })
      .catch(() => {
        dispatch(deleteLoader({ key: loaderkey }));
        dispatch(setPoppu({ state: "error", content: errorContent() }));
      });
  };

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([
      { key: "email", type: "email" },
      { key: "password", type: "password" },
      { key: "confirmPassword", type: "confirmPassword" },
    ]),
    handleSubmit
  );

  // for reset the error field when the form in write again

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
        minWidth: "80%",
      }}
    >
      {AccountCreate && (
        <Connect
          email={AccountCreate.email}
          password={AccountCreate.password}
          address={AccountCreate.address}
        />
      )}
      <Typography variant="h2">Sign UP</Typography>
      <Typography variant="p" sx={{ marginBottom: "5vh" }}>
        Start investing or funding your projects today.
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
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
