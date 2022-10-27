import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logoBleu from "../assets/icons/logoBleu.png";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ExploreIcon from "@mui/icons-material/Explore";
import Search from '../components/Search';
const Navbar = () => {
  return (
    <Box component={'div'} sx={{overflow:'hidden'}}>
      <AppBar component={'nav'} position='static'>
        <Toolbar
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            direction="row"
            justifyContent={"space-between"}
            sx={{ width: "90%" }}
          >


            <IconButton
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon fontSize="medium" />
            </IconButton>



            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                columnGap:'3rem'
              }}
            >
              <Logo />

            <Search color="secondary"/>
            </Box>



            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Logo widthImg={90} />
            </Box>



            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                size="large"
                color="inherit"
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <SearchIcon fontSize="medium" />
              </IconButton>
            </Box>



            <Stack
              direction={"row"}
              sx={{ width: "max-content", display: { xs: "none", md: "flex" } }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              {/* <Box>
              <Button
                variant="standard"
                color="sedondary"
                startIcon={<ExploreIcon color="secondary" />}
              >
                Explore
              </Button>
            </Box> */}
              <Box>
                <Button
                  variant="standard"
                  color="sedondary"
                  startIcon={<ShoppingCartIcon color="secondary" />}
                >
                  <Typography variant="p">cart</Typography>
                </Button>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<CreditCardIcon color="secondary" />}
                >
                  <Typography variant={"p"}>Become Borrower</Typography>
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<JoinFullIcon color="secondray" />}
                >
                  <Typography variant={"p"}>Connect Wallet</Typography>
                </Button>
              </Box>
            </Stack>


          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const Logo = ({ widthImg = 80 }) => {
  return (
    <Box sx={{ width: "80px" }}>
      <img src={logoBleu} alt="logo" style={{ width: `${widthImg}%` }} />
    </Box>
  );
};

export default Navbar;
