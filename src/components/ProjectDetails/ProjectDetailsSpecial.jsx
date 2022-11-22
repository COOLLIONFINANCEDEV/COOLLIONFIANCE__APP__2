import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsSpecial = () => {
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
        <Typography sx={{ fontSize: "2.3em", fontWeight: "bold" ,textAlign:{xs:'center',md:"auto"}}}>
          This loan is special because clients receive in-depth trainings on
          business, health, over-indebtedness, and self-esteem.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectDetailsSpecial;
