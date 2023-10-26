import React from "react";
import "./Ban.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { BsFillEyeFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

const Ban = () => {
  return (
    <>
      <div className="ban_heading">
        <div className="banner">
          <img src="/images/shop_top.webp" alt="" />
        </div>
        <div className="heading">
          <h2>weekly Off</h2>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p1.webp" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 1</h3>
                  <p>
                    <del>$99</del>$90
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p2.webp" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 2</h3>
                  <p>
                    <del>$96</del>$80
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p6.webp" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 3</h3>
                  <p>
                    <del>$82</del>$80
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p10.jpg" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 3</h3>
                  <p>
                    <del>$68</del>$60
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p1.webp" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 1</h3>
                  <p>
                    <del>$99</del>$90
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p12.jpg" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 2</h3>
                  <p>
                    <del>$96</del>$80
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p2.webp" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 2</h3>
                  <p>
                    <del>$96</del>$80
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p6.webp" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 3</h3>
                  <p>
                    <del>$82</del>$80
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="products_ban">
            <div className="container">
              <div className="box">
                <div className="img_box">
                  <img src="/images/p1.webp" alt="" />
                  <div className="icon">
                    <div className="icon_box">
                      <BsFillEyeFill />
                    </div>
                    <div className="icon_box">
                      <AiFillHeart />
                    </div>
                  </div>
                </div>
                <div className="info">
                  <h3>Product 1</h3>
                  <p>
                    <del>$99</del>$90
                  </p>
                  <button className="btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Ban;
