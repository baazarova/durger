import React from "react";
import { useStateValue } from "../../../stateProvider";
import "./ordered.css";

export const Ordered = ({ image, price, title, id }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="ordered">
      <div className="ordered__left">
        <img className="ordered__img" src={image} alt="ordered image" />
        <h6 className="ordered__title">{title}</h6>
      </div>
      <p className="ordered__price"> <b>$</b>{price}</p>
    </div>
  );
};
