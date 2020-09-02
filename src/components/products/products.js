import React from "react";

import "./products.css";

class Products extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { spans: 0 };
    this.imageRef = React.createRef("");
    this.state = { imageClickedData: [] };
  }

  componentDidMount() {
    // this.imageRef.current.addEventListener(
    //   "load",
    //   () => (this.onClickHandler = () => console.log(this.imageRef.current))
    // );
   this.imageRef.current.addEventListener(
        "load",
        () => (this.onClickHandler = () => console.log(this.imageRef.current.currentSrc)
        ));

    // const height = this.imageRef.current.clientHeight;
    // const width = this.imageRef.current.clientWidth;
    // const spans = Math.ceil(height / 10 + 1);
    // this.setState({ spans });
    // console.log(this.imageRef.current))
  }

  render() {
    return (
      // <Link href="/cart">
      /* <div */
      /* style={{
        gridRows: `span ${this.state.spans}`,
       }}
      >  */
        <img
          onClick={() => this.onClickHandler()}
          ref={this.imageRef}
          src={this.props.src}
          alt={this.props.alt}
          key={this.props.id}
          className="product-wraper"
        ></img>
        /* </div> */
    //  </Link>
    );
  }
}

export default Products;

// const Products = ({ productsData }) => {
//   const renderImages = productsData.map((product) => (
//     // <Link href={`/cart/${product.id}`}>
//     <img
//       imageUrl={product.image}
//       src={product.image}
//       alt={product.description}
//       key={product.id}
//       className="product-wraper"
//     ></img>
//     // </Link>
//   ));
//   return <React.Fragment>{renderImages}</React.Fragment>;
// };

// export default Products;
