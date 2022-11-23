import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsInformation = () => {
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
        <Typography sx={{ fontSize: "1.2rem",   textAlign: { xs: "center", md: "justify" }, }}>
          This loan is facilitated by our Field Partner, Friendship Bridge.
          Field Partners are local organizations working in communities to vet
          borrowers, provide services, and administer loans on the ground.
        </Typography>
        <Box>
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
          <Typography sx={{ fontSize: "1.2rem",   textAlign: { xs: "center", md: "justify" }, }}>
            This loan is administered by Friendship Bridge (FB), a nonprofit,
            nongovernmental organization that empowers thousands of impoverished
            Guatemalan women through its Microcredit Plus program. The program
            combines small loans averaging US$350 for four-to-twelve month loan
            terms with non-formal, participatory education. As FB clients, women
            start, expand, or diversify their businesses and learn practical
            lessons on topics including business, health, and self-esteem. FB’s
            clients borrow as a group, forming Trust Banks (groups of 7-25 women
            who serve as co-guarantors of the loan and act as a self-regulating
            support network).
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetailsInformation;
