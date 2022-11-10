import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import ProjectCard from "./ProjectCard";
import Redirect from "../Helpers/Redirect";
import { ProjectDetailsLink, ProjectGlobalLink } from "../Router/Routes";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.light,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.secondary.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
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
  );
}

function CreateData(
  name,
  Location,
  category,
  status,
  amout,
  decr,
  country,
  Loan,
  Action,
  Content
) {
  return {
    name,
    Location,
    category,
    status,
    amout,
    decr,
    country,
    Loan,
    Action,
    Content,
  };
}

const ItemsContent = () => {
  return (
    <Box sx={{ margin: "10px 0" }}>
      <Redirect link={ProjectGlobalLink() + '/' + ProjectDetailsLink(1)} >
        <ProjectCard shadows={false} ActionState={false} />
      </Redirect>
    </Box>
  );
};

const rows = [
  CreateData(
    "Sylla Ibrahim",
    "Accra",
    "Agriculture",
    "Active",
    "$100",
    "I am a farmer",
    "Ghana",
    "3 months",
    <Redirect link={ProjectGlobalLink() + '/' + ProjectDetailsLink(1)} ><Button variant="outlined">Lend Again</Button></Redirect>,
    <ItemsContent />
  ),
  CreateData(
    "Sylla Ibrahim",
    "Accra",
    "Agriculture",
    "Active",
    "$100",
    "I am a farmer",
    "Ghana",
    "3 months",
    <Button variant="outlined">Lend Again</Button>,
    <ItemsContent />
  ),
  CreateData(
    "Sylla Ibrahim",
    "Accra",
    "Agriculture",
    "Active",
    "$100",
    "I am a farmer",
    "Ghana",
    "3 months",
    <Button variant="outlined">Lend Again</Button>,
    <ItemsContent />
  ),
  CreateData(
    "Sylla Ibrahim",
    "Accra",
    "Agriculture",
    "Active",
    "$100",
    "I am a farmer",
    "Ghana",
    "3 months",
    <Button variant="outlined">Lend Again</Button>,
    <ItemsContent />
  ),
  CreateData(
    "Sylla Ibrahim",
    "Accra",
    "Agriculture",
    "Active",
    "$100",
    "I am a farmer",
    "Ghana",
    "3 months",
    <Button variant="outlined">Lend Again</Button>,
    <ItemsContent />
  ),
  CreateData(
    "Sylla Ibrahim",
    "Accra",
    "Agriculture",
    "Active",
    "$100",
    "I am a farmer",
    "Ghana",
    "3 months",
    <Button variant="outlined">Lend Again</Button>,
    <ItemsContent />
  ),
  CreateData(
    "Sylla Ibrahim",
    "Accra",
    "Agriculture",
    "Active",
    "$100",
    "I am a farmer",
    "Ghana",
    "3 months",
    <Button variant="outlined">Lend Again</Button>,
    <ItemsContent />
  ),
];

function InvestmentTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">status</StyledTableCell>
            <StyledTableCell align="right">Amount lent</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">Loan Len</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InvestmentTable;
