import React from "react";
import { TextField } from "@mui/material";
const Search = (props) => {
  const searchChangeHandler = (event) => {
    props.onChange(event.target.value);
  };
  return (
    <TextField
      variant="standard"
      onChange={searchChangeHandler}
      placeholder="Search"
      size="small"
      sx={{
        width: "100%",
        border: "1px solid var(--light)",
        borderRadius: 2,
        p: 1,
        pl: 2,
        fontWeight: "700",
      }}
      InputProps={{
        disableUnderline: true,
      }}
      inputProps={{
        style: {
          color: "var(--light)",
        },
      }}
    />
  );
};

export default Search;
