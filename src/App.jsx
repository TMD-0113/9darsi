import React from "react";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-base-200 text-base-content p-6">
        <div className="max-w-4xl mx-auto">
          <Home />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
