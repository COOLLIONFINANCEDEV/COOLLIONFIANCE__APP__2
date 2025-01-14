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
import Search from "../../components/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  AdminBorrowerRouteLink,
  AdminLenderRouteLink,
  AdminProjectRouteLink,
  AdminSettingsRouteLink,
  BorrowerSettingsRouteLink,
  InvestmentRouteLink,
  LoginRouteLink,
  SettingsRouteLink,
} from "../../Router/Routes";
import Redirect from "../../Helpers/Redirect";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";
import GoodRouteLInk from "../../Helpers/GoodRouteLInk";
import NavBarMenu from "./NavBarMenu";
import Logo from "./Logo";
import { ADMIN, BORROWER, LENDER } from "../../Context/Roles/roles";
import PostAddIcon from "@mui/icons-material/PostAdd";
import CreateModal from "../Modal/CreateModal";
import GenerateModalButton from "../Modal/GenerateModalButton";
import CreateProject from "../CreateProject/CreateProject";
import CurrentRoute from "../../Helpers/CurrentRoute";
import VerifyValue from "../../Helpers/VerifyValue";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

const DesktopNavbarContent = ({
  AllLink,
  handleClick,
  handleClose,
  open,
  anchorEl,
}) => {
  const loginState = useSelector(selectLogin);
  const MenuLink = {
    LENDER: { link: SettingsRouteLink(), role: LENDER() },
    BORROWER: { link: BorrowerSettingsRouteLink(), role: BORROWER() },
    ADMIN: { link: AdminSettingsRouteLink(), role: ADMIN() },
  };
  const user = useSelector(selectLogin).user;
  return (
    <>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        justifyContent="center"
        alignItems="center"
        columnGap="3rem"
        direction="row"
      >
        <GoodRouteLInk AllLink={AllLink}>
          <IconButton>
            <Logo />
          </IconButton>
        </GoodRouteLInk>
        <Search color="secondary" />
      </Stack>

      <Stack
        direction={"row"}
        sx={{ width: "max-content", display: { xs: "none", md: "flex" } }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        {/* {role === LENDER() && (
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
        )}{" "} */}

        {loginState.isAuthenticated === true &&
          loginState.user.role === LENDER() && (
            <Box>
              <Redirect link={InvestmentRouteLink()}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<CurrencyExchangeIcon color="secondray" />}
                >
                  <Typography> my investment</Typography>
                </Button>
              </Redirect>
            </Box>
          )}

        {loginState.isAuthenticated === true &&
          loginState.user.role === BORROWER() && (
            <Box>
              <CreateModal
                OpenButton={GenerateModalButton}
                ModalContent={CreateProject}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<PostAddIcon color="secondray" />}
                >
                  <Typography variant={"p"}>Create Project</Typography>
                </Button>
              </CreateModal>
            </Box>
          )}

        {loginState.isAuthenticated === true &&
          loginState.user.role === ADMIN() && (
            <Box>
              {CurrentRoute(AdminProjectRouteLink()) && (
                <CreateModal
                  OpenButton={GenerateModalButton}
                  ModalContent={CreateProject}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PostAddIcon color="secondray" />}
                  >
                    <Typography variant={"p"}>Create Project</Typography>
                  </Button>
                </CreateModal>
              )}
              {CurrentRoute(AdminLenderRouteLink()) && (
                <CreateModal
                  OpenButton={GenerateModalButton}
                  ModalContent={CreateProject}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PostAddIcon color="secondray" />}
                  >
                    <Typography variant={"p"}>Create Lender</Typography>
                  </Button>
                </CreateModal>
              )}{" "}
              {CurrentRoute(AdminBorrowerRouteLink()) && (
                <CreateModal
                  OpenButton={GenerateModalButton}
                  ModalContent={CreateProject}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<PostAddIcon color="secondray" />}
                  >
                    <Typography variant={"p"}>Create Borrower</Typography>
                  </Button>
                </CreateModal>
              )}
            </Box>
          )}

        {loginState.isAuthenticated === false ? (
          <>
            {/* <Box>
              <Redirect link={LoginRouteLink()} target={false}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<CreditCardIcon color="secondary" />}
                >
                  <Typography variant={"p"}>Become Borrower</Typography>
                </Button>
              </Redirect>
            </Box> */}

            <Box>
              <Redirect link={LoginRouteLink()}>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<JoinFullIcon color="secondray" />}
                >
                  <Typography variant={"p"}>Sign In / Sign Up</Typography>
                </Button>
              </Redirect>
            </Box>
          </>
        ) : (
          <>
            <Box>
              <Tooltip title="Notification" color="secondary">
                <IconButton>
                  <Badge badgeContent={0} color="secondary" size="small">
                    <NotificationsIcon color="secondary" />
                  </Badge>
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
                <Avatar alt="Remy Sharp" src={user.image} size="small">
                  {VerifyValue(user.image) === "" && <AccountCircleIcon />}
                </Avatar>
              </IconButton>
              <NavBarMenu
                anchorEl={anchorEl}
                open={open}
                handleClose={handleClose}
                user={loginState.user}
                MenuLink={MenuLink}
              />
            </Box>
          </>
        )}
      </Stack>
    </>
  );
};

export default DesktopNavbarContent;
