import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import { selectLogin } from "../../features/Login/LoginSlice";

export default function CountrySelect({ items, selectCountry, type }) {
  items.forEach((item) => {
    item.label = item.name.common;
  });

  const user = useSelector(selectLogin).user;
  const company = user.companies;
  const defaultValue = JSON.stringify({
    name: { common: "Choose your country" },
  });
  const defaultCountry = JSON.parse(
    type === "user"
      ? user?.localisation !== "Undefined"
        ? user?.localisation
        : defaultValue
      : company[company.length - 1]?.localisation !== undefined
      ? company[company.length - 1]?.localisation
      : defaultValue
  );

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%" }}
      options={items}
      autoHighlight
      defaultValue={defaultCountry}
      isOptionEqualToValue={(option, value) =>
        option.name.common === value.name.common
      }
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
