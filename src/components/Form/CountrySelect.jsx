import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function CountrySelect({
  items,
  selectCountry,
  error,
  helperText,
  name,
}) {
  items.forEach((item) => {
    item.label = item.name.common;
  });
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%" }}
      options={items}
      autoHighlight
      onInputChange={(event, d) =>
        selectCountry(items.filter((item) => item.label === d).at(0))
      }
      isOptionEqualToValue={(option, value) =>
        option.name.common === value.name.common
      }
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
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label="Choose a country"
            error={error}
            helperText={helperText}
            name={name}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        );
      }}
    />
  );
}
