import { Collapse, IconButton, TableBody, TableCell } from "@mui/material";
import React from "react";
import StyledTableRow from "./StyledTableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import StyledTableCell from "./StyledTableCell";

const CreateBody = ({ row, mode = false }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <TableBody>
      {!mode ? (
        <React.Fragment>
          <StyledTableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.Location}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.status}</TableCell>
            <TableCell align="right">{row.amout}</TableCell>
            <TableCell align="right">{row.decr}</TableCell>
            <TableCell align="right">{row.country}</TableCell>
            <TableCell align="right">{row.Loan}</TableCell>
            <TableCell align="right">{row.Action}</TableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell
              style={{ paddingBottom: 0, paddingTop: 0 }}
              colSpan={12}
            >
              <Collapse in={open} timeout="auto" unmountOnExit>
                {row.Content}
              </Collapse>
            </StyledTableCell>
          </StyledTableRow>
        </React.Fragment>
      ) : (
        <>
          <StyledTableRow key={row.name}>
            <StyledTableCell>{row.name}</StyledTableCell>
            <StyledTableCell>{row.amount}</StyledTableCell>
            <StyledTableCell>{row.received}</StyledTableCell>
            <StyledTableCell>{row.categories}</StyledTableCell>
            <StyledTableCell>{row.creation}</StyledTableCell>
            <StyledTableCell>{row.modification}</StyledTableCell>
            <StyledTableCell>{row.status}</StyledTableCell>
            <StyledTableCell>{row.actions}</StyledTableCell>
          </StyledTableRow>
        </>
      )}
    </TableBody>
  );
};

export default CreateBody;
