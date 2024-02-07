import React from "react";
import { Alert, AlertTitle, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

interface ErrorProps {
  error: Error | null;
  btnText?: string;
  onRefresh: () => void;
}

const Error = ({ error, btnText = "Refresh", onRefresh }: ErrorProps) => (
  <>
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      Something went wrong — <strong>{error.message}</strong>, please try again
      later or contact support. Thank you!
    </Alert>
    <br />
    <Button variant="outlined" startIcon={<RefreshIcon />} onClick={onRefresh}>
      {btnText}
    </Button>
  </>
);

export default Error;
