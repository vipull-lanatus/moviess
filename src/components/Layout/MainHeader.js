import React from "react";
import style from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
import Search from "./Search";

const MainHeader = (props) => {
  return (
    <div className={style.mainHeader}>
      <div className={style.logo}>
        <span>VMovies</span>
      </div>
      <div className={style.actions}>
        <Search onChange={props.onChange} />
      </div>
      <ul className={style.nav}>
        <li>
          <NavLink
            to="/movies"
            className={(link) => {
              return link.isActive ? style.active : "";
            }}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(link) => {
              return link.isActive ? style.active : "";
            }}
            to="/"
          >
            Edit
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainHeader;
