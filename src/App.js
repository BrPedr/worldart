import React from "react";
import "./App.css";

import Header from "./components/header/header.jsx";
import Banner from "./components/banner/banner.jsx";
import Artists from "./components/artists/artists.jsx";
import ListOfProducts from "./components/list-of-products/ListOfProducts";
import Join from "./components/join/Join";
import About from "./components/about/About";
import SignIn from "./components/sign-in/SignIn";
import Route from "./components/route/Route";
import Shop from "./components/shop/Shop";
import NavMobile from "./components/nav-mobile/NavMobile";

const App = () => {
  return (
    <div className="Container">
      <Banner imageUrl="https://i.pinimg.com/564x/91/a6/23/91a6233ced3799f85ed93326af0f238e.jpg" />
      <Header />
      <Route path="/">
        <NavMobile />
      </Route>
      <Route path="/">
        <div className="row-of-artists">
          <Artists />
        </div>
        <div className="main-container">
          <ListOfProducts />
        </div>
      </Route>
      <Route path="/join">
        <Join />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/shop">
        <Shop />
      </Route>
    </div>
  );
};

export default App;
