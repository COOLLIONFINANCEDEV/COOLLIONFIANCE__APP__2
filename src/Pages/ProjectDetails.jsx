import * as React from "react";
import Box from "@mui/material/Box";
import { Fade, Modal } from "@mui/material";
import { useTheme } from "@emotion/react";

import ProjectDetailsAction from "../components/ProjectDetails/ProjectDetailsSAction";
import ProjectDetailsProfile from "../components/ProjectDetails/ProjectDetailsProfile";
import ProjectDetailsImg from "../components/ProjectDetails/ProjectDetailsImg";
import ProjectDetailsStory from "../components/ProjectDetails/ProjectDetailsStory";
import ProjectDetailsSpecial from "../components/ProjectDetails/ProjectDetailsSpecial";
import ProjectDetailsInformation from "../components/ProjectDetails/ProjectDetailsInformation";
import ProjectDetailsLocation from "../components/ProjectDetails/ProjectDetailsLocation";
import ProjectDetailsProposition from "../components/ProjectDetails/ProjectDetailsProposition";
import ProjectDetailsInvestigator from "../components/ProjectDetails/ProjectDetailsInvestigator";

const ProjectDetails = ({ projectDetails, setProjectDetails }) => {
  const { palette } = useTheme();
  const ProjectDetailsContainerStyle = {
    width: { xs: "100%", sm: "70%" },
    height: "100%",
    transition: "width 2s ease-in-out",
    maxHeight: "100vh",
    overflowY: "scroll !important",
    position: "absolute",
    top: "0%",
    right: "0%",
  };

  const ProjectDetailsContentStyle = {
    width: "cacl(100% - 19px)",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.dark,
    padding: "15px",
  };

  return (
    <Modal open={projectDetails} onClose={() => setProjectDetails(false)}>
      <Fade in={projectDetails}>
        <Box sx={ProjectDetailsContainerStyle}>
          <ProjectDetailsAction setProjectDetails={setProjectDetails} />
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
        </Box>
      </Fade>
    </Modal>
  );
};

export default ProjectDetails;
