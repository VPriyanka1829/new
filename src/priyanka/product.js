import React, { useState } from "react";

function ProductsAddToCart() {
  const products = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Orange", price: 20 },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  // Optional: calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", fontFamily: "Arial" }}>
      <h2>Products Add to Cart</h2>
      <p>🛒 Items in Cart: {cart.length}</p>

      <div>
        {products.map((product) => (
          <div key={product.id} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
            <h4>{product.name}</h4>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Cart Items:</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && <p><strong>Total: ₹{totalPrice}</strong></p>}
      </div>
    </div>
  );
}

export default ProductsAddToCart;



