import { Box, Divider, Pagination, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard";
import Search from "../Search";
// eslint-disable-next-line no-unused-vars
import TabSelect from "../TabSelect";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import { useTheme } from "@emotion/react";
import ProjectStatus from "../../Context/Filters/ProjectStatus";
import ProjectSkeleton from "./ProjectSkeletion";
import SessionService from "../../Services/SessionService";
import { useDispatch, useSelector } from "react-redux";
import { setPoppu } from "../../features/Poppu/PoppuSlice";
import { errorContent } from "../../Context/Content/AppContent";
import {
  AddAllOffers,
  selectedOffers,
} from "../../features/Offers/OffersSlice";
import { selectCompanies } from "../../features/Companies/CompaniesSlice";
import { selectFilter } from "../../features/Filter/FilterSlice";

const ProjectContent = ({ setProjectDetails }) => {
  const { palette } = useTheme();
  const tabItems = ProjectStatus();
  const [value, setValue] = React.useState(0);
  const [skeletonState, setSkeletionState] = React.useState(true);
  const dispatch = useDispatch();
  const offers = useSelector(selectedOffers).offers;
  const companies = useSelector(selectCompanies).companies;
  const filter = useSelector(selectFilter);

  React.useEffect(() => {
    console.log(filter);
  }, [filter]);

  const hanbleChange = React.useCallback(
    (item) => {
      setValue(item);
    },
    [setValue]
  );

  const checkOffer = React.useCallback(() => {
    if (offers !== null && companies !== null) {
      setSkeletionState(false);
    }
  }, [companies, offers]);

  React.useEffect(() => {
    if (offers === null) {
      setSkeletionState(true);
      SessionService.GetAllOffer()
        .then((datas) => {
          dispatch(AddAllOffers({ offers: datas.data.data }));
          checkOffer();
        })
        .catch((error) => {
          dispatch(setPoppu({ state: true, content: errorContent() }));
        });
    } else {
      setSkeletionState(false);
    }
  }, [checkOffer, dispatch, offers]);

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
        <TabSelect
          items={tabItems}
          TabWidth={{ width: "max-content" }}
          hanbleChange={hanbleChange}
          value={value}
        />

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
        {/* <Stack direction="row" spacing={1}>
          <RssFeedIcon color="primary" />
          <Typography component="p">
            <Typography component="span" sx={{ fontWeight: "bold" }}>
              {skeletonState === false && [...offers]?.lenght}
              {"  "}
            </Typography>
            Loans Found
          </Typography>
        </Stack> */}
        {/* <Divider sx={{ width: "100%" }} /> */}
        <Stack
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ width: "100%" }}
          direction="row"
          rowGap="40px"
          flexWrap={"wrap"}
        >
          {skeletonState === false
            ? offers.map((item) => (
                <ProjectCard
                  key={item.id}
                  setProjectDetails={setProjectDetails}
                  offer={item}
                />
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <ProjectSkeleton key={item} />
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
