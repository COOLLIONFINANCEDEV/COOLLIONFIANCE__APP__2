import { Box, Divider, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard";
import Search from "../Search";
// eslint-disable-next-line no-unused-vars
import TabSelect from "../TabSelect";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { useTheme } from "@emotion/react";
import ProjectStatus from "../../Context/Filters/ProjectStatus";

const ProjectContent = ({ setProjectDetails }) => {
  const { palette } = useTheme();
  // eslint-disable-next-line no-unused-vars
  const tabItems = ProjectStatus();
  return (
    <Stack
      sx={{
        width: { xs: "80%", md: '"70.5%"' },
        margin: "0 0 0 1%",
        backgroundColor: palette.secondary.light,
        border: "1px solid ",
        borderColor: palette.secondary.main,
        borderRadius: "10px",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ width: "96%" }}
      >
        {/* <TabSelect items={tabItems} TabWidth={{ width: "max-content" }} /> */}
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
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ width: "100%" }}
          direction="row"
          rowGap="40px"
          flexWrap={"wrap"}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => (
            <ProjectCard key={key} setProjectDetails={setProjectDetails} />
          ))}
          <Box>
            <Pagination
              count={10}
              color="primary"
              sx={{ margin: "10px 0 30px 0" }}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectContent;
