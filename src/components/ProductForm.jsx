import React from "react";

const ProductForm = ({ product, onChange }) => {
    const [form, setForm] = useState({
        name: "",
        length: "",
        width: "",
        height: "",
        weight: "",
        quantity: "",
        color: "#10b981", 
      });
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border rounded bg-white shadow"
    >
      <div>
        <label className="block text-sm font-medium">Product Name</label>
        <input
          type="text"
          name="name"
          value={setForm(e.target.value)}
          onChange={setForm.(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Length (mm)</label>
        <input
          type="number"
          name="length"
          value={product.length}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Width (mm)</label>
        <input
          type="number"
          name="width"
          value={product.width}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Height (mm)</label>
        <input
          type="number"
          name="height"
          value={product.height}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Weight (kg)</label>
        <input
          type="number"
          name="weight"
          value={product.weight}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={onChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Color</label>
        <input
          type="color"
          name="color"
          value={product.color}
          onChange={onChange}
          className="w-full h-10 border rounded"
        />
      </div>

      <div className="flex items-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Save Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
