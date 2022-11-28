import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SessionService from "../../Services/SessionService";
import { CheckUser } from "../../features/Login/LoginSlice";
import { RedirectRouteLink } from "../../Router/Routes";

const Connect = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("borrower@gmail.com");

  const hanbleLogin = React.useCallback(() => {
    SessionService.Login(email);
    dispatch(CheckUser());
    navigate(RedirectRouteLink());
    window.scrollTo(0, 0);
  }, [dispatch, email, navigate]);

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
      </Box>
    </Box>
  );
};

export default Connect;
