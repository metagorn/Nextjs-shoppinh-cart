"use client";

import React, { useState } from "react";
import { Stack, Typography, Grid } from "@mui/material";
import ItemCart from "@/components/ItemCart";

export default function Home() {
  const [items, setItems] = useState([
    { id: 1, name: "iPhone 15 Pro", price: 42900, count: 0, image: "https://www.apple.com/th/iphone-15-pro/images/overview/closer-look/all_colors__eppfcocn9mky_large.jpg" },
    { id: 2, name: "iPhone 15", price: 32900, count: 0, image: "https://www.apple.com/th/iphone-15/images/overview/closer-look/all_colors__d4w03v51nwcy_large.jpg" },
    { id: 3, name: "iPad Pro", price: 32900, count: 0, image: "https://www.apple.com/v/ipad-pro/aq/images/overview/closer-look/space-black/slide_3A__fmel0mesnxqq_large.jpg" },
    { id: 4, name: "iPad Air", price: 20900, count: 0, image: "https://www.apple.com/v/ipad-air/w/images/overview/closer-look/all-colors/slide_1A__fg52jvpudo6e_large.jpg" },
    { id: 5, name: "iPad", price: 17900, count: 0, image: "https://www.apple.com/th/ipad-10.9/images/overview/design/fan__e9709q800z6u_large.jpg" },
    { id: 6, name: "iPad mini", price: 17900, count: 0, image: "https://www.apple.com/v/ipad-mini/q/images/overview/design/new_design__227ki0c376am_large.png" },
    { id: 7, name: "MacBook Air", price: 39900, count: 0, image: "https://www.apple.com/v/macbook-air/s/images/overview/design/color/design_top_midnight__fvf2p6124tqq_large.jpg" },
    { id: 8, name: "MacBook Pro", price: 72900, count: 0, image: "https://www.apple.com/v/macbook-pro/ak/images/overview/closer-look/3d_viewer_pf_16__b8iq7yl5sewi_large.jpg" },
    { id: 9, name: "iMac", price: 49900, count: 0, image: "https://www.apple.com/v/imac/p/images/overview/color_front_green__eb8qbnemmre6_large.jpg" },
    { id: 10, name: "Mac mini", price: 22900, count: 0, image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341" },
    { id: 11, name: "Mac Studio", price: 73900, count: 0, image: "https://www.apple.com/v/mac-studio/f/images/overview/hero/static_back__dx1rvyhaaxsi_large.jpg" },
  ]);

  const handleIncremental = (id: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const handleDecremental = (id: number) => {
    setItems(items.map(item =>
      item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item
    ));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.count, 0);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("th-TH", {
      style: "currency",
      currency: "THB",
    });
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Stack spacing={4}>
        {items.map((item) => (
          <ItemCart
            key={item.id}
            itemname={item.name}
            itemPrice={item.price}
            count={item.count}
            onIncrement={() => handleIncremental(item.id)}
            onDecrement={() => handleDecremental(item.id)}
            image={item.image}
          />
        ))}
      </Stack>
      <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ marginTop: 3 }}>
        <Typography variant="h4">Total:</Typography>
        <Typography variant="h4">{formatCurrency(total)}</Typography>
      </Stack>
    </div>
  );
}



