import React from "react";
import Slider from "./Slider";
import Category from "../Category/Category";

import Ban from "../Banner/Ban";

const Home = ({ ToCart }) => {
  return (
    <>
      <Slider />
      <Category ToCart={ToCart} />
      <Ban />
    </>
  );
};

export default Home;
