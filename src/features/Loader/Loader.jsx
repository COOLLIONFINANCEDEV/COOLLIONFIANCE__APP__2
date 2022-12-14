import { Backdrop } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectLoader } from "./LoaderSlice";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  const opens = useSelector(selectLoader);

  return (
    <>
      {opens.map((items) => {
        console.log(items);
        return (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={items.state}
            key={items.key}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        );
      })}
    </>
  );
};

export default Loader;
