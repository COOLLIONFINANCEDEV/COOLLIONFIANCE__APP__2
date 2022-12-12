import {
  Box,
  Button,
  Card,
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

const ProjectCard = ({ setProjectDetails, ActionState = true }) => {
  const [shadow, setShadow] = React.useState(false);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: "calc((100%/2 - 20px))", md: "100%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
      variant={shadow === false ? "outlined" : "elevation"}
      onMouseEnter={() => setShadow(true)}
      onMouseLeave={() => setShadow(false)}
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
        <Stack
          sx={{ width: { xs: "100%", md: "40%" }, height: "100%" }}
          onClick={() => setProjectDetails(true)}
        >
          <CardMedia
            component={"img"}
            image={"https://picsum.photos/0/0"}
            sx={{ width: "100%", height: { xs: "400px", md: "200px" } }}
          />
          <Box
            sx={{
              width: "90%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "30%",
              margin: "10px auto",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "1em", fontWeight: "bold" }}
                color="primary.light"
              >
                Field Partner
              </Typography>
              <Typography
                sx={{
                  fontSize: "1em",
                  fontWeight: "bold",
                  wordBreak: "break-all",
                }}
              >
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
        </Stack>

        <CardContent sx={{ width: { xs: "95%", md: "60%" }, height: "100%" }}>
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
                onClick={() => setProjectDetails(true)}
              >
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
              {ActionState === true && (
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: { xs: "center", md: "flex-end" },
                    alignitems: "center",
                    width: { xs: "100%", md: "60%" },
                    columnGap: "20px",
                    rowGap: "20px",
                    flexWrap: "wrap",
                    margin: 0,
                    padding: 0,
                    transform: "translate(-10px,0)",
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
                  <Box sx={{ marginBottom: "20px" }}>
                    <Button variant="contained" color="primary">
                      Lend now
                    </Button>
                  </Box>
                </CardActions>
              )}
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              flexWrap="wrap"
              rowGap="5px"
              sx={{ width: "100%" }}
              onClick={() => setProjectDetails(true)}
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
            </Stack>
            <Box sx={{ width: "100%" }} onClick={() => setProjectDetails(true)}>
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
            <Box sx={{ width: "100%" }} onClick={() => setProjectDetails(true)}>
              <LinearProgessCustomize value={30} />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10px",
              }}
              onClick={() => setProjectDetails(true)}
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
      </Stack>
    </Card>
  );
};

export default ProjectCard;
