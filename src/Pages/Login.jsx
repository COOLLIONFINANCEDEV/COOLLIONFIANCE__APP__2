import { useTheme } from "@emotion/react";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import TabSelect from "../components/TabSelect";
import metamask from "../assets/icons/metamask.svg";
import connectWallet from "../assets/icons/connectWallet.svg";
import coinbase from "../assets/icons/coinbase.svg";
import portisWallet from "../assets/icons/portisWallet.svg";
import { CheckUser, selectLogin } from "../features/Login/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HomeRouteLink } from "../Router/Routes";
import SessionService from "../Services/SessionService";

const Login = () => {
  const [LoginOrRegister, setLoginOrRegister] = React.useState(false);

  const hanbleChange = React.useCallback((item) => {
    item === 1 ? setLoginOrRegister(true) : setLoginOrRegister(false);
  }, []);

  const { palette } = useTheme();

  const loginStyle = {
    marginTop: "15vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const LoginFormStyle = {
    maxWidth: "50%",
    width: "500px",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid",
    borderColor: palette.secondary.main,
    borderRadius: "10px",
    flexDirection: "column",
    backgroundColor: palette.secondary.light,
    rowGap: "60px",
    padding: "5vh 3vw",
  };

  const TabWidth = {
    width: "250px",
  };

  return (
    <Box sx={loginStyle}>
      <Box sx={LoginFormStyle}>
        <TabSelect
          items={["Login", "Register"]}
          TabWidth={TabWidth}
          hanbleChange={hanbleChange}
        />
        {LoginOrRegister ? <Register /> : <Connect />}
      </Box>
    </Box>
  );
};

const Connect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(selectLogin);
  const [email, setEmail] = React.useState("borrower@gmail.com");
  React.useEffect(() => {
    console.log(state);
  }, [state]);

  const hanbleLogin = React.useCallback(() => {
    SessionService.Login(email);
    dispatch(CheckUser());
    navigate(HomeRouteLink());
    window.scrollTo(0, 0);
  }, [dispatch, navigate,email]);

  const handleEmail = React.useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Typography variant="h2">Sign in</Typography>
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
      >
        <TextField
          label="Name"
          variant="outlined"
          sx={{ width: "95%" }}
          required={true}
        />
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "95%" }}
          required
          value={email}
          onChange={handleEmail}
        />
        <TextField
          label="Password"
          variant="outlined"
          sx={{ width: "95%" }}
          required
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "10px",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" sx={{ width: "95%" }} onClick={hanbleLogin}>
          Sign in
        </Button>
        <Button variant="outlined" sx={{ width: "95%" }}>
          Sign in with Google
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <IconButton>
          <img src={metamask} alt="connectWallet" style={{ width: "50px" }} />
        </IconButton>
        <IconButton>
          <img
            src={connectWallet}
            alt="connectWallet"
            style={{ width: "50px" }}
          />
        </IconButton>
        <IconButton>
          <img src={coinbase} alt="coinbase" style={{ width: "100px" }} />
        </IconButton>{" "}
        <IconButton>
          <img
            src={portisWallet}
            alt="connectWallet"
            style={{ width: "80px" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

const Register = () => {
  return (
    <Box
      sx={{
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
      >
        <TextField
          label="First Name"
          variant="outlined"
          sx={{ width: "95%" }}
        />
        <TextField label="Last Name" variant="outlined" sx={{ width: "95%" }} />
        <TextField label="Email" variant="outlined" sx={{ width: "95%" }} />
        <TextField label="Password" variant="outlined" sx={{ width: "95%" }} />
        <TextField
          label="Confirm Password"
          variant="outlined"
          sx={{ width: "95%" }}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "10px",
          marginTop: "20px",
        }}
      >
        <Button variant="contained" sx={{ width: "95%" }}>
          Sign in
        </Button>
        <Button variant="outlined" sx={{ width: "95%" }}>
          Sign in with Google
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <IconButton>
          <img src={metamask} alt="connectWallet" style={{ width: "50px" }} />
        </IconButton>
        <IconButton>
          <img
            src={connectWallet}
            alt="connectWallet"
            style={{ width: "50px" }}
          />
        </IconButton>
        <IconButton>
          <img src={coinbase} alt="coinbase" style={{ width: "100px" }} />
        </IconButton>{" "}
        <IconButton>
          <img
            src={portisWallet}
            alt="connectWallet"
            style={{ width: "80px" }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Login;
