import React from "react";

import NavigationMenu from "../navigation-menu/navigation-menu";
import "./header.css";
import Link from "../link/Link";

const Header = () => {
  return (
    <div className="header-container">
      <Link href="/">
        <h1 className="title">
          World <br />
          art
        </h1>
      </Link>
      <NavigationMenu />
    </div>
  );
};

export default Header;
