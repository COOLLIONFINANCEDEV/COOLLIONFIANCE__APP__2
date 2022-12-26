import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";

export default function CountrySelect({ items, selectCountry }) {
  items.forEach((item) => {
    item.label = item.name.common;
  });

  const user = useSelector(selectLogin).user;
  const defaultCountry =
    user.localisation !== undefined
      ? JSON.parse(user.localisation)
      : { name: { common: "Choose your country" } };
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%" }}
      options={items}
      autoHighlight
      // defaultValue={defaultCountry}
      getOptionLabel={(option) => {
        selectCountry(option);
        return option.name.common;
      }}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img loading="lazy" width="20" src={option.flags.png} alt="" />
          {option.name.common}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
