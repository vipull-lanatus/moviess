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
      placeholder="Movie"
      color="success"
      sx={{
        outline: "none",
        width: "100%",
        height: "2.5rem",
        border: "1px solid var(--light)",
        borderRadius: "12px",
        pl: "10px",
        pt: "2px",
        fontWeight: "700",
        color: "var(--light)",
        "&:focus": {
          outline: "none",
          borderColor: "black",
        },
      }}
      InputProps={{
        disableUnderline: true,
      }}
    />
  );
};

export default Search;
