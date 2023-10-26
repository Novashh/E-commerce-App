import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Rout from "../src/Components/Rout";
import Nav from "./Components/Home/Nav";
import Search from "./Components/Home/Search";
import Footer from "./Components/Footer/Footer";
import HomeProduct from "./Components/Home/Home_product";

const App = () => {
  // Add to cart
  const [cart, setCart] = useState([]);

  // shop product page
  const [shop, setShop] = useState(HomeProduct);

  // shop Search product
  const [search, setSearch] = useState("");

  // shop product page
  // filter
  const Filter = (x) => {
    const cateFilter = HomeProduct.filter((product) => {
      return product.cat === x;
    });
    setShop(cateFilter);
  };

  const allCateFilter = () => {
    return setShop(HomeProduct);
  };

  // shop Search product
  const searchLength = (search || []).length === 0;
  const searchProduct = () => {
    if (searchLength) {
      alert("Please Search Product Name");
      setShop(HomeProduct);
    } else {
      const searchFilter = HomeProduct.filter((x) => {
        return x.cat === search;
      });
      setShop(searchFilter);
    }
  };

  // add to cart
  const ToCart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This product is already added in cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <Router>
        <Search
          search={search}
          setSearch={setSearch}
          searchProduct={searchProduct}
        />
        <Nav />
        <Rout
          cart={cart}
          shop={shop}
          Filter={Filter}
          allCateFilter={allCateFilter}
          ToCart={ToCart}
          setCart={setCart}
        />
        <Footer />
      </Router>
    </>
  );
};

export default App;
