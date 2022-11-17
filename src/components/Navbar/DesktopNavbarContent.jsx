import React from "react";
import {
  Button,
  IconButton,
  Typography,
  Box,
  Stack,
  Avatar,
  Badge,
  Tooltip,
} from "@mui/material";
import JoinFullIcon from "@mui/icons-material/JoinFull";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Search from "../../components/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import {
  BorrowerRoutLink,
  CartRouteLink,
  LoginRouteLink,
} from "../../Router/Routes";
import Redirect from "../../Helpers/Redirect";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";
import GoodRouteLInk from "../../Helpers/GoodRouteLInk";
import NavBarMenu from "./NavBarMenu";
import Logo from "./Logo";
import { BORROWER, LENDER } from "../../Context/Roles/roles";
import PostAddIcon from '@mui/icons-material/PostAdd';

const DesktopNavbarContent = ({
  AllLink,
  handleClick,
  handleClose,
  open,
  anchorEl,
}) => {
  const loginState = useSelector(selectLogin);
  const role = JSON.parse(loginState.user).role;
// const role ='LENDER';
  console.log(role,loginState)
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          columnGap: "3rem",
        }}
      >
        <GoodRouteLInk AllLink={AllLink}>
          <IconButton>
            <Logo />
          </IconButton>
        </GoodRouteLInk>
        <Search color="secondary" />
      </Box>
      <Stack
        direction={"row"}
        sx={{ width: "max-content", display: { xs: "none", md: "flex" } }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {role === LENDER() && (
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
        )}

        {role === BORROWER() && (
          <Box>
            <Redirect link={LoginRouteLink()}>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<PostAddIcon color="secondray" />}
              >
                <Typography variant={"p"}>Create New Project</Typography>
              </Button>
            </Redirect>
          </Box>
        )}

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
                user={JSON.parse(loginState.user)}
              />
            </Box>
          </>
        )}
      </Stack>
    </>
  );
};

export default DesktopNavbarContent;
