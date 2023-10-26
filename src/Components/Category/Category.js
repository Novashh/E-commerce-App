import React, { useState } from "react";
import "./Category.scss";
import HomeProduct from "../Home/Home_product";
import { BsFillEyeFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const Category = ({ ToCart }) => {
  const [prductImage, setProductImage] = useState(HomeProduct);
  //Toggle product detail
  const [showDetail, setShowDetail] = useState(false);
  // detail page data
  const [detail, setDetail] = useState([]);

  const filterSort = (x) => {
    const filterProduct = HomeProduct.filter((Elm) => {
      return Elm.type === x;
    });
    setProductImage(filterProduct);
  };

  const allProduct = () => {
    return setProductImage(HomeProduct);
  };

  // Show product details
  const detailPage = (product) => {
    const detaildata = [{ product }];

    const productDetaile = detaildata[0]["product"];
    setDetail(productDetaile);
    setShowDetail(true);
  };

  const cancelPage = () => {
    setShowDetail(false);
  };

  return (
    <>
      {showDetail ? (
        <>
          <div className="product_details">
            <button>
              <MdCancel onClick={() => cancelPage()} />
            </button>
            <div className="container_det">
              <div className="img_box">
                <img src={detail.images} alt="" />
              </div>
              <div className="info">
                <h2>#{detail.Name}</h2>
                <p>
                  A screen everyone will love : whether your family is streaming
                  or watching always provide better experience...
                </p>
                <h5>${detail.price}</h5>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <div className="Product">
        <div className="pro_head">
          <h2>Trending Products</h2>
        </div>
        <div className="container_head">
          <div className="box">
            <div className="header ">
              <div className="heading">
                <h2 onClick={() => allProduct()}>All Products</h2>
              </div>
              <div className="other">
                <h3 onClick={() => filterSort("New")}>New</h3>
                <h3 onClick={() => filterSort("Featured")}>Featured</h3>
                <h3 onClick={() => filterSort("Top")}>Top Selling</h3>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {prductImage.map((Elm) => {
                  return (
                    <>
                      <div className="box">
                        <div className="img_box">
                          <img src={Elm.images} alt="" />
                          <div className="icon">
                            <div className="icon_box">
                              <BsFillEyeFill onClick={() => detailPage(Elm)} />
                            </div>
                            <div className="icon_box">
                              <AiFillHeart />
                            </div>
                          </div>
                        </div>
                        <div className="info">
                          <h3>{Elm.Name}</h3>
                          <p>${Elm.price}</p>
                          <button className="btn" onClick={() => ToCart(Elm)}>
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
