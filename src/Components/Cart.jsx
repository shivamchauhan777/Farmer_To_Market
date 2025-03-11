import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Apple", price: 210, quantity: 1, image: "images/Apple.png" },
    { id: 2, name: "Banana", price: 100, quantity: 2, image: "images/Banana.png" },
    { id: 3, name: "Patato", price: 250, quantity: 1, image: "images/Patato.png" },
    { id: 4, name: "Tamato", price: 250, quantity: 1, image: "images/Tamato.png" },

  ]);

  const updateQuantity = (id, amount) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-green-400 p-6">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b py-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded" />
                <span className="font-medium">{item.name}</span>
                <div className="flex items-center">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-gray-200 rounded">-</button>
                  <span className="px-4">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-gray-200 rounded">+</button>
                </div>
                <span className="font-medium">₹{(item.price * item.quantity).toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)} className="text-red-500 text-lg">
                  <FaTrashAlt />
                </button>
              </div>
            ))}
            <div className="text-right mt-4">
              <h3 className="text-xl font-semibold">Total: ₹{totalPrice.toFixed(2)}</h3>
              <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
