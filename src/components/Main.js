import React from "react";
import ProfileTable from "./ProfileTable";

const Main = ({
  data,
  pagination,
  handleChangeRowsPerPage,
  handleChangePage,
  filterProfileData,
  onChange,
  handleFilterTitle,
  value,
}) => {
  return (
    <main className="table-layout">
      <div className="container">
        <div className="title-filter">
          <h1>User Profiles</h1>
          <div>
            Filter:{" "}
            <select value={value} onChange={onChange}>
              <option value="all">All</option>
              <optgroup label="Gender">
                {handleFilterTitle("Gender").map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </optgroup>
              <optgroup label="Payment Method">
                {handleFilterTitle("PaymentMethod").map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </optgroup>
            </select>
          </div>
        </div>
        <ProfileTable
          data={data}
          pagination={pagination}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          filterProfileData={filterProfileData}
        />
      </div>
    </main>
  );
};
export default Main;
