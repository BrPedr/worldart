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

  saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
    // console.log(JSON.parse(localStorage.products));
  }

  componentDidMount() {
    // before i had < this.printProducts() >
    this.products.getProducts().then((products) => {
      this.setState({ productsData: products });
      this.saveProducts(this.state.productsData);
    });
  }

  render() {
    const products = this.state.productsData.map((product) => {
      return (
        // <Link href={`/cart/${product.id}`}>
          <Products
            src={product.image}
            alt={product.description}
            id={product.id}
          />
        // </Link>
      );
    });
    
    return <div className="grid-of-products">{products}</div>;
  }
}

export default ListOfProducts;
