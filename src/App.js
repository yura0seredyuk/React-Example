import React from "react";
import "./style.css";
import Product from './Product';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      
      <Product 
        title = "Paperoni pizza"
        price = {100}
        description = "Extra large"
      />

      <Product 
        title = "Сheese pizza"
        price = {500}
      />

       <Product 
        title = "Water"
        description = "Glass of water"
      />
    </div>
  );
}
