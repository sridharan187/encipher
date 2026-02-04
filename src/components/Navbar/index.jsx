import React from "react";
import "../../components/styles/navbar.css";
import lighttoggle from "../../image/day.png";
import darktoggle from "../../image/night.png";

const Navbar = ({ theme, setTheme, scrollTo }) => {

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`navbar ${theme}`}>
      <h2 className="brand">Conference Hall</h2>

      <ul className="nav-links">
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("form")}>Form</li>
        <li onClick={() => scrollTo("dashboard")}>Dashboard</li>
      </ul>

      <div className="profile">
        <img
          onClick={toggle}
          src={theme === "light" ? darktoggle : lighttoggle}
          alt="theme-toggle"
        />
      </div>
    </div>
  );
};

export default Navbar;
