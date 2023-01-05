import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Filter from "../Filter";
import ProjectFilterItems from "../../Context/Filters/ProjectFilterItems";

const ProjectOnglet = () => {
  const { palette } = useTheme();
  return (
    <Stack
      sx={{
        width: "25%",
        minWidth: "200px",
        display: { xs: "none", md: "flex" },
        rowGap: "15px",
        oveflow: "hidden",
        backgroundColor: palette.secondary.light,
        padding: " 20px 1.5%",
        overflow: "hidden",
        border: "1px solid ",
        borderColor: palette.secondary.main,
        borderRadius: "10px",
      }}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Button
       disabled
        variant="standard"
        startIcon={<FilterAltIcon />}
        sx={{ width: "100%" }}
      >
        <Typography sx={{ fontSize: "1.2em" }}>filters</Typography>
      </Button>
      <Divider sx={{ width: "100%" }} />
      <Box sx={{ width: "100%" }}>
        <Filter Items={ProjectFilterItems()} />
      </Box>
    </Stack>
  );
};

export default ProjectOnglet;
