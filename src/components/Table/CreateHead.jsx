import { TableRow, Typography } from "@mui/material";
import React from "react";
import StyledTableCell from "./StyledTableCell";

const CreateHead = ({ head }) => {
  return (
    <TableRow>
      {head.map((item, key) => (
        <StyledTableCell key={item} align={key === 1 ? "left" : "right"}>
          <Typography sx={{ textTransform: "capitalize" }}>{item}</Typography>
        </StyledTableCell>
      ))}
    </TableRow>
  );
};

export default CreateHead;
