import React, { useContext } from "react";
import { ProductsContext } from "../Context/ProductContext";
import { Link } from "react-router";

const Products = () => {
  const { Products } = useContext(ProductsContext);

 return (
  <div className="Allproducts">
    {Products.map((product) => (
      <Link
        to={`/products/${product.id}`}
        key={product.id}
        className="Products"
      >
        <img src={product.image} alt={product.title} />

        <h3>{product.title}</h3>

        <p>{product.description}</p>

        <p>${product.price}</p>
      </Link>
    ))}
  </div>
);
};

export default Products;