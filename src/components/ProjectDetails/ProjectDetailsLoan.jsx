import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsFalseValue = [
  {
    Title: "loan length",
    Content: "8 month",
  },
  {
    Title: "interest rate",
    Content: "15%",
  },
  {
    Title: "Repayment schedule",
    Content: "Monthly",
  },
  {
    Title: "Disbursed date",
    Content: "November 18,2020",
  },
];

const ProjectDetailsLoan = () => {
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
      <Box sx={{ width: "80%", padding: "20px 0" }}>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            TextTransform: "capitalize",
            marginBottom: "30px",
            width: "100%",
            textAlign: "center",
          }}
        >
          Loan Details
        </Typography>
        {ProjectDetailsFalseValue.map((item) => {
          return (
            <ProjectDetailsLoanRow Title={item.Title} Content={item.Content} />
          );
        })}
      </Box>
    </Box>
  );
};

const ProjectDetailsLoanRow = ({ Title, Content }) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignitems={"center"}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.1em", fontStyle: "italic" }}
      >
        {Title}:
      </Typography>
      <Typography>{Content}</Typography>
    </Stack>
  );
};

export default ProjectDetailsLoan;
