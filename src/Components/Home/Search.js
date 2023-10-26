import React from "react";
import "./Nav.scss";
import { BsSearch } from "react-icons/bs";
import { MdLocalShipping } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const Search = ({ search, setSearch, searchProduct }) => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping When Shopping Upto $1000</p>
          </div>
        </div>
      </div>

      <section className="search">
        <div className="container">
          <div className="logo ">
            <h1>
              Shopi<span>FY</span>
            </h1>
          </div>

          <div className="search_box">
            <BsSearch className="icon" />
            <input
              type="text"
              value={search}
              placeholder="Search and hit enter..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => searchProduct()}>Search</button>
          </div>

          {isAuthenticated ? (
            <div className="user">
              {/* When Login then Logout button will shows */}
              <div className="logout">
                <CiLogout className="icon" />
                <button
                  className="btn"
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="user">
              {/* When do not Login then only Login button will shows */}
              <div className="login">
                <FiLogIn className="icon" />
                <button className="btn" onClick={() => loginWithRedirect()}>
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
