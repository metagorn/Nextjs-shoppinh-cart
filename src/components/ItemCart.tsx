"use client";
import { IconButton, Stack, Typography, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

export default function ItemCart({
    itemname,
    itemPrice,
    count,
    onIncrement,
    onDecrement,
    image,
}: {
  itemname: string;
  itemPrice: number;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  image: string;
}) {
  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("th-TH", {
      style: "currency",
      currency: "THB",
    });
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} sm={4}>
        <img
          src={image}
          alt={itemname}
          style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: 8 }}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography variant="h6">{itemname}</Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <IconButton onClick={onDecrement} disabled={count === 0}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6">{count}</Typography>
          <IconButton onClick={onIncrement}>
            <AddIcon />
          </IconButton>
          <Typography variant="h6">{formatCurrency(itemPrice * count)}</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}



