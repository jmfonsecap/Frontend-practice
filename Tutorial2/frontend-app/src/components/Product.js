import React from "react";
import "./Product.css";
const Product = (props) => {
  return (
    <div className="product-main">
      <div className="card">
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <p> {props.price}</p>
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Product;
