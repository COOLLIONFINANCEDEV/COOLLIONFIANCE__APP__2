import { Box, Pagination, Stack } from "@mui/material";
import React from "react";
import ProjectCard from "../ProjectCard";
import Search from "../Search";
// eslint-disable-next-line no-unused-vars
import TabSelect from "../TabSelect";
import { useTheme } from "@emotion/react";
import ProjectStatus from "../../Context/Filters/ProjectStatus";
import ProjectSkeleton from "./ProjectSkeletion";
import { useDispatch, useSelector } from "react-redux";
import {
  AddAllOffers,
  selectedOffers,
} from "../../features/Offers/OffersSlice";
import SessionService from "../../Services/SessionService";

const ProjectContent = ({ setProjectDetails }) => {
  const { palette } = useTheme();
  const tabItems = ProjectStatus();
  const [value, setValue] = React.useState(0);
  const [skeletonState, setSkeletionState] = React.useState(true);
  const dispatch = useDispatch();
  const offers = useSelector(selectedOffers).offers;

  const hanbleChange = React.useCallback(
    (item) => {
      setValue(item);
    },
    [setValue]
  );

  const checkOffer = React.useCallback(() => {
    if (offers !== null) {
      setSkeletionState(false);
    }
  }, [offers]);

  React.useEffect(() => {
    if (offers === null) {
      setSkeletionState(true);
      SessionService.GetAllProject().then((data) => {
        if (data.error === false) {
          dispatch(AddAllOffers({ offers: data.data }));
          setSkeletionState(false);
        }
      });
    } else {
      setSkeletionState(false);
    }
  }, [checkOffer, dispatch, offers]);

  return (
    <Stack
      sx={{
        width: { xs: "95vw", sm: "80%", md: '"70.5%"' },
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
        <Stack
          justifyContent={"space-between"}
          alignItems="center"
          sx={{ width: "100%" }}
          direction="row"
          rowGap="40px"
          flexWrap={"wrap"}
        >
          {skeletonState === false
            ? offers.map((item) => {
                if (item.treat === true) {
                  return (
                    <ProjectCard
                      key={item.id}
                      setProjectDetails={setProjectDetails}
                      offer={item}
                    />
                  );
                }
                // eslint-disable-next-line array-callback-return
                return;
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <ProjectSkeleton key={item} />
              ))}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
