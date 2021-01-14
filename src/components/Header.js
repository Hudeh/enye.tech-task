import React from "react";
import logo from "./image/556x300_white.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";


const Header = ({value, onChange}) => {
  return (
    <header className="header">
      <a href="http://www.enye.tech/"><img src={logo} alt="logo" height="80px" width="148px"  /></a>
      <div className="search">
        <input type="search" value={value} onChange={onChange} placeholder="search for user by firstname or lastname..." />
      </div>
      <div className="social">
        <a href="https://web.facebook.com/enyetech1"><FacebookIcon /></a>
        <a href="https://www.linkedin.com/company/enye-inc/"><LinkedInIcon /></a>
        <a href="https://www.instagram.com/enye.tech/"><InstagramIcon /></a>
      </div>
    </header>
  );
};
export default Header;
