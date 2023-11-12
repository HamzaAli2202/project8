import React from "react";
import { Grid } from "@mui/material";
import { NavList } from "./NavList";
import { ProductList } from "./ProductList";

export const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <NavList />
      </Grid>
      <Grid item xs={12}>
        <ProductList />
      </Grid>
    </Grid>
  );
};
