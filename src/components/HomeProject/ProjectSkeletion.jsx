import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";

const ProjectSkeleton = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "calc((100%/2 - 20px))", md: "100%" },
      }}
      justifyContent="center"
      alignItems={"flex-start"}
      direction={"row"}
    >
      <Stack
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
          cursor: "pointer",
        }}
      >
        <Stack sx={{ width: { xs: "100%", md: "40%" }, height: "100%" }}>
          <Skeleton
            variant="rounded"
            sx={{ width: "100%", height: { xs: "400px", md: "200px" } }}
          />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        </Stack>

        <Stack
          sx={{
            width: { xs: "95%", md: "60%" },
            height: "100%",
            margin: "0 10px",
          }}
        >
          <Stack spacing={1.5}>
            <Stack
              justifyContent="space-between"
              sx={{ width: "100%", flexDirection: { xs: "column", md: "row" } }}
              flexWrap="wrap"
              rowGap={"20px"}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "30%" },
                  textAlign: { xs: "center", md: "auto" },
                }}
              >
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              </Box>
              <Stack
                sx={{
                  width: { xs: "100%", md: "60%" },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    alignitems: "center",
                    columnGap: "20px",
                    rowGap: "20px",
                    flexWrap: "wrap",
                    margin: 0,
                    padding: 0,
                    transform: "translate(-17px,0)",
                  }}
                >
                  <Box sx={{ width: "35%" }}>
                    <Skeleton
                      variant="rounded"
                      sx={{ fontSize: "1rem" }}
                      width={"100px"}
                      height={"50px"}
                    />
                  </Box>
                  <Box>
                    <Skeleton
                      variant="rounded"
                      sx={{ fontSize: "1rem" }}
                      width={"100px"}
                      height={"50px"}
                    />
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
              rowGap="5px"
              sx={{ width: "100%" }}
            >
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={"30%"}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem" }}
                width={"30%"}
              />
            </Stack>
            <Box sx={{ width: "100%" }}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectSkeleton;
