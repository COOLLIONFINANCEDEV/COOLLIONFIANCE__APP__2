import { useTheme } from "@emotion/react";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import ChatBotCustome from "./components/ChatBotCustome";
import AlertCustomize from "./features/Alert/AlertCustomize";
// import LiveStats from "./components/LiveStats";
import Footer from "./Containers/Footer";
import Navbar from "./Containers/Navbar";
import { CheckUser } from "./features/Login/LoginSlice";
import Router from "./Router/Router";
import Loader from "./features/Loader/Loader";

function App() {
  const theme = useTheme();
  const dispatch = useDispatch();
  dispatch(CheckUser());

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.dark }}>
      <Navbar />
      {/* <LiveStats /> */}
      <AlertCustomize />
      <Loader />
      <Router />
      <ChatBotCustome />
      <Footer />
    </Box>
  );
}

export default App;
