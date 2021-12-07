import React from "react";
import NavbarIcons from "./NavbarIcons";
import NavbarInputSearch from "./NavbarInputSearch";
// import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar-Container">
        <div className="Navbar-Img">
          <img src={'/assets/logo.png'} alt="logo instagram" />
        </div>
        <div>
          <NavbarInputSearch />
        </div>
        <div>
          <NavbarIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
