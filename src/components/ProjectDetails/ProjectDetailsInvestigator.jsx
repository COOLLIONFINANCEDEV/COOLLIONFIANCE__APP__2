import { useTheme } from "@emotion/react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const ProjectDetailsInvestigator = () => {
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
          alignItems: "flex-start",
          flexDirection: "column",
          rowGap: "40px",
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: { xs: "center", md: "auto" },
          }}
        >
          Contributing lenders
        </Typography>
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            textAlign: { xs: "center", md: "auto" },
          }}
        >
          POWERED BY 342 LENDERS
        </Typography>
        <Box sx={{ width: "90%" }}>
          {["sylla ibrahim", "other name", "troare name"].map((items, key) => (
            <Stack
              sx={{
                width: "100%",
                margin: "15px 0",
              }}
              alignItems="center"
              justifyContent='space-between'
              rowGap="20px"
              direction={'row'}
              flexWrap="wrap"
              key={key}
            >
              <InvestigatorAvatar name={items} />
              <InvestigatorAvatar name={items} />
            </Stack>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const InvestigatorAvatar = ({ name }) => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      columnGap="10px"
      direction={'column'}
    >
      <Avatar
        alt="Remy Sharp"
        src="https://picsum.photos/1024/1024?face"
        sx={{ width: 100, height: 100 }}
      />
      <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
        {name}
      </Typography>
    </Stack>
  );
};

export default ProjectDetailsInvestigator;
