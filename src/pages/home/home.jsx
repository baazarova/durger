import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import items from "../../data/items.json";
import { Cards } from "./components/cards/cards";
import { Header } from "./components/header/header";
import "./home.css";

export const Home = () => {
  const [count, setCount] = React.useState();

 
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
        <Link to='/order' className="viewOrder__btn">
        <Button
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
        </Link>
      ) : null}
    </div>
  );
};
