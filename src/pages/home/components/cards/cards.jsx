import React, { useState } from "react";
import "./cards.css";
import { Button, Chip } from "@mui/material";

const Cards = ({ image, title, price, id}) => {
  const [count, setCount] = useState(0);
  const addButton = () => {
    setCount(count + 1);
  };
  const removeButton = () => {
    setCount(count - 1);
  };

  return (
    <div className="card">
    
      <div className="img__wrapper"><img className="card__image" src={image} alt="burger image" /></div>
      <div className="card__bottom">
        <div className="card__titleWrap">
          <h5 className="card__title">{title}</h5>
          <p className="card__price">${price}</p>
        </div>
        <div>
          {count === 0 ? (
            <>
             
            <Button
              onClick={addButton}
              sx={{
                bgcolor: "orange",
                width: "90px",
                textAlign: "center",
                ml: "auto",
                mr: "auto",
                height: "29px",
                borderRadius: "7px",
                boxShadow: "0 0 0 0",
                ":hover": { bgcolor: "orangered" },
              }}
              variant="contained"
            >
              ADD
            </Button>
            </>

          ) : (
            <>
            <Chip
            sx={{ bgcolor: "orange", color: "white" }}
            label={count}
            size="small"
            className="chip"
          />
            <div className="btn__wrapper">
              <button onClick={removeButton} className="btn remove-btn">
                -
              </button>
              <button className="btn plus-btn" onClick={addButton}>
                +
              </button>
            </div>
            </>

          )}
        </div>
      </div>
     
    </div>
  );
};



export {
  Cards,
  useState
}