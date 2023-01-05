import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addFilterRadio } from "../features/Filter/FilterSlice";

const TabSelect = ({ items, TabWidth, hanbleChange, value }) => {
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    hanbleChange(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        sx={{ width: "100%" }}
      >
        {items.map((item, key) => (
          <Tab
            label={item}
            key={key}
            sx={TabWidth}
            onClick={() => {
              dispatch(addFilterRadio({ key: "Status", value: item }));
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabSelect;
