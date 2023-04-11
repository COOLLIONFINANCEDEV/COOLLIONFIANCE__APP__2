import React from "react";
import {
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  Avatar,
  Typography,
} from "@mui/material";
import {
  AdminBorrowerRouteLink,
  AdminLenderRouteLink,
  AdminProjectRouteLink,
  GroupeRouteLink,
  HomeRouteLink,
  InvestmentRouteLink,
  MyProjectRouteLink,
} from "../../Router/Routes";
import { useNavigate } from "react-router-dom";
import Redirect from "../../Helpers/Redirect";
import { useDispatch, useSelector } from "react-redux";
import { CheckUser, selectLogin } from "../../features/Login/LoginSlice";
import SessionService from "../../Services/SessionService";
import { Settings, Logout } from "@mui/icons-material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { ADMIN, BORROWER, LENDER } from "../../Context/Roles/roles";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import GoodRouteLInk from "../../Helpers/GoodRouteLInk";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifyValue from "../../Helpers/VerifyValue";
import GroupIcon from "@mui/icons-material/Group";

const NavBarMenu = ({ anchorEl, open, handleClose, MenuLink }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = React.useCallback(() => {
    SessionService.Logout();
    dispatch(CheckUser());
    navigate(HomeRouteLink());
    window.scrollTo(0, 0);
  }, [dispatch, navigate]);

  const user = useSelector(selectLogin).user;

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
        <Avatar alt="Remy Sharp" src={user.image} size="small">
          {VerifyValue(user.image) === "" && <AccountCircleIcon />}
        </Avatar>
        <Typography variant="p" sx={{ padding: "0 70px 0 0" }}>
          {VerifyValue(user.first_name)} {VerifyValue(user.last_name)}(
          {user.role})
        </Typography>
      </MenuItem>
      <Divider />
      <GoodRouteLInk AllLink={MenuLink}>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
      </GoodRouteLInk>
      {/* <Redirect link={SettingsRouteLink()}>
          <MenuItem>
            <ListItemIcon>
              <DashboardIcon fontSize="small" />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        </Redirect> */}
      {user.role === LENDER() && (
        <Redirect link={InvestmentRouteLink()}>
          <MenuItem>
            <ListItemIcon>
              <CurrencyExchangeIcon fontSize="small" />
            </ListItemIcon>
            my investment
          </MenuItem>
        </Redirect>
      )}

      {user.role === BORROWER() && (
        <Redirect link={MyProjectRouteLink()}>
          <MenuItem>
            <ListItemIcon>
              <BackupTableIcon fontSize="small" />
            </ListItemIcon>
            my Projects
          </MenuItem>
        </Redirect>
      )}

      {user.role === ADMIN() && (
        <Redirect link={AdminProjectRouteLink()}>
          <MenuItem>
            <ListItemIcon>
              <AccountTreeIcon fontSize="small" />
            </ListItemIcon>
            PROJECTS
          </MenuItem>
        </Redirect>
      )}

      {user.role === ADMIN() && (
        <Redirect link={AdminLenderRouteLink()}>
          <MenuItem>
            <ListItemIcon>
              <AutoAwesomeMotionIcon fontSize="small" />
            </ListItemIcon>
            LENDERS
          </MenuItem>
        </Redirect>
      )}
      {user.role === ADMIN() && (
        <Redirect link={AdminBorrowerRouteLink()}>
          <MenuItem>
            <ListItemIcon>
              <AccountBalanceWalletIcon fontSize="small" />
            </ListItemIcon>
            BORROWERS
          </MenuItem>
        </Redirect>
      )}
      <Redirect link={GroupeRouteLink()}>
        <MenuItem>
          <ListItemIcon>
            <GroupIcon fontSize="small" />
          </ListItemIcon>
          My Group
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

export default NavBarMenu;
