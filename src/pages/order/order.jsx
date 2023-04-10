import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../home/components/header/header";
import { Home } from "../home/home";
import "./order.css";
import { Ordered } from "./components/ordered";
import { useStateValue } from "../../stateProvider";

export const Order = () => {

  const [{ basket }, dispatch] = useStateValue();


  return (
    <div className="container">
      <Header />
      <div className="order__wrapper">
        <div className="order__topper">
          <div className="order__title-wrapper">
            <h3 className="order__title">YOUR ORDER</h3>
            <Link className="order__link" to="/">
              Edit
            </Link>
          </div>
          <div className="ordered__products">
          {basket.map((item) => (
            <Ordered
              id={item.id}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))}
          </div>
          <div className="input__wrapper">
            <input
              type="text"
              className="order__comment"
              placeholder="Add comment..."
            />
            <p className="comment__subtext">
              Any special requests, details, final wishes etc.
            </p>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            bgcolor: "green",
            padding: "12px",
            ":hover": { bgcolor: "green" },
          }}
        >
          PAY{" "}
        </Button>
      </div>
    </div>
  );
};
