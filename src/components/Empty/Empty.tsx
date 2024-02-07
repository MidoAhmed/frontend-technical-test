import { ReactNode } from "react";
import DatasetIcon from "@mui/icons-material/Dataset";
import { Alert, AlertTitle } from "@mui/material";

interface EmptyProps {
  description?: ReactNode;
  children?: ReactNode;
}

const Empty = ({ description = "No data found", children }: EmptyProps) => {
  return (
    <Alert severity="info">
      <AlertTitle>Info</AlertTitle>
      <div>
        <DatasetIcon />
        {description}
      </div>
      {children}
    </Alert>
  );
};

export default Empty;
