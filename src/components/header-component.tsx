import React from "react";
import { Divider, Typography } from "@mui/material";
import { kTitleBarText } from "./constants";

export const HeaderBar: React.FC = () => {
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        align={"center"}
        sx={{ fontFamily: "'Source Code Pro', monospace", marginTop: "30px" }}
        gutterBottom
      >
        {kTitleBarText}
      </Typography>
      <Divider role="presentation" variant="middle" />
    </React.Fragment>
  );
};
