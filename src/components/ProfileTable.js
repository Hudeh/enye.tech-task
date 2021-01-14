import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ProfileTable = ({
  // data: { loading, error, profile },
  filterProfileData,
  
  pagination: { page, rowsPerPage },
  handleChangeRowsPerPage,
  handleChangePage,
}) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Credit Card Typed</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterProfileData.length > 0 &&
                filterProfileData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((data ,idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {data.FirstName}
                      </TableCell>
                      <TableCell>{data.LastName}</TableCell>
                      <TableCell>{data.Gender}</TableCell>
                      <TableCell>{data.Email}</TableCell>
                      <TableCell>{data.PhoneNumber}</TableCell>
                      <TableCell>{data.PaymentMethod}</TableCell>
                      <TableCell>{data.CreditCardType}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
      </TableContainer>
      <TablePagination
        count={filterProfileData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};

export default ProfileTable;
