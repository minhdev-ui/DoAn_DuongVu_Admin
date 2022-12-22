import { Stack } from "@mui/material";
import React from "react";

export default function SectionHeader(props) {
  const { title, sx } = props;
  return (
    <Stack {...sx}>
        <h1>{title}</h1>
    </Stack>
  );
}
