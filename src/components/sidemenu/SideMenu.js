import { Stack } from "@mui/material";
import React from "react";
import { AddShoppingIcon, CommentIcon } from "../../icons";

export default function SideMenu(props) {
    const { value, onChange } = props;
    const handleChange = (value) => {
        onChange && onChange(value)
    }
  return (
    <Stack direction="column" gap={4} sx={{ backgroundColor: "#EEF1FF" }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#EEF1FF" }}
        padding="20px"
      >
        <CommentIcon
          sx={{
            color: "#ccc",
            transition: ".2s all",
            ":hover": {
              cursor: "pointer",
              color: "#000",
            },
          }}
          onClick={() => handleChange(0)}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#EEF1FF" }}
        padding="20px"
      >
        <AddShoppingIcon
          sx={{
            color: "#ccc",
            transition: ".2s all",
            ":hover": {
              color: "#000",
              cursor: "pointer",
            },
          }}
          onClick={() => handleChange(1)}
        />
      </Stack>
      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#EEF1FF" }}
        padding="20px"
      >
        <CommentIcon
          sx={{
            color: "#ccc",
            transition: ".2s all",
            ":hover": {
              color: "#000",
              cursor: "pointer",
            },
          }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#EEF1FF" }}
        padding="20px"
      >
        <CommentIcon
          sx={{
            color: "#ccc",
            transition: ".2s all",
            ":hover": {
              color: "#000",
              cursor: "pointer",
            },
          }}
        />
      </Stack> */}
    </Stack>
  );
}
