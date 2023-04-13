import { useTheme } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Ownloan = () => {
  const theme = useTheme();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: theme.width }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
          margin: "auto",
          oveflow: "hidden",
          marginTop: "calc(10vh - 25px)",
          backgroundColor: theme.palette.secondary.light,
          boxShadow: theme.shadows[2],
          borderRadius: "10px",
        }}
      >
        <Stack
          spacing={2}
          sx={{ width: "100%", minHeight: "100px", padding: "25px 25px" }}
          variant={"outlined"}
        >
          <Typography variant="h3" color={"primary"}>
            Invest with our help
          </Typography>
          <Typography>
            If you want to entrust us with the management of your funds, we
            offer our assisted investment service. Together, we will define your
            investor profile and select the projects that best suit your goals.
          </Typography>
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"flex-end"}
          >
            <Button variant="contained">
              Entrust the management of my money
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Ownloan;
