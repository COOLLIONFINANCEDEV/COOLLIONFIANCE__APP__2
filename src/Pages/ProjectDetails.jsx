import * as React from "react";
import { Fade, Modal, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";

import ProjectDetailsAction from "../components/ProjectDetails/ProjectDetailsSAction";
import ProjectDetailsControls from "../components/ProjectDetails/ProjectDetailsControls";
import ProjectDetailsContentContainer from "../Containers/ProjectDetailsContentContainer";

const ProjectDetails = ({ projectDetails, setProjectDetails }) => {
  const { palette } = useTheme();
  const ProjectDetailsContainerStyle = {
    width: { xs: "100%", sm: "85%", md: "70%" },
    height: "100%",
    transition: "width 2s ease-in-out",
    maxHeight: "100vh",
    overflowY: "scroll !important",
    position: "absolute",
    top: "0%",
    right: "0%",
    backgroundColor: palette.secondary.dark,
  };

  return (
    <Modal
      open={projectDetails.state}
      onClose={() => setProjectDetails({ state: false, offer: null })}
    >
      <Fade in={projectDetails.state}>
        <Stack sx={ProjectDetailsContainerStyle}>
          <ProjectDetailsAction setProjectDetails={setProjectDetails} />
          <ProjectDetailsControls offer={projectDetails.offer} />
          <ProjectDetailsContentContainer offer={projectDetails.offer} />
        </Stack>
      </Fade>
    </Modal>
  );
};

export default ProjectDetails;
