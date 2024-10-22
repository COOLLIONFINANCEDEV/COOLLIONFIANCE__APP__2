import { IconButton, Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const ProjectDetailsAction = ({ setProjectDetails }) => {
  const { palette } = useTheme();

  return (
    <Stack
      sx={{
        width: "cacl(100% - 25px)",
        marginTop: "15px",
        background: palette.secondary.dark,
        margin: "0",
        padding: "10px 10px 10px 25px",
        borderRadius: { xs: "0 0 0 0", sm: "15px 0 0 0" },
      }}
      justifyContent="space-between"
      alignitems="center"
      direction={"row"}
    >
      <IconButton
        onClick={() => setProjectDetails({ state: false, offer: null })}
        sx={{ alignSelf: "flex-end", justifySelf: "flex-start" }}
      >
        <ClearIcon fontSize="large" />
      </IconButton>
      {/* <Redirect
        link={ProjectGlobalLink() + "/" + ProjectDetailsLink(1)}
        target={true}
      >
        <Button
          startIcon={<OpenInNewIcon fontSize="medium" />}
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.1em",
              fontWeight: "bold",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {" "}
            Open in New Window
          </Typography>
        </Button>
      </Redirect> */}
    </Stack>
  );
};

export default ProjectDetailsAction;
