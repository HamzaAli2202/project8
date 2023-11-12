import React from "react";
import { useState } from "react";
import { prodData } from "./Products";
import { Grid } from "@mui/material";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const [data, setData] = useState(prodData);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={4}>
          <ProductItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
