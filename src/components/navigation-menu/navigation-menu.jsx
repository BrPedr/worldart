import React from "react";

import Link from "../link/Link"

import "./navigation-menu.css";

const NavigationMenu = () => {
  return (
    <div className="nav-menu-container">
      <nav className="nav-menu">
        <ul className="nav-menu">
          <li>
            <Link className="navJoin" href="/join">
              join
            </Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/artists">artists</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/shop">shop</Link>
          </li>
        </ul>
      </nav>
      <nav className="nav-profile">
        <i className="search icon large"></i>
        <i className="shopping cart icon large link"></i>
        <Link href="/sign-in">
          <i className="user icon large link "></i>
        </Link>
      </nav>
    </div>
  );
};

export default NavigationMenu;
