import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import items from "../../data/items.json";
import { Cards } from "./components/cards/cards";
import { Header } from "./components/header/header";
import "./home.css";

export const Home = () => {
  const [count, setCount] = React.useState();

  const viewOrder = ()=>{
    window.location.replace('/order')
  }
  return (
    <div className="container">
      <Header />
      <div className="home__wrapper">
        <div className="cards__wrapper">
          {items.map((item) => (
            <div>{<Cards {...item} />}</div>
          ))}
        </div>
      </div>
      {useState(count) ? (
        <Button
          onClick={viewOrder}
          variant="contained"
          sx={{
            bgcolor: "green",
            width: "100%",
            borderRadius: "0 0 8px 8px",
            padding:"12px",
            ":hover": { bgcolor: "green" },
          }}
        >
          View order
        </Button>
      ) : null}
    </div>
  );
};
