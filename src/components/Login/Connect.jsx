import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import SessionService from "../../Services/SessionService";
import { useDispatch } from "react-redux";
import YupValidationSchema from "../../Helpers/YupValidationSchema";
import FormikDecoration from "../../Helpers/FormikDecoration";
import { setAlert } from "../../features/Alert/AlertSlice";
import { deleteLoader, setLoader } from "../../features/Loader/LoaderSlice";
import randomkey from "../../Helpers/randomKey";
import CreateModal from "../Modal/CreateModal";
import TimeOut from "../../Context/TimeOut/TimeOut";
import { CheckUser } from "../../features/Login/LoginSlice";
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignInLoaderKey = randomkey();
  const GetUserLoaderKey = randomkey();
  const { address, isConnected } = useAccount();
  const [choosetTenant, setChooseTenant] = React.useState({
    state: false,
    email: undefined,
  });

  const initialValues = {
    email: "",
    password: "",
  };

  function handleSubmitError(data) {
    dispatch(setAlert({ state: "error", message: data.message }));
    if (data.errors.length > 0) {
      data.errors.forEach((item) => {
        formik.setFieldError(
          item.field === "username" ? "email" : item.field,
          item.message
        );
      });
    }
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
          // getCompany(id);
        }
      })
      .catch((error) => {
        dispatch(setPoppu({ state: "error", content: errorContent() }));
      });
  }

  function handleSubmitGood(data, userInfo) {
    dispatch(setAlert({ state: "success", message: data.message }));
    localStorage.setItem("accessToken", data.data[0].accessToken);
    localStorage.setItem("refreshToken", data.data[0].refreshToken);
    const tokenInfo = TokenDecode(data.data[0].accessToken);
    // if the use has or don't have the tenant(the role)
    if (tokenInfo.tenants.length <= 0) {
      setChooseTenant({ state: true, email: userInfo.email });
    } else {
      GetUser(tokenInfo.userId);
    }
  }

  const handleSubmit = React.useCallback(
    async (values) => {
      dispatch(setLoader({ state: true, key: SignInLoaderKey }));
      const data = await SessionService.Login(values);
      dispatch(deleteLoader({ key: SignInLoaderKey }));
      if (data.error === true) {
        handleSubmitError(data);
      } else {
        handleSubmitGood(data, values);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const handleChoose = (hisChoice) => {
    // hisChoise 1 equale lender and 2 equale borrower
  };

  React.useEffect(() => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    if (email !== undefined && password !== undefined) {
      // ici c'est pour logger automatiquement apres le sign up
      // handleSubmit({ email, password });
    } else if (isConnected) {
      handleSubmit({ address });
    } else if (params.get("magicLink")) {
      const magicLink = params.get("magicLink");
      handleSubmit({ magicLink });
    }
  }, [address, email, handleSubmit, isConnected, password]);

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
          closeButton
          closeButtonFunc={() => {
            setChooseTenant({ state: false });
            localStorage.clear();
          }}
          ContentProps={{
            handleChoose: handleChoose,
            email: choosetTenant.email,
          }}
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
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
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
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <Button variant="contained" sx={{ width: "95%" }} type="submit">
          Sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Connect;
