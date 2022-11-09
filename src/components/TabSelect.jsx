import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

const TabSelect = ({ items, TabWidth, hanbleChange }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    hanbleChange(newValue);
  };
  return (
    <Box>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        {items.map((item, key) => (
          <Tab label={item} key={key} sx={TabWidth} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabSelect;
