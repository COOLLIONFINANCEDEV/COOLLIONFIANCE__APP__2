import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
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
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
        >
          Guatemala at a glance
        </Typography>
        <Stack
          sx={{
            width: "100%",
          }}
          justifyContent="space-between"
          alignItems="center"
          rowGap={"20px"}
          direction={{ xs: "column", md: "row" }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              $5,300
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}
            >
              AVERAGE ANNUAL INCOME (USD)
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              92
            </Typography>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "bold", textAlign: "center" }}
            >
              LOANS CURRENTLY FUNDRAISING
            </Typography>
          </Box>
        </Stack>
        <Button size="large" variant="contained">
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}
          >
            Find More Borrowers in Guatemala
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProjectDetailsProposition;
