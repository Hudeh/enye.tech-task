import { CircularProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

function Home() {
  const [data, setData] = useState({
    loading: false,
    error: null,
    profiles: [],
  });
  const [searchProfile, setSearchProfile] = useState("");
  const [filteredProfileData, setfilteredProfileData] = useState([]);
  const [filterBy, setFilterBy] = useState("all");
  const [pagination, setPagination] = useState({
    page: 0,
    rowsPerPage: 20,
  });

  useEffect(() => {
    const handleLoadData = async () => {
      setData({
        error: null,
        profiles: [],
        loading: true,
      });
      setfilteredProfileData([]);

      try {
        const request = await fetch("https://api.enye.tech/v1/challenge/records");
        // const request =  await fetch("")
        const response = await request.json();
        setData({
          loading: false,
          profiles: response.records.profiles,
          error: null,
        });
        setfilteredProfileData(response.records.profiles);
      } catch (error) {
        setData({
          loading: false,
          profiles: [],
          error: error.message,
        });
        setfilteredProfileData([]);
      }
    };

    handleLoadData();
  }, []);

  // pagination control
  const handleChangePage = (event, page) => {
    setPagination({ ...pagination, page: page });
  };
  const handleChangeRowsPerPage = (event) => {
    setPagination({ ...pagination, rowsPerPage: event.target.value });
  };

  // search profile by firstname or lastname
  const handleSearchProfile = (e) => {
    setSearchProfile(e.target.value);
    if (e.target.value === "") {
      setfilteredProfileData(data.profiles);
    } else {
      setfilteredProfileData(
        data.profiles.filter(
          (search) =>
            search.FirstName.toLowerCase().indexOf(e.target.value) >= 0 ||
            search.LastName.toLowerCase().indexOf(e.target.value) >= 0
        )
      );
    }
  };

  // filter by gender and payment
  const handleFilterBy = (e) => {
    if (e.target.value === "all") {
      setFilterBy(e.target.value);
      setfilteredProfileData(data.profiles);
    } else {
      setfilteredProfileData(
        data.profiles.filter(
          (item) =>
            item.Gender.indexOf(e.target.value) >= 0 ||
            item.PaymentMethod.indexOf(e.target.value) >= 0
        )
      );
    }
  };
  // set filter select options
  const handleFilterTitle = (title) => {
    const filter = [];
    data.profiles.forEach((item) => filter.push(item[title]));
    return [...new Set([...filter])];
  };

  return (
    <div>
      <Header value={searchProfile} onChange={handleSearchProfile} />
      {data.loading ? (
        <div className="loader-view-block h-100">
          <div className="loader-view">
            <CircularProgress />
          </div>
        </div>
      ) : data.error && data.error.length > 0?
      <div>
        <p>Error : {data.error}</p>
      </div>
      :
      (
        data.profiles &&
        data.profiles.length > 0 && (
          <Main
            filterProfileData={filteredProfileData}
            pagination={pagination}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            onChange={handleFilterBy}
            handleFilterTitle={handleFilterTitle}
            value={filterBy}
          />
        )
      )}
    </div>
  );
}
export default Home;
