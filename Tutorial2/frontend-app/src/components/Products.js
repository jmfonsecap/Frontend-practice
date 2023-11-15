import React from "react";
import Product from "./Product";
import "./Products.css";
import { useEffect } from "react";
const DUMMY_PRODUCTS = [
  {
    name: "Mobile Phone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2000,
    description: "This is a new mobile phone",
    quantity: 12,
  },
  {
    name: "Mobile Phone2",
    image:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1000,
    description: "This is an old mobile phone",
    quantity: 12,
  },
  {
    name: "Mobile Phone3",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1500,
    description: "This is a meh mobile phone",
    quantity: 12,
  },
];
const Products = () => {
  useEffect(() => {
    const fetchHandler = async ()=> {
        await fetch()
    }
  }, []);
  return (
    <div className="main">
      <ul>
        {DUMMY_PRODUCTS.map((product, key) => (
          <li key={key}>
            <Product
              id={key}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
