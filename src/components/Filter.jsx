import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormRadio from "./FormRadio";

const Filter = ({ Items }) => {
  return (
    <>
      {Items.map((item, key) => {
        if (item.Type === "checkbox") {
          return (
            <>
              <CheckBoxFilter
                Title={item.Title}
                Items={item.Items}
                Expanded={key === 1 ? true : false}
                key={item.Title}
              />
              <Divider />
            </>
          );
        } else if (item.Type === "radio") {
          return (
            <>
              <FormRadio
                Title={item.Title}
                Items={item.Items}
                key={item.Title}
              />
              <Divider />
            </>
          );
        } else {
          return (
            <>
              <CheckBoxFilter
                Title={item.Title}
                Items={item.Items}
                Expanded={key === 1 ? true : false}
                key={item.Title}
                WithAccordion={true}
              />
              <Divider />
            </>
          );
        }
      })}
    </>
  );
};

const CheckBoxFilter = ({ Title, Items, Expanded, WithAccordion = false }) => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", margin: "0", padding: "0" }}>
      <Accordion sx={{ boxShadow: "hidden" }} defaultExpanded={Expanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontSize: "0.9em",
              fontStyle: "italic",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {Title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <FormGroup>
              {WithAccordion
                ? Items.map((item) => {
                    return (
                      <CheckBoxFilter
                        Title={item.Title}
                        Items={item.Items}
                        Expanded={false}
                      />
                    );
                  })
                : Items.map((item) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={item}
                      key={item}
                    />
                  ))}
            </FormGroup>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Filter;
