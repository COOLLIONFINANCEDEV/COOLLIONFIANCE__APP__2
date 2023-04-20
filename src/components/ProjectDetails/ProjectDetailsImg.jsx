import { useTheme } from "@emotion/react";
import { Stack } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

const ProjectDetailsImg = ({ offer }) => {
  const { palette } = useTheme();
  return (
    <Carousel
      sx={{
        width: "cacl(100% - 20px)",
        border: "1px solid",
        borderColor: palette.secondary.main,
        backgroundColor: palette.secondary.light,
        padding: "15px",
        borderRadius: "15px",
        marginTop: "15px",
      }}
    >
      {offer?.carouselImage.map((item) => (
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          key={item.title}
        >
          <img
            src={item.image}
            alt={item.title}
            style={{ height: "300px", width: "auto", borderRadius: "15px" }}
          />
        </Stack>
      ))}
    </Carousel>
  );
};

export default ProjectDetailsImg;
