import React from "react";
import LinearProgessCustomize from "../../components/LinearProgessCustomize";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Man4Icon from "@mui/icons-material/Man4";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useTheme } from "@emotion/react";

import {
  Avatar,
  Box,
  Button,
  Chip,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";

const ProjectDetailsProfile = () => {
  const { palette } = useTheme();
  const ProjectDetailsProfileStyle = {
    width: "cacl(100% - 20px)",
    border: "1px solid",
    borderColor: palette.secondary.main,
    backgroundColor: palette.secondary.light,
    padding: "15px",
    borderRadius: "15px",
  };

  return (
    <Box sx={ProjectDetailsProfileStyle}>
      <Stack
        sx={{
          width: "calc(100% - 20px)",
        }}
        alignItems="center"
        direction={{ xs: "column", sm: "row" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://picsum.photos/0/0/random?face"
            sx={{ width: "110px", height: "110px", margin: "15px" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            rowGap: "10px",
            flexDirection: "column",
            minWidth: "45%",
          }}
        >
          <Typography
            sx={{
              fontSize: "2.3em",
              fontWeight: "bold",
              textTransform: "capitalize",
              textAlign:'center'
            }}
          >
            De Gorazon Group
          </Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgessCustomize value={60} />
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "1.3em", fontWeight: "bold" }}>
                  26 days
                </Typography>
                <Typography sx={{ color: "gray" }}>REMANING</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "1.3em", fontWeight: "bold" }}>
                  $935 to go
                </Typography>
                <Typography sx={{ color: "gray" }}>77% FUNDED</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Stack>

      <Box sx={{ width: "calc(100% - 20px)", margin: "5px 15px" }}>
        <Typography
          sx={{ width: "100%", fontSize: "1.8em", fontWeight: "bold" }}
        >
          A loan of $4,075 help a member to bur a large supply of beads of many
          colors. She will use the money to buy more beads and to pay for the
          labor of.
        </Typography>
      </Box>

      <Box
        sx={{
          width: "calc(100% - 20px)",
          margin: "15px 15px",
          display: "flex",
          justifyContent: "flex-start",
          alginItems: "center",
          columnGap: "20px",
        }}
      >
        <Chip icon={<LocationOnIcon />} label="GUATEMALA" />
        <Chip label="RETAIL" />
      </Box>

      <Box sx={{ width: "calc(100% - 20px)", margin: "15px 15px" }}>
        <Typography
          sx={{
            fontSize: "1.5em",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Help fund this loan
        </Typography>
        <Stack
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignContent: "center",
          }}
          justifyContent="space-between"
          alignItems={'center'}
          rowGap='20px'
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignContent: "center",
              columnGap: "15px",
            }}
          >
            <Box sx={{width:"47.5%"}}>
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
            <Box sx={{width:"47.5%"}}>
              <Button variant="contained" color="primary" size="large" sx={{width:'100%'}}>
                Lend now
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: {xs:"flex-start",md:'flex-end'},
              alignContent: "center",
              columnGap: "15px",
            }}
          >
            <Button startIcon={<Man4Icon />} variant="outlined" sx={{width:{xs:'47.5%',md:'auto'}}}>
              Borrower Story
            </Button>
            <Button variant="outlined" startIcon={<FormatListBulletedIcon />} sx={{width:{xs:'47.5%',md:'auto'}}}>
              Loan Details
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default ProjectDetailsProfile;
