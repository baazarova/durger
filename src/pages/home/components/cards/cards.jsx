import React from "react";
import "./cards.css";
import { Button, Chip } from "@mui/material";

export const Cards = ({ image, title, price }) => {

  const [count, setCount] = React.useState(0);
  const addButton = ()=>{
    setCount(count + 1);
    return(

     <>
      <Button>-</Button>
      <Button>+</Button>
      </>
    )
  }

  return (
    <div className="card">
      <Chip sx={{bgcolor:'orange', color:'white'}} label={count} size="small" className="chip"/>
      <img className="card__image" src={image} alt="burger image" />
     <div className="card__bottom">
     <div className="card__titleWrap">
        <h5 className="card__title">{title}</h5>
        <p className="card__price">{price}</p>
      </div>
      <Button
      onClick={addButton}
        sx={{
          bgcolor: "orange",
          width: "90px",
          textAlign: "center",
          ml: "auto",
          mr: "auto",
          height: "29px",
          borderRadius:'7px',
          boxShadow:'0 0 0 0',
          ":hover":{bgcolor:'orangered'}
        }}
        variant="contained"
      >
        ADD
      </Button>
     </div>
    </div>
  );
};
