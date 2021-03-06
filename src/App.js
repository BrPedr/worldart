import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import JoinPage from "./pages/join-page/JoinPage";
import AboutPage from "./pages/about-page/AboutPage";
import SignInPage from "./pages/signin-page/SigninPage";
import ShopPage from "./pages/shop-page/ShopPage";
import CartPage from "./pages/cart-page/CartPage";

import Banner from "./components/banner/banner";
import Header from "./components/header/header";
import NavMobile from "./components/nav-mobile/NavMobile";

const App = () => {
  return (
    <div className="Container">
      <Banner imageUrl="https://i.pinimg.com/564x/91/a6/23/91a6233ced3799f85ed93326af0f238e.jpg" />
      <BrowserRouter>
        <Header />
        <NavMobile />
        <Route path="/" exact component={Homepage} />
        <Route path="/join" component={JoinPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/sign-in" component={SignInPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/cart" component={CartPage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
