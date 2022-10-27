import { Box } from "@mui/material";
import React from "react";

const LinearProgress = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          {...props}
          sx={{ height: "8px", borderRadius: "10px" }}
        />
      </Box>
      {/* <Box>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              props.value
            )}%`}</Typography>
          </Box> */}
    </Box>
  );
};

export default LinearProgress;
