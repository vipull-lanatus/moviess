import React from "react";
import style from "./MainHeader.module.css";
import { NavLink, useLocation } from "react-router-dom";
import Search from "./Search";
import { Button, Container } from "@mui/material";

const MainHeader = ({ filterMoviesHandler, changeSortingOrder, movieId }) => {
  const location = useLocation();
  const { pathname } = location;
  const queryParams = new URLSearchParams(location.search);
  return (
    <Container
      maxWidth="true"
      sx={{
        display:
          pathname === `/movies/${localStorage.getItem("movieId")}`
            ? "none"
            : "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "10vh",
        zIndex: "99",
        background: "var(--primary)",
        color: "var(--light)",
        position: "fixed",
      }}
    >
      <div className={style.logo}>
        <span>VMovies</span>
      </div>
      <div className={style.actions}>
        <Search onChange={filterMoviesHandler} />
        <Button
          onClick={changeSortingOrder}
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
    </Container>
  );
};

export default MainHeader;
