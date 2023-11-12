import React from "react";
import { Button } from "@mui/material";

export const NavItem = ({ item }) => {
  return (
    <Button fullWidth variant="contained" color="secondary">
      {item}
    </Button>
  );
};
