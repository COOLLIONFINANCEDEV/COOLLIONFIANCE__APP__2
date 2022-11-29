import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlert, selectAlert } from "./AlertSlice";

const AlertCustomize = () => {
  const alertStyle = {
    width: "60%",
    margin: "2.5vh auto 2.5vh auto",
  };

  const alertItems = useSelector(selectAlert);
  const dispatch = useDispatch();
  console.log(alertItems);
  return alertItems.map((item) => {
    return (
      <Alert
        severity={item.state}
        sx={alertStyle}
        onClose={() => {
          dispatch(deleteAlert({ key: item.key }));
        }}
        key={item.key}
      >
        {item.message}
      </Alert>
    );
  });
};

export default AlertCustomize;
