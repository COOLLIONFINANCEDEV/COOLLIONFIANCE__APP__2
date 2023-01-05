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
import Scope from "../../Context/ApiScope/Scope";
import {
  generateCodeChallenge,
  generateCodeVerifier,
} from "../../Helpers/Token/Oauth2.0Token";
import { AddCompany, CheckUser } from "../../features/Login/LoginSlice";
import TokenDecode from "../../Helpers/Token/TokenDecode";
import { useNavigate } from "react-router-dom";
import { RedirectRouteLink } from "../../Router/Routes";
import TwoFactorInput from "./TwoFactorInput";
import { setPoppu } from "../../features/Poppu/PoppuSlice";
import {
  connectWithSuccess,
  errorContent,
} from "../../Context/Content/AppContent";

const Connect = ({ hanbleChange }) => {
  const GlobalError = useSelector(selectError);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignInLoaderKey = randomkey();
  const accessTokenLoaderKey = randomkey();
  const GetUserLoaderKey = randomkey();
  const verifyInfoLoaderKey = randomkey();
  const GetCompanyLoaderKey = randomkey();
  const [towFactorStatus, settowFactorStatus] = React.useState({
    status: false,
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

  function GetUser(datas) {
    dispatch(setLoader({ state: true, key: GetUserLoaderKey }));
    SessionService.GetUser(
      TokenDecode(datas.data.data.access_token).user_id
    ).then((datas) => {
      localStorage.setItem("user", JSON.stringify(datas.data.data));
      dispatch(setPoppu({ state: "success", content: connectWithSuccess() }));
      setTimeout(() => {
        dispatch(CheckUser());
        navigate(RedirectRouteLink());
        window.scrollTo(0, 0);
        dispatch(deleteLoader({ key: GetUserLoaderKey }));
      }, TimeOut.good);
      if (datas.data.data.companies.length === 0) {
        getCompany(TokenDecode(datas.data.data.access_token).user_id);
      }
    });
  }

  function AccessTokenTrueAfterLogin(data) {
    if (data.data.scope === Scope.oauth.accessToken) {
      const values = {
        authorization_code: data.data.authorization_code,
        code_verifier: localStorage.getItem("codeVerifier"),
      };
      dispatch(setLoader({ state: true, key: accessTokenLoaderKey }));
      SessionService.GetAccessToken(values).then((datas) => {
        console.log(datas);
        dispatch(deleteLoader({ key: accessTokenLoaderKey }));
        localStorage.setItem("accessToken", datas.data.data.access_token);
        localStorage.setItem("refreshToken", datas.data.data.refresh_token);
        localStorage.setItem(
          "exp",
          TokenDecode(datas.data.data.access_token).exp
        );
        GetUser(datas);
      });
    }
  }

  function AccesTokenFalseAfterLogin(data) {
    if (data.data.scope === Scope.oauth.emailVerification) {
      localStorage.setItem("authorizationCode", data.data.authorization_code);
      const body = {
        authorization_code: data.data.authorization_code,
        code_verifier: localStorage.getItem("codeVerifier"),
      };
      dispatch(setLoader({ state: true, key: verifyInfoLoaderKey }));
      SessionService.VerfyInfo(body)
        .then((values) => {
          localStorage.setItem(
            "authorizationCode",
            values.data.data.authorization_code
          );
          dispatch(deleteLoader({ key: verifyInfoLoaderKey }));
          settowFactorStatus({
            status: true,
          });
        })
        .catch(() => {
          dispatch(deleteLoader({ key: verifyInfoLoaderKey }));
          dispatch(setPoppu({ state: "error", content: errorContent() }));
        });
    }
  }

  function handleSubmitGood(data) {
    if (data.error === false) {
      AccessTokenTrueAfterLogin(data);
      AccesTokenFalseAfterLogin(data);
    }
  }

  const handleSubmit = (values) => {
    dispatch(setLoader({ state: true, key: SignInLoaderKey }));
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = generateCodeChallenge(codeVerifier);
    localStorage.removeItem("codeVerifier");
    localStorage.setItem("codeVerifier", codeVerifier);
    values.codeChallenge = codeChallenge;
    SessionService.Login(values)
      .then((datas) => {
        dispatch(deleteLoader({ key: SignInLoaderKey }));
        const data = datas.data;
        handleSubmitError(data);
        handleSubmitGood(data);
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
      }}
    >
      {towFactorStatus.status !== false && (
        <CreateModal
          ModalContent={TwoFactorInput}
          MakeOpen={true}
          ContentProps={{ hanbleChange: hanbleChange }}
        />
      )}
      <Typography variant="h2">Sign In</Typography>
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

        <Button variant="contained" sx={{ width: "95%" }} type="submit">
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Connect;
