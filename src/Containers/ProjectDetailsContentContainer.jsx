import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import ProjectDetailsImg from "../components/ProjectDetails/ProjectDetailsImg";
import ProjectDetailsInformation from "../components/ProjectDetails/ProjectDetailsInformation";
import ProjectDetailsInvestigator from "../components/ProjectDetails/ProjectDetailsInvestigator";
import ProjectDetailsLoan from "../components/ProjectDetails/ProjectDetailsLoan";
import ProjectDetailsLocation from "../components/ProjectDetails/ProjectDetailsLocation";
import ProjectDetailsProfile from "../components/ProjectDetails/ProjectDetailsProfile";
// import ProjectDetailsProposition from "../components/ProjectDetails/ProjectDetailsProposition";
// import ProjectDetailsSpecial from "../components/ProjectDetails/ProjectDetailsSpecial";
import ProjectDetailsStory from "../components/ProjectDetails/ProjectDetailsStory";

const ProjectDetailsContentContainer = ({ offer }) => {
  const { palette } = useTheme();
  const ProjectDetailsContentStyle = {
    width: "cacl(100% - 19px)",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.dark,
    padding: "15px",
  };

  return (
    <Box sx={ProjectDetailsContentStyle}>
      <ProjectDetailsProfile offer={offer} />
      <ProjectDetailsLoan offer={offer} />
      <ProjectDetailsImg offer={offer} />
      <ProjectDetailsStory offer={offer} />
      {/* <ProjectDetailsSpecial offer={offer} /> */}
      <ProjectDetailsInformation offer={offer} />
      <ProjectDetailsLocation offer={offer} />
      {/* <ProjectDetailsProposition /> */}
      <ProjectDetailsInvestigator offer={offer} />
    </Box>
  );
};

export default ProjectDetailsContentContainer;
