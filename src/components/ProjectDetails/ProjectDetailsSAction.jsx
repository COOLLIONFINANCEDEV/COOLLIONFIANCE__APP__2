import { Button, IconButton, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ProjectDetailsLink, ProjectGlobalLink } from "../../Router/Routes";
import { useTheme } from "@emotion/react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";

const ProjectDetailsAction = ({ setProjectDetails }) => {
  const { palette } = useTheme();

  return (
    <Stack
      sx={{
        width: "cacl(100% - 25px)",
        marginTop: "15px",
        background: palette.secondary.dark,
        margin: "0",
        padding: "0 10px 0 25px",
        borderRadius: { xs: "0 0 0 0", sm: "15px 0 0 0" },
      }}
      justifyContent="space-between"
      alignitems="center"
      direction={"row"}
    >
      <IconButton onClick={() => setProjectDetails(false)}>
        <ArrowBackIosIcon fontSize="large" />
      </IconButton>
      <Link to={ProjectGlobalLink() + "/" + ProjectDetailsLink(1)}>
        <Button startIcon={<OpenInNewIcon fontSize="medium" />}>
          <Typography
            sx={{
              fontSize: "1.1em",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {" "}
            Open Job In a New Window
          </Typography>
        </Button>
      </Link>
    </Stack>
  );
};

export default ProjectDetailsAction;
