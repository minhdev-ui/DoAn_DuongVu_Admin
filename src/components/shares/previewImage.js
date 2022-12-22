import { Stack } from '@mui/material'
import React from 'react'

export default function PreviewImage(props) {
    const { image } = props;
  return (
    <Stack>
        <img alt='#' src={image || ""}/>
    </Stack>
  )
}
