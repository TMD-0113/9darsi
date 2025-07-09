import React from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, increment, decrement } = useCart();
  const item = cart[product.id];

  return (
    <div className="flex items-center justify-between bg-white rounded shadow p-4 mb-4">
      <div className="flex items-center gap-4">
        <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded" />
        <div>
          <h3 className="font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">Price: ${product.price}</p>
        </div>
      </div>
      <div>
        {item ? (
          <div className="flex items-center gap-2">
            <button className="btn btn-xs btn-outline" onClick={() => decrement(product.id)}>-</button>
            <span>{item.quantity}</span>
            <button className="btn btn-xs btn-outline" onClick={() => increment(product.id)}>+</button>
          </div>
        ) : (
          <button className="btn btn-sm btn-outline" onClick={() => addToCart(product)}>
            🛒 Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
