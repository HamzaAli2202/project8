import React from "react";
import { Grid, Card, CardContent, Button, Rating, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const ProductItem = ({ item }) => {
  return (
    <Card sx={{ border: "3px solid khaki", boxShadow: "5px 5px 5px black" }}>
      <CardContent>
        <Grid align="center" container spacing={2}>
          <Grid item xs={12}>
            <Badge badgeContent={`$${item.price}`} color="error">
              <img src={item.image} height={150} width={150} alt="" />
            </Badge>
          </Grid>
          <Grid item xs={12}>
            {item.title.slice(0, 25)}...
          </Grid>
          <Grid item xs={12}>
            {item.category}
          </Grid>
          <Grid item xs={12}>
            {item.description.slice(0, 20)}...
          </Grid>
          <Grid item xs={8}>
            <Rating value={item.rating.rate} />
          </Grid>
          <Grid item xs={4}>
            <ThumbUpIcon color="primary" />
            {item.rating.count}
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="warning" fullWidth>
              <ShoppingCartIcon /> Add to Cart
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="info" fullWidth>
              <LocalMallOutlinedIcon />
              Buy Now
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
