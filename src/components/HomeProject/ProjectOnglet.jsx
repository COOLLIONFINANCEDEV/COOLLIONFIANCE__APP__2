import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Filter from "../Filter";
import FormRadio from "../FormRadio";

const ProjectOnglet = () => {
  const { palette } = useTheme();
  const tab = [true, false, false, false, false, false, false, false];

  return (
    <Stack
      sx={{
        width: "20%",
        minWidth:"150px",
        display: { xs: "none", md: "flex" },
        rowGap: "15px",
        oveflow: "hidden",
        backgroundColor: palette.secondary.light,
        padding: " 20px 2.5%",
        overflow: "hidden",
        border: "1px solid ",
        borderColor: palette.secondary.main,
        borderRadius: "10px",
      }}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Button variant="standard" startIcon={<RestartAltIcon />}>
        <Typography sx={{ fontSize: "1.5em" }}>Reset All</Typography>
      </Button>
      <Divider sx={{ width: "100%" }} />
      <FormRadio />
      <Divider sx={{ width: "100%" }} />
      <Box sx={{ width: "100%" }}>
        {[
          "Sort Order",
          "Location",
          "Sectors",
          "Attributes",
          "Tags",
          "Loan Length",
          "Loan Distribution",
        ].map((item, key) => (
          <React.Fragment key={key}>
            <Filter title={item} expanded={tab[key]} />
            <Divider sx={{ width: "100%" }} />
          </React.Fragment>
        ))}
      </Box>
    </Stack>
  );
};

export default ProjectOnglet;
