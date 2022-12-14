import { Box, Button, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import React from "react";

const Poppu = ({ status, content,handleClose }) => {
  return (
    <Stack
      sx={{ padding: "10px 10px", minWidth: { xs: "70vw", md: "40vw" } }}
      alignItems="center"
      justifyContent={"space-between"}
      spacing={5}
    >
      <CheckCircleIcon sx={{ fontSize: 100 }} color={status} />
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.2em", textAlign: "center" }}
      >
        {content}
      </Typography>
      <Box>
        <Button
          startIcon={<ThumbUpAltIcon />}
          variant="contained"
          size="large"
          color={status}
          onClick={handleClose}
        >
          got it
        </Button>
      </Box>
    </Stack>
  );
};

export default Poppu;
