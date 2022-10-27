import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Divider,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Search from "../components/Search";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import TabSelect from "../components/TabSelect";
import Filter from "./Filter";
import FormRadio from "../components/FormRadio";
import ProjectCard from "../components/ProjectCard";


const Projects = () => {
  const { palette } = useTheme();
  const tab = [true, false, false, false, false, false, false, false];
  const tabItems = [
    "All",
    "Active",
    "Completed",
    "Overdue",
    "Today",
    "This Week",
    "This Month",
    "This Year",
  ];
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "row",
          margin: "auto",
          oveflow: "hidden",
          marginTop: "15vh",
        }}
      >
        <Box
          sx={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            rowGap: "15px",
            oveflow: "hidden",
            backgroundColor: palette.secondary.light,
            padding: " 20px 2.5%",
            overflow: "hidden",
            border: "1px solid ",
            borderColor: palette.secondary.main,
            borderRadius: "10px",
          }}
        >
          <Button variant="standard" startIcon={<RestartAltIcon />}>
            <Typography sx={{ fontSize: "1.5em" }}>Reset All</Typography>
          </Button>
          <Divider sx={{ width: "100%" }} />
          <FormRadio />
          <Divider sx={{ width: "100%" }} />
          <Box sx={{ width: "100%" }}>
            {[
              "Sort Order",
              "Location",
              "Sectors",
              "Attributes",
              "Tags",
              "Loan Length",
              "Loan Distribution",
            ].map((item, key) => (
              <>
                <Filter title={item} expanded={tab[key]} key={key} />
                <Divider sx={{ width: "100%" }} />
              </>
            ))}
          </Box>
        </Box>

        <Box
          sx={{
            width: "70%",
            margin: "0 0 0 5%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: palette.secondary.light,
            border: "1px solid ",
            borderColor: palette.secondary.main,
            borderRadius: "10px",
          }}
        >
          <Stack spacing={3} justifyContent="center" alignItems="flex-start">
            <TabSelect items={tabItems} />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Search color="primary" />
            </Box>
            <Stack direction="row" spacing={1}>
              <RssFeedIcon color="primary" />
              <Typography component="p">
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  10 {"  "}
                </Typography>
                Loans Found
              </Typography>
            </Stack>
            <Divider sx={{ width: "100%" }} />
            <Stack
              justifyContent={"center"}
              alignItems="center"
              sx={{ width: "100%" }}
              spacing={7}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
                <ProjectCard key={key} />
              ))}
              <Box>
                <Pagination count={10} color="primary" />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};


export default Projects;
