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
import CreateModal from "../Modal/CreateModal";
import TimeOut from "../../Context/TimeOut/TimeOut";
import { AddCompany, CheckUser } from "../../features/Login/LoginSlice";
import TokenDecode from "../../Helpers/Token/TokenDecode";
import { useNavigate } from "react-router-dom";
import { RedirectRouteLink } from "../../Router/Routes";
import { setPoppu } from "../../features/Poppu/PoppuSlice";
import {
  connectWithSuccess,
  errorContent,
} from "../../Context/Content/AppContent";
import { useAccount } from "wagmi";
import FormatResponse from "../../Helpers/FormatResponse";
import ChooseTenant from "../ChooseTenant";

const Connect = ({ email = undefined, password = undefined }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignInLoaderKey = randomkey();
  const GetUserLoaderKey = randomkey();
  const GetCompanyLoaderKey = randomkey();
  const { address, isConnected } = useAccount();
  const [choosetTenant, setChooseTenant] = React.useState({
    state: false,
    email: undefined,
  });

  const initialValues = {
    email: "",
    password: "",
  };

  function resetPassword() {
    formik.values.confirmPassword = "";
  }

  function handleSubmitError(data) {
    if (data.error === true) {
      for (let key in initialValues) {
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
      }
      dispatch(setAlert({ state: "error", message: data.message }));
      resetPassword();
    }
  }

  function getCompany(id) {
    dispatch(setLoader({ state: true, key: GetCompanyLoaderKey }));
    SessionService.getCompany(id).then((datas) => {
      dispatch(deleteLoader({ key: GetCompanyLoaderKey }));
      dispatch(AddCompany({ state: true, companies: datas.data }));
    });
  }

  function GetUser(id) {
    dispatch(setLoader({ state: true, key: GetUserLoaderKey }));
    SessionService.GetUser(id)
      .then((datas) => {
        const data = FormatResponse(datas);
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch(setPoppu({ state: "success", content: connectWithSuccess() }));
        setTimeout(() => {
          dispatch(CheckUser());
          navigate(RedirectRouteLink());
          window.scrollTo(0, 0);
          dispatch(deleteLoader({ key: GetUserLoaderKey }));
        }, TimeOut.good);
        if (data.data.companies.length === 0) {
          getCompany(id);
        }
      })
      .catch((error) => {
        dispatch(setPoppu({ state: "error", content: errorContent() }));
      });
  }

  function handleSubmitGood(data, email) {
    if (data.error === false) {
      localStorage.setItem("accessToken", data.data[0].accessToken);
      localStorage.setItem("refreshToken", data.data[0].refreshToken);
      const tokenInfo = TokenDecode(data.data[0].accessToken);
      if (tokenInfo.tenants.length <= 0) {
        setChooseTenant({ state: true, email });
      } else {
        GetUser(tokenInfo.userId);
      }
    }
  }

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: SignInLoaderKey }));
    SessionService.Login(values)
      .then((datas) => {
        dispatch(deleteLoader({ key: SignInLoaderKey }));
        const data = FormatResponse(datas);
        handleSubmitError(data);
        handleSubmitGood(data, values.email);
      })
      .catch((error, data) => {
        dispatch(deleteLoader({ key: SignInLoaderKey }));
        if (error.response.status.toString()[0] === "4") {
          handleSubmitError(error.response.data);
        } else {
          dispatch(setPoppu({ state: "error", content: errorContent() }));
        }
      });
  };

  const handleChoose = (hisChoice) => {
    // hisChoise 1 equale lender and 2 equale borrower
  };

  React.useEffect(() => {
    if (email !== undefined && password !== undefined) {
      console.log(email, password);
      // handleSubmit({ email, password });
    } else if (isConnected) {
      console.log("sylla", address);
      // handleSubmit({ address });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, email, password]);

  const formik = FormikDecoration(
    initialValues,
    YupValidationSchema([
      { key: "email", type: "email" },
      { key: "password", type: "password" },
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
      {choosetTenant.state && (
        <CreateModal
          MakeOpen
          ModalContent={ChooseTenant}
          ContentProps={{
            handleChoose: handleChoose,
            email: choosetTenant.email,
          }}
          noLeave={false}
        />
      )}
      <Typography variant="h2">Sign In</Typography>
      <Typography variant="p" sx={{ marginBottom: "5vh" }}>
        Welcome back! Enter your login details to continue.
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

        <Button variant="contained" sx={{ width: "95%" }} type="submit">
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Connect;
