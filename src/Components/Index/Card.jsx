import React from 'react';

const PropsCardComponents = ({
  id,
  imageSrc,
  title,
  director,
  genre,
  price,
  onAddToCart,
  isAdding
}) => {
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 hover:shadow-md transition-shadow duration-300">
      <img
        alt={title}
        src={imageSrc}
        className="w-full rounded-md object-cover h-[400px]"
      />

      <div className="mt-2">
        <div className="text-center">
          <h2 className="font-medium text-lg line-clamp-1">{title}</h2>
          <div className="flex justify-between mt-2">
            <div className="text-start">
              <p className="text-sm text-gray-600">By: {director}</p>
              <p className="text-xs text-gray-500">{genre}</p>
            </div>
            <div className="text-end">
              <p className="text-lg font-bold text-[#102249]">{price}$</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={onAddToCart}
          disabled={isAdding}
          className={`w-full px-4 py-2 rounded border transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#102249] focus:ring-opacity-50
            ${isAdding
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'text-black hover:text-white border-black hover:bg-[#102249]'
            }`}
        >
          {isAdding ? 'Adding...' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default PropsCardComponents;
