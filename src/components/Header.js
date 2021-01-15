import React from "react";
import logo from "./image/556x300_white.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Header = ({ value, onChange }) => {
  const openSideBar = () => {
    document.getElementById("sidebar").style.width = "350px";
  };
  const closeSideBar = () => {
    document.getElementById("sidebar").style.width = "0";
  };
  return (
    <>
      <header className="header">
        <a href="http://www.enye.tech/">
          <img src={logo} alt="logo" height="80px" width="148px" />
        </a>
        <button className="icon" onClick={openSideBar}>
          &#9776;
        </button>
        <div className="social">
          <a href="https://web.facebook.com/enyetech1">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/company/enye-inc/">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/enye.tech/">
            <InstagramIcon />
          </a>
        </div>
      </header>

      <div id="sidebar">
        <button id="close-btn" onClick={closeSideBar}>
          &times;
        </button>
        <input
          type="search"
          id="input-search"
          placeholder="search using firstname or lastname"
          value={value}
          onChange={onChange}
        />
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
          <a href="https://web.facebook.com/enyetech1">
            <FacebookIcon />
          </a>
          <a href="https://www.linkedin.com/company/enye-inc/">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/enye.tech/">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
