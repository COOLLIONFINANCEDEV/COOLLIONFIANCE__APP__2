import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsInformation = ({ offer }) => {
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
            marginBottom: "10px",
            textAlign: { xs: "center", md: "auto" },
          }}
        >
          More about this loan
        </Typography>
        <Typography
          sx={{
            fontSize: "1.2rem",
            textAlign: { xs: "center", md: "justify", wordBreak: "break-all" },
          }}
        >
          {offer?.loan_about}
        </Typography>
        {/* <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              TextTransform: "capitalize",
              textAlign: { xs: "center", md: "auto" },
            }}
          >
            About Friendship Bridge:
          </Typography>
          <Typography
            sx={{
              fontSize: "1.2rem",
              textAlign: { xs: "center", md: "justify" },
            }}
          >
            {offer?.about_friendship_bridge}
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ProjectDetailsInformation;
