import React from "react";

import Header from "../../components/header/header";
import Banner from "../../components/banner/banner.jsx";
import Artists from "../../components/artists/artists.jsx";
import ListOfProducts from "../../components/list-of-products/ListOfProducts";
import NavMobile from "../../components/nav-mobile/NavMobile";

const Homepage = () => {
  return (
    <div>
      <div className="row-of-artists">
        <Artists />
      </div>
      <div className="main-container">
        <ListOfProducts />
      </div>
    </div>
  );
};

export default Homepage;
