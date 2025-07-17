import React from 'react'

const Header = () => {
  return (
    <div className="flex w-full py-8 ">
      <div className="mx-auto max-w-7xl px-8">
        <div>
          <h1 className="text-3xl font-semibold text-center mb-6">
            Load & Stuffing Calculation
          </h1>

          {/* Tabs */}
          <div className="flex gap-6 justify-center mb-4">
            <button className="text-blue-600 font-semibold border-b-4 border-blue-500 pb-2">
              📦 PRODUCTS
            </button>
            <button className="text-gray-400 font-semibold">
              🚛 CONTAINERS & TRUCKS
            </button>
            <button className="text-gray-400 font-semibold">
              📊 STUFFING RESULT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header