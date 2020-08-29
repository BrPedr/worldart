import React from "react";

import "./products.css"

const Products = ({ productsData }) => {
  return productsData.map((product) => (
    <img src={product.image}
      alt={product.description}
      key={product.id}
      className="product-wraper"
    ></img>
  ));
};

export default Products;
