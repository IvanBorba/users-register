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
import { useHistory } from "react-router-dom";

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
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const UserTable = ({ info, input }) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell style={{ maxWidth: "170px", overflow: "hidden" }}>
              Nome
            </StyledTableCell>
            <StyledTableCell style={{ maxWidth: "170px", overflow: "hidden" }}>
              User
            </StyledTableCell>
            <StyledTableCell style={{ maxWidth: "200px", overflow: "hidden" }}>
              E-mail
            </StyledTableCell>
            <StyledTableCell style={{ maxWidth: "170px", overflow: "hidden" }}>
              Lista de Feedbacks
            </StyledTableCell>
            <StyledTableCell align="right">Novo Feedback</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {input
            ? info
                .filter((user) => user.name?.toLowerCase().includes(input))
                .map((user, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{
                        maxWidth: "170px",
                        overflow: "hidden",
                      }}
                      title={user.name}
                    >
                      {user.name}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ maxWidth: "170px", overflow: "hidden" }}
                      title={user.user}
                    >
                      {user.user}
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ maxWidth: "230px", overflow: "hidden" }}
                      title={user.email}
                    >
                      {user.email}
                    </StyledTableCell>
                    <StyledTableCell
                      onClick={() => history.push(`/feedbacks/${user.id}`)}
                      style={{
                        maxWidth: "170px",
                        overflow: "hidden",
                        paddingLeft: "45px",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      Feedbacks
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      onClick={() => history.push(`/feedback-form/${user.id}`)}
                      style={{
                        paddingRight: "40px",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      Novo
                    </StyledTableCell>
                  </StyledTableRow>
                ))
            : info.map((user, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    style={{
                      maxWidth: "170px",
                      overflow: "hidden",
                    }}
                    title={user.name}
                  >
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ maxWidth: "170px", overflow: "hidden" }}
                    title={user.user}
                  >
                    {user.user}
                  </StyledTableCell>
                  <StyledTableCell
                    style={{ maxWidth: "230px", overflow: "hidden" }}
                    title={user.email}
                  >
                    {user.email}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => history.push(`/feedbacks/${user.id}`)}
                    style={{
                      maxWidth: "170px",
                      overflow: "hidden",
                      paddingLeft: "45px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Feedbacks
                  </StyledTableCell>
                  <StyledTableCell
                    align="right"
                    onClick={() => history.push(`/feedback-form/${user.id}`)}
                    style={{
                      paddingRight: "40px",
                      color: "blue",
                      cursor: "pointer",
                    }}
                  >
                    Novo
                  </StyledTableCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
