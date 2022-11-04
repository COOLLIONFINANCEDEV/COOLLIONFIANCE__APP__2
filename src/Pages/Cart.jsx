import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import logoBleu from "../assets/icons/logoBleu.png";
const Cart = () => {
  const { palette } = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: palette.secondary.dark,
        marginTop: "15vh",
      }}
    >
      <Box
        sx={{
          width: "80%",
          borderRadius: "10px",
          padding: "40px",
          backgroundColor: palette.secondary.light,
        }}
      >
        <Typography variant="h4" sx={{ color: palette.secondary.contrastText }}>
          Your basket
        </Typography>

        <Divider color={palette.secondary.main} />

        <Box
          sx={{
            marginTop: "10vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Avatar
              variant="rounded"
              alt="project"
              src="https://source.unsplash.com/random?face"
              sx={{ width: 150, height: 150 }}
            ></Avatar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                height: "150px",
                marginLeft: "25px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.5em" }}>
                De Corazon Group in Guatemala
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "1em" }}>
                Reservation expires in 10m 24s
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControl>
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
            <IconButton>
              <DeleteIcon fontSize={"large"} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "10vh",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Avatar
              variant="rounded"
              alt="project"
              src={logoBleu}
              sx={{ width: 150, height: 150 }}
            ></Avatar>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column",
                height: "150px",
                marginLeft: "25px",
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: "1.5em" }}>
                Donation to Cool Lion Finance Project
              </Typography>
              <Typography variant="h6" sx={{ fontSize: "1em" }}>
                As an international nonprofit, we’re committed to transparency
                about how your funds are used. 100% of money lent on Kiva goes
                to supporting borrowers. Your donations help us cover the costs
                of distributing these loans and reach more borrowers across the
                globe.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControl>
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
            <IconButton>
              <DeleteIcon fontSize={"large"} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            flexDirection: "column",
            rowGap:'30px'
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: palette.secondary.contrastText, marginTop: "10vh" }}
          >
            Total : $89
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap:'30px'
            }}
          >
            <Button variant="outlined" size='large'>Continue as Guest</Button>
            <Button variant="contained" size='large'>Continue</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
