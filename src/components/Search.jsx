import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

const Search = ({ color = "primary" }) => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(
      color === "primary"
        ? theme.palette.primary.main
        : theme.palette.secondary.main,
      0.15
    ),
    "&:hover": {
      backgroundColor: alpha(
        color === "primary"
          ? theme.palette.primary.main
          : theme.palette.secondary.main,
        0.25
      ),
    },
    marginRight: 0,
    marginLeft: 0,
    [theme.breakpoints.up("sm")]: {
      marginLeft: 0,
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
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
};

export default Search;
