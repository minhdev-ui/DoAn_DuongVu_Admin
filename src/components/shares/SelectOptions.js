import { MenuItem, TextField } from "@mui/material";
import React from "react";

export default function SelectOptions(props) {
  const { options } = props;
  return (
    <div>
      <TextField
        id="outlined-select-currency-native"
        select
        label="Mục"
        defaultValue=""
        SelectProps={{
          native: true,
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </div>
  );
}
