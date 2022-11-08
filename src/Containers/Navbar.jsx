import React from "react";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Stack,
  Avatar,
  Badge,
  Tooltip,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import logoBleu from "../assets/icons/logoBleu.png";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "../components/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  BorrowerRoutLink,
  CartRouteLink,
  HomeRouteLink,
  LoginRouteLink,
  SettingsRouteLink,
} from "../Router/Routes";
import { Link, useNavigate } from "react-router-dom";
import Redirect from "../Helpers/Redirect";
import { useSelector, useDispatch } from "react-redux";
import { selectLogin } from "../features/Login/LoginSlice";
import { Logout, Settings } from "@mui/icons-material";
import { SignOut } from "../features/Login/LoginSlice";

const Navbar = () => {
  const loginState = useSelector(selectLogin);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box component={"div"} sx={{ overflow: "hidden" }}>
      <AppBar component={"nav"} position="static">
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
                columnGap: "3rem",
              }}
            >
              <Link to={HomeRouteLink()}>
                <IconButton>
                  <Logo />
                </IconButton>
              </Link>
              <Search color="secondary" />
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
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Redirect link={CartRouteLink()}>
                  <Button
                    variant="standard"
                    color="sedondary"
                    startIcon={
                      <>
                        <Badge badgeContent={1} color="secondary">
                          <ShoppingCartIcon color="secondary" />
                        </Badge>
                      </>
                    }
                  >
                    <Typography variant="p">cart</Typography>
                  </Button>
                </Redirect>
              </Box>

              {loginState.isAuthenticated === false ? (
                <>
                  <Box>
                    <Redirect link={BorrowerRoutLink()} target={true}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={<CreditCardIcon color="secondary" />}
                      >
                        <Typography variant={"p"}>Become Borrower</Typography>
                      </Button>
                    </Redirect>
                  </Box>

                  <Box>
                    <Redirect link={LoginRouteLink()}>
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<JoinFullIcon color="secondray" />}
                      >
                        <Typography variant={"p"}>Connect Wallet</Typography>
                      </Button>
                    </Redirect>
                  </Box>
                </>
              ) : (
                <>
                  <Box>
                    <Tooltip title="Notification" color="secondary">
                      <IconButton>
                        <Badge badgeContent={3} color="secondary" size="small">
                          <NotificationsIcon color="secondary" />
                        </Badge>
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box>
                    <Tooltip title="Help" color="secondary">
                      <IconButton>
                        <QuestionMarkIcon color="secondary" />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Box>
                    <IconButton
                      onClick={handleClick}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="https://source.unsplash.com/random?face"
                        size="small"
                      />
                    </IconButton>
                    <NavBarMenu
                      anchorEl={anchorEl}
                      open={open}
                      handleClose={handleClose}
                      user={loginState.user}
                    />
                  </Box>
                </>
              )}
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
const NavBarMenu = ({ anchorEl, open, handleClose, user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = React.useCallback(() => {
    navigate(HomeRouteLink());
    dispatch(SignOut());
    window.scrollTo(0, 0);
  }, [dispatch,navigate]);
  return (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>
        <Avatar
          alt="Remy Sharp"
          src="https://source.unsplash.com/random?face"
          size="small"
        />{" "}
        <Typography variant="p" sx={{ padding: "0 70px 0 0" }}>
          {user.name} {user.lastName} (lender)
        </Typography>
      </MenuItem>
      <Divider />
      <Redirect link={SettingsRouteLink()}>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </Redirect>
      <MenuItem onClick={logout}>
        <ListItemIcon>
          <Logout fontSize="small" color="error" />
        </ListItemIcon>
        <Typography color="error">Logout</Typography>
      </MenuItem>
    </Menu>
  );
};
export default Navbar;
