import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsStory = () => {
  const { palette } = useTheme();
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
      <Box
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
          flexDirection: "column",
          rowGap: "15px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            TextTransform: "capitalize",
          }}
        >
          De Corazon Group's story
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          sequi dolores minima nesciunt vero rerum maxime? Illo id, voluptas
          esse tenetur facere nam ipsa cupiditate earum. Distinctio animi quam
          ipsam?. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dicta laboriosam minima sapiente doloribus itaque deserunt aperiam
          quasi velit. Voluptates ea expedita omnis nam magnam reprehenderit
          mollitia ullam fugit quos aut!
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          sequi dolores minima nesciunt vero rerum maxime? Illo id, voluptas
          esse tenetur facere nam ipsa cupiditate earum. Distinctio animi quam
          ipsam?. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dicta laboriosam minima sapiente doloribus itaque deserunt aperiam
          quasi velit. Voluptates ea expedita omnis nam magnam reprehenderit
          mollitia ullam fugit quos aut!
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", textAlign: "justify" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          animi quam ipsam?.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProjectDetailsStory;
