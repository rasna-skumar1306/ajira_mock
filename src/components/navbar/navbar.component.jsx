import React from "react";
import "./navbar.styles.css";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <li className="navbar__logoItem">MADE UP</li>
      </div>
      <ul className="navbar__listItems">
        <li className="navbar__listItem">For Me</li>
        <li className="navbar__listItem">Jeans</li>
        <li className="navbar__listItem">Shirts</li>
        <li className="navbar__listItem">T-Shirts</li>
        <li className="navbar__listItem">Trousers</li>
        <li className="navbar__listItem">Joggers</li>
        <li className="navbar__listItem">Shorts</li>
      </ul>
      <div className="navbar__extras">
        <li className="navbar__extraItem">
          <SearchOutlined />
        </li>
        <li className="navbar__extraItem">
          <ShoppingCartOutlined />
        </li>
        <li className="navbar__extraItem">
          <HeartOutlined />
        </li>
        <li className="navbar__extraItem">
          <UserOutlined />
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
