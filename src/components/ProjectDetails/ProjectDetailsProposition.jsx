import { useTheme } from "@emotion/react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsProposition = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        width: "cacl(100% - 20px)",
        border: "1px solid",
        borderColor: palette.secondary.main,
        backgroundColor: palette.secondary.light,
        padding: "15px",
        borderRadius: "15px",
        marginTop: "15px",
        display: "flex",
        justifyContent: "center",
        alignitems: "center",
      }}
    >
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "40px",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          Guatemala at a glance
        </Typography>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              $5,300
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              AVERAGE ANNUAL INCOME (USD)
            </Typography>
          </Box>

          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
              92
            </Typography>
            <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
              LOANS CURRENTLY FUNDRAISING
            </Typography>
          </Box>
        </Box>
        <Button size="large" variant="contained">
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Find More Borrowers in Guatemala
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectDetailsProposition;
