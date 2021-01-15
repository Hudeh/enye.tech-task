import React from "react";
import logo from "./image/556x300_white.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Header = () => {

  return (
    <>
      <div className="header">
        <a href="http://www.enye.tech/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <button className="icon">
          &#9776;
        </button>
        <div className="social">
          <a href="/#">
            <FacebookIcon />
          </a>
          <a href="/#">
            <LinkedInIcon />
          </a>
          <a href="/#">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
