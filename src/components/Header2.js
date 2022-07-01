import React, { useState } from "react";
import logo from "../Assets/Logo.PNG";
import search from "../Assets/Icons/search.svg";
import user from "../Assets/Icons/user.svg";
import shoppingBag from "../Assets/Icons/shopping-bag.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {

  //Cart Related Code

  const state = useSelector((state) => state.handleCart);

  //Header Functions
  //For collaspible Navigation
  const [isActive, setActive] = useState(false);

  const navSlide = () => {
    setActive(!isActive);
  };
  //For collaspible Input 
  const [displayIn, setdisplayIn] = useState(false);

  const hideInput = () => {
    setdisplayIn(!displayIn);
  };

  return (
    <React.Fragment>
      <header role="banner" id="header">
        <div className="headerOuter">

          <button className="burger" onClick={navSlide}>
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
          </button>

          <a href="/">
            <img src={logo} className={displayIn ? 'hideLogo' : 'logo'} />
          </a>

          <nav role="navigation">
            <ul className={isActive ? "nav-links nav-active" : "nav-links"}>
              <li aria-label="See Shop Categories" className="desktopHide borderBottomHead">Shop Categories</li>
              <li>
                <a href="" aria-label="See women products">
                  Women
                </a>
              </li>
              <li>
                <a href="" aria-label="See men products">
                  Men
                </a>
              </li>
              <li>
                <a href="" aria-label="See Smart Gear products">
                  Smart Gear
                </a>
              </li>
              <li>
                <a href="" aria-label="See Accessories">
                  Accessories
                </a>
              </li>

              <div className="bottomLinks desktopHide">
                <img src={user} />
                <a href="#" aria-label="See User Account">Account</a>
                <a href="#" aria-label="Go to Sign in" >Sign-in</a>
              </div>
            </ul>
          </nav>

          <div className="endHeader">
            <input
              className={displayIn ? '' : 'hideInput'}
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="inputSearch"

            />
            <button onClick={hideInput} aria-label="Click to search products" className="btn"><img src={search} /></button>

            <label for="searchBar" className="mobileHide">
              Search
            </label>
            <img src={user} className="mobileHide" />
            <a aria-label="Go to Sign in" className="mobileHide">Sign in</a>
            <Link to="/cart">
              <img src={shoppingBag} />
            </Link>
            {/* <a aria-label="Click to see cart items" className="mobileHide">Cart({state.length})</a> */}
          </div>



          {/* 
          <button className="btn" onClick={displayInput}>
            <img src={search} />
          </button> } */}
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
