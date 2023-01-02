import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import defaultImage from "../../assets/imgs/card.png";

const ProjectDetailsImg = ({ offer }) => {
  const { palette } = useTheme();
  const image = offer?.image === "Undefined" ? defaultImage : offer?.image;
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
      <img
        src={image}
        alt="exemple"
        style={{ maxHeight: "50vh", borderRadius: "15px" }}
      />
    </Box>
  );
};

export default ProjectDetailsImg;
