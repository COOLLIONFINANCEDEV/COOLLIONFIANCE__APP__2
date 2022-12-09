import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

const FormRadio = ({ Title,Items }) => {
  return (
    <FormControl sx={{ marginLeft: "10px" }}>
      <FormLabel id="demo-radio-buttons-group-label">{Title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {
          Items.map((item) => {
        return <FormControlLabel value={item} control={<Radio />} label={item} key={item}/>
          })
        }
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadio;
