import React, { useEffect, useState } from "react";
import "./Header.styles.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  MenuOutlined,
} from "@ant-design/icons"; // here I have imported some necessary icons from ant design icons pack

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); //state for setting the burger menu open
  const [windowSize, setWindowSize] = useState(window.innerWidth); // state for keeping a track of window width

  //I have made use of useEffect hook to keep a track of screen width
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
      //here if the window width is above 860px the burger menu automatically closes
      if (windowSize > 860) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize); // eventlistener to listen for any screen resize
  }, [windowSize]); // re-renders if the windowSize changes

  return (
    <>
      <div className="header">
        <div className="header__logo">
          {/* Logo that you see in the nav bar */}
          <h1>MADE UP</h1>
        </div>
        {/*the below div contains only static links that doesnot change the page, it just change the url */}
        <div className="header__navlinks">
          <ul className="navlinks">
            <li className="navlink">
              <a href="#ForMe">For Me</a>
            </li>
            <li className="navlink">
              <a href="#Jeans">Jeans</a>
            </li>
            <li className="navlink">
              <a href="#Shirts">Shirts</a>
            </li>
            <li className="navlink">
              <a href="#T-shirts">T-Shirts</a>
            </li>
            <li className="navlink">
              <a href="#Trousers">Trousers</a>
            </li>
            <li className="navlink">
              <a href="#Joggers">Joggers</a>
            </li>
            <li className="navlink">
              <a href="#Shorts">Shorts</a>
            </li>
          </ul>
        </div>
        {/* here I have just added some icons and the icons when clicked doesnot perform any functions*/}
        <div className="header__icons">
          <button className="icon">
            <SearchOutlined />
          </button>
          <button className="icon">
            <ShoppingCartOutlined />
          </button>
          <button className="icon">
            <UserOutlined />
          </button>
        </div>
        {/* The below is the navigation burger menu which only appears when the screen width is below certain pixels */}
        <div className="header__navlinksBurger">
          <button className="icon">
            <MenuOutlined
              style={{ outline: "none" }}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </button>
        </div>
      </div>
      {/* The below are the burger menu links that are the same navbar links */}
      <div className="burger__menu">
        {menuOpen ? (
          <div className="burger__links">
            <ul className="navlinks">
              <li className="navlink">
                <a href="#ForMe">For Me</a>
              </li>
              <li className="navlink">
                <a href="#Jeans">Jeans</a>
              </li>
              <li className="navlink">
                <a href="#Shirts">Shirts</a>
              </li>
              <li className="navlink">
                <a href="#T-shirts">T-Shirts</a>
              </li>
              <li className="navlink">
                <a href="#Trousers">Trousers</a>
              </li>
              <li className="navlink">
                <a href="#Joggers">Joggers</a>
              </li>
              <li className="navlink">
                <a href="#Shorts">Shorts</a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
