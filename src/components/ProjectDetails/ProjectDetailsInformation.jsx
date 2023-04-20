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
            fontWeight: "bold",
            TextTransform: "capitalize",
            textAlign: { xs: "center", md: "auto" },
          }}
          variant="h5"
        >
          More about this loan
        </Typography>
        <Typography
          sx={{
            textAlign: { xs: "center", md: "justify", wordBreak: "break-all" },
          }}
        >
          {offer?.loanInformation}
        </Typography>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              TextTransform: "capitalize",
              textAlign: { xs: "center", md: "auto" },
            }}
            variant="h5"
          >
            Why this loan is special ?
          </Typography>
          <Typography
            sx={{
              textAlign: { xs: "center", md: "justify" },
            }}
          >
            {offer?.loanApplicationSpecial}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetailsInformation;
