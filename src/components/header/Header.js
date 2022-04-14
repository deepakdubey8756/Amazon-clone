// amazon blue = #232f3f
import React, { useState, useContext } from "react";
import "./Header.css";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineRead,
  AiOutlineMenu,
} from "react-icons/ai";
import catlist from "./catlist.js";
import Sidebar from "../sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";
import prodContext from "../../context/notes/prodContext";
function Header() {
  const context = useContext(prodContext);
  const { bucket, cat, setcat } = context;
  const navigation = useNavigate();
  const handleCurrentCat = (item) => {
    setcat(item);
  };

  const [sideBar, setSideBar] = useState(0)
  const handleSidebar = () => {
    if (sideBar === 0) {
      setSideBar(1)
    }
    else {
      setSideBar(0)
    }
  }
  const handleLogo = () => {
    navigation("/");
  }


  const width = window.innerWidth
  if (width > 650) {
    return (
      <>
        <div className="header">
          {/* ********************************Heading top **************************************/}
          <div className="header-top">
            <img
              src="https://www.doorwaysva.org/wp-content/uploads/2019/06/amazon-logo.png"
              className="header_logo"
              alt="amazon logo"
              onClick={handleLogo}
            ></img>
            <div className="header-userAddress">
              <div className="header-userAddress-icon">
                <AiOutlineRead size="25" color="white" />
              </div>
              <div className="header-userAddress-name">
                <div className="header-userAddress-fname">hello,</div>
                <div className="header-userAddress-lname">
                  Select your address
                </div>
              </div>
            </div>
            <div className="header_search">
              <input className="header_searchInput" type="text" />
              <div className="header_searchIcon">
                <AiOutlineSearch color="white" size="20" />
              </div>
            </div>
            <div className="header-nav">
              <div className="header-option">
                <span className="header_optionLineOne">Hello,</span>
                <span className="header_optionLineTwo">Users</span>
              </div>

              <div className="header-option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span>
              </div>
            </div>
            <Link to="/checkout">
              <div className="header-shopping-cart">
                <AiOutlineShoppingCart color="white" size="30" />
                <div className="header-shopping-cart-name">{bucket.length}</div>
              </div>
            </Link>
          </div>


          <div className={sideBar === 0 ? "header-bottom" : "header-bottom disabled"}>
            <div className="header-sidebar">
              
            </div>
            <div className="header-cat">
              {catlist.map((items, index) => {
                return (
                  <div
                    key={index}
                    className={
                      cat === items
                        ? "header-cat-options active"
                        : "header-cat-options"
                    }
                    onClick={() => {
                      handleCurrentCat(items);
                    }}
                  >
                    {items}
                  </div>
                );
              })}
            </div>
            <div className="header-mob-cat">
              <div className="header-mob-options">
                <div className="header-mob-cat-fname">Hello,</div>
                <div className="header-mob-cat-lname">sign in</div>
              </div>
              <div className="header-mob-options">
                <div className="header-mob-cat-fname">shop by</div>
                <div className="header-mob-cat-lname">category</div>
              </div>
              <div className="header-mob-options">
                <div className="header-mob-cat-lname">whishlist</div>
              </div>
            </div>
          </div>
        </div>
        {sideBar === 1 ? <Sidebar toggleSiebar={handleSidebar} /> : ""}
      </>
    )
  }
  else {
    return (
      <>
        <div className="header">
          
        {sideBar === 1 ? <Sidebar toggleSiebar={handleSidebar} /> : <><div className="header-sidebar-icon" onClick={handleSidebar}>
                <AiOutlineMenu color="white" size="25" />
              </div>
            <div className="header_search">
              <input className="header_searchInput" type="text" />
              <div className="header_searchIcon">
                <AiOutlineSearch color="white" size="20" />
              </div>
            </div>
            
            <Link to="/checkout">
              <div className="header-shopping-cart">
                <AiOutlineShoppingCart color="white" size="30" />
                <div className="header-shopping-cart-name">{bucket.length}</div>
              </div>
            </Link></>}
          
         </div>
       
      </>
    )
  }
}


export default Header;
