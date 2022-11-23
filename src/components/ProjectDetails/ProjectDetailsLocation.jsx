import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

const ProjectDetailsLocation = () => {
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7944.852407645024!2d-4.017898521685006!3d5.351742098827089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb1095843c27%3A0x2880d47914b202df!2sAgence%20ORANGE!5e0!3m2!1sfr!2sci!4v1667039718861!5m2!1sfr!2sci"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="helo"
        style={{ border: "0" }}
      ></iframe>
    </Box>
  );
};

export default ProjectDetailsLocation;
