import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

const TabSelect = ({ items }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        selectionFollowsFocus
      >
        {items.map((item, key) => (
          <Tab label={item} key={key} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TabSelect;
