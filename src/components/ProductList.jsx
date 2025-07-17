import React from 'react'

const ProductList = ({type, name, length, width, height, weight, quantity, color, deleteProduct}) => {
  
  return (
    <div className="flex items-center justify-between w-full gap-2 border-b py-2">
      <span className="text-2xl">{type}</span>
      <input className="border rounded px-2 py-1 w-28" defaultValue={name} />
      <input
        className="border rounded px-2 py-1 w-20"
        defaultValue={length}
      />{" "}
      mm
      <input
        className="border rounded px-2 py-1 w-20"
        defaultValue={width}
      />{" "}
      mm
      <input
        className="border rounded px-2 py-1 w-20"
        defaultValue={height}
      />{" "}
      mm
      <input
        className="border rounded px-2 py-1 w-20"
        defaultValue={weight}
      />{" "}
      kg
  
      <div className={`w-5 h-5 rounded-full ${color}`} />
      <button onClick={deleteProduct} className="text-red-500">
        🗑️
      </button>
    </div>
  );
}

export default ProductList