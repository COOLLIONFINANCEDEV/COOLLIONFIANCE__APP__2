import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Filter from "../Filter";
import FormRadio from "../FormRadio";
import ProjectFilterItems from "../../Context/Filters/ProjectFilterItems";

const ProjectOnglet = () => {
  const { palette } = useTheme();
  const tab = [true, false, false, false, false, false, false, false];

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
      <Button variant="standard" startIcon={<RestartAltIcon />}>
        <Typography sx={{ fontSize: "1.2em" }}>Reset All</Typography>
      </Button>
      <Divider sx={{ width: "100%" }} />
      <Box sx={{ width: "100%" }}>
        <Filter Items={ProjectFilterItems()} />
      </Box>
    </Stack>
  );
};

export default ProjectOnglet;
