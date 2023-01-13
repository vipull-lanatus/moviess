import React from "react";
import style from "./MainHeader.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Search from "./Search";
import { Button } from "@mui/material";

const MainHeader = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return (
    <div className={style.mainHeader}>
      <div className={style.logo}>
        <span>VMovies</span>
      </div>
      <div className={style.actions}>
        <Search onChange={props.filterMoviesHandler} />
        <Button
          onClick={props.changeSortingOrder}
          sx={{
            ml: 2,
            p: 1,
            width: "17rem",
            color: "var(--light)",
            borderRadius: 2,
            border: "1px solid var(--light)",
          }}
        >
          Sort {queryParams.get("sort") === "asc" ? "Descending" : "Ascending"}
        </Button>
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
            to="/edit"
          >
            Edit
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainHeader;
