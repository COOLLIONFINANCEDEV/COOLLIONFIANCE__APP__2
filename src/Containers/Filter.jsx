import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filter = ({ title, expanded = false }) => {
  return (
    <Box sx={{ width: "100%", overflow: "hidden", margin: "0", padding: "0" }}>
      <Accordion sx={{ boxShadow: "hidden" }} defaultExpanded={expanded}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            sx={{
              fontSize: "0.9em",
              fontStyle: "italic",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ width: "100%", overflow: "hidden" }}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Exemple de Filter"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Exemple de Filter"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Exemple de Filter"
              />
            </FormGroup>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Filter;
