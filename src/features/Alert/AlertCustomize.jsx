import { Alert } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlert, selectAlert } from "./AlertSlice";

const AlertCustomize = () => {
  const alertStyle = {
    width: { xs: "80%", md: "60%" },
    margin: "2.5vh",
    position: "fixed",
    right: "0",
    zIndex: "200",
  };

  const alertItems = useSelector(selectAlert);

  React.useEffect(() => {
    if (alertItems.length > 0) {
      const interval = setInterval(() => {
        dispatch(deleteAlert({ key: alertItems.at(-1).key }));
      }, 5000);

      return () => clearInterval(interval);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [alertItems]);

  const dispatch = useDispatch();

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
