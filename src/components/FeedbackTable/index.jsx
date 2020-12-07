import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    [theme.breakpoints.down("800px")]: {
      width: "90%",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const FeedbackTable = ({ info }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ maxWidth: "200px", overflow: "hidden" }}>
              Nome do Feedback
            </StyledTableCell>
            <StyledTableCell style={{ maxWidth: "200px", overflow: "hidden" }}>
              Comentário
            </StyledTableCell>
            <StyledTableCell style={{ maxWidth: "230px", overflow: "hidden" }}>
              Nota
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {info.map((feedback, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{
                  maxWidth: "200px",
                  overflow: "hidden",
                }}
                title={feedback.name}
              >
                {feedback.name}
              </StyledTableCell>
              <StyledTableCell
                style={{ maxWidth: "200px", overflow: "hidden" }}
                title={feedback.comment}
              >
                {feedback.comment}
              </StyledTableCell>
              <StyledTableCell
                style={{ maxWidth: "230px", overflow: "hidden" }}
                title={feedback.grade}
              >
                <Rating
                  name="grade"
                  value={feedback.grade / 2}
                  precision={0.5}
                  max={5}
                  onClick={null}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeedbackTable;
