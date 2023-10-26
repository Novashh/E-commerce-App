import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Shop from "./Shop/Shop";

const Rout = ({ shop, Filter, allCateFilter, ToCart, cart, setCart }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home ToCart={ToCart} />} />
        <Route
          path="/shop"
          element={
            <Shop
              shop={shop}
              Filter={Filter}
              allCateFilter={allCateFilter}
              ToCart={ToCart}
            />
          }
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </>
  );
};

export default Rout;
