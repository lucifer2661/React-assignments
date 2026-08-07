import React, { useContext } from "react";
import { useParams } from "react-router";
import { ProductsContext } from "../Context/ProductContext";

const ProductsDetails = () => {
  const { id } = useParams();

  const { Products } = useContext(ProductsContext);

  const product = Products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img src={product.image} alt={product.title} />

      <h1>{product.title}</h1>

      <p>{product.description}</p>

      <h2>${product.price}</h2>

      <p>{product.category}</p>
    </div>
  );
};

export default ProductsDetails;