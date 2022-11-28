import { useTheme } from "@emotion/react";
import { Box, } from "@mui/material";
import React from "react";
import TabSelect from "../components/TabSelect";
import Register from "../components/Login/Register";
import Connect from "../components/Login/Connect";

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
    width: "100%",
    maxWidth:{xs:'80%',md:'40%'},
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
    width:'50%'
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




export default Login;
