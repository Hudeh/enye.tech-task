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
  searchProfile,
  handleSearchProfile,
}) => {
  return (
    <div className="table-layout">
      <div className="container">
        <h1 style={{ textAlign: "center" }}>User Profiles</h1>
        <div className="title-filter">
          <div className="search">
            <input
              type="search"
              value={searchProfile}
              onChange={handleSearchProfile}
              placeholder="Search Users by name."
            />
          </div>
          <div className="filter">
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
    </div>
  );
};
export default Main;
