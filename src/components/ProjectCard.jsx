import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import React from "react";
import LinearProgessCustomize from "./LinearProgessCustomize";

const ProjectCard = ({ setProjectDetails }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <CardActionArea
        sx={{
          width: "100%",
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        onClick={() => setProjectDetails(true)}
      >
        <Box sx={{ width: "40%", height: "100%" }}>
          <CardMedia
            component={"img"}
            image={"https://source.unsplash.com/random?sig=1"}
            sx={{ width: "100%", height: "70%" }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "30%",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "1em", fontWeight: "bold" }}
                color="primary.light"
              >
                Field Partner
              </Typography>
              <Typography sx={{ fontSize: "1em", fontWeight: "bold" }}>
                Microbanco Confianca SA.
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "1em", fontWeight: "bold" }}
                color="primary.light"
              >
                Loan Length
              </Typography>
              <Typography sx={{ fontSize: "1em", fontWeight: "bold" }}>
                14 months
              </Typography>
            </Box>
          </Box>
        </Box>

        <CardContent sx={{ width: "60%", height: "100%" }}>
          <Stack spacing={1.5}>
            <Stack
              direction={"row"}
              justifyContent="space-between"
              sx={{ width: "100%" }}
            >
              <Box sx={{ width: "30%" }}>
                <Typography sx={{ fontSize: "1.6em", fontWeight: "bold" }}>
                  Stavros
                </Typography>
                <Typography
                  sx={{ fontSize: "1em", fontWeight: "bold" }}
                  color="primary.light"
                >
                  Albania
                </Typography>
              </Box>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignitems: "center",
                  width: "60%",
                  columnGap: "20px",
                }}
              >
                <Box sx={{ width: "35%" }}>
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      defaultValue="10"
                      size="small"
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>$35</MenuItem>
                      <MenuItem value={20}>$54</MenuItem>
                      <MenuItem value={30}>$100</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <Button variant="contained" color="primary">
                    Lend now
                  </Button>
                </Box>
              </CardActions>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
              rowGap="5px"
              sx={{ width: "30vw" }}
            >
              <Chip
                icon={<LocalOfferIcon />}
                size="small"
                label="Sector: Agriculture"
                variant="outlined"
                color="primary"
              />
              <Chip
                icon={<LocalOfferIcon />}
                size="small"
                label="Location: Brazil"
                variant="outlined"
                color="primary"
              />
              <Chip
                icon={<LocalOfferIcon />}
                size="small"
                label="Tags: Agriculture, Brazil"
                variant="outlined"
                color="primary"
              />
            </Stack>
            <Box sx={{ width: "30vw" }}>
              <Typography>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quisquam voluptas dolore! Est, dolores quia.{" "}
                <Typography
                  component="span"
                  color={"primary"}
                  sx={{ fontWeight: "bold" }}
                >
                  READ MORE
                </Typography>
              </Typography>
            </Box>
            <Box sx={{ width: "30vw" }}>
              <LinearProgessCustomize value={30} />
            </Box>
            <Box
              sx={{
                width: "30vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }}>
                Only 5 days left!{" "}
                <Typography
                  component={"span"}
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  $375 to go
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
