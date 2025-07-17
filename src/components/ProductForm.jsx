import React, { useState } from "react";
import { Color } from "three"; // This import is not used in the provided code

const ProductForm = ({ handleChange, product, handleSave }) => {
  return (
    <div className=" w-full">
      <div className=" max-w-7xl mx-auto ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded bg-white shadow"
        >
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Length (mm)</label>
            <input
              type="number"
              name="length"
              value={product.length}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Width (mm)</label>
            <input
              type="number"
              name="width"
              value={product.width}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Height (mm)</label>
            <input
              type="number"
              name="height"
              value={product.height}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Weight (kg)</label>
            <input
              type="number"
              name="weight"
              value={product.weight}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Color</label>
            <input
              type="color"
              name="color"
              value={product.color}
              onChange={handleChange}
              className="w-full h-10 border rounded"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleSave}
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded w-full"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
