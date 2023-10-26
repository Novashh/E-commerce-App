import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="box">
            <div className="content_box">
              <div className="content">
                <h4>Customer Service</h4>
                <ul>
                  <li>
                    <Link to="#" className="link">
                      Help & Faq's
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="link">
                      Order Tracking
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link">
                      Shipping & Delivery
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link">
                      Orders History
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link">
                      Advanced Search
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="content">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <Link to="#" className="link">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="link">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link">
                      Our Stores
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link">
                      Corporate Sales
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="content">
                <h4>MORE INFORMATION</h4>
                <ul>
                  <li>
                    <Link to="#" className="link">
                      Affiliates
                    </Link>
                  </li>

                  <li>
                    <Link to="#" className="link">
                      Refer a Friend
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link">
                      Student Beans Offers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="link">
                      Gift Vouchers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="content">
                <h4>SOCIAL MEDIA</h4>
                <ul className="social_link">
                  <Link to="#" className="link facebook">
                    <FaFacebookF className="face" />
                  </Link>

                  <Link to="#" className="link twitter">
                    <BsTwitter className="twitt" />
                  </Link>

                  <Link to="#" className="link youtube">
                    <AiFillYoutube className="yt" />
                  </Link>

                  <Link to="#" className="link instagram">
                    <AiFillInstagram className="insta" />
                  </Link>

                  <Link to="#" className="link linkedin">
                    <AiFillLinkedin className="in" />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot_box">
          <div className="foot_content">
            <h2>Port&empty;</h2>
            <p>&copy; Copyright 2022. All Right Reserved</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
