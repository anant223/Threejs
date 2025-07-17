import React, { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import ProductList from "./components/ProductList";
import ContainerScene from "./components/ContainerScene";

const productsInitial = [
  {
    id: 1,
    type: "📦",
    name: "Boxes 1",
    length: 500,
    width: 400,
    height: 300,
    weight: 10,
    quantity: 80,
    color: "#22c55e",
  },
  {
    id: 2,
    type: "🧺",
    name: "Sacks",
    length: 1000,
    width: 450,
    height: 300,
    weight: 45,
    quantity: 100,
    color: "#ec4899",
  },
  {
    id: 3,
    type: "🛍️",
    name: "Big bags",
    length: 1000,
    width: 1000,
    height: 1000,
    weight: 900,
    quantity: 10,
    color: "#3b82f6",
  },
];

const App = () => {  
  const [products, setProducts] = useState(productsInitial);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white min-h-screen">
      <Header />
      <Button name="+ Add Group" />

      <div className="bg-gray-50 p-4 rounded shadow">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded-full bg-black" />
          <span className="text-lg font-medium">Group #1</span>
          <button className="text-gray-500">✏️</button>
        </div>
        {products.map((prod) => (
          <div key={prod.id}>
            <ProductList
              name={prod.name}
              type={prod.type}
              length={prod.length}
              width={prod.width}
              height={prod.height}
              weight={prod.weight}
              quantity={prod.quantity}
              color={prod.color}
            />
          </div>
        ))}

        <div className="flex items-center gap-4 mt-4">
          <Button name="+ Add Product" />
        </div>
      </div>
      <div>
        <ContainerScene
          products= {productsInitial}
        />
      </div>
      
    </div>
  );
};

export default App;
