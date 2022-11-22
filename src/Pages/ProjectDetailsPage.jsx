import React from "react";
import Box from "@mui/material/Box";
import {
  Stack,
} from "@mui/material";
import { useTheme } from "@emotion/react";


import ProjectDetailsProfile from "../components/ProjectDetails/ProjectDetailsProfile";
import ProjectDetailsImg from "../components/ProjectDetails/ProjectDetailsImg";
import ProjectDetailsStory from "../components/ProjectDetails/ProjectDetailsStory";
import ProjectDetailsSpecial from "../components/ProjectDetails/ProjectDetailsSpecial";
import ProjectDetailsInformation from "../components/ProjectDetails/ProjectDetailsInformation";
import ProjectDetailsLocation from "../components/ProjectDetails/ProjectDetailsLocation";
import ProjectDetailsProposition from "../components/ProjectDetails/ProjectDetailsProposition";
import ProjectDetailsInvestigator from "../components/ProjectDetails/ProjectDetailsInvestigator";

const ProjectDetailsPage = () => {
  const { palette } = useTheme();
  const ProjectDetailsContainerStyle = {
    width: '100%',
    height: "100%",
  };

  const ProjectDetailsContentStyle = {
    width: "cacl(100% - 19px)",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.dark,
    padding: "15px",
  };

  return (
    <Stack sx={ProjectDetailsContainerStyle}>
      <Box sx={ProjectDetailsContentStyle}>
        <ProjectDetailsProfile />
        <ProjectDetailsImg />
        <ProjectDetailsStory />
        <ProjectDetailsSpecial />
        <ProjectDetailsInformation />
        <ProjectDetailsLocation />
        <ProjectDetailsProposition />
        <ProjectDetailsInvestigator />
      </Box>
    </Stack>
  );
};

export default ProjectDetailsPage;
