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
import TokenDecode from "../../Helpers/Token/TokenDecode";
import { useNavigate } from "react-router-dom";
import { RedirectRouteLink } from "../../Router/Routes";
import { useAccount } from "wagmi";
import ChooseTenant from "../Tenant/ChooseTenant";
import { CheckUser } from "../../features/Login/LoginSlice";

const Connect = ({ email = undefined, password = undefined }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const SignInLoaderKey = randomkey();
  const { address, isConnected } = useAccount();
  const [chooseTenant, setChooseTenant] = React.useState({
    state: false,
    email: undefined,
  });
  const [userLogInfo, setUserLogInfo] = React.useState(null);

  const user = {
    user: null,
    accountTypes: null,
    accountTypeId: null,
    tenant: null,
  };

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

  async function handleSubmitGood(data, userInfo) {
    dispatch(setAlert({ state: "success", message: data.message }));
    localStorage.setItem("accessToken", data.data[0].accessToken);
    localStorage.setItem("refreshToken", data.data[0].refreshToken);
    const tokenInfo = TokenDecode(data.data[0].accessToken);
    const accountTypes = await SessionService.GetAccountTypes();
    if (accountTypes.error === false) {
      user.accountTypes = accountTypes.data;
    }

    if (tokenInfo.tenants.length <= 0) {
      if (accountTypes.error === false) {
        setChooseTenant({
          state: true,
          accountTypes: accountTypes,
          email: userInfo.email,
        });
      }
      dispatch(deleteLoader({ key: SignInLoaderKey }));
    } else {
      getTenant(tokenInfo.tenants.at(0));
    }
  }

  const handleSubmit = React.useCallback(
    async (values) => {
      setUserLogInfo(values);
      dispatch(setLoader({ state: true, key: SignInLoaderKey }));
      const data = await SessionService.Login(values);
      if (data.error === true) {
        dispatch(deleteLoader({ key: SignInLoaderKey }));
        handleSubmitError(data);
      } else {
        handleSubmitGood(data, values);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

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

  async function getUser() {
    const data = await SessionService.GetUser();
    if (data.error === false) {
      user.user = data.data.at(0);
    }
    const userInfo = {
      accountType: user.accountTypes
        .filter((item) => item.id === user.tenant.accountTypeId)
        .at(0),
      tenant: user.tenant,
      user: user.user,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    dispatch(deleteLoader({ key: SignInLoaderKey }));
    dispatch(CheckUser());
    navigate(RedirectRouteLink());
  }

  const handleChoose = () => {
    localStorage.clear();
    handleSubmit(userLogInfo);
  };

  async function getTenant(id) {
    const data = await SessionService.ListTenant(id);
    if (data.error === false) {
      user.tenant = data.data.at(0);
      getUser();
    }
  }

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
      {chooseTenant.state && (
        <CreateModal
          MakeOpen
          ModalContent={ChooseTenant}
          noLeave
          closeButton
          closeButtonFunc={() => {
            setChooseTenant({ state: false });
            localStorage.clear();
          }}
          ContentProps={{
            email: chooseTenant.email,
            accountTypes: chooseTenant.accountTypes.data,
            handleChoose: handleChoose,
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
