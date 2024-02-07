import React from "react";
import { Box, CircularProgress, CircularProgressProps } from "@mui/material";

interface LoadingProps extends CircularProgressProps {}

const Loading = (props: LoadingProps) => (
  <Box sx={{ display: "flex" }}>
    <CircularProgress {...props} />
  </Box>
);

export default Loading;
