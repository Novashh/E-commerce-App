import React from "react";
import "./Slider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="home">
            <div className="first_banner">
              <div className="content">
                <h3>Silver Aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off your first order</p>
                <Link to="/shop" className="link">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="home">
            <div className="first_banner">
              <div className="content">
                <h3>Silver Aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off your first order</p>
                <Link to="/shop" className="link">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="home">
            <div className="first_banner">
              <div className="content">
                <h3>Silver Aluminum</h3>
                <h2>Apple Watch</h2>
                <p>30% off your first order</p>
                <Link to="/shop" className="link">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
