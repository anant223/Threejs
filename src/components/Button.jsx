import React from 'react'

const Button = ({ name, handleBtn }) => {
  return (
    <div className="flex justify-between mb-4">
      <button
        onClick={handleBtn}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {name}
      </button>
    </div>
  );
};

export default Button