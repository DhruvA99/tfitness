import classes from "./Navbar.module.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  const [active, setActive] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <div className={classes.buttonClick} onClick={() => setActive(!active)}>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
          <div className={classes.bar}></div>
        </div>
        <span>
          <b className={classes.heading}>T</b>FITNESS
        </span>
      </div>

      <ul className={`${classes.list} ${active ? null : classes.remove}`}>
        <NavLink
          to="/"
          activeClassName={classes.active}
          className={classes.items}
        >
          Home
        </NavLink>
        <NavLink
          to="/gym"
          activeClassName={classes.active}
          className={classes.items}
        >
          Gyms
        </NavLink>
        <NavLink
          to="trainers"
          activeClassName={classes.active}
          className={classes.items}
        >
          Trainers
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
