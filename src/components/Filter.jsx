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
import {
  addFilter,
  deleteFilter,
  selectFilter,
} from "../features/Filter/FilterSlice";
import { useDispatch, useSelector } from "react-redux";

const Filter = ({ Items }) => {
  
  return (
    <>
      {Items.map((item, key) => {
        if (item.Type === "checkbox") {
          return (
            <React.Fragment key={item.Title}>
              <CheckBoxFilter
                Title={item.Title}
                Items={item.Items}
                Expanded={key === 1 ? true : false}
              />
              <Divider />
            </React.Fragment>
          );
        } else if (item.Type === "radio") {
          return (
            <React.Fragment key={item.Title}>
              <FormRadio Title={item.Title} Items={item.Items} />
              <Divider />
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={item.Title}>
              <CheckBoxFilter
                Title={item.Title}
                Items={item.Items}
                Expanded={key === 1 ? true : false}
                WithAccordion={true}
              />
              <Divider />
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

const CheckBoxFilter = ({ Title, Items, Expanded, WithAccordion = false }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
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
                        key={item.Title}
                      />
                    );
                  })
                : Items.map((item) => (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={item}
                      key={item}
                      onChange={(event) => {
                        if (event.target.checked) {
                          dispatch(
                            addFilter({ key: Title, value: event.target.value })
                          );
                          console.log(filter);
                        } else {
                          dispatch(
                            deleteFilter({
                              key: Title,
                              value: event.target.value,
                            })
                          );
                          console.log(filter);
                        }
                      }}
                      value={item}
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
