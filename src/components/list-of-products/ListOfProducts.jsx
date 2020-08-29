import React from "react";

import ContentfulClient from "../../api/contentful";
import Products from "../products/products";
import "./ListOfProducts.css";

class ListOfProducts extends React.Component {
  state = {
    productsData: [],
  };

  products = new ContentfulClient();

  // printProducts() {
  //     this.products
  //       .getProducts()
  //       .then((result) => this.setState({ productsData: result }))
  // }

  componentDidMount() {
    // before i had < this.printProducts() >
    this.products
      .getProducts()
      .then((result) => this.setState({ productsData: result }));
  }

  render() {
    return (
      <div className="grid-of-products">
        <Products productsData={this.state.productsData} />
      </div>
    );
  }
}

export default ListOfProducts;
