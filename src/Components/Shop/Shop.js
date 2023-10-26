import React, { useState } from "react";
import "./Shop.scss";
import { BsFillEyeFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const Shop = ({ shop, Filter, allCateFilter, ToCart }) => {
  //Toggle product detail
  const [showDetail, setShowDetail] = useState(false);
  // detail page data
  const [detail, setDetail] = useState([]);

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
          <h2>Categories Product</h2>
        </div>
        <div className="container_head">
          <div className="left_box">
            <div className="left_header">
              <h3>Category</h3>
            </div>
            <div className="left_cate">
              <ul className="cate_flex">
                <li className="sort">
                  <h5 onClick={() => Filter("tv")}>tv</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => Filter("laptop")}>laptop</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => Filter("watch")}>watch</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => Filter("speaker")}>speaker</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => Filter("headphone")}>headphone</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => Filter("phone")}>phone</h5>
                </li>
                <li className="sort">
                  <h5 onClick={() => Filter("electronics")}>electronics</h5>
                </li>
              </ul>
            </div>
          </div>

          <div className="right_box">
            <div className="header ">
              <div className="heading">
                <h2 onClick={() => allCateFilter()}>All Products</h2>
              </div>
            </div>
            <div className="products">
              <div className="container">
                {shop.map((Elm) => {
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

export default Shop;
