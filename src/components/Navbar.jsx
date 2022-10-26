import React from "react";
import styled from "@emotion/styled";
import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Box,
  Stack,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logoBleu from "../assets/icons/logoBleu.png";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ExploreIcon from "@mui/icons-material/Explore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "30vw",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
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
              }}
            >
              <Logo />

              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
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
