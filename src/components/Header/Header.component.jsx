import React from "react";
import "./Header.styles.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h1>MADE UP</h1>
      </div>
      <div className="header__navlinks">
        <ul className="navlinks">
          <li className="navlink">For Me</li>
          <li className="navlink">Jeans</li>
          <li className="navlink">Shirts</li>
          <li className="navlink">T-Shirts</li>
          <li className="navlink">Trousers</li>
          <li className="navlink">Joggers</li>
          <li className="navlink">Shorts</li>
        </ul>
      </div>
      <div className="header__icons">
        <SearchOutlined className="icon" />
        <ShoppingCartOutlined className="icon" />
        <UserOutlined className="icon" />
      </div>
    </div>
  );
};

export default Header;
