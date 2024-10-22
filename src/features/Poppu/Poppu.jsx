import { Button, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ErrorIcon from "@mui/icons-material/Error";
import React from "react";

const Poppu = ({ status, content, handleClose, changeTab }) => {
  const handleClick = React.useCallback(() => {
    if (typeof changeTab === "function") changeTab(0);
    if (typeof handleClose === "function") handleClose();
  }, [handleClose, changeTab]);

  return (
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "40vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
      spacing={4}
    >
      {status === "success" && (
        <CheckCircleIcon sx={{ fontSize: 100 }} color={status} />
      )}
      {status === "error" && (
        <ErrorIcon sx={{ fontSize: 100 }} color={status} />
      )}
      <Stack spacing={2}>
        <Typography sx={{ fontSize: "1.2em", textAlign: "justify" }}>
          {content}
        </Typography>
        <Button
          startIcon={<ThumbUpAltIcon />}
          variant="contained"
          size="large"
          color={status}
          onClick={handleClick}
          sx={{ width: "100%" }}
        >
          got it
        </Button>
      </Stack>
    </Stack>
  );
};

export default Poppu;
