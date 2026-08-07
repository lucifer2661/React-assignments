import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ProductsDetails from './Pages/ProductsDetails';

const App = () => {
  const[products,setProducts] = useState([])
 
 const getData = async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  setProducts(res.data)
};



useEffect(function(){
getData();
},[])
 
  return (
  
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<ProductsDetails/>}/>
    </Routes>
   </div>
  
  )
};

export default App;