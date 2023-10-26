import React from "react";
import "./Nav.scss";
import { BiSolidUser } from "react-icons/bi";

import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="nav">
        <div className="container">
          <div className="d_flex">
            {isAuthenticated ? (
              <>
                <div className="in_icon">
                  <BiSolidUser />
                </div>
                <div className="info">
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
            ) : (
              <>
                <div className="out_icon">
                  <BiSolidUser />
                </div>
                <div className="info">
                  <p>Please Login</p>
                </div>
              </>
            )}
          </div>

          <div className="nav_link">
            <ul className="link_item ">
              <li>
                <NavLink to="/" className="link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="link">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="link">
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/account" className="link">
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="link">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
