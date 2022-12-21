import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addFilterRadio } from "../features/Filter/FilterSlice";

const FormRadio = ({ Title, Items }) => {
  const dispatch = useDispatch();
  return (
    <FormControl sx={{ marginLeft: "10px" }}>
      <FormLabel id="demo-radio-buttons-group-label">{Title}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {Items.map((item) => {
          return (
            <FormControlLabel
              value={item}
              control={<Radio />}
              label={item}
              key={item}
              onChange={(event) =>
                dispatch(
                  addFilterRadio({ key: Title, value: event.target.value })
                )
              }
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default FormRadio;
