import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { CircularProgress } from "@material-ui/core";

const ProfileTable = ({
  filterProfileData,
  data: { error, loading },
  pagination: { page, rowsPerPage },
  handleChangeRowsPerPage,
  handleChangePage,
}) => {
  return (
    <>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone </th>
              <th>Payment</th>
              <th>Credit</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div>
                <CircularProgress />
              </div>
            ) : error ? (
              <h3>Error : {error} </h3>
            ) : (
              filterProfileData.length > 0 &&
              filterProfileData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data) => (
                  <tr key={data.FirstName}>
                    <td>{data.FirstName}</td>
                    <td>{data.LastName}</td>
                    <td>{data.Gender}</td>
                    <td>{data.Email}</td>
                    <td>{data.PhoneNumber}</td>
                    <td>{data.PaymentMethod}</td>
                    <td>{data.CreditCardType}</td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
      <TablePagination
        count={filterProfileData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        className="pagi"
      />
    </>
  );
};

export default ProfileTable;
