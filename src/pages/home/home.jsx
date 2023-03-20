import React from "react";
import { Cards } from "./components/cards/cards";
import { Header } from "./components/header/header";
import "./home.css";
import burger from "../../assets/images/burger.png";
import fries from '../../assets/images/fries.png';
import pizza from '../../assets/images/pizza.png';
import  tacos from '../../assets/images/tacoss.png';
import hotdog from '../../assets/images/hotdoog.png';
import donut from '../../assets/images/donutt.png';
import popcorn from '../../assets/images/popcornn.svg';
import coke from '../../assets/images/coca.png';
import cake from '../../assets/images/cakee.avif';
import icecream from '../../assets/images/icecreamm.png';
import cookie from '../../assets/images/cookie.png';
import flan from '../../assets/images/flan.png';

export const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="home__wrapper">
      <div className="cards__wrapper">
        <Cards image={burger} title="Burger" price="$4.99" />
        <Cards image={fries} title="Fries" price="$1.49" />
        <Cards image={hotdog} title="Hotdog" price="$3.49" />
        <Cards image={tacos} title="Taco" price="$3.99" />
        <Cards image={pizza} title="Pizza" price="$7.99" />
        <Cards image={donut} title="Donut" price="$1.99" />
        <Cards image={popcorn} title="Popcorn" price="$1.99" />
        <Cards image={coke} title="Coke" price="$1.49" />
        <Cards image={cake} title="Cake" price="$10.99" />
        <Cards image={icecream} title="Icecream" price="$5.99" />
        <Cards image={cookie} title="Cookie" price="$3.99" />
        <Cards image={flan} title="Flan" price="$7.99" />
      </div>
      </div>
    </div>
  );
};
