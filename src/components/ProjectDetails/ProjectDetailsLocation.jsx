import { useTheme } from "@emotion/react";
import { Box, Button, Link, Stack } from "@mui/material";
import React from "react";

const ProjectDetailsLocation = ({ offer }) => {
  const { palette } = useTheme();
  const localisation =
    offer?.localisation === undefined ? {} : JSON.parse(offer?.localisation);
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
      <Box sx={{ width: "100%", position: "relative" }}>
        <iframe
          src="https://www.google.com/maps/embed"
          width="100%"
          height="450"
          title="helo"
          style={{ border: "0" }}
        ></iframe>
        <Link
          href={localisation?.maps?.googleMaps}
          target="_blank"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            width: "100%",
            height: "450px",
            zIndex: 5,
          }}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ width: "100%", height: "100%" }}
          >
            <Button variant="contained">
              Click here for more information on localisation
            </Button>
          </Stack>
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectDetailsLocation;
