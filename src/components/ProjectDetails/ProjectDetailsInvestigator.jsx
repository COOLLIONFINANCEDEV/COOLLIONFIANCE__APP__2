import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsInvestigator = () => {
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
          alignItems: "flex-start",
          flexDirection: "column",
          rowGap: "40px",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>
          Contributing lenders
        </Typography>
        <Typography sx={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          POWERED BY 342 LENDERS
        </Typography>
        <Box sx={{ width: "80%" }}>
          {["sylla ibrahim", "other name", "troare name"].map((items, key) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignitems: "center",
                width: "100%",
                margin: "15px 0",
              }}
              key={key}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyConten: "center",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://source.unsplash.com/random?face"
                  sx={{ width: 100, height: 100 }}
                />
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {items}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyConten: "center",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="https://source.unsplash.com/random?animal"
                  sx={{ width: 100, height: 100 }}
                />
                <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                  John Doe
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetailsInvestigator;
