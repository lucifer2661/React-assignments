import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const ProductContext = (props) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://fakestoreapi.com/products"
      );

      setProducts(res.data);
    };

    fetchData();
  }, []);

  return (
    <ProductsContext.Provider value={{ Products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContext;